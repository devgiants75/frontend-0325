
// { Img }: export 내보내기로 가져오는 컴포넌트
// Component01: export default 내보내기로 가져오는 컴포넌트
import React from 'react'
import ExportDefault, { Img } from './Component01'

export default function Component02() {
  return (
    <div>
      <h4>Component02 컴포넌트 - Img 컴포넌트 사용</h4>
      <Img />

      <ExportDefault />
    </div>
  )
}
