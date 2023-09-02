import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Navbar } from "../components/Navbar";
import { styled } from "styled-components";
import Image from "next/image";

const Tokenomics = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tokenomics</title>
        <link rel="icon" href="/kyqn-logo.png" />
      </Head>

      <Navbar />

      <section className={styles.mainBody} style={{gridTemplateRows:'100vh'}}>
        <section className={styles.marginYAuto + " " + styles.textCenter}>
          <TokenomicsBox data-aos={"fade-up"}>eth</TokenomicsBox>
          <Image
            src={"/assets/down_arrow.svg"}
            width={25}
            height={25}
            alt={"arrow"}
            data-aos={"fade-up"}
            data-aos-delay={"100"}
          />
          <TokenomicsBox data-aos={"fade-up"} data-aos-delay={"100"}>
            KYQN
          </TokenomicsBox>
          <Image
            src={"/assets/down_arrow.svg"}
            width={25}
            height={25}
            alt={"arrow"}
            data-aos={"fade-up"}
            data-aos-delay={"120"}
          />
          <TokenomicsBox
            data-aos={"fade-up"}
            data-aos-delay={"120"}
            $width={180}
          >
            3% Tax
          </TokenomicsBox>
          <Image
            src={"/assets/down_arrow.svg"}
            width={25}
            height={25}
            alt={"arrow"}
            data-aos={"fade-up"}
            data-aos-delay={"130"}
          />
          <TokenomicsBox
            data-aos={"fade-up"}
            data-aos-delay={"130"}
            $width={200}
          >
            3% liquidity Auto generated for kyqn token
          </TokenomicsBox>
          <Image
            src={"/assets/down_arrow.svg"}
            width={25}
            height={25}
            alt={"arrow"}
            data-aos={"fade-up"}
            data-aos-delay={"150"}
          />
          <TokenomicsBox
            data-aos={"fade-up"}
            data-aos-delay={"150"}
            $width={250}
          >
            3% of every transaction is sent back to the liquidity pool which in turns increases the value of kyqn tokens
          </TokenomicsBox>
        </section>
      </section>
    </div>
  );
};
export const TokenomicsBox = styled.div<{ $width?: number }>`
  padding: 8px 18px;
  min-width: 150px;
  text-align: center;
  background: #fff;
  border-radius: 18px;
  font-weight: bold;
  text-transform: uppercase;
  background: linear-gradient(
    180deg,
    rgb(7 0 13) 1%,
    rgb(29 19 52) 60%,
    rgba(10, 8, 42, 0.93) 96%
  );
  color: #ca95ff;
  box-shadow: 0px 0px 13px #723fa4;
  margin: 4px auto;
  font-size: 12px;
  width: ${(props) => props.$width || "150"}px;
  line-height: 1.5;
`;
export default Tokenomics;
