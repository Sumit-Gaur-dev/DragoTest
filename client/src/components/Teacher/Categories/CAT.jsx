import React from 'react'
import Categories from './Categories'
import Answers from "./Answes";
function CAT() {
  return (
    <div className=' shadow-xl rounded-sm pb-1  '>
        <Categories />
         <Answers />
         {/* <button
         type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        ADD
      </button> */}
    </div>
  )
}

export default CAT