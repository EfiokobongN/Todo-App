import React from 'react'

export default function Example6() {
    const hobbies =['music', 'reading', 'cooking', 'gaming'];
  return (
    <div>
        
      {hobbies.map(hobby => <h1>{hobby}</h1>)}
      {/*{hobbies.map((hobby) => (<h1>{hobby.text}</h1>))} when there is an object in the array*/}
    </div>
  )
}
