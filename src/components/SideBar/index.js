import React from 'react'
import { 
  Container, 
  List, 
  Icon,
  DivArrow,
} from './styles'

import { SideBarData } from './SideBarData'

import * as IoIcons from 'react-icons/io'


export default function SideBar(){
  return(
    <Container>
      <DivArrow>
        <IoIcons.IoIosArrowDown className='arrowIconBalance'/>
      </DivArrow>
      <nav>
        {
          SideBarData.map((item, index)=>(
            <List>
              <Icon>
                {item.icon}
              </Icon>
            </List>
          ))
        }
      </nav>
    </Container>
  );
}