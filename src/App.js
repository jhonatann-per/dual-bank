import React,{ useState } from 'react'
import { 
  Container,
  PageHeader,
  MenuAndPage,
  Page,
  PageContent,
  Main,
  Rent,
  FoodVoucher,
  Icons,
  Data,
  Title,
  Value,
  Information,
  Balance,
  InfoBank,
  Button,
  AbstractInfo,
  FieldTop,
  Date,
  TextDate,
  FieldMid,
  UpdateBalance,
  Update,
  FieldBot,
  TitleAndBalence,
  Text,
  Hide
} from './styles'

import Header from './components/Header'  
import SideBar from './components/SideBar'
import * as BiIcons from 'react-icons/bi'
import * as BsIcons from 'react-icons/bs'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import * as IoIcons from 'react-icons/io'
import * as Io5Icons from 'react-icons/io5'

function App() {
  const [mainBalance, setMainBlance] = useState(false);
  const [rentBalance, setRentBalance] = useState(false);
  const [foodVoucher, setFoodVoucher] = useState(false);

  return(
    <Container>
      <Header/>
      <MenuAndPage>
        <SideBar/>
        <Page>
          <PageHeader>
            <Icons>
              <BiIcons.BiPurchaseTag />
            </Icons>
            <Icons>
              <BsIcons.BsPlusCircle />
            </Icons>
            <Main>
                P
            </Main>
            <Data>
              <Information>
                <Title>Principal</Title>
                {
                  mainBalance ?
                    <AiIcons.AiOutlineEyeInvisible onClick={() => setMainBlance(!mainBalance)}/>
                  :
                    <AiIcons.AiOutlineEye onClick={() => setMainBlance(!mainBalance)}/>
                }
              </Information>
              {
                mainBalance ?
                  <Value>R$10.000.00</Value>
                :
                  <Hide/>
              }
            </Data>
                <Rent>
                  A
                </Rent>
            <Data>
              <Information>
                <Title>Aluguel</Title>
                {
                  rentBalance ?
                    <AiIcons.AiOutlineEyeInvisible onClick={() => setRentBalance(!rentBalance)}/>
                  :
                    <AiIcons.AiOutlineEye onClick={() => setRentBalance(!rentBalance)}/>
                }
              </Information>
              {
                rentBalance ?
                  <Value>R$1600.00</Value>
                :
                  <Hide/>
              }
            </Data>
            <FoodVoucher>
                A
            </FoodVoucher>
            <Data>
              <Information>
                <Title>Alimentação</Title>
                {
                  foodVoucher ?
                    <AiIcons.AiOutlineEyeInvisible onClick={() => setFoodVoucher(!foodVoucher)}/>
                  :
                    <AiIcons.AiOutlineEye onClick={() => setFoodVoucher(!foodVoucher)}/>
                }
              </Information>
              {
                foodVoucher ?
                  <Value>R$450.00</Value>
                :
                  <Hide/>
              }
            </Data>
          </PageHeader>
          <PageContent>
            <InfoBank>
              <Balance>Saldo Bancário</Balance>
              <Button><AiIcons.AiOutlinePrinter /></Button>
              <Button><RiIcons.RiFileDownloadLine /></Button>
              <Button> <BiIcons.BiShareAlt /></Button>
            </InfoBank>
            <AbstractInfo>
              <FieldTop>
                <TextDate>Data do Saldo</TextDate>
                <IoIcons.IoIosArrowDown className='arrowIconBalance'/>
                <Date>07/12/2020</Date>
              </FieldTop>
              <FieldMid>
                <Update>
                <UpdateBalance>Atualizar Saldo ás 16:48</UpdateBalance>
                <BsIcons.BsArrowClockwise className='arrowIconClock' />
                </Update>
              </FieldMid>
              <FieldBot>
                <Io5Icons.IoShieldCheckmarkOutline className='shield'/>
                <TitleAndBalence>
                  <Text margin='0 0 0 15px'>
                    Saldo disponivel
                  </Text>
                  <AiIcons.AiOutlineEyeInvisible  className='eyeInvisibleIcon'/>
                  <Text margin='0 0 0 15px' color='#8FDF67' fontSize='25px' weight='500'>
                    R$40.000.00
                  </Text>
                </TitleAndBalence>
              </FieldBot>
            </AbstractInfo>
          </PageContent>
        </Page>
      </MenuAndPage>
    </Container>
  )
}

export default App;
