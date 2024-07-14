import React, { useState } from 'react'
import './Create.css'
import axios from 'axios'

function Create() {

    const [task, SetTask] = useState()

    const handleAdd = () => {
        axios.post('http://localhost:3000/add', { task: task })
            .then(result => {
                location.reload()
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='create' >
            <input
                type="text"
                name="task-input"
                id="task-input"
                placeholder='Add your Task'
                onChange={(e) => SetTask(e.target.value)}
            />
            <button type='button' onClick={handleAdd} > Add</button>
        </div>
    )
}

export default Create
