import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../Server/URL'

function Create() {
    const[firstname,setFirstName] =useState('')
    const[lastname,setLastName] =useState('')
    const[checked,setChecked] =useState(false)
    const navigate =useNavigate();

    const postData=async (e)=>{
        e.preventDefault();
        await axios.post(API_URL,{
            firstname,
            lastname,
            checked
        })
        setFirstName('')
        setLastName('')
        setChecked('')
        navigate('/read')
    }

   
  return (
    <div className='container'>
     <form>
     <div>
        <input type="text" placeholder='Enter First Name' value={firstname} onChange={(e)=>setFirstName(e.target.value)}/>
     </div> <br />  
     <div>
        <input type="text" placeholder='Enter Last Name' value={lastname} onChange={(e)=>setLastName(e.target.value)}/>
     </div> <br />
     <div>
        <label class="form-check-label" for="flexCheck"> 
        <input className='check' type="checkbox" id="flexCheck" checked={checked} onChange={()=>setChecked(!checked)}/> 
        Agree The Terms & Conditions
    </label>
     </div>
 <div>
    <button className='btn-primary' onClick={postData}>Submit</button>
 </div>
     </form>
    </div>
  )
}

export default Create
