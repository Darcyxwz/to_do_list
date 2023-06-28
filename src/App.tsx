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

  function handleClickUp() {}

  function handleClickDown() {}

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
        <TasksToAdd />
      </div>
    </div>
  );
}

function ThingsToDo({ taskList, finishedTaskNumber, taskNumber }) {
  return (
    <div>
      <div className="unorderedList">
        <table>
          <tbody>{taskList}</tbody>
        </table>
      </div>
      <div className="information">
        {finishedTaskNumber}已完成/{taskNumber}总数
      </div>
    </div>
  );
}

function TasksToAdd() {
  return (
    <>
      <div className="Task">Task</div>
      <div></div>
    </>
  );
}

