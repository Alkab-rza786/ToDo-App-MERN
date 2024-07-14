import React, { useEffect, useState } from 'react'
import Create from '../Create/Create'
import './Home.css'
import axios from 'axios'
import { MdDelete } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";


function Home() {

    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/get')
            .then(res => setTodos(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleEdit = (id) => {
        axios.put('http://localhost:3000/update/' + id)
            .then(result => {
                location.reload()
            })
            .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/delete/' + id)
            .then(result => {
                location.reload()
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='home'>
            <h2>To List</h2>
            <Create />

            {
                todos.length === 0
                    ?
                    <div><h2>No Record</h2></div>
                    :
                    todos.map(todo => (
                        <div className='todo' >
                            <div className="check-box" onClick={() => handleEdit(todo._id)} >
                                {todo.done
                                    ?
                                    <CiCircleCheck />
                                    :
                                    <FaRegCircle className='icon' />
                                }
                                <p className={todo.done ? "line-cut" : ""} >  {todo.task}</p>
                            </div>
                            <div>
                                <span ><MdDelete className='icon' onClick={() => handleDelete(todo._id)} /></span>
                            </div>
                        </div>
                    ))
            }
        </div>
    )
}

export default Home
