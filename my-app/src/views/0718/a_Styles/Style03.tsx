import React from 'react';
import styles from './styles/style03.module.css';

//# 3. CSS 모듈
// : 각 클래스가 컴포넌트에 국한되어 전역 네임스페이스 오염을 방지
export default function Style03() {
  return (
    <div className={styles.box}>
      This is a CSS module style component
    </div>
  )
}
