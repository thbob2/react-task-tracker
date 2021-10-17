import { useState } from "react"
import PropTypes from 'prop-types'
import Task from "./Task"
const Tasks = ({tasks}) => {
    
    return (
        <>
         {tasks.map((task) => (
            <Task key={task.id} task= {task} />

                )
            )
         }   
        </>
    )
}
/** 
 * !Tasks.PropTypes = {
 * ! tasks: PropTypes.array
}*/
export default Tasks
