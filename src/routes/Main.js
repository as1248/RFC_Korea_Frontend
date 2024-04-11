import styled from 'styled-components';
import logo from '../img/logo2.png'
import { Button, TextField } from '@mui/material';
import { FaSearch } from "react-icons/fa";
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Main = () => {
  const number = useRef('');
  const [numberValid, setNumberValid] = useState(false);
  const navigate = useNavigate();

  const numberHandler = (e) => {
    const value = e.target.value
    number.current = value;
    const regex = /^[0-9]*$/;
    if(regex.test(value) && value >= 1){
      setNumberValid(true);
    }else{
      setNumberValid(false);
    }
  }

  const search = () => {
    if(numberValid){
      navigate(`/${number.current}`);
    } else {
      alert('올바른 RFC 번호를 입력해주세요.');
    }
  }

  return (
    <>
      <MainContent>
        <Title>
          <Logo src={logo}/>
          RFC-Korea
        </Title>
        <SubTitle>
          <div>RFC-Korea에서는 한글로 번역된 </div>
          <div>RFC 문서를 제공합니다.</div>
        </SubTitle>
        <SearchArea>
          <TextField label="RFC 번호를 입력해주세요." variant="outlined" ref={number} onChange={numberHandler} error={!numberValid} inputProps={{maxLength:4}} sx={{backgroundColor:'white', borderRadius:'5px'}}/>
          <Button variant="contained" onClick={search}><FaSearch size={24}/></Button>
        </SearchArea>
      </MainContent>
      <SubContent>
        <Info>
          <InfoTitle>RFC란?</InfoTitle>
          <InfoDetail>-</InfoDetail>
        </Info>
        <Info>
          <InfoTitle>RFC-Korea</InfoTitle>
          <InfoDetail>-</InfoDetail>
        </Info>
      </SubContent>
      <Footer/>
    </>
  );
}

export default Main;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 56rem;
  background-color: #AAD7D9;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin: 8rem 0;
  font-size: 4rem;
  font-weight: 600;
  color: white;
`;

const Logo = styled.img`
  height: 12rem;
  margin-right: 4rem;
`;

const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
  font-size: 2.5rem;
  font-weight: 500;
  height: 12%;
  color: white;
`;

const SearchArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20rem;
`;

const SubContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem;
  background-color: #F9F9FB;
`;

const Info = styled.div`
  border: 1px solid black;
  border-radius: 30px;
  padding: 2rem;
  width: 50rem;
  margin-bottom: 5rem;
`;

const InfoTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const InfoDetail = styled.div`
  font-size: 1.5rem;
`;