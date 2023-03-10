import './contact.css'
import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs';
import {MdMarkEmailUnread} from 'react-icons/md';
import {BiWorld} from 'react-icons/bi';

export default function Contact() {
  return (
    <div class="contact">
    
      <div className='contactinfo'>
      <div class="titlle"><b><h1>CONTACT<br/>INFOMATION</h1></b></div>
      <hr />
        <div class="detail">
        <h3><span><BsFillTelephoneFill/></span>134-678-908</h3>
        <h3><span><MdMarkEmailUnread/></span>employeemanagement12@gmail.com</h3>
        <h3><span><BiWorld/></span>www.emanagementsystem.com</h3>
        </div>
      </div>
    </div>
  )
}
