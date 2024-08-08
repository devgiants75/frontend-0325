import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavigationBar() {

  // 링크 주소를 저장하는 배열
  const links = [
    '/', 'components', 'projects', '0621', '0624', '0625', '0626', '0627', '0628', '0701', '0702', '0703', '0704', '0705', '0708', '0709', '0710', '0715', '0716', '0717', '0718', 'examples', 'json-server'
  ]

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        margin: "10px",
        padding: "10px 20px",
        border: "1px solid black",
        borderRadius: "5px",
      }}
    >
      {/* links 배열을 순회하면서 Link 컴포넌트 생성 */}
      {links.map((link) => (
        <NavLink
          key={link}
          to={link}
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "white" : "black",
            fontWeight: isActive ? "bold" : "normal",
            padding: '10px 15px',
            borderRadius: '5px',
            margin: '5px',
            backgroundColor: isActive ? 'red' : 'lightgray'
          })}
        >
          {link === "/" ? "HOME" : link}
        </NavLink>
      ))}
    </div>
  );
}
