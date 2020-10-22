import React from 'react';
import {Title, Form, Repositories} from './styles';
import logoImg from '../../assets/logo.svg';
import {FiChevronRight} from 'react-icons/fi';

const Dashboard: React.FC = () => {
  return (
    <>
    <img src={logoImg} alt="Github Explorer"/>
    <Title>Explore respositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório"/>
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img src="https://avatars3.githubusercontent.com/u/42497575?s=460&u=661e39213d8f086557b48d1eae5e1a4441425929&v=4" alt="Gustavo Lima"/>
      <div>
        <strong>risingus/Little-Invest</strong>
        <p>A mobile first landing page for an investment site.</p>
      </div>

      <FiChevronRight size={20}></FiChevronRight>
      </a>

      <a href="teste">
        <img src="https://avatars3.githubusercontent.com/u/42497575?s=460&u=661e39213d8f086557b48d1eae5e1a4441425929&v=4" alt="Gustavo Lima"/>
      <div>
        <strong>risingus/Little-Invest</strong>
        <p>A mobile first landing page for an investment site.</p>
      </div>

      <FiChevronRight size={20}></FiChevronRight>
      </a>

      <a href="teste">
        <img src="https://avatars3.githubusercontent.com/u/42497575?s=460&u=661e39213d8f086557b48d1eae5e1a4441425929&v=4" alt="Gustavo Lima"/>
      <div>
        <strong>risingus/Little-Invest</strong>
        <p>A mobile first landing page for an investment site.</p>
      </div>

      <FiChevronRight size={20}></FiChevronRight>
      </a>
    </Repositories>


    </>
  )
};

export default Dashboard;
