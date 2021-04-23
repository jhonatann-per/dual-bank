import styled from 'styled-components';

export const Container = styled.div`

`;


export const DivChooseSelect = styled.div`
  display:flex;
  align-items:center;
  position:relative;
  .arrowIconBalance{
    font-size:20px;
    transition:.2s;
  }
  .arrowIconBalance:hover{
    cursor:pointer;
    color:#7822f4;
  }
`;

export const MenuSelect = styled.div`
  width:90%;
  height:200px;
  overflow-y:auto;
  overflow-x:hidden;
  position:absolute;
  top:0;
  top:100%;
  background-color:#f5f5f5;
  border-radius:5px;
  box-shadow:0 0 20px rgba(0,0,0,0.26);
  padding:5px 10px 0 10px;
  z-index:1000;
`;

export const BgCloseMenuSelect = styled.div`
  width:200vw;
  height:200vh;
  position:absolute;
  transform:translate(-25%,-10%);
  z-index:999;
`;

export const MenuButtons = styled.div`
  border:1px solid transparent;
  transition:.2s;
  border-radius:5px;
  :hover{
    cursor: pointer;
    border:1px solid #7822f4;
  }
`;

export const MenuButtonsArgs = styled.div`
  display:flex;
  align-items:center;
  margin-right:20px;

`;

export const DivInfosBelow = styled.div`
  display:flex;
  align-items:center;
  margin-right:20px;
  .CopyIcon:hover{
    cursor:pointer;
    color:#7822f4;
  }
`;

export const Text = styled.span`
  margin:${props => props.margin ? props.margin : '0'};
  font-size:${props => props.fontSize};
  color:${props => props.color};
  font-weight:${props => props.weight ? props.weight : 0 };
`;