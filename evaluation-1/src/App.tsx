import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Tag from './component/Tag'


  interface TagType {
    title: string
    id: number
  }

  interface ChangeEvent {
    target: {
      value: string
    }
  }

function App() {



  const [input, setInput] = useState<string>('')
  const [tags, setTags] = useState<TagType[]>([])
  let idvalue: number = 0

  function handleChange(e: ChangeEvent): void {
    if(e.target.value === ' ')
    {
      const tag: TagType = {
        title: 'Taged',
        id: Math.random() * 100000
      }
      setTags((prev: TagType[]): TagType[] => [...prev, tag])

      setInput('')
    }
  }

  return (
    <div>
      <input 
        type="text"
        onChange={(e) => handleChange(e)}
      />
      {
        tags.map((tag) => {
          return <Tag tag = {tag}/>
        })
      }

    </div>
  )
}

export default App
