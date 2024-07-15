import React, { useCallback, useEffect, useRef, useState } from 'react' // React와 필요한 훅들을 임포트
import styles from './Board.module.css'; // CSS 모듈을 임포트

 // 커스텀 훅을 임포트

//& 게시판 프로젝트 구성
// 1. 구현할 기능 목록
// : 게시판 목록 조회
// : 게시물 생성
// : 게시물 조회 (클릭 시 세부 정보 확인)
// : 게시물 수정
// : 게시물 삭제

// 2. 게시물(프로젝트 데이터) 구성
// : id(게시물 고유 코드)
// : author(게시물 작성자)
// : date(게시물 작성일자)
// : title(게시물 제목)
// : content(게시물 내용)

//! 게시물 타입 정의
type PostType = {
  id: number; // 게시물 고유 코드
  author: string; // 게시물 작성자
  date: string; // 게시물 작성일자
  title: string; // 게시물 제목
  content: string; // 게시물 내용
}

//! 커스텀 훅 (posts 데이터 가져오기 - 가상의 posts 서버)
const usePosts = () => {
  // posts 상태를 정의 (posts)
  const [posts, setPosts] = useState<PostType[]>([]);

  // 로딩 상태를 정의 (loading)

  // 에러 상태를 정의 (error)

  useEffect(() => {
    // 로딩 상태를 true로 설정

    setTimeout(() => {
      // 가상의 posts 데이터를 설정
      const example = [
        { id: 1, author: '이승아', date: '2024-05-11', title: '첫 게시물1', content: '리액트 커스텀 훅1'},
        { id: 2, author: '이도경', date: '2024-05-12', title: '첫 게시물2', content: '리액트 커스텀 훅2'},
        { id: 3, author: '이현아', date: '2024-05-13', title: '첫 게시물3', content: '리액트 커스텀 훅3'},
        { id: 4, author: '정주연', date: '2024-05-14', title: '첫 게시물4', content: '리액트 커스텀 훅4'},
        { id: 5, author: '윤대휘', date: '2024-05-15', title: '첫 게시물5', content: '리액트 커스텀 훅5'},
      ]
      
      // 로딩 상태를 false로 설정
    }, 1000); // 1초 후에 데이터 설정
  }, []); // 컴포넌트가 마운트될 때 실행

  // 게시물 생성 로직
  const addPost = () => {
  }

  // 게시물 수정 로직
  const updatePost = () => {
  }

  // 게시물 삭제 로직
  const deletePost = () => {
  }

  return { posts } // 상태와 함수들을 반환
}

export default function Board() {
  // usePosts 훅을 사용하여 상태와 함수들을 가져옴
  const { posts } = usePosts(); 

  // 선택된 게시물 상태를 정의 (상태 변수: selectedPost)
  const [selectedPost, setSelectedPost] = useState<PostType | null>();

  // 제목 입력 필드 상태를 관리하는 커스텀 훅
  // 내용 입력 필드 상태를 관리하는 커스텀 훅
  // >> useInput2 (커스텀 훅: 0709 >> hooks >> useInput2)

  // 게시물 ID를 관리하는 ref

  const handleAddPost = () => {
    // 폼 제출 기본 동작을 막기

    const newPost: PostType = {
      // 새로운 게시물 ID 설정
      // 게시물 작성자 설정 - 임의의 작성자 문자열 명시 EX) '작성자'
      // 현재 날짜를 'YYYY-MM-DD' 형식으로 설정 - date: new Date().toISOString().slice(0, 10)
      // 제목 입력 필드 값 설정
      // 내용 입력 필드 값 설정
      id: 0,
      author: '',
      date: '',
      title: '',
      content: ''
    };
    
    
    // 새로운 게시물 추가 - "addPost 사용"
    // 제목 입력 필드 리셋
    // 내용 입력 필드 리셋
  }

  const handleUpdatePost = (post: PostType) => {
      // "updatePost 사용"
      // 수정된 제목 설정 '작성된 제목'
      // 수정된 내용 설정 '작성된 내용'
  };

  const handleDeletePost = (id: number) => {
    // "deletePost 사용"
    // 해당 id의 게시물 삭제
  };

  const handleSelectPost = (post: PostType) => {
    // 선택된 게시물 상태 업데이트
  };

  return (
    <div className={styles.formContainer}>

      {/* 로딩 상태일 때 메시지 표시 */}
      {/* 에러 상태일 때 메시지 표시 */}

      <br />
      <form onSubmit={handleAddPost}>
        <input 
          type="text" 
          // 제목 입력 필드 바인딩
          placeholder='제목'
          required
          className={styles.inputField}
        />
        <textarea 
          // 내용 입력 필드 바인딩
          placeholder='내용'
          required
          className={styles.textareaField}
        />
        <button 
          type='submit'
          className={styles.submitButton}
        >게시물 추가</button>
      </form>
      <hr />

      <ul className={styles.postList}>
        {posts.map(post => (
          <li key={post.id} className={styles.postItem}>
            <div className={styles.postDetails}>
              {post.title} by {post.author} on {post.date}
            </div>
            <button className={styles.postButton} onClick={() => handleSelectPost(post)}>게시물 확인</button>
            <button className={styles.postButton} onClick={() => handleUpdatePost(post)}>수정</button>
            <button className={`${styles.postButton} ${styles.deleteButton}`} onClick={() => handleDeletePost(post.id)}>삭제</button>
          </li>
        ))}
      </ul>
      {selectedPost && (
        <div className={styles.selectedPost}>
          <h4 className={styles.selectedTitle}>{selectedPost.title}</h4>
          <p className={styles.selectedContent}>{selectedPost.content}</p>
        </div>
      )}
    </div>
  );
}
