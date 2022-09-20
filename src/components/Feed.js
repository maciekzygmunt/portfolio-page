import React, { Suspense } from 'react';
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from 'react-scroll-motion';

import { projects } from '../projects';

const ProjectItem = React.lazy(() => import('./ProjectItem.js'));
const Footer = React.lazy(() => import('./Footer.js'));

function Feed() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <>
      <Suspense>
        <ScrollContainer>
          <ScrollPage page={0}>
            <div id="home">
              <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                <span style={{ fontSize: '40px' }}>👋Hi, I'm Maciej Zygmunt</span>
              </Animator>
            </div>
          </ScrollPage>
          <ScrollPage page={1}>
            <Animator animation={ZoomInScrollOut}>
              <span style={{ fontSize: '40px' }}>👨‍💻Web Front-end Developer</span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={2}>
            <div id="skills">
              <Animator animation={FadeUp}>
                <span style={{ fontSize: '40px' }}>🤹Skills:</span>
              </Animator>
            </div>
          </ScrollPage>
          <ScrollPage page={3}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                marginTop: '3.5rem',
              }}
            >
              <span
                style={{
                  fontSize: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Animator animation={MoveIn(-1000, 0)}>JavaScript</Animator>
                <Animator animation={MoveIn(1000, 0)}>TypeScript</Animator>
                <Animator animation={MoveIn(-1000, 0)}>React</Animator>
                <Animator animation={MoveIn(1000, 0)}>Next.js</Animator>
                <Animator animation={MoveIn(-1000, 0)}>Tailwindcss</Animator>
                <Animator animation={MoveIn(1000, 0)}>Redux</Animator>
                <Animator animation={MoveIn(-1000, 0)}>Node.js</Animator>
                <Animator animation={MoveIn(1000, 0)}>Express.js</Animator>
                <Animator animation={MoveIn(-1000, 0)}>MongoDB</Animator>
                <Animator animation={MoveIn(1000, 0)}>GraphQL</Animator>
                <Animator animation={MoveIn(-1000, 0)}>Git</Animator>
                <Animator animation={MoveIn(1000, 0)}>Docker</Animator>
              </span>
            </div>
          </ScrollPage>
          <ScrollPage page={4}>
            <div id="projects">
              <Animator animation={FadeUp}>
                <span style={{ fontSize: '40px', whiteSpace: 'pre' }}>🛠️Projects:</span>
              </Animator>
            </div>
          </ScrollPage>
          {projects.map((project, i) => (
            <ScrollPage key={project.id} page={i + 5}>
              <Animator animation={MoveIn(-1000, 0)}>
                <ProjectItem key={project.id} project={project} />
              </Animator>
            </ScrollPage>
          ))}
        </ScrollContainer>
        <div id="contactme">
          <Footer />
        </div>
      </Suspense>
    </>
  );
}

export default Feed;
