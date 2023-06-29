import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [taskArray, setTaskArray] = useState(["吃饭", "睡觉", "打豆豆"]);
  const taskNumber = taskArray.length; //number of tasks
  const [checkedItems, setCheckedItems] = useState({}); //被勾选的tasks的对象
  const checkedItemsNumber = Object.keys(checkedItems).length; //被勾选的数量

  function handleCheckboxChange(task) {
    setCheckedItems((prevState) => {
      const updatedCheckedItems = { ...prevState };
      if (updatedCheckedItems[task]) {
        delete updatedCheckedItems[task];
      } else {
        updatedCheckedItems[task] = true;
      }
      return updatedCheckedItems;
    });
  }

  const taskList = taskArray.map((task) => {
    const isChecked = checkedItems[task] || false; //若不含有task，则checkedItems[task]为undefined，所以后面应为||false,确保答案为false与true
    return (
      <div className = "rowClass">
        <tr className="taskRow" key={task}>
          <td>
            <li>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => handleCheckboxChange(task)}
              />
              {task}
            </li>
          </td>
          <td>
            <button onClick={() => handleClickDelete(task)}>删除</button>
          </td>
        </tr>
      </div>
    );
  });

  function handleClickDelete(task) {
    setTaskArray((prevTaskArray) => prevTaskArray.filter((item) => item !== task));
    setCheckedItems((prevCheckedItems) => {
      const updatedCheckedItems = { ...prevCheckedItems };
      delete updatedCheckedItems[task];
      return updatedCheckedItems;
    });
  }

  function handleClickDown(i) {
    if (i == ""){return};
    if (taskArray.includes(i)) {return};
    setTaskArray((prev) => {
      return [...prev, i];
    });
  }
  
  return (
    <div className="background">
      <h1>React Todo</h1>
      <div className="thingsToDo">
        <ThingsToDo
          taskList={taskList}
          finishedTaskNumber={checkedItemsNumber}
          taskNumber={taskNumber}
        />
      </div>
      <div className="tasksToAdd">
        <TasksToAdd onTasksToAddClick={handleClickDown}/>
      </div>
    </div>
  );
}

function ThingsToDo({ taskList, finishedTaskNumber, taskNumber }) {
  return (
    <div className = "thingsToDo">
      <div className="unorderedList">
        <table>
          <tbody>{taskList}</tbody>
          <tbody>
            <div className = "rowClass">
              {finishedTaskNumber}已完成/{taskNumber}总数
            </div>
          </tbody>
        </table>
        
      </div>
      
    </div>
  );
}

function TasksToAdd({ onTasksToAddClick }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => { 
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => { 
    event.preventDefault();
    onTasksToAddClick(inputValue);
    setInputValue(''); // 清空输入
  };


  return (
    <>
      <div className="Task">Task</div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" value={inputValue} onChange={handleChange}  placeholder="请输入你要添加的任务" />
        </div>
        <div>
          <button type = "submit">Save Task</button>
        </div>
      </form>
    </>
  );
}
