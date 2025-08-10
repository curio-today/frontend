import styles from "./PostCard.module.scss";

import { PostCardProps } from "./types/PostCardProps";

const PostCard = (props: PostCardProps) => {
    return (
        <article className={styles.postCard} itemScope itemType="https://schema.org/Article">


        </article>
    )
}


export default PostCard;