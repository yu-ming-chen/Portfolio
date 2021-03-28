import { graphql, useStaticQuery } from 'gatsby';
import { Skills } from '../types';

export type QueryResponse = {
  contentfulAbout: {
    skills: {
      childMarkdownRemark: {
        rawMarkdownBody: string;
      };
    };
  };
};

export const useSkillsQuery = (): Skills => {
  const {
    contentfulAbout: { skills },
  } = useStaticQuery<QueryResponse>(graphql`
    query SkillsQuery {
      contentfulAbout {
        skills {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
      }
    }
  `);

  return {
    markdown: skills.childMarkdownRemark.rawMarkdownBody,
  };
};
