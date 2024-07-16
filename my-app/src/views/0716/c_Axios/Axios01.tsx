import axios from 'axios';
import React, { useEffect, useState } from 'react'

//! Axios
// : JS에서 HTTP 요청을 실행하기 위한 라이브러리
// : Promise 기반의 HTTP 클라이언트, 브라우저와 node.js 환경에서 모두 사용 가능

//? Axios의 장점
// 1) 간결한 API
// : HTTP 요청을 보내고 받기 쉽게 해주는 간결하고 직관적인 문법 체계
// 2) 브라우저 호환성
// : 현대의 모든 브라우저에서 작동
//   , 자동으로 JSON 데이터 변환을 지원

//? Axios 사용법(라이브러리 설치)
// : npm i axios (npm install axios)
// +) --force (라이브러리 강제 설치)

//& HTTP 통신
// : HTTP(HyperText Transfer Protocol)
// >> 웹에서 데이터를 교환하는 주요 프로토콜
// >> 클라이언트(브라우저)와 서버 간의 통신을 위해 사용
//    , 요청(Request)과 응답(Response)의 형태로 데이터가 교환

//& HTTP 요청 방법
// >> HTTP 프로토콜은 다양한 요청 메서드를 지원

// 1) GET
// : 데이터를 조회할 때 사용
// - URL에 쿼리 파라미터를 포함하여 요청을 보냄
// - 데이터를 조회하고 검색하는 데 사용
// EX) 사용자 정보 조회, 상품 목록 불러오기 등

// 2) POST
// : 새로운 데이터를 생성할 때 사용
// - 데이터를 요청 본문(body)에 포함시켜 전송
// - 새 리소스를 생성하거나 데이터를 서버로 제출할 때 사용
// EX) 회원 가입, 게시글 작성 등

// 3) PUT
// : 기존 데이터를 수정할 때 사용
// - 지정된 리소스를 새로운 데이터로 "완전히" 대체
// - 리소스의 전체적인 수정에 사용
// EX) 사용자 프로필 업데이트, 설정 변경 등

// +) PATCH
// - "일부의 데이터"를 대체

// 4) DELETE
// : 데이터를 삭제할 때 사용
// - 지정된 리소스를 서버에서 삭제
// - 리소스를 영구적으로 제거할 때 사용
// EX) 계정 삭제, 게시글 제거 등

interface User {
  id: number;
  name: string;
  email: string;
}

export default function Axios01() {
  const [users, setUsers] = useState<User[]>([]);

  const [newUser, setNewUser] = useState<User>({
    id: 0,
    name: '',
    email: ''
  });

  //! axios를 사용한 get 요청(가져오다)
  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');

      // axios의 응답 내부의 데이터: data 속성 안에 저장
      setUsers(response.data);

    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }

  //! axios를 사용한 post 요청(전송하다)
  const addUser = async (newUser: User) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);

      setUsers([...users, response.data]);

    } catch (error) {
      console.error('Error adding user: ', error);
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addUser(newUser);
    setNewUser({ id: 0, name: '', email: '' });
  }

  // 사용자를 추가하는 로직 - post(전송)

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      HTTP: Axios Get/Post
      <h3>Axios Get</h3>
      {users?.map((user) => (
        <div>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      ))}
      <hr />
      <h3>Axios Post</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ID"
          value={newUser.id}
          onChange={(e) =>
            setNewUser({ ...newUser, id: Number(e.target.value) })
          }
        />
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button type="submit">Add User</button>
      </form>

      
    </div>
  );
}