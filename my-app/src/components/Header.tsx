import React from 'react'

const styles = {
  header: {
    width: '100%',
    height: '60px',
    backgroundColor: '#282c34',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem'
  }
}

export default function Header() {
  return (
    <header style={styles.header}>
      웹 프론트엔드 강의 - React 수업 자료
    </header>
  )
}
