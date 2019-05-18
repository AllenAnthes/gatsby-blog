import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { css } from '@emotion/core';

import ReadLink from './read-link';

const StyledArticle = styled.article`
  border-bottom: 1px solid #ddd;
  display: flex;
  margin-top: 0;
  padding-bottom: 1rem;

  :first-of-type {
    margin-top: 1rem;
  }
`;

const PostPreview = ({ post }) => {
  return (
    <StyledArticle>
      <Link
        to={post.slug}
        css={css`
          margin: 1rem 1rem 0 0;
          width: 100px;
        `}
      >
        <Image
          alt={post.title}
          fluid={post.image.sharp.fluid}
          css={css`
            * {
              margin-top: 0;
            }
          `}
        />
      </Link>
      <div>
        <h3>
          <Link to={post.slug}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
      </div>
    </StyledArticle>
  );
};

export default PostPreview;
