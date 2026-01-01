// Types for the content structure
export interface TextNode {
  detail: number;
  format: number;
  mode: string;
  style: string;
  text: string;
  type: "text";
  version: number;
}

export interface LinkNode {
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

export interface ParagraphNode {
  children: InlineNode[];
  direction: string;
  format: string;
  indent: number;
  type: "paragraph";
  version: number;
  textFormat?: number;
  textStyle?: string;
}

export interface HeadingNode {
  children: TextNode[];
  direction: string;
  format: string;
  indent: number;
  type: "heading";
  version: number;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export interface ListItemNode {
  children: InlineNode[];
  direction: string;
  format: string;
  indent: number;
  type: "listitem";
  version: number;
  value: number;
}

export interface ListNode {
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

export interface QuoteNode {
  children: ParagraphNode[];
  direction: string;
  format: string;
  indent: number;
  type: "quote";
  version: number;
}

export interface LinebreakNode {
  type: "linebreak",
  version: number,
}

export type InlineNode = TextNode | LinkNode | LinebreakNode;
export type ContentNode = ParagraphNode | HeadingNode | ListNode | QuoteNode | LinebreakNode;

export interface RootContent {
  direction: string;
  indent: number;
  type: "root";
  version: number;
  children: ContentNode[];
}