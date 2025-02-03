import powershell from "../assets/Powershell.png";
import kali from "../assets/Simpleicons-Team-Simple-Kali-linux.512.png";
import airtable from "../assets/airtable_icon.png";
import gpt from "../assets/icons8-chatgpt-50.png";
import git from "../assets/icons8-git-48.png";
import theHub from "../assets/icons8-github-32.png";
import javaScript from "../assets/icons8-javascript.gif";
import mongo from "../assets/icons8-mongo-db-48.png";
import node from "../assets/icons8-nodejs-48.png";
import python from "../assets/icons8-python.gif";
import reaccion from "../assets/icons8-react.gif";
import ubuntu from "../assets/icons8-ubuntu-48.png";
import zap from "../assets/zap_icon.png";
import vue from "../assets/icons8-vue-js-48.png";
import mac from "../assets/MacOS_logo.png";
import windows from "../assets/icons8-windows-48 (1).png";
import zsh from "../assets/zshPic.png";
import fire from "../assets/game of thrones fire Sticker by Red Giant.gif";
import "./animatedLangs.css";

function AnimatedLangs() {
    return (
        <div>
            <div className="osTitleContainer">
                <p className="osTitle">Operating Systems</p>
            </div>
            <div className="osContainer">
                {/*Operating Systems*/}
                <div className="osSub">
                    <img src={mac} alt="mac" className="mac" />
                    <p className="macWord">Mac</p>
                </div>
                <div className="osSub">
                    <img src={ubuntu} alt="ubuntu" className="ubuntu" />
                    <p className="ubuWord">Ubuntu</p>
                </div>
                <div className="osSub">
                    <img src={fire} alt="fire" className="fire" />
                    <img src={kali} alt="kali" className="kali" />
                    <p className="kaliWord">Kali</p>
                </div>
                <div className="osSub">
                    <img src={windows} alt="windows" className="windows" />
                    <p className="windowsWord">Windows</p>
                </div>
            </div>
            <div className="cliTitleContainer">
                <p className="cliTitle">Command Line Interfaces</p>
            </div>
            {/*Command Line Interfaces*/}
            <div className="cliContainer">
                <div className="cliSub">
                    <img src={git} alt="git" className="git" />
                    <p className="cliWord">Git Bash.</p>
                </div>
                <div className="cliSub">
                    <img src={powershell} alt="powershell" className="powershell" />
                    <p className="cliWord">Powershell.</p>
                </div>
                <div className="cliSub">
                    <img src={zsh} alt="zsh" className="zsh" />
                    <p className="cliWord">Zsh. Terminal</p>
                </div>
            </div>
            <div className="langTitleContainer">
                <p className="langTitle">Languages</p>
            </div>
            {/*Languages*/}
            <div className="langContainer">
                <div className="langSub">
                    <img src={javaScript} alt="javaScript" className="javaScript" />
                    <p className="langWord">JavaScript</p>
                </div>
                <div className="langSub">
                    <img src={python} alt="python" className="python" />
                    <p className="langWord">Python</p>
                </div>
            </div>

        </div>
    );
};

export default AnimatedLangs;