import styled from 'styled-components';
import logo from '../img/logo1.png'

const Footer = () => {
  return (
    <Content>
      <Logo src={logo}/>
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
  height: 12rem;
`;