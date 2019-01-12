import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import topPic from "../images/top-pic.jpg";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    />

    <div className="flex text-center">
      <div className="w-1/2">
        <img
          src={topPic}
          className="block mx-auto"
          alt="Cat and human sitting on a couch"
        />
      </div>
      <div className="w-1/2">
        <h1 class="text-ias-green">SRP $3995!</h1>
        <button class="bg-ias-yellow hover:bg-yellow-darker text-black font-bold py-2 px-4 rounded">
          Click Here To Order!
        </button>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
