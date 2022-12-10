import React from "react";
import { useState } from "react";
import { validation } from "./validation";
import styles from './Form.module.css'


export default function Form(props) {

    const [userData,setUserData] = useState({
        username:'',
        password: ''
    })

    const [errors,setErrors] = useState({
        username:'',
        password: ''
    })

    const handleInputChange = (e) => {
        setUserData({...userData,
            [e.target.name]: e.target.value,
        })
        setErrors(validation({...userData,
            [e.target.name]: e.target
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.login(userData)
    }

    return(
        <div className={styles.bloqueo}>
            <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input
                id="username"
                name="username"
                placeholder="Escribe tu usuario..."
                type='text'
                value={userData.username}
                onChange={handleInputChange}
                className={styles.usuario}/>
            <p>{errors.username}</p>
            <label>Password:</label>
            <input
                id="password"
                name="password"
                placeholder="Escribe tu contraseña..."
                type='password'
                value={userData.password}
                onChange={handleInputChange}
                className={styles.contraseña}/>
            <p>{errors.password}</p>
            <input type='submit'/>
            </form>
        </div>
    )

}