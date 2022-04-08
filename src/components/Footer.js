import styled from 'styled-components';
import {
  BrandDiscord,
  Mail,
  BrandGithub,
  BrandLinkedin,
  BrandTelegram,
  BrandInstagram,
} from 'tabler-icons-react';

function Footer() {
  return (
    <Wrapper>
      <LinkElement>
        <Mail size={30} strokeWidth={2} color={'#ffffff'} />
        <Link href="mailto:maciekzygmunt@interia.pl" target="_blank">
          maciekzygmunt@interia.pl
        </Link>
      </LinkElement>
      <LinkElement>
        <BrandGithub size={30} strokeWidth={2} color={'#ffffff'} />
        <Link href="https://github.com/maciekzygmunt" target="_blank">
          Github
        </Link>
      </LinkElement>
      <LinkElement>
        <BrandLinkedin size={30} strokeWidth={2} color={'#ffffff'} />
        <Link href="https://www.linkedin.com/in/maciej-zygmunt/" target="_blank">
          LinkedIn
        </Link>
      </LinkElement>
      <LinkElement>
        <BrandTelegram size={30} strokeWidth={2} color={'#ffffff'} />
        <Link href="https://t.me/maciekzygmunt" target="_blank">
          Telegram
        </Link>
      </LinkElement>
      <LinkElement>
        <BrandInstagram size={30} strokeWidth={2} color={'#ffffff'} />
        <Link href="https://www.instagram.com/maciekzygmunt/" target="_blank">
          Instagram
        </Link>
      </LinkElement>
      <LinkElement>
        <BrandDiscord size={30} strokeWidth={2} color={'#ffffff'} />
        <Link href="https://discordapp.com/users/428641847280402432" target="_blank">
          Discord
        </Link>
      </LinkElement>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const LinkElement = styled.div`
  font-size: 2rem;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  @media (max-width: 28rem) {
    font-size: 1.5rem;
  }
  @media (max-width: 22rem) {
    font-size: 1.3rem;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  transition: color 150ms ease-out;
  &:hover {
    color: #d1d5db;
  }
`;

export default Footer;
