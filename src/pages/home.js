// @flow
import React from "react";

import { Primary } from "../components/main";
import ProviderWrapper from "../components/provider-wrapper/fusion";
import { Helmet } from "fusion-plugin-react-helmet-async";
import Storage from "../components/storageWidgets/localstorage/localstorage.js";
const storage = __BROWSER__ ? new Storage() : { getTable: () => {} };
console.log("USED STORAGE IS:", storage);
const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <style>
          {`
        body {
          margin:0,
          padding:0,
        }
      `}
        </style>
      </Helmet>

      <ProviderWrapper>
        <div style={{ position: "absolute", top: 0, right: 0 }}>
          <a
            href="https://github.com/rook2pawn/password-manager-baseweb"
            target="_blank"
          >
            <img
              loading="lazy"
              width="149"
              height="149"
              src="https://github.blog/wp-content/uploads/2008/12/forkme_right_white_ffffff.png?resize=149%2C149"
              alt="Fork me on GitHub"
              data-recalc-dims="1"
            />
          </a>
        </div>
        <Primary storage={storage} />
      </ProviderWrapper>
    </React.Fragment>
  );
};

export default Home;
