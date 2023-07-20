import React from 'react'
import { useState,useEffect } from 'react'

function Form(props) {
    const [formData,setFormData]=useState({searchTerm:""})

    const handleChange = (e) =>{
     setFormData({...formData,[e.target.name]:e.target.value})
    }
    // when input is changes lets track it
    const handleSubmit = (e) =>{
      e.preventDefault()
      props.movieSearch(formData.searchTerm)
    }
    // when submit is pressed sotre value in input
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' name='searchTerm' onChange={handleChange} value={formData.searchTerm}/>
            <input type='submit' value='submit'/>
        </form>
    </div>
  )
}

export default Form