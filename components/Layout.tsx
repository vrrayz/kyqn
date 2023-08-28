import styles from "../styles/Home.module.css";
export const Layout = ({ children }) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.innerOverlay}>
        { children }
      </div>
    </div>
  );
};
