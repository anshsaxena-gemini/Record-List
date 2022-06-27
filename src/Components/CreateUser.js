import React,{useRef} from 'react'
import NavigationBar from '../UI/NavigationBar'
import {useFormik} from 'formik';
import * as yup from 'yup';
import PreviewUser from './PreviewUser';
import { useNavigate } from 'react-router';


function CreateUser(props) {
   const imageRef = useRef();
   const navigate = useNavigate();
   const formik = useFormik({
     initialValues : {
           uName : "",
           gender : "",
           email : "",
           mobile : "",
           catagory : "",
           technology : [],
           profile : null

     },
     validationSchema : 
         yup.object({
            uName : yup.string().required("Name is required !").max(30).min(2).matches(/^[a-zA-Z ]*$/,"Name is not valid"),
            gender: yup.string().required('Select the Gender'),
            email : yup.string().required("Email is required !").matches(/^\w+@[a-zA-Z_.]+?\.[a-zA-Z]{2,3}$/,"Must be a valid Email !"),
            mobile : yup.string().required("Phone Number is required !").matches(/^\d{10}$/,"Not valid !"),
            catagory : yup.string().required("Select your catagory !"),
            technology :yup.array().min(1,"Select at least one technology!"),
            
           
            
         })
     ,
     onSubmit : (values) => {
        const file = imageRef.current.files[0];
         props.onAddUser(file,values.uName,values.gender,values.email,values.mobile,values.catagory,values.technology);
         navigate("/PreviewUser")
     }
   })
 
   
  
  return (
    
    <div>
     
    <NavigationBar />
    <u><h1>Create User</h1><br></br></u>
    <form className='form-group' onSubmit={formik.handleSubmit}>
      <input 
      type="text"
      name="uName"
      placeholder='Enter your name'
      value={formik.uName}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      />
      <div>
        {formik.touched.uName ? formik.errors.uName : ""}
      </div>
    <br></br>
      <label htmlFor='gender'>Gender </label>
      <label>
      <input
      type="radio"
      name="gender"
      onChange={formik.handleChange}
      value="Male"
      />
      <label>
     Male </label>
       <input
      type="radio" 
      name="gender"
      value="Female"
      onChange={formik.handleChange}
      />
      Female </label>
      <div>
      {formik.touched.gender ? formik.errors.gender : ""}
      </div>
     <br></br>
      <input type="text"
       placeholder='Enter your email'
       name="email"
       onChange={formik.handleChange}
       value={formik.email}
       onBlur={formik.handleBlur}
       />
       <div>
        {formik.touched.email ? formik.errors.email : ""}
       </div>
        <br></br>
        <input 
        type="text"
        placeholder='Enter your Mobile Number'
        name="mobile"
        onChange={formik.handleChange}
        value={formik.mobile}
        onBlur={formik.handleBlur}
        />
        <div>
        {formik.touched.mobile ? formik.errors.mobile : ""}
        </div>
 <br></br>
      <label htmlFor='catagory'>Catagory :</label>
      <select
      name='catagory'
      onChange={formik.handleChange}
      value={formik.catagory}
      onBlur={formik.handleBlur}
      >
  
      <option 
      value="General"
      >
        General
      </option>
      <option 
      value="OBC"
      >
        OBC
      </option>
      <option 
      value="SC"
      >
        SC
      </option>
      <option 
      value="ST"
      >
        ST
      </option>
      </select>
      <div>
      {formik.touched.catagory ? formik.errors.catagory : ""}
      </div>
       <br></br>
       <label htmlFor='tech'>Technology : </label>
       <label>
       <input 
       type="checkbox"
       value="Java"
       name="technology"
       onChange={formik.handleChange}
       />
        Java
        </label>
        <label>
       <input 
       type="checkbox"
       value="React"
       name="technology"
       onChange={formik.handleChange}
       />
        React
        </label>
        <label>
       <input 
       type="checkbox"
       value="Python"
       name="technology"
       onChange={formik.handleChange}
       />
        Python
        </label>
        <label>
       <input 
       type="checkbox"
       value="SQL"
       name="technology"
       onChange={formik.handleChange}
       />
        SQL
        </label>
        <div>
        {formik.touched.technology ? formik.errors.technology : ""}
        </div>
        <br></br>
        <label htmlFor='profile'>Profile : </label>
     
          <input
          id="file"
          type="file"
          accept=""
          ref={imageRef}
         
          />
        
       
        <div>
        {formik.touched.profile ? formik.errors.profile : ""}
        </div>

       <br></br>
      <button type='submit' className='btn btn-primary'>Preview</button>

    </form>
     
    </div>
  )
}

export default CreateUser