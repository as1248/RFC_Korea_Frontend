import styled from "styled-components";
import logo from '../../img/logoWhite2.png';
import SearchBar from "../SearchBar";

const MainHeader = () => {

  return (
    <MainContent>
      <Title>
        <Logo src={logo}/>
        RFC-Korea
      </Title>
      <SubTitle>
        <div>RFC-Korea에서는 한글로 번역된 </div>
        <div>RFC 문서를 제공합니다.</div>
      </SubTitle>
      <SearchBar width={15}/>
    </MainContent>
  )
}

export default MainHeader;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 56rem;
  background-color: #AAD7D9;
  @media screen and (max-width: 767px) {
    height: 50rem;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin: 8rem 0;
  font-size: 4rem;
  font-weight: 600;
  color: white;
  @media screen and (max-width: 767px) {
    font-size: 2.5rem;
    margin: 5rem 0;
  }
`;

const Logo = styled.img`
  height: 12rem;
  margin-right: 4rem;
  @media screen and (max-width: 767px) {
    height: 6rem;
    margin-right: 2rem;
  }
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
  @media screen and (max-width: 767px) {
    font-size: 1.2rem;
  }
`;