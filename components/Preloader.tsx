import Image from "next/image";
import { styled } from "styled-components";
import styles from "../styles/Home.module.css";
import { LogoWrapper } from "./Navbar";

export const Preloader = () => {
  return (
    <DarkOverlay>
      <section>
        <LoadingImage $height={150} $width={150}>
          <Image
            src={"/assets/kyqn-logo.png"}
            alt={"Logo"}
            width={150}
            height={150}
            className={styles.noFit}
          />
        </LoadingImage>
        <h1 className={styles.textLight + " " + styles.textCenter}>KYQN</h1>
      </section>
    </DarkOverlay>
  );
};
const DarkOverlay = styled.div`
  position: fixed;
  background: linear-gradient(
    180deg,
    rgb(7 0 13) 19%,
    rgb(29 19 52) 50%,
    rgb(10, 8, 42) 67%
  );
  height: 100vh;
  width: 100vw;
  z-index: 10000000;
  display: flex;
  justify-content: center;
  flex-direction: column;
  animation: fadePreloader 3200ms;
`;
const LoadingImage = styled(LogoWrapper)`
  // width: 100px;
  // height: 100px;
  // margin: auto;
  margin-bottom: 16px;
  margin-top: 16px;
  animation: logoRotate 3s;
  box-shadow: 0px 0px 24px #663399;
`;
