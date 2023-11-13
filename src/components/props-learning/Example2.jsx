import React from 'react'

function Dog({name, age}) {
  return (
    <div>
      <p>Dog Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}


export default function Example2() {
  return (
    <div>
      <Dog name="Fido" age={21+6} />
      <Dog name="Bingo" age={22+6} />
    </div>
  )
}

