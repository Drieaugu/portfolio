import React, { useCallback, useEffect, useState } from "react";
import { GitHub, Mail, Linkedin } from "react-feather";
import "./App.scss";
import { CurrentSong } from "./CurrentSong";

function App() {
  const [open, setOpen] = useState(false);

  const closeModal = useCallback((e) => {
    if (e.keyCode === 27 || e.target.className.includes("modal-container")) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", closeModal, false);
    document.addEventListener("click", closeModal, false);
  });

  return (
    <div className="App">
      <div className={open ? "modal-container" : "modal-container hide"}>
        <div className={"modal"}>
          <div className={"baseline"}>
            <button className={"modal-close"} onClick={() => setOpen(false)}>
              ×
            </button>
            <h1>Get in touch!</h1>
          </div>
          <div className={"modal-content"}>
            <p>
              Hi there! I am Dries. A 19-year old Full-Stack TypeScript engineer
              from Belgium. I am always on the lookout for opportunities to
              improve my skills and our society. Using the newest technologies I
              create software that is future-ready. Feel free to reach out to
              me!
            </p>
            <hr />
          </div>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/driaug/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <Linkedin />
                <span className={"link-text"}>LinkedIn</span>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/driaug"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <GitHub />
                <span className={"link-text"}>Github</span>
              </a>
            </li>
            <li>
              <a href="mailto:inbox@driaug.com">
                <Mail />
                <span className={"link-text"}>inbox@driaug.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={open ? "content shade" : "content"}>
        <div className={"row-9"}>
          <div className={"col-6"}>
            {" "}
            <h1>Dries Augustyns</h1>
            <div className={"text-muted"}>
              <p>
                Hello! My name is Dries and I am a Full-Stack TypeScript
                Engineer.
              </p>
            </div>
            <button onClick={() => setOpen(true)}>
              <div>
                <span>G</span>
                <span>e</span>
                <span>t&nbsp;</span>
                <span>i</span>
                <span>n&nbsp;</span>
                <span>t</span>
                <span>o</span>
                <span>u</span>
                <span>c</span>
                <span>h</span>
              </div>
            </button>
          </div>
          <div className={"col-4"}>
            {" "}
            <img
              src="dries.png"
              className={"headshot"}
              alt="Headshot of Dries Augustyns"
            />
          </div>
        </div>
        <div className={"row-1"}>
          <CurrentSong />
        </div>
      </div>
    </div>
  );
}

export default App;
