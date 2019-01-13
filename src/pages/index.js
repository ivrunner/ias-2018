import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import boxmate from "../images/boxmate-secondary.svg";

const IndexPage = props => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    />

    <div className="flex flex-wrap text-center">
      <div className="w-full md:w-1/2 p-3">
        <Img fluid={props.data.imageOne.childImageSharp.fluid} />
      </div>
      <div className="w-full md:w-1/2 p-3">
        <h1 class="text-ias-green p-4">SRP $3995!</h1>
        <button class="bg-ias-yellow hover:bg-yellow-darker text-black font-bold py-2 px-4 rounded">
          Click Here To Order!
        </button>
        <img class="p-4" src={boxmate} />
        <h2 class="text-black">Bulk Seed Boxes Made EASY!</h2>
        <p class="text-xl">
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
    <center>
      <h1 class="p-8">How Does It Work?</h1>
    </center>
    <div class="flex flex-wrap mb-4">
      <div class="w-full md:w-1/3 p-2">
        <Img fluid={props.data.one.childImageSharp.fluid} />
        <p class="text-xl">
          Simply Drive into the BOXMATE® with the Forklift, The angle cut arms
          with backstops with guide the seed box precisely into place.
        </p>
      </div>
      <div class="w-full md:w-1/3 p-2">
        <Img fluid={props.data.two.childImageSharp.fluid} />
        <p class="text-xl">
          With one time off the forklift you can walk to the controls, make a
          quick turn of the latch, and be using the pneumatic valve to raise the
          box. With Box in the air you can rotate 180 degrees with one hand and
          have the box ready to nest.
        </p>
      </div>
      <div class="w-full md:w-1/3 p-2">
        <Img fluid={props.data.three.childImageSharp.fluid} />
        <p class="text-xl">
          Now you just dump the air with the control valve and your box lowers
          into nesting position and releases itself from the latch on the way
          down. Set your lid back on the box and your ready to store it away.
        </p>
      </div>
    </div>
    <center>
      <h1 class="p-8">Contact Us</h1>
    </center>
    <div class="flex flex-wrap items-center text-center mb-4">
      <div class="w-full md:w-1/2 items-center text-center p-2">
        <h2 class="p-4">
          If you would like to email us directly please click the button below.
        </h2>
        <button class="bg-ias-yellow hover:bg-yellow-darker text-black font-bold py-2 px-4 rounded">
          <a href="mailto:innovativeagsystems@gmail.com">
            Click Here To Email Us!
          </a>
        </button>
      </div>
      <div class="w-full md:w-1/2 items-center text-center p-2">
        <h2 class="p-4">
          If you would like to order please fill out the form by clicking below.
        </h2>
        <button class="bg-ias-yellow hover:bg-yellow-darker text-black font-bold py-2 px-4 rounded">
          Click Here To Order!
        </button>
      </div>
    </div>
  </Layout>
);

export default IndexPage;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "top-pic.jpg" }) {
      ...fluidImage
    }
    one: file(relativePath: { eq: "one.jpg" }) {
      ...fluidImage
    }
    two: file(relativePath: { eq: "two.jpg" }) {
      ...fluidImage
    }
    three: file(relativePath: { eq: "three.jpg" }) {
      ...fluidImage
    }
  }
`;
