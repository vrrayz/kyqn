import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { LogoWrapper, Navbar } from "../components/Navbar";
import { Slogan } from ".";

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About | KYQN</title>
        <link rel="icon" href="/assets/kyqn-logo.png" />
      </Head>

      <Navbar />
      <section className={styles.mainBody} style={{gridTemplateRows: '100vh 100vh 100vh'}}>
        <section className={styles.aboutSection}>
          <h1 className={styles.sectionHeader} data-aos={"fade-up"}>
            About Us
          </h1>
          <Slogan
            style={{ marginBottom: "26px" }}
            data-aos={"fade-up"}
            data-aos-delay={"80"}
          >
            Empower, Stake, Thrive: <br />
            Unleashing potential with uitlity
          </Slogan>
          <Slogan
            className={styles.textSmall + " " + styles.sectionText}
            data-aos={"fade-up"}
            data-aos-delay={"100"}
          >
            We are a team of blockchain enthusiasts, developers, and financial
            experts united by a shared passion for advancing blockchain
            adoption. With a collective experience spanning various industries,
            our team brings together technical expertise, security knowledge,
            and a deep understanding of user needs. We are committed to
            promoting the values of decentralization, security, and
            accessibility, and we are excited to contribute to the growth and
            evolution of the blockchain ecosystem through staking.
          </Slogan>
        </section>
        <section className={styles.aboutSection}>
          <h1 className={styles.sectionHeader}>Our Mission</h1>
          <Slogan className={styles.textSmall + " " + styles.sectionText}>
            At KYQN, our mission is to empower individuals to actively
            participate in the growth and security of blockchain networks
            through staking. We believe in creating an inclusive and
            decentralized ecosystem that enables users to stake their digital
            assets and contribute to the validation and consensus mechanisms of
            various blockchain platforms. Our aim is to simplify the staking
            process, making it accessible to both newcomers and experienced
            crypto enthusiasts.
          </Slogan>
        </section>
        <section className={styles.aboutSection}>
          <h1 className={styles.sectionHeader}>Our Vision</h1>
          <Slogan className={styles.textSmall + " " + styles.sectionText}>
            Our vision is to become the go-to platform for staking solutions,
            driving the widespread adoption of blockchain technology. We
            envision a future where staking is not only a means of earning
            rewards but also a fundamental way for individuals to engage with
            and support the blockchain projects they believe in. By offering a
            user-friendly and secure staking platform, we strive to build a
            bridge between traditional financial systems and the innovative
            world of decentralized networks.
          </Slogan>
        </section>
      </section>
    </div>
  );
};

export default About;
