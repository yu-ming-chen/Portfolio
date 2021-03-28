import { graphql, useStaticQuery } from 'gatsby';
import { Education } from '../types';

export type QueryResponse = {
  contentfulAbout: {
    education: {
      childMarkdownRemark: {
        rawMarkdownBody: string;
      };
    };
  };
};

export const useEducationQuery = (): Education => {
  const {
    contentfulAbout: { education },
  } = useStaticQuery<QueryResponse>(graphql`
    query EducationQuery {
      contentfulAbout {
        education {
          childMarkdownRemark {
            rawMarkdownBody
          }
        }
      }
    }
  `);

  return {
    markdown: education.childMarkdownRemark.rawMarkdownBody,
  };
};
