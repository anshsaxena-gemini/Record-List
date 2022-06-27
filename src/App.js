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
  const addNewUser = (profile,name,gender,email,mobile,catagory,technology) =>
  {
    setData((prevUsersList) =>{
      return [
        ...prevUsersList,
        {
          uProfile : profile ,uName : name , uGender : gender , uEmail : email ,
          uMobile : mobile , uCatagory : catagory ,
          uTechnology : technology
        },
      ];
    })
   
  }
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<CreateUser onAddUser={addNewUser}/>} />
      <Route path='/ViewUser' element={<ViewUser onSubmit={data}/>} />
      <Route path='/PreviewUser' element={<PreviewUser users={data} />} /> 
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
