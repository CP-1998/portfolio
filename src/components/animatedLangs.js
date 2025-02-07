import powershell from "../assets/Powershell.png";
import kali from "../assets/Simpleicons-Team-Simple-Kali-linux.512.png";
import airtable from "../assets/airtable_icon.png";
import gpt from "../assets/icons8-chatgpt-50.png";
import git from "../assets/icons8-git-48.png";
import javaScript from "../assets/icons8-javascript (1).gif";
import mongo from "../assets/icons8-mongo-db-48.png";
import node from "../assets/icons8-nodejs-48.png";
import python from "../assets/icons8-python (1).gif";
import reaccion from "../assets/icons8-react-40.png";
import ubuntu from "../assets/icons8-ubuntu-48.png";
import zap from "../assets/icons8-zapier-100.png";
import vue from "../assets/icons8-vue-js-48.png";
import mac from "../assets/MacOS_logo.png";
import windows from "../assets/icons8-windows-48 (1).png";
import zsh from "../assets/zshPic.png";
import fire from "../assets/game of thrones fire Sticker by Red Giant.gif";
import css from "../assets/icons8-css-48.png";
import html from "../assets/icons8-html-48.png";
import "./animatedLangs.css";
import React from 'react';

function AnimatedLangs({ fadeOut, handleHideLangs }) {
    return (
        <div className={`heritageContainer ${fadeOut ? 'fade-out' : ''}`}>
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
                    <div className="ubuntuWrapper">
                        <img src={ubuntu} alt="ubuntu" className="ubuntu" />
                    </div>
                    <p className="ubuWord">Ubuntu</p>
                </div>
                <div className="osSubKali">
                    <div className="kaliWrapper">
                        <img src={fire} alt="fire" className="fire" />
                        <img src={kali} alt="kali" className="kali" />
                    </div>
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
                    <p className="javaWord">JavaScript</p>
                </div>
                <div className="langSub">
                    <img src={css} alt="css" className="cssPic" />
                    <p className="cssWord">CSS</p>
                </div>
                <div className="langSub">
                    <img src={html} alt="html" className="htmlPic" />
                    <p className="htmlWord">HTML</p>
                </div>
                <div className="langSub">
                    <img src={python} alt="python" className="python" />
                    <p className="pyWord">Python</p>
                </div>
            </div>
            <div className="frameworkTitleContainer">
                <p className="frameworkTitle">Frameworks and Tools</p>
            </div>
            {/*Frameworks*/}
            <div className="frameworkContainer">
                <div className="frameworkSub">
                    <div className="reaccionWrapper">
                        <img src={reaccion} alt="reaccion" className="reaccion" />
                    </div>
                    <p className="reaccionWord">React</p>
                </div>
                <div className="frameworkSub">
                    <img src={node} alt="node" className="node" />
                    <p className="nodeWord">Node</p>
                </div>
                <div className="frameworkSub">
                    <img src={mongo} alt="mongo" className="mongo" />
                    <p className="mongoWord">MongoDB</p>
                </div>
                <div className="frameworkSub">
                    <img src={vue} alt="vue" className="vue" />
                    <p className="vueWord">Vue</p>
                </div>
            </div>
            {/*Frameworks Continued*/}
            <div className="frameworkContainer2">
                <div className="frameworkSub">
                    <img src={airtable} alt="airtable" className="airtable" />
                    <p className="airtableWord">Airtable</p>
                </div>
                <div className="frameworkSub">
                    <img src={zap} alt="zap" className="zap" />
                    <p className="zapWord">Zapier</p>
                </div>
                <div className="frameworkSub">
                    <div className="gptWrapper">
                        <img src={gpt} alt="gpt" className="gpt" />
                    </div>
                    <p className="gptWord">OpenAI</p>
                </div>
            </div>
            <button className="contactButton" onClick={handleHideLangs}>Contact Me</button>
        </div>
    );
};

export default AnimatedLangs;