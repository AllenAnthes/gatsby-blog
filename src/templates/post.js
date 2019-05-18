import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-mdx';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        author
      }
      code {
        body
      }
    }
  }
`;

const Author = styled.p`
  font-size: 0.75rem;
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <Author>Posted by {post.frontmatter.author}</Author>
    <MDXRenderer>{post.code.body}</MDXRenderer>
    <ReadLink to="/">&larr; back</ReadLink>
  </Layout>
);

export default PostTemplate;
