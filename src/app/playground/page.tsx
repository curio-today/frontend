import styles from "./page.module.css";

import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import Badge from "@/components/ui/Badge";
import { CustomSelectExample } from "./components/CustomSelectExample";
import Post from "@/components/ui/Post";

export default function Playground() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>Playground</h1>
                <h3>Select</h3>
                <section style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    borderRadius: "1rem",
                    border: "3px dashed var(--border)",
                    padding: "2rem"
                }}>
                    <label>With search</label>
                    <CustomSelectExample hasSearch={true}/>
                    <label>Without the search</label>
                    <CustomSelectExample hasSearch={false}/>
                </section>


                <h3>Buttons</h3>
                <section style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: "1rem",
                    borderRadius: "1rem",
                    border: "3px dashed var(--border)",
                    padding: "2rem"
                }}>
                    <Button title="Click me!" mode="normal" />
                    <Button title="Click me with icon!" mode="normal" icon="globe" />
                    <Button mode="normal" icon="globe" />
                    <Button mode="outline" icon="globe" title="Language"/>
                    <Button mode="fill" icon="globe" />
                </section>

                <h3>Tags/Badges</h3>
                <section style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: "100%",
                    gap: "1rem",
                    borderRadius: "1rem",
                    border: "3px dashed var(--border)",
                    padding: "2rem"
                }}>
                    <Badge
                        icon="wow"
                        label="Amazes"
                        href="/amazes"
                        color="hsla(249, 100%, 65%, 1)"
                    />
                    <Badge
                        isActive={true}
                        icon="wow"
                        label="Amazes"
                        href="/amazes"
                        color="hsla(249, 100%, 65%, 1)"
                    />
                </section>

                <h3>Typography</h3>
                <section style={{
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    gap: "1rem",
                    borderRadius: "1rem",
                    border: "3px dashed var(--border)",
                    padding: "2rem"
                }}>
                    <Text variant="h1">Smart Curiosity</Text>
                    <Text variant="h2">Smart Curiosity</Text>
                    <Text variant="h3">Smart Curiosity</Text>
                    <Text variant="p">Smart Curiosity</Text>
                    <Text variant="small">Smart Curiosity</Text>
                </section>

                <h3>Post</h3>
                <section style={{
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    gap: "1rem",
                    borderRadius: "1rem",
                    border: "3px dashed var(--border)",
                    padding: "0.1rem"
                }}>
                    <Post size="small" image={{
                        src: "https://centralca.cdn-anvilcms.net/media/images/2019/01/02/images/Rainy_Weather_pix.max-1200x675.jpg",
                        sizes: [],
                        alt: "alt"
                    }} slug="testing-nad-gorizontom"
                          title={"Дожди над горизонтом, гром за кулисами"} subtitle={"Прогноз погоды по регионам Латвии на воскресенье, 21 июля"} badge={{
                        icon: "wow",
                        label: "Amazes",
                        href: "/amazes",
                        color: "hsla(249, 100%, 65%, 1)"
                    }} publishedDate={"1 день назад"} />
                </section>
            </main>
        </div>
    );
}
