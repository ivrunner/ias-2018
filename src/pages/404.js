import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div class="justify-center">
      <h2 className="justify-center bg-yellow inline-block my-8 p-3">
        Uh-Oh Something Went Wrong
        <a href="http://theboxmate.com"> Click Here To Go Back!</a>
      </h2>
    </div>
  </Layout>
);

export default NotFoundPage;
