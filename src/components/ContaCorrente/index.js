import React, { useState } from 'react'
import { 
  Container, 
  Text, 
  DivChooseSelect,
  DivInfosBelow,
  MenuSelect,
  MenuButtons,
  MenuButtonsArgs,
  BgCloseMenuSelect,
} from './styles'

import * as IoIcons from 'react-icons/io'
import * as BsIcons from 'react-icons/bs'

const options = [
  {
    name:'Conta Corrente',
    arg1: 'Ag.000205-1',
    arg2: 'C.C.000000000000020-1'
  },
  {
    name:'Conta Poupança',
    arg1: 'Ag.00005-1',
    arg2: 'C.C.00000000000010-2'
  },
  {
    name:'C.C Ed.Suzano',
    arg1: 'Ag.000205-1',
    arg2: 'C.C.000000000000015-1'
  },
  {
    name:'C.C Condominio Guilermo',
    arg1: 'Ag.00006-1',
    arg2: 'C.C.0000000000000017-5'
  },
  {
    name:'C.C Residencial Figma Ômega',
    arg1: 'Ag.000205-1',
    arg2: 'C.C.00000000000000017-1'
  },
  {
    name:'C.C.Teste-1',
    arg1: 'Ag.000-1',
    arg2: 'C.C.0000000000000000-1'
  },
  {
    name:'C.C.Teste-2',
    arg1: 'Ag.000-2',
    arg2: 'C.C.0000000000000000-2'
  },
  {
    name:'C.C.Teste-3',
    arg1: 'Ag.000-3',
    arg2: 'C.C.00000000000000-3'
  },
  {
    name:'C.C.Teste-4',
    arg1: 'Ag.000-4',
    arg2: 'C.C.00000000000000-4'
  },
  {
    name:'C.C.Teste-5',
    arg1: 'Ag.000-5',
    arg2: 'C.C.00000000000000-5'
  },
]

export default function ContaCorrente(){
  const [selected, setSelected] = useState(options[0]);
  const [menu, setMenu] = useState(false);

  const ChangeSelect = (index) => {
    setSelected(options[index]);
    setMenu(false);
  }

  const CopyArgs = () => {
    const args = `${selected.arg1} ${selected.arg2}`
    navigator.clipboard.writeText(args)
  }

  return(
    <Container>
      <DivChooseSelect>
        <Text margin='0 10px 0 0'>
          {selected.name}
        </Text>
        <IoIcons.IoIosArrowDown className='arrowIconBalance' onClick={() => setMenu(!menu)}/>
          {
            menu ?
                <MenuSelect>
                  {
                    options.map((item, index) => (
                        <MenuButtons onClick={() => ChangeSelect(index)}>
                          <Text>
                            {item.name}
                          </Text>
                          <MenuButtonsArgs>
                            <Text color='#7822f4' margin='0 15px 0 0'fontSize='12px'>
                              {item.arg1}
                            </Text>
                            <Text color='#7822f4' fontSize='12px'>
                              {item.arg2}
                            </Text>
                          </MenuButtonsArgs>
                        </MenuButtons>
                    ))
                  }
                </MenuSelect>
            :
              ''
          }
      </DivChooseSelect>
        {
          menu ?
            <BgCloseMenuSelect onClick={() => setMenu(false)}/>
          :
            ''
        }
      <DivInfosBelow>
        <Text margin='0 10px 0 0' color='#7822f4'>
          {selected.arg1}
        </Text>
        <Text margin='0 10px 0 0' color='#7822f4'>
          {selected.arg2}
        </Text>
        <BsIcons.BsFiles onClick={() => CopyArgs()} className='CopyIcon'/>
      </DivInfosBelow>
    </Container>
  )
}