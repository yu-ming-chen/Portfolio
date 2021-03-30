import React from 'react';
import { Box, Image, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Fade } from 'react-awesome-reveal';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';
import { useSkillsQuery } from '../queries/useSkillsQuery';
import { Card } from '../components/Card';
import SkillsCard from '../components/SkillsCard';
import { CardContainer } from '../components/Card';

const Skills = () => {
  const { markdown } = useSkillsQuery();

  return (
    <Section.Container id="Skills" Background={Background}>
      <Section.Header name="Skills" icon="⚙️" label="file" />
      {/* <Flex justifyContent="center" alignItems="center" flexWrap="wrap"> */}
      {/* <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]} mt={2}>
          <Fade direction="down" triggerOnce>
            <ReactMarkdown source={markdown} renderers={markdownRenderer} />
          </Fade>
        </Box> */}
      <CardContainer minWidth="350px">
        <SkillsCard name="⌨️  Programming Language" skills={PL}></SkillsCard>
        <SkillsCard name="🕸  Web Development" skills={WD}></SkillsCard>
        <SkillsCard name="📱  Mobile Development" skills={MD}></SkillsCard>
        <SkillsCard name="💿  Database" skills={DB}></SkillsCard>
        <SkillsCard name="🎨 Design & UI/UX" skills={UIUX}></SkillsCard>
        <SkillsCard name="📦 Others" skills={Others}></SkillsCard>
      </CardContainer>
      {/* <Box
          width={[1, 1, 2 / 6]}
          style={{ maxWidth: '300px', margin: 'auto' }}
        >
          <Fade direction="right" triggerOnce>
            <ProfilePicture mt={[4, 4, 0]} ml={[0, 0, 1]} {...profile} />
          </Fade>
        </Box> */}
      {/* </Flex> */}
    </Section.Container>
  );
};

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.4s ease-out;

  &:hover {
    border-radius: 20%;
  }
`;

const Background = () => (
  <>
    <Triangle
      color="secondary"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      position="bottom-left"
    />

    <Triangle
      color="primary"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      position="top-right"
    />

    <Triangle
      color="muted"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </>
);

const SKILLS = [
  {
    type: 'Java',
    level: 100,
  },
  {
    type: 'React',
    level: 85,
  },
  {
    type: 'Javascript',
    level: 75,
  },
  {
    type: 'Spring',
    level: 50,
  },
  {
    type: 'Docker',
    level: 25,
  },
  {
    type: 'HTML',
    level: 20,
  },
  {
    type: 'NoSQL',
    level: 0,
  },
];

const PL = [
  {
    type: 'Java',
    level: 100,
  },
  {
    type: 'Python',
    level: 85,
  },
  {
    type: 'C',
    level: 75,
  },
  {
    type: 'C#',
    level: 50,
  },
  {
    type: 'Kortlin',
    level: 50,
  },
  {
    type: 'Dart',
    level: 30,
  },
];

const WD = [
  {
    type: 'JavaScript',
    level: 75,
  },
  {
    type: 'ReactJs',
    level: 75,
  },
  {
    type: 'NextJs',
    level: 50,
  },
  {
    type: 'Gatsby',
    level: 50,
  },
  {
    type: 'HTML',
    level: 50,
  },
  {
    type: 'CSS',
    level: 50,
  },
];

const MD = [
  {
    type: 'Android',
    level: 70,
  },
  {
    type: 'Flutter',
    level: 70,
  },
];

const DB = [
  {
    type: 'PostgreSQL',
    level: 80,
  },
  {
    type: 'MySQL',
    level: 70,
  },
];

const UIUX = [
  {
    type: 'Photoshop',
    level: 100,
  },
  {
    type: 'Illustrator',
    level: 90,
  },
  {
    type: 'Lightroom',
    level: 70,
  },
  {
    type: 'Indesign',
    level: 70,
  },
  {
    type: 'Procreate',
    level: 70,
  },
  {
    type: 'Figma',
    level: 85,
  },
];

const Others = [
  {
    type: 'Unix OS',
    level: 50,
  },
  {
    type: 'Unity',
    level: 50,
  },
];

export default Skills;
