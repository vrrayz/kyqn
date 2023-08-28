import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { styled } from 'styled-components'
export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <LogoWrapper>
                <Image src={'/assets/kyqn-logo.png'} height={50} width={50} alt='Logo' className={styles.noFit} />
            </LogoWrapper>

        </div>
    )
}

const LogoWrapper = styled.div`
box-shadow: 1px 0px 10px #663399;
border-radius: 50%;
width: 50px;
height: 50px;
margin: auto;
text-align: center;
display: flex;
justify-content: between;
`