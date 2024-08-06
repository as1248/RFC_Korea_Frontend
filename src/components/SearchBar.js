import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import styled from 'styled-components';

const SearchBar = ({width, controller = null}) => {

  const [number,setNumber] = useState('');
  const [numberValid, setNumberValid] = useState(false);
  const navigate = useNavigate();

  const numberHandler = (e) => {
    const value = e.target.value;
    setNumber(value);
    const regex = /^[0-9]*$/;
    if(regex.test(value) && value >= 1){
      setNumberValid(true);
    }else{
      setNumberValid(false);
    }
  }
  
  const search = () => {
    if(controller){
      if(numberValid){
        controller.abort();
        navigate(`/${number}`);
        setNumber('');
      } else {
        alert('올바른 RFC 번호를 입력해주세요.');
      }
    } else{
      if(numberValid){
        navigate(`/${number}`);
      } else {
        alert('올바른 RFC 번호를 입력해주세요.');
      }
    }
  }

  const keyDownHandler = (e) => {
    if (e.code === 'Enter') {
      search();
    }
  }
  
  return (
    <SearchArea>
      <TextField label="RFC 번호를 입력해주세요." variant="outlined" value={number} onChange={numberHandler} onKeyDown={keyDownHandler} sx={{width:`${width}rem`, backgroundColor:'white', border:'none', borderRadius:'5px'}} />
      <Button variant="contained" onClick={search}><FaSearch size={24}/></Button>
    </SearchArea>
  )
};

export default SearchBar;

const SearchArea= styled.div`
  display: flex;
  justify-content: center;
`;
