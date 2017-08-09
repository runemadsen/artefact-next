import React from "react";
import Link from "next/link";
import Router from "next/router";
import { postRequest } from "../../utils/api";

import { color, font, layout } from "../../styles/constants";

import Artefact from "../base/artefact";

const signOut = e => {
  e.preventDefault();

  postRequest(API_BASE_URL + "/users/logout").then(res => {
    Router.push("/");
  });
};

export default props => {
  return (
    <header>
      <Link className="logo" href="/"><a><Artefact /></a></Link>
      <nav>
        <div className="left">
          {props.viewer ? <Link href="/works"><a>Works</a></Link> : null}
          {props.viewer ? <Link href="/people"><a>People</a></Link> : null}
        </div>
        <div className="right">
          {props.viewer ? <Link href="/user"><a>Profile</a></Link> : null}
          {props.viewer
            ? <a href="#" onClick={signOut}>Sign out</a>
            : <Link href="/signin"><a>Sign In</a></Link>}
        </div>
      </nav>
      <style jsx>{`
      header {
        max-width: ${layout.maxWidth};
        padding: ${layout.space} ${layout.spaceDouble} 0;
        margin: 0 auto;
        height: 75px;

        display: flex;
        text-align: left;
      }
      .logo {
        flex-grow: 1;
      }
      nav {
        margin-top: 7px;
        flex-grow: 4;
        display: flex;
        justify-content: space-between;
      }
      nav a {
        font-size: ${font.size.medium};
        height: 1.15em;
        color: ${color.text};
        text-decoration: none;

      }
      nav a{
        margin-left: 1em;
      }
      nav a:hover, nav a.link-active{
        border-bottom: 3px solid ${color.highlight};
      }


    `}</style>
    </header>
  );
};
