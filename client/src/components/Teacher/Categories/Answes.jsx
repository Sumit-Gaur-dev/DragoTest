import React ,{useEffect, useState}from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import teacherSlice from '../../../Store/Teacher/teacherSlice';


function Answers() {
  
  const categoriesRTK = useSelector((state) => state.teacher.categories)

  const dispatch = useDispatch();
  const [cardContent, setCardContent] = useState('Click to edit');
  const [selectedOption, setSelectedOption] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  
  
  console.log("change")

  //after statecompletion completion
  const handleSelect = (e) => {
    setSelectedOption(e.target.value)
    
  };
  
  const handleClick = () => {
    setIsEditing(true);
    setIsChanged(true)
  };

  //after input completion
  const handleBlur = () => {
    setIsEditing(false);
    };

  return (
<div className='px-6 mb-10'>
       <label className="block text-gray-700 font-bold mb-2" htmlFor="text">
          Answers
        </label>
    <div className="flex items-center space-x-4">
            <div className="flex-none w-20 text-right">
              <label htmlFor="inputField" className="block font-bold">Answer:</label>
            </div>
            <div className={`border rounded h-full mx-3 w-2/5 ${isEditing ? 'bg-yellow-100 p-2' : 'bg-slate-400   p-4 '}`} 
                 onClick={handleClick} onBlur={handleBlur}>
                    {isEditing ? (
                        <input
                        className="w-full border h-10 border-gray-300 p-2 rounded"
                        value={cardContent}
                        onChange={(e) => {
                            setCardContent(e.target.value);
                        }}
                        autoFocus
                        />) 
                    :
                    (<div>{cardContent}</div>)
                    }
          </div>

            <div className="flex-none w-20 text-right">
               <label htmlFor="selectField" className="block font-bold">Map:</label>
            </div>
            
            <div className="flex-grow">
                <select id="selectField" className="w-full border p-2"  value={selectedOption} onChange={handleSelect}>
                    {categoriesRTK.map((cat,index)=>{
                    return <option value={cat} key={index}>{cat}</option>
                    })}

                </select>
              
            </div>
    </div>

  </div>
  )
}

export default Answers