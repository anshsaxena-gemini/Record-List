import React,{useRef} from 'react'
import NavigationBar from '../UI/NavigationBar'
import {useFormik} from 'formik';
import * as yup from 'yup';
import './CreateUser.css'
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
            profile:yup.mixed().required("Upload your profile !")
           
            
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
    <div className='container'>
    <h1 className='header'>Create User</h1><br></br>
    
    <form className='form-group' onSubmit={formik.handleSubmit}>
      <input 
      className='name'
      type="text"
      name="uName"
      placeholder='Enter your name'
      value={formik.uName}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      />
      <div className="error">
        {formik.touched.uName ? formik.errors.uName : ""}
      </div>
   
       <label htmlFor='gender'>Gender : </label>
     
      <div className='gender'>
      <div>
      <input
      type="radio"
      name="gender"
      onChange={formik.handleChange}
      value="Male"
      />
      <label>
      
     Male </label>
     </div>
     <div>
     <label>
       <input
      type="radio" 
      name="gender"
      value="Female"
      onChange={formik.handleChange}
      />
      Female </label>
      </div>
     
      </div>
      <div className="error">
      {formik.touched.gender ? formik.errors.gender : ""}
      </div>
      <input type="text"
      className='email'
       placeholder='Enter your email'
       name="email"
       onChange={formik.handleChange}
       value={formik.email}
       onBlur={formik.handleBlur}
       />
       <div className="error">
        {formik.touched.email ? formik.errors.email : ""}
       </div>
        <input 
        className='mobile'
        type="text"
        placeholder='Enter your Mobile Number'
        name="mobile"
        onChange={formik.handleChange}
        value={formik.mobile}
        onBlur={formik.handleBlur}
        />
        <div className="error">
        {formik.touched.mobile ? formik.errors.mobile : ""}
        </div>
      <div className='catagory'>
      <label htmlFor='catagory'>Catagory :</label>
      <select
      name='catagory'
      onChange={formik.handleChange}
      value={formik.catagory}
      onBlur={formik.handleBlur}
      >
      <option 
      value=""
      selected disabled
      >
        Select
      </option>
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
      </div>
      <div className="error">
      {formik.touched.catagory ? formik.errors.catagory : ""}
      </div>
      
       <div className='technology'>
       <label htmlFor='tech' className='tech-label'>Technology : </label>
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
        </div>
        <div className="error">
        {formik.touched.technology ? formik.errors.technology : ""}
        </div>
        <label htmlFor='profile' className='profile' >Profile :  </label>
     
          <input
          id="file"
          type="file"
          accept=""
          ref={imageRef}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
         
          />
        
       
        <div className="error">
        {formik.touched.profile ? formik.errors.profile : ""}
        </div>

       <br></br>
      <button type='submit' className='btn btn-primary'>Preview</button>

    </form>
    </div>
    </div>
  )
}

export default CreateUser