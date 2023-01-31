import React from 'react'
import './App.css';
import { useState } from 'react'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  

  //  const handleChange = (event) => {
  //    setNewTask(event.target.value);
  //  };

   
  const handleChangeCarlos = (event)=> {
    setNewTask(event.target.value)
  }

  // const addTask = () => {
  //   const newTodoList = [...todoList, newTask];
  //    setTodoList(newTodoList);
  //  };

   const  deleteTask = (id) => {
      setTodoList(todoList.filter((task) => task.id !== id));
    };


  const addTaskCarlos = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask
    };
    setTodoList([...todoList , task]);
    };

  
   

  return (
    <div className="App">
      
      <div classname= "addTask">
        <input onChange={handleChangeCarlos}/>
        <button onClick={addTaskCarlos}> Add Task</button>
      </div>
      {<div className="list">
        {todoList.map((task) => {
          return <div>
            <h1>{task.taskName}</h1>
            <button onClick={()=> deleteTask(task.id)}> X </button>
            </div>;
        })}
      </div> }

      

      

    </div>
  );
}

export default App