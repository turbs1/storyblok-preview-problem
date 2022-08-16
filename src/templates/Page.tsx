import { PageProps } from "gatsby";
import { StoryblokComponent, storyblokEditable, useStoryblokState } from "gatsby-source-storyblok";
import { FC } from "react";
import React from "react";
import { Layout } from "../components/Layout";

const PageTemplate: FC<PageProps<object, any>> = (data) => {
  const story = useStoryblokState(data.pageContext.data);

  console.log(story);

  return (
    <Layout>
      <main {...storyblokEditable(story.content)}>
        <h2>StoryName: {story.name}</h2>
        <StoryblokComponent blok={story.content} key={story.content._uid} />
      </main>
    </Layout>
  );
};

export default PageTemplate;
