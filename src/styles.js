import styled from 'styled-components';

export const Container = styled.div`
  width:100vw;
  height:100vh;
`;

export const Page = styled.div`
  padding-left:5px;
  width:100%;
`;

export const MenuAndPage = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  justify-content:space-between;
`;

export const PageHeader = styled.div`
  min-width:100vw;
  height:50px;
  display:flex;
  padding-left:15px;
  align-items:center;
  background-color:#f5f5f5;
  border-radius:5px;
  box-shadow:0px 5px 10px -5px rgba(0,0,0,0.26);
  @media(max-width:545px){
    display:none;
  }
`;

export const Main = styled.div`
  min-width:40px;
  min-height:40px;
  border-radius:50%;
  background-image: linear-gradient(70deg,#7822f4,#002e6c 90%);
  display:flex;
  color:white;
  align-items:center;
  justify-content:center;
  margin: 0 10px 0 25px;

  @media(max-width:1020px){
  min-width: 30px;
  min-height: 30px;
}
`;

export const Rent = styled.div`
  min-width:40px;
  min-height:40px;
  border-radius:50%;
  background-image: linear-gradient(70deg,#5C6D8B,#002e6c  90%);
  display:flex;
  color:white;
  align-items:center;
  justify-content:center;
  margin: 0 10px 0 0;

  @media(max-width:1020px){
  min-width: 30px;
  min-height: 30px;
}
`;

export const FoodVoucher = styled.div`
  min-width:40px;
  min-height:40px;
  border-radius:50%;
  background-image: linear-gradient(70deg,#BC3155,#582B5F 90%);
  display:flex;
  color:white;
  align-items:center;
  justify-content:center;
  margin: 0 10px 0 0;

@media(max-width:1020px){
  min-width: 30px;
  min-height: 30px;
}
`;

export const Icons = styled.div`
  width:45px;
  height:45px;
  border-radius:50%;
  display:flex;
  color:#7822f4;
  background-image: linear-gradient(70deg, transparent,#c4c4c4 160%);
  font-size:20px;
  align-items:center;
  justify-content:center;
  margin: 0 20px 0 0;

  @media(max-width:1020px){
    width: 32px;
    height: 32px;
  }

  @media(max-width:750px){
    display:none;
  }
`;

export const Data = styled.div`
  margin:0 60px 0 0;
  @media(max-width:750px){
    margin:0 30px 0 0;
  }
`;

export const Title = styled.div`
  font-size:18px;
  margin: 0 5px 0 0;
@media(max-width:1020px){
  font-size:15px;
}
`;

export const Value = styled.text`
  font-weight:bold;
  font-size:15px;
  color:#8FDF67;
`;

export const Information = styled.div`
  display:flex;
  align-items:center;
`;

export const PageContent = styled.div`
  width:100%;
  height:100%;
`;

export const InfoBank = styled.div`
  display:flex;
  height:100px;
  margin:28px 0 0 15px;
`;

export const Balance = styled.text`
  font-size:30px;

@media(max-width:1020px){
  font-size:20px;
}
`;

export const Button = styled.button`
  width:85px;
  height:50px;
  border-radius:5px;
  background-color: white;
  font-size:30px;
  display:flex;
  align-items:center;
  justify-content:center;
  color: #622ee5;
  border: 2px solid #622ee5;
  margin: 0 15px 0 15px;
  background: linear-gradient(70deg, #f5f5f5, #cab9f7, #622ee5 100%);
  background-size: 300% 100%;
  transition:.2s;
  :hover{
    cursor:pointer;
    background-position:100% 0;
    color:#f5f5f5;
    border: 2px solid transparent;
  }

@media(max-width:1020px){
  width: 60px;
  height: 40px;
}
`;

export const AbstractInfo = styled.div`
  position:absolute;
  display:flex;
  width:500px;
  height:auto;
  margin:0 0 0 15px;
  flex-wrap: wrap;
  @media(max-width:545px){
    width:100%;
  }
`;

export const FieldTop = styled.div`
  width:350px;
  border-radius:5px 5px 0 0;
  border-bottom:2px solid #8760ea;
  background:#F9F9F9;
  position:relative;

  .arrowIconBalance{
    position:absolute;
    right:0;
    top:50%;
    font-size:30px;
    transform:translate(-50%, -50%)
  }
  @media(max-width:1020px){
  width: 300px;
}
`;

export const TextDate = styled.div`
  font-size:15px;
  color:#8760ea;
  margin: 0 0 0 15px;
`;

export const Date = styled.text`
  font-size:25px;
  margin: 0 0 0 15px;

@media(max-width:1020px){
  font-size:20px;
}
`;

export const FieldMid = styled.div`
  display:flex;
  width:350px;
  height:55px;
  align-items:center;
  position:relative;
`;
export const UpdateBalance = styled.text`
  font-size:20px;
  margin: 0 0 0 15px;
`;
export const Update = styled.div`
  .arrowIconClock{
    position:absolute;
    font-size:30px;
    margin: 0 0 0 15px;
  }
`;
export const Hide = styled.div`
  width:90px;
  height:20px;
  border-radius:10px;
  background-color: #5c5c5c;
`;
export const FieldBot = styled.div`
  width:350px;
  border-radius:5px 5px 0 0;
  border-bottom:2px solid #778899;
  margin-top:10px;
  background:#F9F9F9;
  position:relative;
  display:flex;
  align-items:center;
  padding-left:10px;

  .eyeInvisibleIcon{
    position:absolute;
    right:0;
    top:50%;
    font-size:30px;
    transform:translate(-50%, -50%)
  }
  .shield{
    font-size:30px;
  }
  @media(max-width:1020px){
    width:300px;
  }
`;

export const TitleAndBalence = styled.div`
  display:flex;
  flex-direction:column;
  
`;

export const Text = styled.span`
  margin:${props => props.margin ? props.margin : '0'};
  font-size:${props => props.fontSize};
  color:${props => props.color};
  font-weight:${props => props.weight ? props.weight : 0 };

`;