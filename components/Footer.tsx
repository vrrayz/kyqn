import Image from "next/image"
import { Slogan } from "../pages"
import { styled } from "styled-components";
import styles from "../styles/Home.module.css";

export const Footer = () =>{
    return (
        <footer>
        <br /> <br />
        <Slogan className={styles.textMedium}>info@kyqn.io</Slogan>
        <Slogan className={styles.textSmall}>KyqN 2023</Slogan>
        <Socials>
          <a href="/">
            <Image
              src={"/assets/telegram.svg"}
              alt={"tg"}
              width={30}
              height={30}
            />
          </a>
          <a href="/">
            <Image
              src={"/assets/twitter.svg"}
              alt={"tg"}
              width={30}
              height={30}
            />
          </a>
          <a href="/">
            <Image
              src={"/assets/dextools.svg"}
              alt={"tg"}
              width={30}
              height={30}
            />
          </a>
          <a href="https://goerli.etherscan.io/token/0x729C5fD25e2656b659479bf8dD2fff4Dbd12e90b" target="_blank">
            <Image
              src={"/assets/etherscan.svg"}
              alt={"tg"}
              width={30}
              height={30}
            />
          </a>
        </Socials>
      </footer>
    )
}
const Socials = styled.div`
  display: flex;
  justify-content: center;
  margin: 8px 0px;
  a {
    margin: 0px 8px;
    background-color: #000;
    background: linear-gradient(
      180deg,
      rgb(7 0 13) 1%,
      rgb(29 19 52) 60%,
      rgba(10, 8, 42, 0.93) 96%
    );
    box-shadow: 0px 1px 3px #663399;
    border-radius: 50%;
    padding: 7px 6px;
    padding-bottom: 2px;
  }
`;
