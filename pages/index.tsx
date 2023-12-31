import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { styled } from "styled-components";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>KYQN</title>
        <link rel="icon" href="/kyqn-logo.png" />
      </Head>

      <Navbar />

      <section className={styles.mainBody}>
        <HeroBody>
          {/* Box 1 */}
          <HeroBoxContainer>
            <HeroBox href={"/"}>
              {" "}
              <span>
                {" "}
                Buy
                <br />
                KYQN
              </span>
            </HeroBox>
          </HeroBoxContainer>
          {/* Container for Box 2 and Box 3 */}
          <HeroBoxContainer>
            <HeroBox href={"/"}>
              {" "}
              <span>Chart</span>
            </HeroBox>
            <HeroBox href={"/"}>
              {" "}
              <span>Dapp</span>
            </HeroBox>
          </HeroBoxContainer>
          {/* Box 4 */}
          <HeroBoxContainer>
            <HeroBox href={"/"}>
              {" "}
              <span>Socials</span>
            </HeroBox>
          </HeroBoxContainer>
        </HeroBody>

        <section className={styles.dFlex}>
          <HotLinkSection
            className={styles.textCenter + " " + styles.textLight}
          >
            <HotLinkHeading>We Are KYQN</HotLinkHeading>
            <HotLinks>
              <HotLink href={"/about"}>About</HotLink>
              <HotLink href={"/tokenomics"}>Tokenomics</HotLink>
              <HotLink href={"/roadmap"}>Roadmap</HotLink>
              <HotLink href={"/dapp"}>Dapp</HotLink>
            </HotLinks>
            <Slogan>
              Empower, Stake, Thrive: <br />
              Unleashing potential with uitlity
            </Slogan>
          </HotLinkSection>
        </section>
      </section>
    </div>
  );
}
const HeroBody = styled.div`
  /* background-color: #fff; */
  width: 350px;
  height: 350px;
  margin: auto;
  background-image: url(/assets/kyqn-logo.png);
  background-position: center;
  padding: 8px;
  /* margin-top: 40px; */
  background-size: 200px;
  background-repeat: no-repeat;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  @media (min-width: 760px) {
    width: 450px;
    background-size: calc((57.14285 / 100) * 450px);
    height: 450px;
    padding: calc((2.285714 / 100) * 450px);
  }
  @media (min-width: 998px) {
    background-size: calc((57.14285 / 100) * 550px);
    width: 550px;
    height: 550px;
    padding: calc((2.285714 / 100) * 550px);
  }
`;
const HeroBox = styled(Link)`
  display: flex;
  text-align: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #000;
  background: linear-gradient(
    180deg,
    rgb(7 0 13) 1%,
    rgb(29 19 52) 60%,
    rgba(10, 8, 42, 0.93) 96%
  );
  box-shadow: 0px 0px 13px #723fa4;
  color: #fff;
  margin: auto;
  font-size: 10px;
  justify-content: center;
  flex-direction: column;
  text-transform: uppercase;
  letter-spacing: 1px;
  word-break: break-all;
  padding: 4px;
  @media (min-width: 760px){
    width: calc((22.857143 / 100) * 450px);
    height: calc((22.857143 / 100) * 450px);
  }
  @media (min-width: 998px) {
    width: calc((22.857143 / 100) * 550px);
    height: calc((22.857143 / 100) * 550px);
    font-size: 18px;
  }
`;
const HeroBoxContainer = styled.div`
  &:nth-child(2) {
    display: flex;
    justify-content: space-between;
  }

  &:nth-child(2) ${HeroBox} {
    margin: 0;
    margin-top: 8px;
    @media (min-width: 760px){
      margin-top: 18px; 
    }
  }
  &:nth-child(3) {
    display: flex;
    justify-content: end;
  }
  &:nth-child(3) ${HeroBox} {
    margin-bottom: 0;
  }
`;
const HotLinkSection = styled.section`
  width: 300px;
  margin: auto;
  text-transform: uppercase;
`;
const HotLinks = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const HotLink = styled(Link)`
  background: linear-gradient(
    180deg,
    rgb(7 0 13) 1%,
    rgb(29 19 52) 60%,
    rgba(10, 8, 42, 0.93) 96%
  );
  padding: 12px;
  font-size: 12px;
  letter-spacing: 2px;
  border-radius: 25px;
  color: #fff;
  margin-bottom: 16px;
`;
const HotLinkHeading = styled.h2`
  margin-bottom: 18px;
  letter-spacing: 1px;
  word-spacing: 1px;
`;
export const Slogan = styled.p`
  text-transform: uppercase;
  text-align: center;
  font-size: 12px;
  word-spacing: 4px;
  letter-spacing: 2px;
  font-weight: 500;
  color: #fff;
`;
