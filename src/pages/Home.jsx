import React, { useState,useEffect } from 'react'
import InputField from '../components/InputField'
import Show from '../components/Show'
import axios from 'axios'

const Home = () => {

   const [fName,setfName]=useState("");
   const [apiData,setApiData]=useState([])
   const [flag,setFlag]=useState(false)

   const changeHandler=(event)=>{

       
       setfName(event.target.value)
     
   }

   const getApi=()=>{

    axios.get("https://625f9fb853a42eaa07f7c314.mockapi.io/Axios-Project").then(response=>{
        console.log(response.data)
        setApiData(response.data)
      
       
    }).catch(err=>{
        console.log(err)
    })
   }

   const clickHandler=()=>{

    //axios.delete("https://625f9fb853a42eaa07f7c314.mockapi.io/Axios-Project")




     axios.post("https://625f9fb853a42eaa07f7c314.mockapi.io/Axios-Project",{fName}).then(response=>{
         alert("data saved successfully")
         setFlag(!flag)
      
      

     }).catch(err=>{
         console.log(err)
     })

   }

   useEffect(() => {
      
   getApi()
    
  
   }, [flag])
   

  return (
    <div>

    <InputField value={fName} changeHandler={changeHandler} clickHandler={clickHandler}/>

    
    <Show res={apiData}/>
    
    </div>
  )
}

export default Home