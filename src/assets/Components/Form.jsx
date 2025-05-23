import React, { useState } from 'react'

function Form() {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const handleForm = (e)=>{
    //     e.preventDefault()
       
        
    // }
  const [user, setUser] = useState({
    email: "",
    password:""
  })

  const handleForm = (e)=>{

    e.preventDefault()
    console.log(user);
    
  }


    const handleValue =(e)=>{
      const {name,value} = e.target
      setUser({...user,[name]:value})

    }


  return (
    

<form className="max-w-sm mx-auto" onSubmit={handleForm}>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" name='email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" 
    value={user.email} onChange={(e)=> handleValue(e)} />
  </div>
  <div className="mb-5">
    <label htmlFor="password"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={user.password} onChange={(e)=> handleValue(e)} />
  </div>
  
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

  )
}

export default Form