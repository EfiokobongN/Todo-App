import React from 'react'

function Child(propps){
    const {name, age, isStudent, itStudent} = propps //Destructuring
    return(
        <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Is student? {isStudent ? "Yes" : "No"}</p>
        <p>Is Science student? {itStudent ? "Yes" : "No"}</p>
    </div>
    )
}
export default function Example3() {
    const person = { //object literal
        name: "Fido",
        age: 21,
        isStudent: true,
        itStudent: false
    }
  return (
    <div>
      <Child {...person} /> {/*Spread operator*/}
    </div>
  )
}
