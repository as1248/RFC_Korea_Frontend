import styled from 'styled-components';
import logo from '../img/logoWhite1.png';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import WrongNumber from './WrongNumber';
import { searchRFC } from '../API/api';
import SearchBar from '../components/SearchBar';

const Search = () => {
  const [html, setHtml] = useState(``);
  const [translatedHtml, setTranslatedHtml] = useState(``);
  const navigate = useNavigate();
  const {num} = useParams();
  const regex = /^[0-9]*$/;

  const controller = new AbortController();

  useEffect(()=>{
    searchRFC(controller,num, setHtml, setTranslatedHtml);
  },[num]);

  return (
    <>
      {regex.test(num) && num >= 1 && num <=9999 ? (
      <>
        <Header>
          <Logo onClick={()=>navigate('/')} src={logo}/>
          <SearchBar width={25} controller={controller}/>
        </Header>
        <Content>
          <Original>
            <Title>RFC 원본</Title>
            <Detail dangerouslySetInnerHTML={{__html: html}}>
            </Detail>
          </Original>
          <Translated>
            <Title>번역본</Title>
            <Detail dangerouslySetInnerHTML={{__html: translatedHtml}}>
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
  & > pre{
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    word-wrap: break-word;
    white-space: pre-wrap;
  }
  & > hr {
    display: none;
  }
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