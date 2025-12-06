import React, { ReactNode } from 'react';

// Types for the content structure
interface TextNode {
  detail: number;
  format: number;
  mode: string;
  style: string;
  text: string;
  type: "text";
  version: number;
}

interface LinkNode {
  children: TextNode[];
  direction: string;
  format: string;
  indent: number;
  type: "link";
  version: number;
  rel: string;
  target: string;
  title: string;
  url: string;
}

interface ParagraphNode {
  children: (TextNode | LinkNode)[];
  direction: string;
  format: string;
  indent: number;
  type: "paragraph";
  version: number;
  textFormat?: number;
  textStyle?: string;
}

interface HeadingNode {
  children: TextNode[];
  direction: string;
  format: string;
  indent: number;
  type: "heading";
  version: number;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

interface ListItemNode {
  children: (TextNode | LinkNode)[];
  direction: string;
  format: string;
  indent: number;
  type: "listitem";
  version: number;
  value: number;
}

interface ListNode {
  children: ListItemNode[];
  direction: string;
  format: string;
  indent: number;
  type: "list";
  version: number;
  listType: "bullet" | "number";
  start: number;
  tag: "ul" | "ol";
}

interface QuoteNode {
  children: ParagraphNode[];
  direction: string;
  format: string;
  indent: number;
  type: "quote";
  version: number;
}

type ContentNode = ParagraphNode | HeadingNode | ListNode | QuoteNode;

export interface RootContent {
  direction: string;
  indent: number;
  type: "root";
  version: number;
  children: ContentNode[];
}

// Format flags
const FORMAT_BOLD = 1;
const FORMAT_ITALIC = 2;
const FORMAT_STRIKETHROUGH = 4;
const FORMAT_UNDERLINE = 8;
const FORMAT_CODE = 16;
const FORMAT_SUBSCRIPT = 32;
const FORMAT_SUPERSCRIPT = 64;

// Props for ContentRenderer component
interface ContentRendererProps {
  content: RootContent;
  components?: {
    p?: React.ComponentType<any>;
    h1?: React.ComponentType<any>;
    h2?: React.ComponentType<any>;
    h3?: React.ComponentType<any>;
    h4?: React.ComponentType<any>;
    h5?: React.ComponentType<any>;
    h6?: React.ComponentType<any>;
    ul?: React.ComponentType<any>;
    ol?: React.ComponentType<any>;
    li?: React.ComponentType<any>;
    blockquote?: React.ComponentType<any>;
    a?: React.ComponentType<any>;
    strong?: React.ComponentType<any>;
    em?: React.ComponentType<any>;
    u?: React.ComponentType<any>;
    s?: React.ComponentType<any>;
    code?: React.ComponentType<any>;
    sub?: React.ComponentType<any>;
    sup?: React.ComponentType<any>;
  };
}

/**
 * Custom component render content
  @example
  // 1. Simple usage with default HTML tags
  <ContentRenderer content={articleContent} />

  // 2. Custom styled components
  const Paragraph = ({ children, ...props }: any) => (
    <p className="my-4 text-gray-800 leading-relaxed" {...props}>
      {children}
    </p>
  );

  const Heading2 = ({ children, ...props }: any) => (
    <h2 className="text-3xl font-bold mb-4 text-gray-900" {...props}>
      {children}
    </h2>
  );

  const Link = ({ children, ...props }: any) => (
    <a className="text-blue-600 hover:underline" {...props}>
      {children}
    </a>
  );

  <ContentRenderer 
    content={articleContent}
    components={{
      p: Paragraph,
      h2: Heading2,
      a: Link,
      strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    }}
  />
*/
export const ContentRenderer: React.FC<ContentRendererProps> = ({ 
  content, 
  components = {} 
}) => {
  if (!content?.children) return null;

  const getComponent = (tag: string) => {
    return (components as any)[tag] || tag;
  };

  const applyFormatting = (text: string, format: number): ReactNode => {
    let result: ReactNode = text;
    
    if (format & FORMAT_SUPERSCRIPT) {
      const Sup = getComponent('sup');
      result = <Sup>{result}</Sup>;
    }
    if (format & FORMAT_SUBSCRIPT) {
      const Sub = getComponent('sub');
      result = <Sub>{result}</Sub>;
    }
    if (format & FORMAT_CODE) {
      const Code = getComponent('code');
      result = <Code>{result}</Code>;
    }
    if (format & FORMAT_STRIKETHROUGH) {
      const S = getComponent('s');
      result = <S>{result}</S>;
    }
    if (format & FORMAT_UNDERLINE) {
      const U = getComponent('u');
      result = <U>{result}</U>;
    }
    if (format & FORMAT_ITALIC) {
      const Em = getComponent('em');
      result = <Em>{result}</Em>;
    }
    if (format & FORMAT_BOLD) {
      const Strong = getComponent('strong');
      result = <Strong>{result}</Strong>;
    }
    
    return result;
  };

  const renderTextNode = (node: TextNode, key: string): ReactNode => {
    return (
      <React.Fragment key={key}>
        {applyFormatting(node.text, node.format)}
      </React.Fragment>
    );
  };

  const renderLinkNode = (node: LinkNode, key: string): ReactNode => {
    const A = getComponent('a');
    return (
      <A 
        key={key}
        href={node.url}
        target={node.target}
        rel={node.rel}
        title={node.title}
      >
        {node.children.map((child, idx) => 
          renderTextNode(child, `${key}-text-${idx}`)
        )}
      </A>
    );
  };

  const renderInlineContent = (
    children: (TextNode | LinkNode)[],
    keyPrefix: string
  ): ReactNode[] => {
    return children.map((child, idx) => {
      if (child.type === 'text') {
        return renderTextNode(child, `${keyPrefix}-text-${idx}`);
      } else if (child.type === 'link') {
        return renderLinkNode(child, `${keyPrefix}-link-${idx}`);
      }
      return null;
    });
  };

  const renderParagraph = (node: ParagraphNode, key: string): ReactNode => {
    const P = getComponent('p');
    return (
      <P 
        key={key}
        style={node.format ? { textAlign: node.format } : undefined}
      >
        {renderInlineContent(node.children, key)}
      </P>
    );
  };

  const renderHeading = (node: HeadingNode, key: string): ReactNode => {
    const tag = node.tag || 'h2';
    const H = getComponent(tag);
    return (
      <H 
        key={key}
        style={node.format ? { textAlign: node.format } : undefined}
      >
        {node.children.map((child, idx) => 
          renderTextNode(child, `${key}-text-${idx}`)
        )}
      </H>
    );
  };

  const renderListItem = (node: ListItemNode, key: string): ReactNode => {
    const Li = getComponent('li');
    return (
      <Li key={key}>
        {renderInlineContent(node.children, key)}
      </Li>
    );
  };

  const renderList = (node: ListNode, key: string): ReactNode => {
    const tag = node.tag || (node.listType === 'number' ? 'ol' : 'ul');
    const List = getComponent(tag);
    const startProp = node.listType === 'number' && node.start > 1 
      ? { start: node.start } 
      : {};
    
    return (
      <List key={key} {...startProp}>
        {node.children.map((child, idx) => 
          renderListItem(child, `${key}-item-${idx}`)
        )}
      </List>
    );
  };

  const renderQuote = (node: QuoteNode, key: string): ReactNode => {
    const Blockquote = getComponent('blockquote');
    return (
      <Blockquote key={key}>
        {node.children.map((child, idx) => 
          renderParagraph(child, `${key}-p-${idx}`)
        )}
      </Blockquote>
    );
  };

  const renderNode = (node: ContentNode, key: string): ReactNode => {
    switch (node.type) {
      case 'paragraph':
        return renderParagraph(node, key);
      case 'heading':
        return renderHeading(node, key);
      case 'list':
        return renderList(node, key);
      case 'quote':
        return renderQuote(node, key);
      default:
        return null;
    }
  };

  return (
    <>
      {content.children.map((node, idx) => renderNode(node, `node-${idx}`))}
    </>
  );
};

