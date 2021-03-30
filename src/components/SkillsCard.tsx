import React from 'react';
import SocialLink from './SocialLink';
import ImageLabel from './ImageLabel';
import Hide from './Hide';
import { Box, Flex, Image, Text } from 'rebass/styled-components';
import styled from 'styled-components';
import { SkillsCard as ProjectType } from '../types';
import { Card } from './Card';
import SkillBar from 'react-skillbars';
import SkillBars from './SkillBars';
import { hideText } from 'polished';
import LinearProgress from '@material-ui/core/LinearProgress';
import {
  makeStyles,
  createStyles,
  withStyles,
  Theme,
} from '@material-ui/core/styles';

type Props = ProjectType;

const colors = {
  bar: '#2980b9',
  title: {
    text: '#03254c',
    background: '#d0efff',
  },
};

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }),
)(LinearProgress);

const SkillsCard = ({ name, skills }: Props) => (
  <Card p={0}>
    <Flex>
      <TextContainer>
        <span>
          <Title my={2} pb={2} color="text">
            {name}
          </Title>
        </span>
        <SkillContainer>
          <SkillBars skill={skills}></SkillBars>
          {/* <SkillBar skills={skills} colors={colors} height={17} /> */}
        </SkillContainer>
      </TextContainer>

      {/* <ImageContainer>
        <ProjectTag>
          <ImageLabel bg="primary" color="white" position="bottom-right" round>
            {type}
          </ImageLabel>
        </ProjectTag>
      </ImageContainer> */}
    </Flex>
  </Card>
);

const CARD_HEIGHT = '350px';

const MEDIA_QUERY_SMALL = '@media (max-width: 200px)';

const Title = styled(Text)`
  font-size: 20px;
  font-weight: 600;
  display: table;
  border-bottom: ${({ theme }) => theme.colors.primary} 5px solid;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`;

const SkillContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};
}
`;
const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`;

const ProjectImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 40px;
  margin-top: 0px;

  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`;

const ProjectTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(
    -${CARD_HEIGHT} - 3.5px
  ); /*don't know why I have to add 3.5px here ... */

  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;

export default SkillsCard;
