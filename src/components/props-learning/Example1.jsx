import React from 'react'

function Greetings({name, prof, experience, title}) {
 // const {name, prof, experience, title} = props; //Destructuring
  return (
    <div>
      Hello, {title} {name} I'm a {prof} with {experience} Years experience.
    </div>
  )
}

export default function Example1() {
  return (
    <div>
      <Greetings name="Faith Nelson" prof="Software Eng." experience="6" title="Miss"/>
      <Greetings name="Paul Engbuniwe" prof="DevOps Eng." experience="10" title="Mr"/>
    </div>
  )
}





