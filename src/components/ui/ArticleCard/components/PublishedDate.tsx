import styles from "./published-date.module.css";

type Props = {
    date: Date;
}

const PublishedDate = ({ date }: Props) => {
    return (
        <time
            className={styles.date}
            dateTime={date.toDateString()}
            aria-label={`Published on ${date.toLocaleDateString()}`}
        >
            {date.toLocaleDateString()}
        </time>
    )
}

export default PublishedDate;