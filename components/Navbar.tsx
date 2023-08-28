import Image from "next/image";
import styles from "../styles/Home.module.css";
import { styled } from "styled-components";
import { useState } from "react";
import { MobileNav } from "./MobileNav";
export const Navbar = () => {
    const [isNavToggled, setIsNavToggled] = useState(false)
  return (
    <div className={styles.navbar}>
      <LogoWrapper $height={50} $width={50}>
        <Image
          src={"/assets/kyqn-logo.png"}
          height={50}
          width={50}
          alt="Logo"
          className={styles.noFit}
        />
      </LogoWrapper>
      <MobileNavToggler className={`${isNavToggled && 'transformed'}`} onClick={() => setIsNavToggled(!isNavToggled)}>
        <TogglerItem className={`${isNavToggled && 'transformed'}`}></TogglerItem>
        <TogglerItem className={`${isNavToggled && 'transformed'}`}></TogglerItem>
        <TogglerItem className={`${isNavToggled && 'transformed'}`}></TogglerItem>
      </MobileNavToggler>
      <MobileNav isNavToggled={isNavToggled} />
    </div>
  );
};

export const LogoWrapper = styled.div<{$height: number, $width: number}>`
  box-shadow: 1px 0px 10px #663399;
  border-radius: 50%;
  width: ${(props) => props.$height}px;
  height: ${(props) => props.$height}px;
  margin: auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
`;
const MobileNavToggler = styled.div`
  width: 40px;
  height: 40px;
  margin: auto 0px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  cursor: pointer;
  transition: padding 200ms;
  z-index: 100;
  &.transformed{
    padding: 8px 0px;
  }
`;
const TogglerItem = styled.div`
  width: 26px;
  height: 3px;
  background: #663399;
  box-shadow: 1px 0px 3px #663399;
  margin: auto;
  border-radius: 25%;
  transition: margin 200ms, transform 200ms;
  &:nth-child(3){
    width: 13px;
    margin-right: 7px;
    margin-bottom: 9px;
  }
  &:nth-child(1){
    width: 13px;
    margin-left: 7px;
    margin-top: 9px;
  }
  &.transformed:nth-child(3){
    margin-right: 9px;
    margin-bottom: 5px;
    transform: rotate(45deg);
  }
  &.transformed:nth-child(1){
    margin-left: 9px;
    margin-top: 5px;
    transform: rotate(45deg);
  }
  &.transformed:nth-child(2){
    transform: rotate(-45deg);
  }
`;
