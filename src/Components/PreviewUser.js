import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './PreviewUser.css'
import { useNavigate } from 'react-router';
import ViewUser from './ViewUser';

function PreviewUser(props) {
   const [preview,setPreview] = useState(null);
   const navigate = useNavigate();
   const reader = new FileReader();
   const handleSubmit = () =>
   {
    props.onSubmit(true);
    setPreview(null)
    navigate("/ViewUser")
   }
   const handleCancel =()=>{
     navigate("/")
   }

  return (
    
    <div>
         {props.users.map((user) => {   //yes this code part is redundent , will fix it soon.
            { reader.readAsDataURL(user.uProfile)
                reader.onload = () =>{
                  setPreview(reader.result);
                }
              }
         }
         )}
    
        
          {props.users.map((user) => (
       
    <table className='table table-condensed table-striped table-bordered table-data'
    style={{
        textAlign:'center',
        width:'60%',
        margin:'auto',
        fontSize:'20px',
        marginTop:'2%'
        
    }}>
      
     <tbody>
       <tr>
        <td colSpan="2">
        <img src={preview} width="150px" height="150px"
        style={{
            borderRadius:'70px'
        }}/>
        </td>
       </tr>
     
        <tr>
        <td>Name </td>
        <td>{user.uName}</td>
        </tr>
        <tr>
        <td>Gender</td>
        <td>{user.uGender}</td>
        </tr>
        <tr>
        <td>Email </td>
        <td>{user.uEmail}</td>
        </tr>
        <tr>
        <td>Mobile </td>
        <td>{user.uMobile}</td>
        </tr>
        <tr>
        <td>Catagory </td>
        <td>{user.uCatagory}</td>
        </tr>
        <tr>
        <td>Technology</td>
        <td>{user.uTechnology.join(" , ")} </td>
        </tr>
      
           
            
     </tbody>
     <br></br>
    

    </table>
  

  ))}
     <div className='btns'>
     <button type='button' className='btn btn-danger cancel-btn' onClick={handleCancel}>Cancel</button>
     <button type='button' className='btn btn-primary submit-btn' onClick={handleSubmit}>Submit</button>
     </div>
    </div>
  )
}

export default PreviewUser