
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { useState,useEffect } from 'react';
import Tasks from './components/Tasks';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

import './index.css';

function App() {
  const [showAddTask,setShowAddTask]= useState(false)

  const[tasks,setTasks] = useState([])
  useEffect(()=>{

    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
 }, [])


/** 
 * !! fetech tasks 
 * */

const fetchTasks = async () =>{
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()

  console.log(data)

  return data
}

const fetchTask = async (id) =>{
  const res = await fetch(`http://localhost:5000/tasks/${id}`,{
    
  })
  const data = await res.json()

  console.log(data)

  return data
}

/**
 * ? add Task
 */
  
  const addTask = async (task) =>{
    
    const res = await fetch('http://localhost:5000/tasks',{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(task)
    })
    
    const data = await res.json()
    setTasks([...tasks,data])
    /**const id = Math.floor(Math.random()*10000) + 1
    const newTask = {id,...task}

    setTasks([...tasks,newTask])*/
  }


/**  
 * !Delete task 
*/
  const deleteTask = async(id) => {
    
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'DELETE',
    })

    setTasks(tasks.filter((task) => task.id!==id))
  }


//* toggle reminder

  const toggleReminder = async (id) => {

    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle,reminder:!taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()
    setTasks(tasks.map((task) => task.id === id 
    
    ? { ...task, reminder: data.reminder }
    : task
    )) 

    }
   

  return (
    <Router>
      <main>
        <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} /> 
        
        <Route path='/' 
        exact 
        render={(props) => (
        <>
          
          {showAddTask && <AddTask onAdd={addTask} />}
          {
            tasks.length > 0 
            ? (<Tasks tasks={tasks} 
              onDelete={deleteTask}
              onToggle={toggleReminder}
              />) 
            
              : (<div 
                className="task" 
                style={{textAlign:'center'}}><h2>No Tasks To Show</h2></div> )
            }
          
          </>
        )} 
        />
      <Route path='/about' component={About}/>
      <Footer />
      </div>
      </main>
    </Router>
  );
}

export default App;
