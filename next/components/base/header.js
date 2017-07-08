import React from "react";
import Head from "next/head";

import { color, font } from "../../styles/constants";

import Menu from "../base/menu";

export default ({ viewer, title }) =>
  <header>
    <Head>
      <title>{title ? title : "Artefact"}</title>
      <link rel="icon" type="image/png" href="/static/favicon.png" />
    </Head>
    <style jsx global>{`
    body {
      font-family: "Times New Roman";
      font-size: ${font.size.normal};
      line-height: 1.2;
      color: ${color.text};
    }

    html { box-sizing: border-box; }
    * { box-sizing: inherit; }


    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: normal !important;
    }
    strong{
      font-weight: normal;
      color: ${color.highlight};
    }

    main a {
      color: $color-text;
      text-decoration: none;
      border-bottom: 1px solid ${color.highlight};
      cursor: pointer;
    }
    main a:hover {
      border-bottom-style: dashed;
    }
    `}</style>
    <Menu viewer={viewer} />
  </header>;
