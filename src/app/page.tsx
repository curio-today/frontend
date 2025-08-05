import styles from "./page.module.css";
import { Button } from "@/components/ui/buttons/";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <Button text="Click me!" hasIcon={false} />
      </main>
    </div>
  );
}
