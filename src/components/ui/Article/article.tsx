import styles from './article.module.css'

import { PropsWithChildren } from "react";

import Header from "./components/Header";
import Meta from "./components/Meta";
import CreatedAt from "./components/CreatedAt";
import Headline from "./components/Headline";
import Subtitle from "./components/Subtitle";
import Hero from "./components/Hero";
import Content from "./components/Content";
import ReadAlso from "./components/ReadAlso";
import Delimiter from "./components/Delemiter";

const Article = ({children}: PropsWithChildren) => {
    return <article className={styles.article}>{children}</article>
}

Article.Header = Header;
Article.Meta = Meta;
Article.CreatedAt = CreatedAt;
Article.Headline = Headline;
Article.Subtitle = Subtitle;
Article.Hero = Hero;
Article.Content = Content;
Article.ReadAlso = ReadAlso;
Article.Delimiter = Delimiter;

export default Article;