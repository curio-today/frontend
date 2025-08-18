import { PropsWithChildren } from "react";

import Header from "./components/Header";
import Meta from "./components/Meta";
import CreatedAt from "./components/CreatedAt";
import Headline from "./components/Headline";
import Hero from "./components/Hero";
import Content from "./components/Content";
import ReadAlso from "./components/ReadAlso";
import Delimiter from "./components/Delemiter";
import Markdown from "./components/Markdown";

const Article = ({children}: PropsWithChildren) => {
    return <article>{children}</article>
}

Article.Header = Header;
Article.Meta = Meta;
Article.CreatedAt = CreatedAt;
Article.Headline = Headline;
Article.Hero = Hero;
Article.Content = Content;
Article.ReadAlso = ReadAlso;
Article.Markdown = Markdown;
Article.Delimiter = Delimiter;

export default Article;