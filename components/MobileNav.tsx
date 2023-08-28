import { styled } from "styled-components";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { LogoWrapper } from "./Navbar";

interface MobileNavProps {
  isNavToggled: boolean;
}
export const MobileNav = ({ isNavToggled }: MobileNavProps) => {
  return (
    <NavContainer className={`${isNavToggled && "transformed"}`}>
      <InnerOverlay>
        {/* Empty */}
        <div></div>
        {/* Nav Links */}
        <LinksContainer>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Tokenomics</Link>
          <Link href={"/"}>Contact</Link>
          <Link href={"/"}>Docs</Link>
          <Link href={"/"}>Dapp</Link>
        </LinksContainer>
        {/* Logo */}
        <LogoArea>
          <LogoWrapper $height={100} $width={100}>
            <Image
              src={"/assets/kyqn-logo.png"}
              height={100}
              width={100}
              alt="Logo"
              className={styles.noFit}
            />
          </LogoWrapper>
        </LogoArea>
      </InnerOverlay>
    </NavContainer>
  );
};
const NavContainer = styled.div`
  background: url(/assets/bg_2.jpg);
  position: fixed;
  top: -100vh;
  left: 0;
  opacity: 0;
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-size: cover;
  transition: top 500ms, opacity 500ms;

  &.transformed {
    top: 0;
    opacity: 1;
  }
`;
const InnerOverlay = styled.div`
  background-color: rgba(27, 26, 42, 0.95);
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px 1fr 200px;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;

  a{
    font-weight: 700;
    text-transform: uppercase;
    color: #663399;
    font-size: 1.1rem;
    letter-spacing: 3px;
    margin: auto;
  }
`;
const LogoArea = styled.div`
display: flex;
justify-content: center;
`