import React from 'react';

import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import cardImage from '../../../assets/images/cat01.jpg';

//# 5. 외부 라이브러리
// : UI Framework

// 1. MUI
// : npm install @mui/material @emotion/react @emotion/styled

// 2. MUI Icon 사용
// : npm i @mui/icons-material

//! theme.ts

/*
  ? sx prop
  : MUI 테마에 정의된 값을 참조하거나 테마에서 설정된 스타일을 쉽게 적용 가능
  
  EX) 테마에 설정된 색상이나 타이포그래피 스타일을 sx prop을 통해 직접 참조 가능

  ? style prop
  : style prop은 CSS 스타일을 직접 적용하는 기본 HTML 방식
  
  : MUI 테마와는 독립적으로 작동, 테마 시스템 활용 불가

  : style을 사용하면 JavaScript 객체 형태로 스타일을 지정

  ----------------------------
  주요 CSS 속성 축약 명칭
    p: padding (패딩)
    px: 패딩을 좌우로 적용
    py: 패딩을 상하로 적용
    m: margin (마진)
    mx: 마진을 좌우로 적용
    my: 마진을 상하로 적용합

    bgcolor: background-color (배경색)
    color: 글자 색상

    width: 너비
    height: 높이
    maxWidth: 최대 너비
    maxHeight: 최대 높이
    minWidth: 최소 너비
    minHeight: 최소 높이

    display: 디스플레이 유형
    flexDirection: Flex 컨테이너의 자식 요소들의 방향
    justifyContent: Flex 아이템을 주축(main axis)에 따라 정렬하는 방법
    alignItems: Flex 아이템을 교차 축(cross axis)에 따라 정레하는 방법
    flexGrow: Flex 아이템의 성장 비율
    flexShrink: Flex 아이템의 축소 비율
    flexWrap: Flex 아이템의 감싸기(wrap) 여부

    fontSize: 글꼴 크기
    fontWeight: 글꼴 무게
    lineHeight: 줄 높이
    textAlign: 텍스트 정렬

    border: 테두리
    borderTop: 상단 테두리
    borderRight: 우측 테두리
    borderBottom: 하단 테두리
    borderLeft: 좌측 테두리
    borderRadius: 테두리 반경

    position: 위치
    top: 상단 위치
    right: 우측 위치
    bottom: 하단 위치
    left: 좌측 위치

    zIndex: z-인덱스
    boxShadow: 그림자
  ----------------------------
*/


export default function Style05() {
  return (
    <div>
      <Box 
        display="flex" 
        flexDirection="row" 
        p={1} 
        m={1} 
        sx={{ height: 100, bgcolor: 'secondary.main', color: 'text.secondary' }}
      >
        <Box p={1}>This Box renders as an HTML section element.</Box>
        <Box p={1}>This Box renders as an HTML section element.</Box>
        <Box p={1}>This Box renders as an HTML section element.</Box>
      </Box>

      <hr />

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 240 }}
          image={cardImage}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <hr />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            프론트엔드 평일 저녁반
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
