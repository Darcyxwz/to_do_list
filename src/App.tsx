import React, { useState } from 'react'
import './App.css'

export default function App() {
  const [taskArray, setTaskArray] = useState(["吃饭", "睡觉", "打豆豆"]);
  const taskNumber = taskArray.length; //number of tasks
  const [checkedItems, setCheckedItems] = useState([]); //被勾选的tasks的array
  const checkedItemsNumber = checkedItems.length; //被勾选的数量

  function handleCheckboxChange(item) {
    if (checkedItems.includes(item)) {
      setCheckedItems(checkedItems.filter((checkedItem) => checkedItem !== item));
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  }

  const taskList = taskArray.map((task) => { //this is a <li>(may be put in a <div> to show the edge of each <li>) from a <ul>, key is task name
    return (
      <li key = {task}>
        <input type = "checkbox" onChange = {() => handleCheckboxChange({task})} /> 
        {task}
      </li>
    );
  });

  function handleClickUp() {
    
  }

  function handleClickDown() {

  }

  return (
    <div className = "background">
      <h1>React Todo</h1>
      <div className = "thingsToDo">
        <ThingsToDo taskList={taskList} finishedTaskNumber={checkedItemsNumber} taskNumber={taskNumber} />
      </div>
      <div className = "tasksToAdd">
        <TasksToAdd />
      </div>
    </div>
  )
}



function ThingsToDo({ taskList, finishedTaskNumber, taskNumber }) { //finished
  return (
    <>
      <div className = "unorderedList">
        {taskList}
      </div>
      <div className = "information">
        {finishedTaskNumber}已完成/{taskNumber}总数
      </div>
    </>
  );
}

function TasksToAdd() {//todo
  return (
    <>
    <div className = "Task">Task</div>
    <div> 

    </div>
    </>
  );
}



