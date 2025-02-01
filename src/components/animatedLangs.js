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
import "./animatedLangs.css";

function AnimatedLangs() {
    return (
        <div className="langContainer">
            {/*Operating Systems*/}
            <div className="mac">
                <img src={mac} alt="mac" className="mac" />
                <p className="powerWord">Mac</p>
            </div>
            <div className="ubuntu">
                <img src={ubuntu} alt="ubuntu" className="ubuntu" />
                <p className="powerWord">Ubuntu</p>
            </div>
            <div className="kali">
                <img src={kali} alt="kali" className="kali" />
                <p className="powerWord">Kali</p>
            </div>
            <div className="windows">
                <img src={windows} alt="windows" className="windows" />
                <p className="powerWord">Windows</p>
            </div>
            {/*Command Line Interfaces*/}
            <div className="git">
                <img src={git} alt="git" className="git" />
                <p className="powerWord">Git Bash</p>
            </div>
            <div className="ps1">
                <img src={powershell} alt="powershell" className="powershell" />
                <p className="powerWord">Powershell</p>
            </div>
            <div className="zsh">
                <img src={zsh} alt="zsh" className="zsh" />
                <p className="powerWord">Zsh</p>
            </div>
        </div>
    );
};

export default AnimatedLangs;