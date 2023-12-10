import styles from "./page.module.css";
import ActivityClient from "./static/js/activityClient";
import "./static/css/Anime.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ActivityClient />
    </main>
  );
}
