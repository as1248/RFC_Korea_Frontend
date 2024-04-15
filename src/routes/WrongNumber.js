import styled from 'styled-components';
import logo from '../img/logoWhite1.png'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const WrongNumber = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Logo src={logo} />
      <Content>
        <Text>잘못된 RFC 번호입니다.</Text>
        <Button variant="contained" onClick={()=>navigate('/')} sx={{width:'80%', fontSize:'1.2rem'}}>메인 페이지로 이동</Button>
      </Content>
    </Container>
  );
}

export default WrongNumber;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #AAD7D9;
  height: 100vh;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  height: 25rem;
  margin-right: 2rem;
  @media screen and (max-width: 767px) {
    height: 13rem;
    margin-right: 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 4rem;
  color: white;
  @media screen and (max-width: 767px) {
    font-size: 2rem;
    margin-top: 5rem;
  }
`;

const Text = styled.div`
  margin-bottom: 5rem;
`;