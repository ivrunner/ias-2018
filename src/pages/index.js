import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import topPic from "../images/top-pic.jpg";

const IndexPage = props => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    />

    <div className="flex text-center">
      <div className="w-1/2 p-3">
        <Img fluid={props.data.imageOne.childImageSharp.fluid} />
      </div>
      <div className="w-1/2 p-3">
        <h1 class="text-ias-green">SRP $3995!</h1>
        <button class="bg-ias-yellow hover:bg-yellow-darker text-black font-bold py-2 px-4 rounded">
          Click Here To Order!
        </button>
        <h2 class="text-black">Bulk Seed Boxes Made EASY!</h2>
        <p>
          At the end of planting season, seed companies want their seed boxes
          returned, and the seed dealers need the space in their warehouse.
          Breaking down these boxes to be returned is a time consuming, labor
          intensive process that typically requires 2 people lifting a 112 pound
          box top and flipping it over. BOXMATE® is made of powder coated steel
          with pneumatic controls. With the BOXMATE®, a fork lift, and a small
          air compressor. 1 person can unstack, break down and restack a box in
          approximately 2 minutes. Besides the time savings, the BOXMATE®
          eliminates the need for a 2nd person, saves time and prevents injury
          from strenuous lifting. The BOXMATE® comes pre-assembled, is easy to
          operate and is easy to store. We are certain the BOXMATE® will be a
          big savings to your seed dealership!
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "top-pic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
