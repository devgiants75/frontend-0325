// IUser 인터페이스 정의
// : 사용자의 이름과 이메일을 가져오고 설정하는 메소드를 포함
interface IUser {
  getName(): string; // 사용자의 이름을 반환하는 메소드
  getEmail(): string; // 사용자의 이메일을 반환하는 메소드
  setName(name: string): void; // 사용자의 이름을 설정하는 메소드
  setEmail(email: string): void; // 사용자의 이메일을 설정하는 메소드
}

// 사용자 관리를 위한 추상 클래스 정의: 사용자 생성, 업데이트, 삭제, 출력 기능을 추상 메소드로 정의
abstract class AbstractUserManager {
  abstract createUser(user: IUser): void; // 사용자를 생성하는 메소드
  abstract updateUser(name: string, user: IUser): void; // 기존 사용자 정보를 업데이트하는 메소드
  abstract deleteUser(name: string): void; // 사용자를 삭제하는 메소드
  abstract displayUsers(): void; // 저장된 사용자 정보를 화면에 출력하는 메소드
}

// User 클래스는 IUser 인터페이스를 구현 / 사용자의 이름과 이메일을 관리
class User implements IUser {
  private name: string; // 사용자 이름을 저장하는 비공개 속성
  private email: string; // 사용자 이메일을 저장하는 비공개 속성

  constructor(name: string, email: string) {
    this.name = name; // 생성자에서 사용자 이름 초기화
    this.email = email; // 생성자에서 사용자 이메일 초기화
  }

  public getName(): string {
    return this.name; // 사용자 이름을 반환하는 메소드
  }

  public getEmail(): string {
    return this.email; // 사용자 이메일을 반환하는 메소드
  }

  public setName(name: string): void {
    this.name = name; // 사용자의 이름을 설정하는 메소드
  }

  public setEmail(email: string): void {
    this.email = email; // 사용자의 이메일을 설정하는 메소드
  }
}

// UserManager 클래스는 AbstractUserManager를 상속받아 구현 / 사용자 관리 기능을 실제로 구현
class UserManager extends AbstractUserManager {
  private users: IUser[] = []; // 사용자 목록을 저장하는 배열

  public createUser(user: IUser): void {
    if (!user.getName() || !user.getEmail()) {
      displayMessage("Both name and email are required."); // 이름과 이메일이 모두 제공되지 않은 경우 메시지 출력
      return;
    }
    const emailExists = this.users.some(
      (u) => u.getEmail() === user.getEmail()
    ); // 동일한 이메일을 가진 사용자가 이미 존재하는지 검사
    if (emailExists) {
      displayMessage("A user with the same email already exists."); // 동일한 이메일을 가진 사용자가 존재하는 경우 메시지 출력
      return;
    }
    this.users.push(user); // 사용자 배열에 새 사용자 추가
    this.displayUsers(); // 사용자 목록 출력
    displayMessage("User added successfully."); // 사용자 추가 성공 메시지 출력
  }

  public updateUser(name: string, newUser: IUser): void {
    let userToUpdate = this.users.find((user) => user.getName() === name); // 업데이트할 사용자 찾기
    if (!userToUpdate) {
      displayMessage("No user found with that name."); // 해당 이름의 사용자를 찾지 못한 경우 메시지 출력
      return;
    }

    // 이메일 충돌 검사 (현재 사용자 제외)
    const emailConflict = this.users.some(
      (u) => u.getEmail() === newUser.getEmail() && u.getName() !== name
    );
    if (emailConflict) {
      displayMessage("This email is already in use by another user."); // 다른 사용자가 이미 해당 이메일을 사용 중인 경우 메시지 출력
      return;
    }

    userToUpdate.setName(newUser.getName()); // 사용자 이름 업데이트
    userToUpdate.setEmail(newUser.getEmail()); // 사용자 이메일 업데이트
    this.displayUsers(); // 사용자 목록 다시 출력
    displayMessage("User updated successfully."); // 사용자 업데이트 성공 메시지 출력
  }

  public deleteUser(name: string): void {
    const initialLength = this.users.length; // 삭제 전 사용자 배열의 길이 저장
    this.users = this.users.filter((user) => user.getName() !== name); // 해당 이름의 사용자 삭제
    if (this.users.length !== initialLength) {
      this.displayUsers(); // 사용자 목록 다시 출력
      displayMessage("User removed successfully."); // 사용자 삭제 성공 메시지 출력
    } else {
      displayMessage("No user found with that name."); // 해당 이름의 사용자를 찾지 못한 경우 메시지 출력
    }
  }

  public displayUsers(): void {
    const tableBody = document
      .getElementById("userTable")
      ?.getElementsByTagName("tbody")[0]; // HTML에서 사용자 테이블의 tbody 요소 찾기
    if (tableBody) {
      tableBody.innerHTML = this.users
        .map(
          (user) =>
            `<tr><td>${user.getName()}</td><td>${user.getEmail()}</td></tr>` // 사용자 정보를 테이블 행으로 변환
        )
        .join(""); // 행들을 하나의 문자열로 연결
    } else {
      console.error("Table body not found!"); // tbody 요소를 찾지 못한 경우 오류 메시지 출력
    }
  }
}

// 메시지를 화면에 표시하는 함수
function displayMessage(message: string): void {
  const messageElement = document.getElementById("message") as HTMLElement; // 메시지를 표시할 HTML 요소 찾기
  if (messageElement) {
    messageElement.textContent = message; // 메시지 텍스트 설정
  }
}

const userManager = new UserManager(); // UserManager 인스턴스 생성

// 사용자 생성 처리 함수
function createUser() {
  const name = (document.getElementById("name") as HTMLInputElement).value; // 이름 입력 필드에서 이름 가져오기
  const email = (document.getElementById("email") as HTMLInputElement).value; // 이메일 입력 필드에서 이메일 가져오기
  userManager.createUser(new User(name, email)); // 새 User 객체를 생성하고 UserManager의 createUser 메소드 호출
}

// 사용자 업데이트 처리 함수
function updateUser() {
  const name = (document.getElementById("name") as HTMLInputElement).value; // 이름 입력 필드에서 이름 가져오기
  const email = (document.getElementById("email") as HTMLInputElement).value; // 이메일 입력 필드에서 이메일 가져오기
  userManager.updateUser(name, new User(name, email)); // 새 User 객체를 생성하고 UserManager의 updateUser 메소드 호출
}

// 사용자 삭제 처리 함수
function deleteUser() {
  const name = (document.getElementById("name") as HTMLInputElement).value; // 이름 입력 필드에서 이름 가져오기
  userManager.deleteUser(name); // UserManager의 deleteUser 메소드 호출
}
