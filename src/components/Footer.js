import styled from 'styled-components';
import logo from '../img/logoWhite1.png'
import { useNavigate, useParams } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const {num} = useParams();

  return (
    <Content num={num}>
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
  @media screen and (max-width: 767px) {
    width: ${(props) => (props?.num ? '200vw' : 'auto')};
  }
`;

const Logo = styled.img`
  cursor: pointer;
  height: 12rem;
  @media screen and (max-width: 767px) {
    height: 6rem;
  }
`;