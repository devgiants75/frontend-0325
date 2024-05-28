// ts-node b_intersection.ts
{
  // 1. 사용자와 권한 허용에 대한 타입 정의
  type UserInfo = {
    userId: number;
    name: string;
    email: string;
    isAdmin: boolean; // 관리자 여부를 확인할 수 있는 필드
  };

  type UserPermissions = {
    canEdit: boolean;
    canDelete: boolean;
  };

  type UserAdminData = UserInfo & UserPermissions;

  // 2. 사용자의 권한 정보를 확인하는 함수 정의
  function handleUserPermissions(user: UserAdminData) {
    console.log(`${user.userId}, ${user.name}`);

    if (user.canEdit) {
      console.log('사용자 데이터 편집 가능');
    } else {
      console.log('사용자 데이터 편집 불가능');
    }

    if (user.canDelete) {
      console.log('사용자 데이터 삭제 가능');
    } else {
      console.log('사용자 데이터 삭제 불가능');
    }
  }

  // 3. 사용자 데이터 가져오기(비동기 함수/데이터 요청)
  async function fetchUserData(userId: number) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

      if (!response.ok) {
        // 통신이 정상적이지 않은 경우
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      if (data.id) {
        const userInfoData: UserInfo = {
          userId: data.id,
          name: data.name,
          email: data.email,
          isAdmin: true
        };

        if (userInfoData.isAdmin) {
          const permissionsData: UserPermissions = {
            canEdit: true,
            canDelete: true,
          };
    
          const userAdminData: UserAdminData = {
            ...userInfoData,
            ...permissionsData,
          };
    
          handleUserPermissions(userAdminData);

        } else {
          console.log(`${userInfoData.name}은 관리자가 아닙니다.`);
        }
      } else {
        console.log('사용자의 데이터가 잘못되었습니다.');
      }
    } catch (error) {
      console.error(error);
    }
  }
  fetchUserData(2);
}
