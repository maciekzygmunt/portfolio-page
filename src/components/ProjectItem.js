import styled from 'styled-components';

function ProjectItem({ project }) {
  return (
    <Wrapper>
      <Name>{project.name}</Name>
      <ImageWrapper>
        <Image src={project.photo} />
      </ImageWrapper>
      {project.repo && (
        <Link href={project.repo} target="_blank">
          Github Repo
        </Link>
      )}
      <Link href={project.demo} target="_blank">
        Demo
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 5px 3px #00000040;
  margin: 0.5rem auto;
  margin-top: 15rem;
  @media (max-height: 850px) and (min-width: 500px) {
    margin-top: 10rem;
  }
  border-radius: 11px;
  width: 90vw;
  padding: 1rem;
  row-gap: 0.8rem;
  max-width: 1000px;
  background: white;
`;

const Name = styled.div`
  font-size: 3rem;
  font-weight: 500;
`;

const ImageWrapper = styled.div`
  width: 80vw;
  max-width: 620px;
  @media (max-height: 770px) {
    max-width: 40vw;
  }
  @media (max-height: 700px) {
    max-width: 30vw;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 11px;
`;

const Link = styled.a`
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration: none;
  color: black;
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

export default ProjectItem;
