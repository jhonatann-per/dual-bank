import Styled from 'styled-components'

export const Container = Styled.div`
  width:50px;
  height:100%;
  font-size:30px;
  position:relative;
  display:flex;
  justify-content:center;
  background-color:#f5f5f5;
  box-shadow:0px 5px 10px rgba(0,0,0,0.26);
`;

export const List = Styled.li`
  list-style:none;
`;

export const Icon = Styled.div`
  width:50px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:0 10px 10px 0;
  transition:.2s;
  color:#3a149e;
  :hover{
    cursor:pointer;
    background-color:#622ee5;
    color:white;
  }
`;

export const DivArrow = Styled.div`
  cursor:pointer;
  width:50px;
  height:50px;
  border-radius:50%;
  position:absolute;
  top:510px;
  right:-50%;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:#622ee5;
  color:#f5f5f5;
  box-shadow:0px 5px 10px rgba(0,0,0,0.26);
  transition:.2s;
  .arrowIconBalance{
    transform: rotate(-90deg)
  }
  :hover{
    right:-60%;
  }
`;
