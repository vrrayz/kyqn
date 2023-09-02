import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { LogoWrapper, Navbar } from "../components/Navbar";
import { Slogan } from ".";
import { styled } from "styled-components";
import { TokenomicsBox } from "./tokenomics";

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About | KYQN</title>
        <link rel="icon" href="/assets/kyqn-logo.png" />
      </Head>

      <Navbar />
      <section
        className={styles.mainBody}
        style={{ gridTemplateRows: "1fr 1fr 1fr" }}
      >
        <AboutSection style={{ marginTop: "95px" }}>
          <AboutBox>
            <AboutDetail>
              <h1 className={styles.sectionHeader} >
                About Us
              </h1>
              <Slogan
                style={{ marginBottom: "26px" }}>
                Empower, Stake, Thrive: <br />
                Unleashing potential with uitlity
              </Slogan>
              <Slogan
                className={styles.textSmall + " " + styles.sectionText}>
                We are a team of blockchain enthusiasts, developers, and
                financial experts united by a shared passion for advancing
                blockchain adoption. With a collective experience spanning
                various industries, our team brings together technical
                expertise, security knowledge, and a deep understanding of user
                needs. We are committed to promoting the values of
                decentralization, security, and accessibility, and we are
                excited to contribute to the growth and evolution of the
                blockchain ecosystem through staking.
              </Slogan>
            </AboutDetail>
            <AboutBg>
              <BgOverlay></BgOverlay>
            </AboutBg>
          </AboutBox>
        </AboutSection>
        <AboutSection>
          <AboutBox>
            <AboutDetail>
              <h1 className={styles.sectionHeader}>Our Mission</h1>
              <Slogan className={styles.textSmall + " " + styles.sectionText}>
                At KYQN, our mission is to empower individuals to actively
                participate in the growth and security of blockchain networks
                through staking. We believe in creating an inclusive and
                decentralized ecosystem that enables users to stake their
                digital assets and contribute to the validation and consensus
                mechanisms of various blockchain platforms. Our aim is to
                simplify the staking process, making it accessible to both
                newcomers and experienced crypto enthusiasts.
              </Slogan>
            </AboutDetail>
            <AboutBg>
              <BgOverlay></BgOverlay>
            </AboutBg>
          </AboutBox>
        </AboutSection>
        <AboutSection>
          <AboutBox>
            <AboutDetail>
              <h1 className={styles.sectionHeader}>Our Vision</h1>
              <Slogan className={styles.textSmall + " " + styles.sectionText}>
                Our vision is to become the go-to platform for staking
                solutions, driving the widespread adoption of blockchain
                technology. We envision a future where staking is not only a
                means of earning rewards but also a fundamental way for
                individuals to engage with and support the blockchain projects
                they believe in. By offering a user-friendly and secure staking
                platform, we strive to build a bridge between traditional
                financial systems and the innovative world of decentralized
                networks.
              </Slogan>
            </AboutDetail>
            <AboutBg>
              <BgOverlay></BgOverlay>
            </AboutBg>
          </AboutBox>
        </AboutSection>
      </section>
    </div>
  );
};

const BgOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 90, 0.43);
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
`;
const AboutDetail = styled.div`
  @media (min-width: 760px) {
    padding: 18px;
  }
`;
const AboutBg = styled.div``;

const AboutBox = styled(TokenomicsBox)`
  width: 320px;
  background: linear-gradient(
    180deg,
    rgba(7, 0, 13, 0.85) 1%,
    rgba(29, 19, 52, 0.85) 60%,
    rgba(10, 8, 42, 0.85) 96%
  ) !important;
  margin: 0px;
  ${AboutBg} {
    display: none;
    background: url(/assets/bg_3.jpg);
    background-size: cover;
    background-position: center;
    border-top-right-radius: 18px;
    border-bottom-right-radius: 18px;
  }
  @media (min-width: 760px) {
    display: grid;
    grid-template-columns: 1fr 250px;
    width: 720px;
    padding-right: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
    ${AboutBg} {
      display: block;
    }
  }
  @media (min-width: 998px) {
    width: 850px;
  }
`;

const AboutSection = styled.div`
  margin: auto;
  background: url(/assets/bg_3.jpg);
  border-radius: 18px;
  background-position: center;
  background-size: cover;
`;

export default About;
