import styles from "./page.module.css";
import { Button } from "@/components/ui/buttons/";
import { Menu } from "@/components/ui/Menu";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <Button text="Click me!" />
          <Button text="Sun!" icon={{name: "sun"}}/>
          <Menu>
              <Menu.Item text="Amazes" href={"/category/amazes"} />
              <Menu.Item text="Informs" href={"/category/informs"} />
              <Menu.Item text="Amuses" href={"/category/amuses"} />
              <Menu.Item text="Inspires" href={"/category/inspires"} />
          </Menu>
          <h1>Smart Curiosity</h1>
          <h2>Smart Curiosity</h2>
          <h3>Smart Curiosity</h3>
          <p>Smart Curiosity</p>
          <small>Smart Curiosity</small>
      </main>
    </div>
  );
}
