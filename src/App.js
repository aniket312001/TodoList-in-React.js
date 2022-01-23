import React, { useState } from 'react'

import TodoList from './TodoList'

function App() {

  const [inputList,setInputList] = useState("")
  const [items,setItems] = useState([])

  const itemEvent = (event)=>{
    setInputList(event.target.value)
  }

  const onSubmit = ()=>{
    setItems((olditem)=>{
      return [...olditem,inputList]
    })
    // items.push(inputList)
    setInputList("")
  }

  const deleteItem = (id)=>{
    console.log("Deleted ");
    setItems((olditem)=>{
      return olditem.filter( (arrEle,index)=>{
        return index !== id
      })
    })


  }

  return (
    <div className="main_div">
      <div className='center_div'>
          <br/>
          <h1> ToDo List </h1>
          <br/>

          <input type="text" placeholder="Add item" onChange={itemEvent} value={inputList} />

          <button onClick={onSubmit}> + </button>

          <ol>
            {items.map((itemVal,index)=>{
              return <TodoList val={itemVal} key={index} id={index} onSelect={deleteItem}  />
              // return<li> {itemVal} </li>
            })}
          </ol>


      </div>
    </div>
  );
}

export default App;
