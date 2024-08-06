import styled from 'styled-components';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

const Description = () => {
  return (
    <SubContent>
      <Info {...useScrollFadeIn('down',1,0)}>
        <InfoTitle>RFC란?</InfoTitle>
        <InfoDetail>-</InfoDetail>
      </Info>
      <Info {...useScrollFadeIn('down',1,0)}>
        <InfoTitle>RFC-Korea</InfoTitle>
        <InfoDetail>-</InfoDetail>
      </Info>
    </SubContent>
  )
};

export default Description;

const SubContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem;
  background-color: #F9F9FB;
  @media screen and (max-width: 767px) {
    padding: 6rem 2rem;
  }
`;

const Info = styled.div`
  border: 1px solid black;
  border-radius: 30px;
  padding: 2rem;
  width: 45rem;
  margin-bottom: 5rem;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const InfoTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

const InfoDetail = styled.div`
  font-size: 1.5rem;
  @media screen and (max-width: 767px) {
    font-size: 1rem;
  }
`;