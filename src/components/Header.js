import styled from 'styled-components';
import pic from '../assets/logo.webp';
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
            <Logo alt="Maciej Zygmunt" src={pic} />
          </Link>
        </LogoWrapper>
        <div>
          <MobileLinks>
            <Burger opened={opened} onClick={() => setOpened((o) => !o)} />
            <Backdrop opened={opened} onClick={() => setOpened((o) => !o)} />
            <MobileDrawer opened={opened}>
              <Link
                onClick={() => setOpened((o) => !o)}
                to="home"
                spy={true}
                smooth={true}
                offset={-90}
              >
                <NormalLink>Home</NormalLink>
              </Link>
              <Link onClick={() => setOpened((o) => !o)} to="skills" spy={true} smooth={true}>
                <NormalLink>Skills</NormalLink>
              </Link>
              <Link
                onClick={() => setOpened((o) => !o)}
                to="projects"
                spy={true}
                smooth={true}
                offset={-10}
              >
                <NormalLink>Projects</NormalLink>
              </Link>
              <Link
                onClick={() => setOpened((o) => !o)}
                to="contactme"
                spy={true}
                smooth={true}
                offset={-500}
              >
                <ContactLink>Contact Me</ContactLink>
              </Link>
            </MobileDrawer>
          </MobileLinks>
          <DesktopLinks>
            <Link to="home" spy={true} smooth={true} offset={-90}>
              <NormalLink>Home</NormalLink>
            </Link>
            <Link to="skills" spy={true} smooth={true}>
              <NormalLink>Skills</NormalLink>
            </Link>
            <Link to="projects" spy={true} smooth={true} offset={-10}>
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
  height: 6rem;
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  z-index: 1;
  background-color: white;
  box-shadow: 8px 8px 49px 3px rgba(255, 255, 255, 1);
`;

const LogoWrapper = styled.div`
  height: 3.2rem;
  cursor: pointer;
  z-index: -4;
  flex-grow: 0;
  flex-shrink: 0;
`;

const Logo = styled.img`
  height: 100%;
  max-width: 100%;
`;

const MobileLinks = styled.div`
  @media (min-width: 41rem) {
    display: none;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.41);
  transition: display 150ms ease-out;
  display: ${(props) => (props.opened ? 'block' : 'none')};
  z-index: -2;
`;

const MobileDrawer = styled.div`
  position: fixed;
  background-color: #ffffff;
  box-shadow: 0 0 10px #85888c;
  height: 100vh;
  top: 0;
  right: 0;
  width: 60vw;
  z-index: -2;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  transform: ${(props) => (props.opened ? 'none' : 'translate(104%, 0)')};
  font-size: 1.5rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DesktopLinks = styled.div`
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
  margin-right: 2rem;
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
  @media (max-width: 41rem) {
    margin: 1rem 0 0 0;
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
  text-decoration: none;
  &:hover,
  &:active {
    background-color: white;
    color: black;
    border: 2px solid black;
  }
  @media (max-width: 41rem) {
    margin: 1rem 0 0 0;
  }
`;

export default Header;
