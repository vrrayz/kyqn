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
      <section className={styles.mainBody}>
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
            At KYQN, we're creating a complete system that changes how you
            connect, take part, and do business in the decentralized world. If
            you're interested in purchasing our token, we're carefully making a
            smooth platform that includes many different things like finance and
            social media, all meant to give you an amazing experience.
          </Slogan>
        </section>
        <section className={styles.aboutSection}>
          <h1 className={styles.sectionHeader}>Our Story</h1>
          <Slogan className={styles.textSmall + " " + styles.sectionText}>
            KYQN envisions a future where technology thrives through
            collaboration and decentralization. Our platform utilizes blockchain
            and cryptocurrency's potential, forming a safe, seamless ecosystem.
            Here, users craft meaningful bonds, dive into dynamic communities,
            and uncover limitless opportunities.
          </Slogan>
        </section>
      </section>
    </div>
  );
};

export default About;
