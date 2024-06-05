{
  /*
    <h2>${user.name}</h2>
    <p><strong>Username:</strong> ${user.username}</p>
    <p><strong>Email:</strong> ${user.email}</p>
  */
  /*
    <h2>${user.name}</h2>
    <p><strong>Username:</strong> ${user.username}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Phone:</strong> ${user.phone}</p>
    <p><strong>Website:</strong> ${user.website}</p>
  */

  interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
  }

  type Users = User[];

  const fetchUsers = async (): Promise<Users> => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!response.ok) {
        throw new Error('네트워크 요청이 정상적이지 않습니다.');
      }

      const users: Users = await response.json();
      return users;
    } catch (error) {
      console.error('Fetch error: ', error);
      return [];
    }
  };

  const createUserCard = (user: User): HTMLElement => {
    const userCard = document.createElement('div');
    userCard.className = 'user-card';
    // 데이터 속성에 사용자 ID를 설정
    // <div data-set='1'></div>
    userCard.dataset.userId = user.id.toString();
    userCard.innerHTML = `
      <h2>${user.name}</h2>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
    `;
    return userCard;
  };

  const displayUsers = (users: Users): void => {
    const userList = document.getElementById('user-list');
    if (userList) {
      userList.innerHTML = '';
      users.forEach((user) => {
        // const userCard = document.getElementById('user-card');
        const userCard = createUserCard(user);
        userList.appendChild(userCard);
      });
    }
  };

  const showModal = (user: User): void => {
    const modal = document.getElementById('user-modal');
    const modalContent = document.getElementById('modal-user-details');

    if (modal && modalContent) {
      modalContent.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Website:</strong> ${user.website}</p>
      `;
      modal.style.display = "block";
    }
  };

  const addEventListeners = (users: Users): void => {
    const userList = document.getElementById('user-list') as HTMLElement;

    if (userList) {
      userList.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        // HTML 요소 객체(DOM)에 대한 .closest()메서드
        // : 해당 target과 가장 가까운 .user-card 클래스를 가진 조상 요소를 찾아 가져옴
        const userCard = target.closest('.user-card') as HTMLElement | null;

        if (userCard) {
          // HTML 요소 객체(DOM)에; 대한 .dataset 속성
          // : 해당 요소가 가진 데이터 속성을 가져오는 형식
          const userId = parseInt(userCard.dataset.userId || '0', 10);

          const user = users.find((u) => u.id === userId);

          if (user) {
            showModal(user);
          }
        }
      });
    }

    const modal = document.getElementById('user-modal') as HTMLElement;

    const closeModal = document.getElementsByClassName('close')[0] as HTMLElement;

    if (modal && closeModal) {
      closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
      });

      window.addEventListener('click', (event) => {
        if (event.target === modal) {
          modal.style.display = 'none';
        }
      });
    }
  };

  const init = async (): Promise<void> => {
    const users = await fetchUsers();
    displayUsers(users);
    addEventListeners(users);
  };

  document.addEventListener('DOMContentLoaded', init);
}
