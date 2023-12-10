import styles from "./page.module.css";
import ActivityClient from "./static/js/activityClient";
import "./static/css/Anime.css";
import FetchModule from "./static/js/fetch";

export default function Home() {
  return (
    <main className={styles.main}>
      <FetchModule />
      <ActivityClient />
    </main>
  );
}
