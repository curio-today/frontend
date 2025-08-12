import styles from "./page.module.css";

import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import Badge from "@/components/ui/Badge";
import Checkbox from "@/components/ui/Checkbox";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>Playground</h1>
                <del/>
                <section className={styles.buttons}>
                    <Button title="Click me!" mode="normal" />
                    <Button title="Click me with icon!" mode="normal" icon="globe" />
                    <Button mode="normal" icon="globe" />
                    <Button mode="outline" icon="globe" title="Language"/>
                    <Button mode="fill" icon="globe" />
                </section>

                <Checkbox options={[
                    {
                        id: 1,
                        label: "English (EN)",
                    },
                    {
                        id: 2,
                        label: "Russian (RU)"
                    },
                    {
                        id: 3,
                        label: "Latvian (LV)"
                    }
                ]}/>

                <Badge
                    icon="wow"
                    label="Amazes"
                    href="/amazes"
                    color="hsla(249, 100%, 65%, 1)"
                />

                <section className={styles.text}>
                    <Text variant="h1">Smart Curiosity</Text>
                    <Text variant="h2">Smart Curiosity</Text>
                    <Text variant="h3">Smart Curiosity</Text>
                    <Text variant="p">Smart Curiosity</Text>
                    <Text variant="small">Smart Curiosity</Text>
                </section>
                <section className={styles.text}>
                    <Text variant="h1">Smart Curiosity</Text>
                    <Text variant="h2">Smart Curiosity</Text>
                    <Text variant="h3">Smart Curiosity</Text>
                    <Text variant="p">Smart Curiosity</Text>
                    <Text variant="small">Smart Curiosity</Text>
                </section>
                <section className={styles.text}>
                    <Text variant="h1">Smart Curiosity</Text>
                    <Text variant="h2">Smart Curiosity</Text>
                    <Text variant="h3">Smart Curiosity</Text>
                    <Text variant="p">Smart Curiosity</Text>
                    <Text variant="small">Smart Curiosity</Text>
                </section>
            </main>
        </div>
    );
}
