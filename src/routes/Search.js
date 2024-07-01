import styled from 'styled-components';
import logo from '../img/logoWhite1.png';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { FaSearch } from "react-icons/fa";
import Footer from '../components/Footer';
import WrongNumber from './WrongNumber';
import { searchRFC } from '../API/api';

const Search = () => {
  const number = useRef('');
  const [numberValid, setNumberValid] = useState(false);
  const [html, setHtml] = useState(``);
  const navigate = useNavigate();
  const {num} = useParams();
  const regex = /^[0-9]*$/;

  const controller = new AbortController();
  
  const numberHandler = (e) => {
    const value = e.target.value;
    number.current = value;
    if(regex.test(value) && value >= 1){
      setNumberValid(true);
    }else{
      setNumberValid(false);
    }
  }

  const search = () => {
    if(numberValid){
      controller.abort();
      navigate(`/${number.current}`);
    } else {
      alert('올바른 RFC 번호를 입력해주세요.');
    }
  }

  const keyDownHandler = (e) => {
    if (e.code === 'Enter') {
      search();
    }
  }

  useEffect(()=>{
    searchRFC(controller,num);
  },[num]);

  return (
    <>
      {regex.test(num) && num >= 1 && num <=9999 ? (
      <>
        <Header>
          <Logo onClick={()=>navigate('/')} src={logo}/>
          <SearchBar>
            <TextField label="RFC 번호를 입력해주세요." variant="outlined" ref={number} onChange={numberHandler} onKeyDown={keyDownHandler} sx={{width:'25rem', backgroundColor:'white', borderRadius:'5px'}} />
            <Button variant="contained" onClick={search}><FaSearch size={24}/></Button>
          </SearchBar>
        </Header>
        <Content>
          <Original>
            <Title>RFC 원본</Title>
            <Detail dangerouslySetInnerHTML={{__html: html}}>
              
            </Detail>
          </Original>
          <Translated>
            <Title>번역본</Title>
            <Detail>
              -
            </Detail>
          </Translated>
        </Content>
        <Footer/>
      </>
      ) : (
        <WrongNumber/>
      )}
      
    </>
  );
}

export default Search;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  padding: 2rem 0;
  background-color: #AAD7D9;
  @media screen and (max-width: 767px) {
    width: 200vw;
  }
`;

const Logo = styled.img`
  height: 12rem;
  cursor: pointer;
  margin-left: 8rem;
  @media screen and (max-width: 767px) {
    height: 8rem;
    margin-left: 2rem;
  }
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  height: 60rem;
  display: flex;
  justify-content: space-evenly;
  margin: 4rem 0;
  @media screen and (max-width: 767px) {
    width: 200vw;
  }
`;

const Original = styled.div`
  width: 40%;
`;

const Translated = styled.div`
  width: 40%;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
`;

const Detail = styled.div`
  border: 1px solid black;
  margin-top: 3rem;
  height: 40rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 15px;
    height: 15px;
    background: #97E7E1;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
  }
`;