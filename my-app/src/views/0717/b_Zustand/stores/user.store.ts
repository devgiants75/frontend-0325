import { create } from "zustand";

//# 회원 정보 정의
interface User {
  id: number;
  name: string;
}

//# (전체) 회원 상태 정의
interface MemberState {
  members: User[];
  addMember: (member: User) => void;
  updateMember: (id: number, name: string) => void;
  deleteMember: (id: number) => void;
}

//! 회원에 대한 전역 상태 관리
export const useMemberStore = create<MemberState>((set) => ({
  members: [],
  addMember: (member) => 
    set((state) => ({
      members: [...state.members, member],
    }))
  ,
  updateMember: (id, name) =>
    set((state) => ({
      members: state.members.map((user) =>
        user.id === id ? { ...user, name } : user
      )
    }))
  ,
  deleteMember: (id) =>
    set((state) => ({
      members: state.members.filter((user) => user.id !== id),
    }))
}));