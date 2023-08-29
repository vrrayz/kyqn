import styles from "../styles/Home.module.css";
import { Footer } from "./Footer";
export const Layout = ({ children }) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.innerOverlay}>
        { children }
        <Footer />
      </div>
    </div>
  );
};
