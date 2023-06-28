import { useState } from 'react'
import './App.css'

export default function App() {
  
  return (
    <div className = "background">
      <h1>React Todo</h1>
      <div className = "thingsToDo">
        <ThingsToDo />
      </div>
      <div className = "tasksToAdd">
        <TasksToAdd />
      </div>
    </div>
  )
}

function ThingsToDo() {
  return (
    <button>1</button>
  );
}

function TasksToAdd() {
  return (
    <button>2</button>
  );
}