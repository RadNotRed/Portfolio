import { faGithub, faDiscord, faSpotify, faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { inject } from '@vercel/analytics';

import Button from "./components/Button";
import Styles from "./App.module.scss";

import mouseScrollImg from "./assets/mouse-scroll.png"
import { onMount } from "solid-js";

const App = () => {

  onMount(() => inject());

  return (
    <>
      <div className={Styles.Modal}>
        <div className={Styles.ContentLeft}>
          <img src="https://avatars.githubusercontent.com/u/80015713?v=4" />
          <h1>rad</h1>
          <p>Unskilled programmer</p>
        </div>
        <div className={Styles.ContentRight}>
          <ul>
            <Button href="https://github.com/RadNotRed" icon={faGithub} label="GitHub" />
            <Button href="https://discord.com/users/610945092504780823" icon={faDiscord} label="Discord" />
            <Button href="https://open.spotify.com/user/31ktcyhbhbwssktqfgpdb5cznydy" icon={faSpotify} label="Spotify" />
            <Button href="https://paypal.me/radnotred" icon={faPaypal} label="PayPal" />
            <Button href="mailto:me@radnotred.dev" icon={faEnvelope} label="E-Mail" />
          </ul>
        </div>
        <a href="#about" className={Styles.ScrollIndicator}>
          <img src={mouseScrollImg} />
        </a>
        <div id="about" className={Styles.ContentBottom}>
          <p>
            Hi, I'm rad,
            I'm going to college for Criminal Justice Technology, but I'm also a programmer when I feel like it. 
            I'm currently working on an app for my high school, which is written in <span>Dart</span> and <span>Flutter</span> as the framework.
            I currently use <span>TypeScript</span>, <span>Python</span>, and <span>Java</span>.

            My only discord accounts are @radnotred1 and @radacul. No others are mine. If you cannot add me on there, you can add my matrix account @radnotred:matrix.org.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;