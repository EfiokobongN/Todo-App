import React from 'react';
import './ListTodo.scss';

function ListTodo() {
  return (
    <div className='listTodo'>
      <div className="listTodo_row">
        <div className="listTodo_item">Buy New Laptop</div>
        <div className="listTodo_delete">Del</div>
      </div>
    </div>
  )
}

export default ListTodo
