import styled from 'styled-components';
import logo from '../img/logoWhite1.png'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Content>
      <Logo src={logo} onClick={()=>navigate('/')}/>
    </Content>
  );
}

export default Footer;

const Content = styled.div`
  display: flex;
  align-items: center;
  height: 15rem;
  background-color: #3F3F3F;
`;

const Logo = styled.img`
  cursor: pointer;
  height: 12rem;
  @media screen and (max-width: 767px) {
    height: 6rem;
  }
`;