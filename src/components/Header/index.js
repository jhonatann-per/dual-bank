import React,{ useState } from 'react'
import { 
  Container, 
  Text, 
  RightSide, 
  Data, 
  Information,
  Hide, 
  Value,
  LeftSide,
  DivSearch,
  InputSearch,
  Icons,
  Profile 
} from './styles'

import ContaCorrente from '../ContaCorrente'

import * as AiIcons from 'react-icons/ai'
import * as BiIcons from 'react-icons/bi'
import * as VscIcons from 'react-icons/vsc'
import * as ioIcons from 'react-icons/io5'

export default function Header(){
  const [saldoOn, setSaldoOn] = useState(false);

  return(
    <Container>
      <RightSide>
        <Text color='#7822f4' fontSize='30px' weight='bold'>
          Dual
        </Text>
        <Text color='#002e6c' fontSize='30px' weight='bold'>
          bank
        </Text>
        <hr/>
        <ContaCorrente/>
        <Data>
          <Information>
            <Text margin='0 10px 0 0'>
              Saldo
            </Text>
            {
              saldoOn ?
                <AiIcons.AiOutlineEyeInvisible onClick={() => setSaldoOn(!saldoOn)}/>
              :
                <AiIcons.AiOutlineEye onClick={() => setSaldoOn(!saldoOn)}/>
            }
          </Information>
          {
            saldoOn ?
              <Value>R$40.000.00</Value>
            :
              <Hide/>
          }
        </Data>
      </RightSide>
      <LeftSide>
        <DivSearch>
          <InputSearch placeholder='Pesquisar' maxLength='20'/>
          <BiIcons.BiSearch className='searchIcon'/>
        </DivSearch>
        <Icons>
          <ioIcons.IoChatboxEllipsesOutline className='message'/>
          <AiIcons.AiOutlineCalendar className='date'/>
          <VscIcons.VscBell className='notify'/>
        </Icons>
        <Profile/>
      </LeftSide>
    </Container>
  )
}