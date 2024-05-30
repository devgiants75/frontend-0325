// ts-node a_union.ts
{
  // 1. 사용자의 데이터에 대한 응답 정의(type 별칭)
  type Success = {
    name: string;
    email: string;
  };

  type Fail = {
    error: string;
  };

  type UserResponse = Success | Fail;

  // 2. 사용자의 데이터 요청에 대한 응답을 처리하는 함수 정의
  function handleResponse(response: UserResponse) {
    if ('error' in response) {
      console.error(response.error);
    } else {
      console.log(`Name: ${response.name}, Email: ${response.email}`);
    }
  }

  // 3. async/await를 사용하여 JSONPlaceholder에서 사용자 데이터를 가져오는 함수 정의
  async function fetchUserData(userId: number) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

      if (!response.ok) {
        // 통신이 정상적이지 않은 경우
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data.id) {
        const userData: UserResponse = {
          name: data.name,
          email: data.email
        };
        handleResponse(userData);
      } else {
        handleResponse({ error: 'User data is incomplete' });
      }
    } catch (error) {
      handleResponse({ error: error instanceof Error ? error.message : 'Unknown error' });
    }
  }

  fetchUserData(2);
  fetchUserData(222);
}
