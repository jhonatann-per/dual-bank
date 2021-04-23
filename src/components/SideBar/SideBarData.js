import React from 'react'

import * as VscIcons from 'react-icons/vsc'
import * as BsIcons from 'react-icons/bs'
import * as AiIcons from 'react-icons/ai'
import * as BiIcons from 'react-icons/bi'
import * as FaIcons from 'react-icons/fa'

export const SideBarData = [
  {
    Title: 'Home',
    icon: <BsIcons.BsHouse />
  },
  {
    Title: 'GraficoPizza',
    icon: <BiIcons.BiPieChartAlt2/>
  },
  {
    Title: 'GraficoCrescente',
    icon: <BsIcons.BsGraphUp />
  },
  {
    Title: 'Dinheiro',
    icon: <FaIcons.FaRegMoneyBillAlt />
  },
  {
    Title: 'Contrato',
    icon: <FaIcons.FaRegHandshake />
  },
  {
    Title: 'Diamante',
    icon: <BsIcons.BsXDiamond />
  },
  {
    Title: 'Cartão',
    icon: <VscIcons.VscCreditCard />
  },
  {
    Title: 'Comprovante',
    icon: <BsIcons.BsCardChecklist />
  },
  {
    Title: 'Ferramentas',
    icon: <AiIcons.AiOutlineTool />
  },
  {
    Title: 'Ajuda',
    icon: <AiIcons.AiOutlineQuestionCircle />
  },
]