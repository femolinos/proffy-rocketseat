import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/40651456?s=460&u=f4a727ff0e82bc246e43aa1e86c7a429e3c3fe61&v=4" alt="Felipe Molinos"/>
        <div>
          <strong>Felipe Molinos</strong>
          <span>Programador</span>
        </div>
      </header>

      <p>
        Desenvolvedor Web Front-End
        <br /><br />
        Javascript, HTML5, CSS3, React, Angular
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;