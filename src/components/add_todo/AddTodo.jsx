import React from 'react';
import './AddTodo.scss';

function AddTodo() {
  return (
    <div className='addTodo'>
      <input className='addTodo_input' type="text" placeholder='Add a Todo' />
      <button className='addTodo_button'>+</button>
    </div>
  )
}

export default AddTodo
