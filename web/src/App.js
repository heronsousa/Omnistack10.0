import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor='github_username'>Usuário do Github</label>
            <input name='github_username' id='github_username' required/>
          </div>

          <div className="input-block">
            <label htmlFor='techs'>Tecnologias</label>
            <input name='techs' id='techs' required/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor='latitude'>Latitude</label>
              <input name='latitude' id='latitude' required/>
            </div>

            <div className="input-block">
              <label htmlFor='latitude'>Longitude</label>
              <input name='latitude' id='latitude' required/>
            </div>
          </div>
          
          <button type='submit'>Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/37983059?s=460&v=4" alt="Heron Rodrigues"/>
              <div className="user-info">
                <strong>Heron Rodrigues</strong>
                <span>ReactJS, Node.js</span>
              </div>
            </header>
            <p>Graduando do curso Engenharia de Software na Universidade de Brasília - UnB</p>
            <a href="https://github.com/heronsousa">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/37983059?s=460&v=4" alt="Heron Rodrigues"/>
              <div className="user-info">
                <strong>Heron Rodrigues</strong>
                <span>ReactJS, Node.js</span>
              </div>
            </header>
            <p>Graduando do curso Engenharia de Software na Universidade de Brasília - UnB</p>
            <a href="https://github.com/heronsousa">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/37983059?s=460&v=4" alt="Heron Rodrigues"/>
              <div className="user-info">
                <strong>Heron Rodrigues</strong>
                <span>ReactJS, Node.js</span>
              </div>
            </header>
            <p>Graduando do curso Engenharia de Software na Universidade de Brasília - UnB</p>
            <a href="https://github.com/heronsousa">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/37983059?s=460&v=4" alt="Heron Rodrigues"/>
              <div className="user-info">
                <strong>Heron Rodrigues</strong>
                <span>ReactJS, Node.js</span>
              </div>
            </header>
            <p>Graduando do curso Engenharia de Software na Universidade de Brasília - UnB</p>
            <a href="https://github.com/heronsousa">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
