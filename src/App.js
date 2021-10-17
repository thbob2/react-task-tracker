
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

  return (
    <div className="container">
      <Header /> 
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
