import React from 'react'
import style from './Show.module.css'

const Show = ({res}) => {
  return (
    <div>
        {
           res.map((ele,i)=>{

            return(

                  <h2 key={i} className={style.show1}>{ele.fName}</h2>
                
              )

            }   

       )

        } 
       
    </div>
  )
}

export default Show