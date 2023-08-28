import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { styled } from "styled-components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className={styles.heroBody}>
        {/* Box 1 */}
        <HeroBoxContainer>
          <HeroBox href={'/'}> <span> Buy<br/>KYQN</span></HeroBox>
        </HeroBoxContainer>
        {/* Container for Box 2 and Box 3 */}
        <HeroBoxContainer>
          <HeroBox href={'/'}> <span>Chart</span></HeroBox>
          <HeroBox href={'/'}> <span>Dapp</span></HeroBox>
        </HeroBoxContainer>
        {/* Box 4 */}
        <HeroBoxContainer>
          <HeroBox href={'/'}> <span>Socials</span></HeroBox>
        </HeroBoxContainer>
      </div>

      <HotLinkSection className={styles.textCenter+' '+styles.textLight}>
        <h5>We Are KYQN</h5>
        <HotLinks>
          <HotLink href={'/'}>About</HotLink>
          <HotLink href={'/'}>Tokenomics</HotLink>
          <HotLink href={'/'}>Docs</HotLink>
          <HotLink href={'/'}>Contact</HotLink>
        </HotLinks>
      </HotLinkSection>

    </div>
  );
}

const HeroBox = styled(Link)`
display:flex;
text-align:center;
width: 80px;
height: 80px;
border-radius: 50%;
background-color: #000;
background: linear-gradient(180deg, rgb(7 0 13) 1%, rgb(29 19 52) 60%, rgba(10,8,42,0.93) 96%);
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
`
const HeroBoxContainer = styled.div`
&:nth-child(2){
  display:flex;
  justify-content: space-between;
}

&:nth-child(2) ${HeroBox}{
  margin: 0;
  margin-top: 8px;
} 
&:nth-child(3){
  display:flex;
  justify-content: end;
}
&:nth-child(3) ${HeroBox}{
  margin-bottom: 0;
} 
`
const HotLinkSection = styled.section`
max-width: 300px;
margin: auto;
// font-family: 'Instrument Sans', sans-serif;
text-transform: uppercase;
`
const HotLinks = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
`
const HotLink = styled(Link)`
background: linear-gradient(180deg, rgb(7 0 13) 1%, rgb(29 19 52) 60%, rgba(10,8,42,0.93) 96%);
padding: 12px;
font-size: 12px;
letter-spacing: 2px;
border-radius: 25px;
color: #fff;
margin-bottom: 8px;
`
