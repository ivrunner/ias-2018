import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import iasLogo from "../images/ias-logo.svg";

const Header = ({ siteTitle }) => (
  <nav className="bg-ias-green">
    <div className="flex flex-wrap items-center justify-center max-w-xl mx-auto p-4 md:p-8">
      <Link
        to="/"
        className="flex items-center no-underline text-white w-1/3 sm:w-1/3 md:w-1/6"
      >
        <img src={iasLogo} className="block mx-auto" alt="IAS Main Logo" />
      </Link>
    </div>
    <center>
      <div className="max-w-2xl pb-8">
        <div class="videoWrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-I3Li04sJLs"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
      <div className="pb-8">
        <button class="bg-ias-yellow hover:bg-yellow-light text-black font-bold py-2 px-4 rounded">
          Watch The Video To Learn More!
        </button>
      </div>
    </center>
  </nav>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
