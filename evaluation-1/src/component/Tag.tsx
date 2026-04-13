import React from 'react'

interface TagType {
    title: string
    id: number
  }

function Tag({tag: TagType}) {

    function handleClick(){

    }
  return (
    <div>
        <h1>{tag.title}</h1>
        <button onClick={handleClick}></button>
    </div>
  )
}

export default Tag