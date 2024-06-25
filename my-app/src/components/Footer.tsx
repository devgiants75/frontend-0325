import React from 'react'

const styles = {
  footer: {
    width: '100%',
    height: '60px',
    backgroundColor: '#282c34',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // 1rem = 16px
    fontSize: '1rem' 
  }
}

export default function Footer() {
  return (
    <footer style={styles.footer}>
      강의명: 웹 프론트엔드 | 강사명: 이승아 | 강의장: E강의실
    </footer>
  )
}
