import React from 'react';
import { SkillsBars as SkillBarType } from '../types';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import {
  makeStyles,
  createStyles,
  withStyles,
  Theme,
} from '@material-ui/core/styles';

type Props = SkillBarType;

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 5,
      marginTop: 7,
      marginBottom: 7,
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

const SkillsBars = ({ skill }: Props) => (
  <React.Fragment>
    {skill.map((skills) => {
      const { type, level } = skills;
      return (
        <Grid container alignItems="center">
          <Grid item xs={3} alignItems="center">
            <Box>{type}</Box>
          </Grid>
          <Grid item xs>
            <BorderLinearProgress variant="determinate" value={level} />
          </Grid>
        </Grid>
      );
    })}
  </React.Fragment>
);

export default SkillsBars;
