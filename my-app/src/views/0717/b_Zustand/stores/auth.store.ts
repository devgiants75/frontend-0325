// auth: 허가, 인증

import { create } from "zustand";

//# 사용자 인증을 관리하는 스토어
interface AuthState {
  user: string | null;
  login: (user: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (user) => set({ user }), // 로그인 상태 설정
  logout: () => set({ user: null }) // 로그아웃 상태 설정
}))