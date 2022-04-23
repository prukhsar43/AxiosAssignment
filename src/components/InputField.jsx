import React from 'react'
import { Input,Button } from 'antd';
import style from './InputField.module.css'
import axios from 'axios';
const InputField = ({changeHandler,value,clickHandler}) => {





  return (
    <div className={style.container}> 
        <div className={style.divMain}> 
        <h1 className={style.header1}><strong>Digikull Students</strong></h1>
        </div>
       
        <h1 className={style.header2}><strong>Hello User</strong></h1>


       <Input className={style.input1} placeholder="Enter student name" onChange={changeHandler} value={value}  />  
       <Button onClick={clickHandler} >Add</Button>
    </div>
  )
}

export default InputField