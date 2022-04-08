import styled from 'styled-components';
import pic from '../assets/Logo-small.jpg';
import { Burger } from '@mantine/core';
import { useState } from 'react';
import { Link } from 'react-scroll';

function Header() {
  const [opened, setOpened] = useState(false);

  return (
    <HeaderWrapper>
      <Wrapper>
        <LogoWrapper>
          <Link to="home" spy={true} smooth={true} offset={-90}>
            <Logo src={pic} />
          </Link>
        </LogoWrapper>
        <div>
          <MobileLinks>
            <Burger opened={opened} onClick={() => setOpened((o) => !o)} />
          </MobileLinks>
          <DesktopLinks>
            <Link to="home" spy={true} smooth={true} offset={-90}>
              <NormalLink>Home</NormalLink>
            </Link>
            <Link to="skills" spy={true} smooth={true}>
              <NormalLink>Skills</NormalLink>
            </Link>
            <Link to="projects" spy={true} smooth={true}>
              <NormalLink>Projects</NormalLink>
            </Link>
            <Link to="contactme" spy={true} smooth={true} offset={-500}>
              <ContactLink>Contact Me</ContactLink>
            </Link>
          </DesktopLinks>
        </div>
      </Wrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  margin: 0 auto;
  width: 100%;
  z-index: 50;
  height: 6rem;
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
`;

const LogoWrapper = styled.div`
  height: 3.2rem;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 100%;
`;

const MobileLinks = styled.div`
  @media (min-width: 41rem) {
    display: none;
  }
`;

const DesktopLinks = styled.div`
  column-gap: 2rem;
  font-size: 1.5rem;
  font-weight: 500;
  align-items: center;
  margin: 0 1rem;
  display: none;
  @media (min-width: 41rem) {
    display: flex;
  }
`;

const NormalLink = styled.div`
  cursor: pointer;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: black;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const ContactLink = styled.div`
  cursor: pointer;
  background: black;
  color: white;
  width: 11rem;
  height: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  transition: color 200ms ease-out, background-color 200ms ease-out;
  &:hover,
  &:active {
    background-color: white;
    color: black;
    border: 2px solid black;
  }
`;

export default Header;
