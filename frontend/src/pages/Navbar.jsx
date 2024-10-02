import React, { Component } from 'react'
import myImage from '../assets/DoThings.svg'

import Icon from '@mdi/react';
import { mdiAccountCircleOutline } from '@mdi/js';



export default function Navbar() {
    return (
      <div className='Navbar'>
        <img src={myImage} alt="TickTodoLogo" height="20px" />
        <Icon path={mdiAccountCircleOutline} size={1.5} />
      </div>
    )
}

