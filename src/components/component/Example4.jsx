import React from 'react'

function Task(props){
    const {children} = props
    return(
        <>
        <ul>
            {/*Some borders are removed*/}
            <ul class="list-group list-group-flush">
                {children}
              </ul>
        </ul>
        </>
    )
}

export default function Example4() {
  return (
    <Task>
        <li class="list-group-item">task1</li>
                <li class="list-group-item">task2</li>
                <li class="list-group-item">task3</li>
                <li class="list-group-item">task4</li>
                <li class="list-group-item">task5</li>
    </Task>
  )
}
