import React from 'react'
import NavigationBar from '../UI/NavigationBar'

function ViewUser(props) {
  const shouldAdd = props.input;
  return (
    <div>
        <NavigationBar />
     

        <table className='table table-condensed table-striped table-bordered'>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Gender</th>
              <th scope='col'>Email</th>
              <th scope='col'>Mobile</th>
              <th scope='col'>Catagory</th>
              <th scope='col'>Skills</th>
              <th scope='col'>Profile</th>
            </tr>
          </thead>
          { shouldAdd && props.users.map((user) => (
          <tbody>
            <tr scope='row'>
            <td>{user.uName}</td>
            <td>{user.uGender}</td>
            <td>{user.uEmail}</td>
            <td>{user.uMobile}</td>
            <td>{user.uCatagory}</td>
            <td>{user.uTechnology.join(' , ')}</td>
            <td></td>
            </tr>
          </tbody>
    ))}
        </table>
       
        </div>
  )
}

export default ViewUser