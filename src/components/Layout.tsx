import { apiPlugin, storyblokInit } from "gatsby-source-storyblok";
import React from "react";
import { PageBlock } from "./PageBlock";

storyblokInit({
  accessToken: "G6kNqlA6sXFfucDG3d5mrQtt",
  use: [apiPlugin],
  bridge: true,
  components: {
    page: PageBlock,
  },
});

export const Layout = ({ children }: any) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};
