import { graphql, useStaticQuery } from 'gatsby';
import { Experience } from '../types';

export type QueryResponse = {
  contentfulAbout: {
    experience: {
      childMarkdownRemark: {
        rawMarkdownBody: string;
      };
    };
  };
};

export const useExperienceQuery = (): Experience => {
  const {
    contentfulAbout: { experience },
  } = useStaticQuery<QueryResponse>(graphql`
    query ExperienceQuery {
      contentfulAbout {
        experience {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
      }
    }
  `);

  return {
    markdown: experience.childMarkdownRemark.rawMarkdownBody,
  };
};
