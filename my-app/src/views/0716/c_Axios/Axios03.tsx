import axios from 'axios';
import React from 'react'

//! HTTP 통신 - PUT(수정) / DELETE(삭제)
export default function Axios03() {
  const userId = 1;

  const updateUser = async () => {
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        name: '이승아',
        email: '이승아이메일'
      });

      console.log(response.data);

    } catch (error: any) {
      console.error('Failed to Update User: ' + error.message);
    }
    
  }

  const deleteUser = async () => {
    try {
      const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
      
    } catch (error: any) {
      console.error('Failed to delete user', error.message);
    }
  }

  return (
    <div>
      <button onClick={updateUser}>Update User</button>
      <button onClick={deleteUser}>Delete User</button>
    </div>
  )
}