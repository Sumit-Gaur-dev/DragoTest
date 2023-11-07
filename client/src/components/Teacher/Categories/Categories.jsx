import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector} from "react-redux";
import { teacherActions } from '../../../Store/Teacher/teacherSlice';


function Categories() {
  const dispatch = useDispatch();
  const categoriesRTK = useSelector((state) => state.teacher.categories)
 



  // Remove Category
  const catRemoveHandler = (index) =>{
    dispatch(teacherActions.deleteState(index))
  }

 
 // Edit the button
  const [items, setItems] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);  
  const handleInputChange = (index, newValue) => {
    const updatedItems = [...items];
    updatedItems[index] = newValue;
    setItems(updatedItems);
  };

  const handleInputBlur = (index) => {
    setEditingIndex(null);
  };

  const handleInputFocus = (index) => {
    setEditingIndex(index);
  };
  useEffect(()=>{
    setItems(categoriesRTK)
  },[categoriesRTK])
  
  useEffect(()=>{
    dispatch(teacherActions.editCategories(items))
  },[items])



  // name of the question
  const [questionName, seQuestionName] = useState("")
  const nameChangeHandler = (e) =>{
    seQuestionName(e.target.value)
    
  }
  const seNameToTheState = () =>{
    if(questionName !== "" ){
      dispatch(teacherActions.setName(questionName));
    }
  }

  // ADDING NEW STATE
  const [categories,setCategories] = useState([])
  const [isEditing, setIsEditing] = useState(false);
  const [cardContent, setCardContent] = useState('Click to edit');
  const handleDoubleClick = () => {
    setIsEditing(true);
    setCardContent("")
    
  };
  //Final submit to the state
  const handleBlur = (e) => {
    setIsEditing(false);
    if(cardContent.length === 0){
      return setCardContent("not valid")
    }
     setCategories([...categoriesRTK , cardContent ])
     setCardContent("Add new")
   
    };
  // keep tracking on the new state  
   useEffect(()=>{
     dispatch(teacherActions.categoriesAction(categories))
    //  setItems([...categories])
   },[categories])


 const submitHandler = (e) =>{
       e.preventDefault()
 }

  return (
    <div className="p-6 box-border " onSubmit={submitHandler}>
      <div className='w-full text-center'><h1 className="block text-gray-700 font-bold mb-2">DRAG DROPE</h1></div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="text">
          Name
        </label>
        <input
          type="text"
          id="qName"
          name="questionName"
          value={questionName}
          onChange={nameChangeHandler}
          onBlur={seNameToTheState}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
      </div>

 {/* Dynamic list */}
<div className='mb-9 '>
<label className="block text-gray-700 font-bold mb-2" htmlFor="text" >
          Categories
        </label>
    
        {items.map((item, index) => (
        <div key={index} className='w-2/5 flex h-full  justify-center items-center'>
          {editingIndex === index ? (
            <input
            className={` rounded h-full mx-3 w-full ${editingIndex ? 'bg-slate-200' : 'bg-slate-600   p-4 '}  p-4`}
              type="text"
              id="catEdit"
              value={item}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onBlur={() => handleInputBlur(index)}
              autoFocus 
            />
          ) : (
            <div className={`border rounded h-full mx-3 w-full bg-slate-600 p-4`} onClick={() => handleInputFocus(index)}>{categoriesRTK[index]}</div>
          )} <button className='border rounded-md h-full bg-red-500 w-10' onClick={()=>catRemoveHandler(index)}>X</button>
        </div>
      ))}

{/* ListForm */}
    {categoriesRTK.length < 3 ? 
    <div className='flex'>
          <div
              className={`border rounded h-full mx-3 w-2/5 ${isEditing ? 'bg-yellow-100 p-2' : 'bg-slate-400   p-4 '}`}
              onDoubleClick={handleDoubleClick}
              onBlur={handleBlur}>
              
              {isEditing ? (
                <input
                  className="w-full border h-10 border-gray-300 p-2 rounded"
                  value={cardContent}
                  id="newCat"
                  onChange={(e) => {
                    setCardContent(e.target.value);
                  }}
                  autoFocus
                />) 
              :
              (<div>{cardContent}</div>)
              }
          </div>
      </div>
        : 
      <p className='text-red-900 '>you have reached the limit</p>
    }
</div>

    </div>

  
  );
}

export default Categories


