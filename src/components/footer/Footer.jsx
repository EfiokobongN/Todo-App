import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className='footer'>
      <div className="footer_pending">You Have  pending Tasks</div>
      <button className='footer_button'>clear all</button>
    </div>
  )
}

export default Footer
