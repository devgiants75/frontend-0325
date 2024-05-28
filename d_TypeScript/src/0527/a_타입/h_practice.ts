{
  //& g_practice.ts 유니언 3번 문제 정답
  type Admin = {
    id: number;
    isAdmin: boolean;
  };

  type User = {
    id: number;
    username: string;
  };

  type Person = Admin | User;

  function identifyPerson(person: Person) {
    if ("isAdmin" in person) {
      console.log("This person is an Admin.");
    } else if ("username" in person) {
      console.log("This person is a User.");
    }
  }

  const adminPerson: Person = { id: 1, isAdmin: true };
  const userPerson: Person = { id: 2, username: "typescriptUser" };

  identifyPerson(adminPerson); // This person is an Admin.
  identifyPerson(userPerson); // This person is a User.

  //& g_practice.ts 인터섹션 3번 문제 정답

  type TeamMember = {
    memberId: string;
    name: string;
  };

  type Project = {
    projectId: string;
    projectName: string;
  };

  type TeamMemberWithProject = TeamMember & Project;

  function assignProjectToTeamMember(
    member: TeamMember,
    project: Project
  ): TeamMemberWithProject {
    return { ...member, ...project };
  }
}