
import './index.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
function App() {
  const[tasks,setTasks] = useState(
    [
        {
            id:1,
            text:'Be kind',
            day: 'Dec 22th at 0:00am',
            reminder: true,
        },
        {
            id:2,
            text:'be cool',
            day: 'jun 22th at 0:00am',
            reminder: true,
        },
        {
            id:3,
            text:'I am cool',
            day: 'Dec 12th at 0:00am',
            reminder: true,
        }
    ]
)


// !Delete task 
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
    <div className="container">
      <Header /> 
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
  );
}

export default App;
