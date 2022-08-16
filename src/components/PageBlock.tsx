import { storyblokEditable } from "gatsby-source-storyblok";
import React from "react";

export const PageBlock = ({ blok }: any) => {
  console.log(blok);

  return (
    <div {...storyblokEditable(blok)}>
      <h2>{blok.title}</h2>
    </div>
  );
};
