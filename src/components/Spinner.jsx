import React from 'react'
import '../styles/Spinner.scss';

const Spinner = () => {
  return (
    <div className='lds-ellipsis'>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </div>
  )
}

export default Spinner