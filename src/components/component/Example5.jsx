import React from 'react'

export default function Example5() {
  const school = "LivingStone College";
  const numStudents = 30;
  const hobbies =['music', 'reading', 'cooking', 'gaming'];
  return (
    <div>
    <h1>{school}</h1>  
    <h1>{numStudents}</h1>
    <p>{hobbies[3]}</p>
    </div>
  )
}
