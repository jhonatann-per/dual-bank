import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height:90px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  background-color:white;
  padding:10px;
`;

export const RightSide = styled.div`
  height:100%;
  display:flex;
  align-items:center;
  hr{
    width: 0px;
    height:50%;
    margin: 10px;
  }
`;

export const Hide = styled.div`
  width:90px;
  height:20px;
  border-radius:10px;
  background-color: #5c5c5c;
`;

export const Text = styled.span`
  margin:${props => props.margin ? props.margin : '0'};
  font-size:${props => props.fontSize};
  color:${props => props.color};
  font-weight:${props => props.weight ? props.weight : 0 };
`;

export const Data = styled.div`
  margin:0 60px 0 0;
  @media(max-width:695px){
    display:none;
  }
`

export const Value = styled.text`
  font-weight:bold;
  font-size:15px;
  color:#8FDF67;
`
export const Information = styled.div`
  display:flex;
  align-items:center;
`;

export const LeftSide = styled.div`
  display:flex;
  align-items:center;
`;

export const DivSearch = styled.div`
  width:200px;
  height:30px;
  position:relative;
  margin-right:15px;
  .searchIcon{
    cursor:pointer;
    position:absolute;
    top:50%;
    right:5px;
    transform:translate(-50%, -50%);
  }
  @media(max-width:1020px){
    display:none;
  }
`;

export const InputSearch = styled.input`
  width:100%;
  height:100%;
  padding:10px;
  border:2px solid #00000039;
  border-radius:5px;
  outline:none;
  transition:.2s;
  :focus{
    border:2px solid #7822f4;
  }
`;

export const Icons = styled.div`
  width:90px;
  margin-right:15px;
  font-size:20px;
  display:flex;
  justify-content:space-between;
  .message{
    cursor:pointer;
    transition:.2s;
  }
  .message:hover{
    color:#7822f4;
  }

  .date{
    cursor:pointer;
    transition:.2s;
  }
  .date:hover{
    color:#7822f4;
  }

  .notify{
    cursor:pointer;
    transition:.2s;
  }
  .notify:hover{
    color:#7822f4;
  }
  @media(max-width:800px){
    display:none;
  }
`;

export const Profile = styled.div`
  width:50px;
  height:50px;
  border-radius:50%;
  border:1px solid blue;
  @media(max-width:545px){
    display:none;
  }
`;