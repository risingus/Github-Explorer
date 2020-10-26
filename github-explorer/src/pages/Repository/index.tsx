import React from 'react';
import {useRouteMatch, Link} from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';
import {Header, RepositoryInfo, Issues} from './styles';


interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {

  const {params} = useRouteMatch<RepositoryParams>();

return (
  <>
  <Header>
    <img src={logoImg} alt="Github Explorer"/>
    <Link to="/">
      <FiChevronLeft  size={16}/>
      Voltar
    </Link>
  </Header>
  <RepositoryInfo>
    <header>
      <img src="" alt=""/>
      <div>
        <strong>Rocketseat</strong>
        <p>descrição</p>
      </div>
    </header>
    <ul>
      <li>
        <strong>1808</strong>
        <span>Starts</span>
      </li>
      <li>
        <strong>48</strong>
        <span>Forks</span>
      </li>
      <li>
        <strong>67</strong>
        <span>Issues abertos</span>
      </li>
    </ul>
  </RepositoryInfo>

  <Issues>
    <Link to="adsadasd">

        <div>
          <strong>asdasdasd</strong>
          <p>asdasdasdasds</p>
        </div>

            <FiChevronRight size={20}></FiChevronRight>
      </Link>
  </Issues>

  </>
);
};

export default Repository;
