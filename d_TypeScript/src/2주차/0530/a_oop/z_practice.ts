// z_practice.ts
{
  //! 도서관 관리 시스템 구현
  // Library 클래스 정의

  // 1. 속성
  //  books: 도서들의 정보가 저장된 배열

  // 2. 생성자
  //  : 초기 도서 배열을 받아 books 배열을 초기화
  //  : 전달 받는 인자가 없을 경우 [] 빈 배열로 초기화

  // 3. 메서드
  // addBook(book: BookType): 책 추가
  // removeBook(isbn: string): isbn으로 책을 찾아 제거, 해당 책이 없는 경우 메시지 출력
  // findBooksByAuthor(author: string): 저자명으로 책을 찾아 배열로 반환
  // listBooks(): 도서 목록 정보 출력(전체 리스트 출력)

  type BookType = {
    title: string;
    author: string;
    isbn: string; // 책의 고유 번호 (전세계적으로 통용된 번호)
  };

  class Library {
    // books 배열: 비공개(private) 속성, 도서 정보를 저장
    // 각 도서는 title, author, isbn을 포함한 객체
    private books: BookType[];
    // private books: { title: string; author: string; isbn: string}[];

    //! 생성자 함수
    // : books 배열을 매개변수 받는 함수
    // : 기본값으로 빈 배열을 할당
    // : Library 인스턴스 생성 시 초기 도서 목록을 선택적으로 설정 가능 
    constructor(books: BookType[] = []) {
      this.books = books;
    }

    //! addBook 메서드
    // : 새 도서 객체를 받아 books 배열에 추가
    // : 도서 추가 시 콘솔에 추가된 도서의 제목을 출력하여 확인 가능  
    public addBook(book: BookType): void {
      // 현재 인스턴스의 책 배열에 매개변수의 book을 추가
      // 배열.push
      console.log(`${book.title}이(가) 추가 되었습니다.`);
    }

    //! removeBook 메서드
    // : ISBN을 매개변수로 받아 해당 ISBN을 가진 도서를 books 배열에서 찾아 제거
    // : 도서를 찾으면 배열에서 제거하고, 찾지 못하면 콘솔에 메시지를 출력
    public removeBook(isbn: string): void {
      // 배열의 findIndex메서드(콜백 함수)
      // : 책을 순회하며 매개변수의 isbn 번호와 일치할 경우 해당 요소의 인덱스 번호를 찾아옴
      
      // 해당 인덱스 번호가 -1인 경우(해당 isbn 번호가 존재 X)
      // : 메시지 출력

      // -1이 아닌 경우
      // : 해당 인덱스를 splice로 삭제
    }

    //! findBooksByAuthor 메서드
    // : 저자명을 매개변수로 받아 해당 저자의 모든 도서를 books 배열에서 찾아 반환
    // : filter() - 사용하여 저자명이 일치하는 도서만 새 배열로 만들어 반환 
    // public findBooksByAuthor(author: string): BookType[] {
    //   // filter() 메서드 사용
    // }

    //! listBooks 메서드
    // : books 배열에 저장된 모든 도서의 정보를 콘솔에 출력
    // : forEach() - 각 도서의 제목, 저자, ISBN 정보를 출력
    public listBooks(): void {
      // forEach() 메서드 사용 - 전체 책 요소를 출력
    }
  }
}
