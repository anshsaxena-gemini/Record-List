import logo from './logo.svg';
import './App.css';
import NavigationBar from './UI/NavigationBar';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import CreateUser from './Components/CreateUser';
import ViewUser from './Components/ViewUser';
import PreviewUser from './Components/PreviewUser';
import { useState } from 'react';



function App() {
  const [data,setData] = useState([]);
  const [preview,setPreviewData] = useState([]);
  const [isConfirmed,setConfirmed] = useState(false);
  
  // const saveData = (input) =>{
  //    if(input === true){
  //     setConfirmed(true);
  //    }
  //    else{
  //     setConfirmed(false)
  //    }
  // }
  const addNewUser = (profile,name,gender,email,mobile,catagory,technology) =>
  {
    setPreviewData(() =>{
      return [
       
        {
         
          uProfile : profile ,uName : name , uGender : gender , uEmail : email ,
          uMobile : mobile , uCatagory : catagory ,
          uTechnology : technology
        },
      ];
    })
   
  }
  const saveData = (name,gender,email,mobile,catagory,technology) =>{
      setData((prevData)=>{
        return [
          ...prevData,
           {
           
            uName : name , uGender : gender , uEmail : email ,
            uMobile : mobile , uCatagory : catagory ,
            uTechnology : technology
           }
        ]
      })
  }
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<CreateUser onAddUser={addNewUser}/>} />
      <Route path='/ViewUser' element={<ViewUser users={data}/>} />
      <Route path='/PreviewUser' element={<PreviewUser users={preview} onSubmit={saveData} />} /> 
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
