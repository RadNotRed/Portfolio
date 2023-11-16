import {faDiscord, faGithub, faSpotify} from "@fortawesome/free-brands-svg-icons";
import {faCommentDots, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {inject} from '@vercel/analytics';
import Button from "./components/Button";
import Styles from "./App.module.scss";
import mouseScrollImg from "./assets/mouse-scroll.png"
import {createSignal, onCleanup, onMount} from "solid-js";

// idk why this wouldn't work when it was in App.module.scss
// I'm also too lazy to make this look better :(
const Notification = (prop) => {
    return (
        <div style={{
            position: 'fixed',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#4caf50',
            color: 'White',
            padding: '10px 20px',
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            zIndex: 1000
        }}>
            {`${prop.label} handle copied to clipboard`}
        </div>
    );
};

const App = () => {
    const [showCopyNotification, setShowCopyNotification] = createSignal({show: false, label: ''});
    const [timeoutId, setTimeoutId] = createSignal(null);

    onMount(() => inject());

    const handleCopy = (text, source) => {
        navigator.clipboard.writeText(text);
        if (timeoutId()) clearTimeout(timeoutId()); // clear previous timeout when new one is created
        setShowCopyNotification({show: true, label: source});
        setTimeoutId(setTimeout(() => setShowCopyNotification({show: false, label: ''}), 3000));
    };

    onCleanup(() => {
        if (timeoutId()) clearTimeout(timeoutId()); // clear timeout when component is unmounted
    });

    return (
        <>
            {showCopyNotification().show && <Notification label={showCopyNotification().label}/>}
            <div className={Styles.Modal}>
                <div className={Styles.ContentLeft}>
                    <img src="https://avatars.githubusercontent.com/u/80015713?v=4"/>
                    <h1>rad</h1>
                    <p>Not a federal agent</p>
                </div>
                <div className={Styles.ContentRight}>
                    <ul>
                        <Button href="https://github.com/RadNotRed" icon={faGithub} label="GitHub"/>
                        <Button
                            href="https://discord.com/"
                            onClick={() => handleCopy('@radnotred1', 'Discord')}
                            icon={faDiscord}
                            label="Discord"
                        />
                        <Button
                            href="https://matrix.org/"
                            onClick={() => handleCopy('@radnotred:matrix.org', 'Matrix')}
                            icon={faCommentDots}
                            label="Matrix Chat"
                        />
                        <Button href="https://open.spotify.com/user/31ktcyhbhbwssktqfgpdb5cznydy" icon={faSpotify} label="Spotify"/>
                        <Button href="mailto:me@radnotred.dev" icon={faEnvelope} label="E-Mail"/>
                    </ul>
                </div>
                <a href="#about" className={Styles.ScrollIndicator}>
                    <img src={mouseScrollImg}/>
                </a>
                <div id="about" className={Styles.ContentBottom}>
                    <p style={{ lineHeight: "1.6" }}>
                        I'm rad, I'm going to college for Law Enforcement Technology. I use <span>TypeScript</span> and nothing else right now.<br/>
                        <br/>
                        You can add me on matrix if you want to talk to me.<br/>
                    </p>
                </div>
            </div>
        </>
    );
}

export default App;