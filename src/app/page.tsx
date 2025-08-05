import styles from "./page.module.css";
import { Button } from "@/components/ui/buttons/";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <Button text="Click me!" hasIcon={false} />

          <h1>Smart Curiosity</h1>
          <h2>Smart Curiosity</h2>
          <h3>Smart Curiosity</h3>
          <p>Smart Curiosity</p>
          <small>Smart Curiosity</small>
      </main>
    </div>
  );
}
