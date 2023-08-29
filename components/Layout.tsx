import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { Footer } from "./Footer";
import { Preloader } from "./Preloader";
export const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000)
  },[])
  return (
    <>
    {isLoading && <Preloader />}
    <div className={styles.pageContainer}>
      <div className={styles.innerOverlay}>
        { children }
        <Footer />
      </div>
    </div>
    </>
  );
};
