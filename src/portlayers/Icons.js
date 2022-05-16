import React, { useState } from "react";
import { ModalSt } from "./ModalSt";
import aboutme from "../imgs/aboutme.png";
import contactme from "../imgs/contactme.png";
import thanks from "../imgs/thanks.png";
import skills from "../imgs/skills.png";
import projects from "../imgs/projects.png";
import edu from "../imgs/education.png";
import styled from "styled-components";
import prespic from "../imgs/prespic.png";
import linkedin from "../imgs/linkedin.png";
import github from "../imgs/github.png";
import gmail from "../imgs/gmail.png";
import "./portfolio.css";

export const Icons = () => {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  const [estadoModal2, cambiarEstadoModal2] = useState(false);
  const [estadoModal3, cambiarEstadoModal3] = useState(false);
  const [estadoModal4, cambiarEstadoModal4] = useState(false);
  const [estadoModal5, cambiarEstadoModal5] = useState(false);
  const [estadoModal6, cambiarEstadoModal6] = useState(false);
  return (
    <div className="flexicons">
      <div>
        <img
          className="allicons"
          onClick={() => cambiarEstadoModal1(!estadoModal1)}
          src={aboutme}
          alt="pixeled icon // about me"
        />
        <p className="param">About</p>
      </div>

      <div>
        <img
          className="allicons"
          onClick={() => cambiarEstadoModal2(!estadoModal2)}
          src={skills}
          alt="pixeled icon // about me"
        />
        <p className="param">Skills</p>
      </div>
      <div>
        <img
          className="allicons"
          onClick={() => cambiarEstadoModal3(!estadoModal3)}
          src={projects}
          alt="pixeled icon // about me"
        />
        <p className="param">Projects</p>
      </div>
      <div>
        <img
          className="allicons"
          src={edu}
          onClick={() => cambiarEstadoModal4(!estadoModal4)}
          alt="pixeled icon // about me"
        />
        <p className="param">Education</p>
      </div>
      <div>
        <img
          className="allicons"
          onClick={() => cambiarEstadoModal5(!estadoModal5)}
          src={contactme}
          alt="pixeled icon // about me"
        />
        <p className="param">Contact</p>
      </div>
      <div>
        <img
          className="allicons"
          src={thanks}
          onClick={() => cambiarEstadoModal6(!estadoModal6)}
          alt="pixeled icon // about me"
        />

        <p className="param">Thanks!</p>
      </div>

      <ModalSt
        estado={estadoModal1}
        cambiarEstado={cambiarEstadoModal1}
        titulo="About"
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={"center"}
        padding={"20px"}
      >
        <Contenido>
          <h1>My journey so far</h1>
          <img className="prespic" src={prespic} alt="my face" />
          <p>
            Hey! <br />
            <br /> Im Alan, a 21 years old front-end developer from Buenos
            Aires, Argentina. I grew up around technology and participating
            actively on internet since i was a child. Im looking for job
            opportunities where i can improve my developer skills and,
            furthermore, get a better comprehension of the IT world. As a rpg
            enjoyer, i made this portfolio to share my creativity, passions and
            knowledge. <br /> Hope you like it!
          </p>
          <button
            className="buttonmodal"
            onClick={() => cambiarEstadoModal1(!estadoModal1)}
          >
            ❤❤❤
          </button>
        </Contenido>
      </ModalSt>
      <ModalSt
        estado={estadoModal2}
        cambiarEstado={cambiarEstadoModal2}
        titulo="Skills"
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={"center"}
        padding={"20px"}
      >
        <Contenido>
          <h1>a</h1>
          <p>a</p>
          <button
            className="buttonmodal"
            onClick={() => cambiarEstadoModal2(!estadoModal2)}
          >
            Done
          </button>
        </Contenido>
      </ModalSt>
      <ModalSt
        estado={estadoModal3}
        cambiarEstado={cambiarEstadoModal3}
        titulo="Projects"
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={"center"}
        padding={"20px"}
      >
        <Contenido>
          <h1>a</h1>
          <p>a</p>
          <button
            className="buttonmodal"
            onClick={() => cambiarEstadoModal3(!estadoModal3)}
          >
            ❤❤❤
          </button>
        </Contenido>
      </ModalSt>
      <ModalSt
        estado={estadoModal4}
        cambiarEstado={cambiarEstadoModal4}
        titulo="Education"
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={"center"}
        padding={"20px"}
      >
        <Contenido>
          <h1>a</h1>
          <p>Ra.</p>
          <button
            className="buttonmodal"
            onClick={() => cambiarEstadoModal4(!estadoModal4)}
          >
            ❤❤❤
          </button>
        </Contenido>
      </ModalSt>
      <ModalSt
        estado={estadoModal5}
        cambiarEstado={cambiarEstadoModal5}
        titulo="Contact"
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={"center"}
        padding={"20px"}
      >
        <Contenido>
          <div className="portcontact">
            <div>
              <img
                className="contacticons"
                src={linkedin}
                alt="pixeled icon // about me"
              />
              <p>Linkedin</p>
            </div>
            <div>
              <img
                className="contacticons"
                src={gmail}
                alt="pixeled icon // about me"
              />
              <p>Gmail</p>
            </div>
            <div>
              <img
                className="contacticons"
                src={github}
                alt="pixeled icon // about me"
              />
              <p>Github</p>
            </div>
          </div>
          <button
            className="buttonmodal"
            onClick={() => cambiarEstadoModal5(!estadoModal5)}
          >
            ❤❤❤
          </button>
        </Contenido>
      </ModalSt>
      <ModalSt
        estado={estadoModal6}
        cambiarEstado={cambiarEstadoModal6}
        titulo="Thanks!"
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={"center"}
        padding={"20px"}
      >
        <Contenido>
          <p>
            This portfolio was built almost entirely in ReactJS with all the
            functions that i know of the framework. The main purpose of this
            project was to practice and dominate different methods included in
            the front-end stack before moving on to newer developing languages.
            Thank you for stopping by!
          </p>
          <button
            className="buttonmodal"
            onClick={() => cambiarEstadoModal6(!estadoModal6)}
          >
            Done
          </button>
        </Contenido>
      </ModalSt>
    </div>
  );
};

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    padding: 35px;
    margin-bottom: 20px;
    text-align: left;
  }
`;
