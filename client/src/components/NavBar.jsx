import React from 'react'

export default  function NavBar () {

 const user = "Teacher"  
 
    return (
    <nav className="bg-blue-500 p-3">
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold text-xl">{user}</div>
        <ul className="flex space-x-4">
          <li><button  className="text-white bg-blue-900 w-20 h-7 rounded-md  ">Save</button></li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
