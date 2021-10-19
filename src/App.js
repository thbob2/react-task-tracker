
import './index.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState,useEffect } from 'react';
import AddTask from './components/AddTask';
function App() {
  const [showAddTask,setShowAddTask]= useState(false)

  const[tasks,setTasks] = useState([])
  useEffect(()=>{
    const fetchTasks = async () =>{
      const response = await fetch('http://localhost:5000/tasks')
    }
  })
/**
 * ? add Task
 */
  
  const addTask = (task) =>{
    const id = Math.floor(Math.random()*10000) + 1
    const newTask = {id,...task}

    setTasks([...tasks,newTask])
  }


/**  
 * !Delete task 
*/
  const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id!==id))
  }


//* toggle reminder

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id 
    
    ? { ...task, reminder: !task.reminder }
    : task
    )) 

    }
   

  return (
    
    <main>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} /> 
        {showAddTask && <AddTask onAdd={addTask} />}
        {
          tasks.length > 0 ? 
          (<Tasks tasks={tasks} 
            onDelete={deleteTask}
            onToggle={toggleReminder}
            />) 
          : (<div 
              className="task" 
              style={{textAlign:'center'}}><h2>No Tasks To Show</h2></div> )
          }
      </div>
    </main>
  );
}

export default App;
