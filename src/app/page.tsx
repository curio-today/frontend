import styles from "./page.module.css";

import Button from "@/components/ui/Button";
import List from "@/components/layout/List";
import Text from "@/components/ui/Text";
import Badge from "@/components/ui/Badge";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <List orientation="vertical">
              <Button title="Click me!" mode="normal" />
              <Button title="Click me with icon!" mode="normal" icon="globe" />
              <Button mode="normal" icon="globe" />
              <Button mode="outline" icon="globe" title="Language"/>
              <Button mode="fill" icon="globe" />
          </List>
          <Badge icon="wow" label="Amazes" href="/amazes" color="hsla(249, 100%, 65%, 1)" />

          <Text variant="h1">Smart Curiosity</Text>
          <Text variant="h2">Smart Curiosity</Text>
          <Text variant="h3">Smart Curiosity</Text>
          <Text variant="p">Smart Curiosity</Text>
          <Text variant="small">Smart Curiosity</Text>
      </main>
    </div>
  );
}
