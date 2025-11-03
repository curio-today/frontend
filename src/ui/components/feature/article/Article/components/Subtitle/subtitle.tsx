import Text, { TextProps } from "@/ui/components/ui/Text";
import styles from "./subtitle.module.css";

type SubtitleProps = {
    subtitle: string;
} & Partial<TextProps>;

const Subtitle = ({ variant = "h3", id = "subtitle", subtitle, ...rest }: SubtitleProps) => {
    return (
        <Text variant={variant} className={styles.subtitle} id={id} {...rest}>{subtitle}</Text>
    )
}


export default Subtitle;