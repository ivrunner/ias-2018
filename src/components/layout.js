import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import "../css/style.css";
import mdcCredit from "../images/mdc-credit.svg";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
        <Header siteTitle={data.site.siteMetadata.title} />

        <div className="flex flex-col flex-1 md:justify-center max-w-xl mx-auto px-4 py-8 md:p-8 w-full">
          {children}
        </div>

        <footer className="bg-black">
          <div className="flex flex-wrap justify-between max-w-xl mx-auto p-4 md:p-8 text-sm">
            <p className="text-white">Made In The U.S.A.</p>

            <p className="text-white">BOXMATE® Copyright 2016</p>
            <p className="text-white">
              Designed By:
              <a
                class="text-ias-yellow no-underline hover:text-yellow-light"
                href="http://www.richmatney.com"
              >
                Matney Design Co.
              </a>
            </p>
          </div>
        </footer>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
