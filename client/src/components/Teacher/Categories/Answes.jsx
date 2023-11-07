import React ,{useEffect, useState}from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { teacherActions } from '../../../Store/Teacher/teacherSlice';


function Answers() {
  const dispatch = useDispatch();
  const categoriesRTK = useSelector((state) => state.teacher.categories)
  const ansRTK = useSelector((state) => state.teacher.ans)
  
  const [items, setItems] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  useEffect(()=>{
    setItems(ansRTK)
  },[ansRTK])


  const catRemoveHandler = (index) =>{
    dispatch(teacherActions.anwerDelete(index))
  }

  const handleInputChange = (index, newValue) => {
   
    let updatedItems = [...items];
    updatedItems[index] ={
        ...items[index],
        answer: newValue
       };
    console.log(updatedItems)
     setItems(updatedItems);
  };

  const handleInputBlur = (index) => {
    setEditingIndex(null);
  };

  const handleInputFocus = (index) => {
    setEditingIndex(index);
  };
  




  //Submit Of the Answer
  const date = new Date().getTime();
  const [selectedOption, setSelectedOption] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [cardContent, setCardContent] = useState('Click to edit');
  
  const handleClick = () => {
    setIsEditing(true);
  };
  const handleBlur = () => {
    setIsEditing(false);
  };
  const handleSelect = (e) => {
    setSelectedOption(e.target.value)
    
  };
  useEffect(()=>{
   if(selectedOption !== undefined && cardContent !== "Click to edit" && cardContent !== "" ){
      dispatch(teacherActions.anwerSave({
      id: date,
      answer: cardContent,
      mapTo: selectedOption
      }))
     setCardContent("Click to edit")
     setSelectedOption(undefined);
    }
  },[selectedOption,isEditing])
  useEffect(()=>{
  },[selectedOption])
  

  return (
<div className='px-6 mb-10  '>
<label className="block text-gray-700 text-center font-bold mb-2" htmlFor="text">
          Answers
</label>


  {/* DYNAMIC LIST */}
  <div className='w-full px-3'>
  {items.map((item, index) => (
        <div key={index} className='w-full  h-full' >
          {editingIndex === index ? (
            <div className=' w-full flex border-b-2 border-yellow-600 border-t-2   justify-center gap-5 my-2  items-center  h-full'>
            <input
              type="text"
              className={` rounded h-full outline-none w-2/5  ${editingIndex ? 'bg-slate-200  p-2' : 'bg-slate-600   p-4 '}  p-4`}
              value={items.answer}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onBlur={() => handleInputBlur(index)}
              autoFocus
            />
            <div className='bg-slate-500 flex justify-center items-center h-10 rounded-md p-2'>{item.mapTo}</div>
            </div>
          ) : (
            <div className='flex justify-center gap-5  my-2  items-center'>
              <div className={`border rounded h-full w-2/5 bg-slate-600 p-4`}  onClick={() => handleInputFocus(index)}>{item.answer}</div>
              <div className='bg-slate-500 flex justify-center items-center h-10 rounded-md w-20 p-2'>{item.mapTo}</div>
              <button className='border rounded-md h-full bg-red-500 w-10' onClick={()=>catRemoveHandler(index)}>X</button>
            </div>
          )}
        </div> 
      ))}
  </div>

{/* NEW LIST */}
  <div>
    <div className="flex items-center space-x-4">
            <div className="flex-none w-20 text-right">
              <label htmlFor="inputField" className="block font-bold">New:</label>
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
                <select id="selectField" className="w-full bg-slate-300 border p-2"  value={selectedOption} onChange={handleSelect}>
                    {categoriesRTK.map((cat,index)=>{
                    return <option value={cat} key={index}>{cat}</option>
                    })}

                </select>
              
            </div>
    </div>
  </div>

  </div>
  )
}

export default Answers

