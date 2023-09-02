import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Navbar } from "../components/Navbar";
import { styled } from "styled-components";
import Image from "next/image";
import { TokenomicsBox } from "./tokenomics";
import { useState } from "react";
import { roadmaps } from "../data/roadmap";

const Tokenomics = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Roadmap</title>
        <link rel="icon" href="/kyqn-logo.png" />
      </Head>

      <Navbar />

      <section
        className={styles.mainBody}
        style={{ gridTemplateRows: "auto" }}
      >
        <section className={styles.textCenter} style={{marginTop: "100px"}}>
          {roadmaps.map(({ id, title, milestones }) => (
            <>
              <RoadmapBox>
                <RoadmapSubHeader>Phase {id}</RoadmapSubHeader>
                <RoadmapHeader>{title}</RoadmapHeader>
                {milestones.map(({isAchieved, text}) => (
                  <RoadmapListItem>
                    <Image
                      src={isAchieved ? "/assets/kyqn-logo.png":"/assets/kyqn-logo-bw.png"}
                      alt={"Logo mark"}
                      width={30}
                      height={30}
                    />
                    <p>
                      {text}
                    </p>
                  </RoadmapListItem>
                ))}
              </RoadmapBox>
              <Image
                src={"/assets/down_arrow.svg"}
                width={25}
                height={25}
                alt={"arrow"}
              />
            </>
          ))}
        </section>
      </section>
    </div>
  );
};
const RoadmapBox = styled(TokenomicsBox)`
  width: 320px;
`;
const RoadmapHeader = styled.h3`
  margin-top: 4px;
  letter-spacing: 2px;
`;
const RoadmapSubHeader = styled.h4`
  margin-bottom: 0px;
`;
const RoadmapListItem = styled.div`
  display: flex;
  column-gap: 6px;
  text-align: left;
  font-size: 12px;
  font-family: "Instrument Sans", sans-serif;
  margin-bottom: 8px;

  img {
    margin: auto;
  }
  p {
    text-transform: none;
    font-size: 14px;
    line-height: 1.3;
  }
`;
export default Tokenomics;
