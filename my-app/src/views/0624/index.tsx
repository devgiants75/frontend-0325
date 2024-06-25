import React from 'react'
import Component01 from './b_Component/Component01'
import Component02Named from './b_Component/Component02'
import Component03 from './b_Component/Component03'
import JSX01 from './c_JSX/JSX01'
import JSX02 from './c_JSX/JSX02'
import JSX03 from './c_JSX/JSX03'

export default function Index() {
  return (
    <div>

      <h2>a_Route</h2>

      
      <h2>b_Component</h2>
      <Component01 />
      <Component02Named />
      <Component03 />

      <h2>c_JSX/TSX</h2>
      <JSX01 />
      <JSX02 />
      <JSX03 />

    </div>
  )
}
