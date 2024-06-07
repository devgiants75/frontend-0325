{
  /*
  <h2>${user.name}</h2>
  <p><strong>Username:</strong> ${user.username}</p>
  <p><strong>Email:</strong> ${user.email}</p>
  */

  interface User {
    id: number;
    name: string;
    username: string;
    email: string;
  }

  type Users = User[];

  const fetchUsers = async (page: number, limit: number = 3): Promise<Users> => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`);

      if (!response.ok) {
        throw new Error('네트워크 응답이 정상적이지 않습니다.');
      }

      const users: Users = await response.json();
      return users;
    } catch (error) {
      console.error('Fetch error: ', error);
      return [];
    }
  }

  const createUserCard = (user: User): HTMLElement => {
    const userCard = document.createElement('div');
    userCard.className = 'user-card';
    userCard.innerHTML = `
      <h2>${user.name}</h2>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
    `;

    return userCard;
  }

  const displayUsers = (users: Users): void => {
    const userList = document.getElementById('user-list');

    if (userList) {
      userList.innerHTML = '';
      users.forEach((user) => {
        // const userCard = document.getElementById('user-card');
        const userCard = createUserCard(user);
        userList.appendChild(userCard);
      })
    }
  }

  let currentPage = 1;

  const updatePageInfo = (): void => {
    const pageInfo = document.getElementById('page-info');

    if (pageInfo) {
      pageInfo.textContent = `Page ${currentPage}`;
    }
  }

  const loadPage = async (page: number): Promise<void> => {
    const users = await fetchUsers(page);
    displayUsers(users);
    updatePageInfo();
  }

  const addEventListeners = (): void => {
    const prevPageButton = document.getElementById('prev-page');
    const nextPageButton = document.getElementById('next-page');

    if (prevPageButton && nextPageButton) {
      prevPageButton.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          loadPage(currentPage);
        }
      });

      nextPageButton.addEventListener('click', () => {
        currentPage++;
        loadPage(currentPage);
      });
    }
  }

  const init = (): void => {
    addEventListeners();
    loadPage(currentPage);
  }

  document.addEventListener('DOMContentLoaded', init);
}