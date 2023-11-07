import React from 'react'
import Categories from './Categories'
import Answers from "./Answes";
import {useSelector}  from 'react-redux/es/hooks/useSelector';

function CAT() {
  const ansRTK = useSelector((state) => state.teacher)
  const submitForm = ( ) =>{
    if(ansRTK.catQuestioName.length != "" && ansRTK.categories.length !== 0 && ansRTK.ans.length >= ansRTK.categories.length){
      console.log(ansRTK)  // Send the final request to the server
    }
  }
  
  return (

    <div className=' shadow-xl rounded-sm pb-1  '>
        <Categories />
         <Answers />
         <button onClick={submitForm}
         type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        ADD
      </button>
    </div>
  )
}

export default CAT