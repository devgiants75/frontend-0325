import React, { useState } from 'react'
import axios from 'axios';
// import { Cookies, useCookies } from 'react-cookie';
// import { useUserStore } from '../../stores';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import {Card, CardContent,TextField, CardActions, Button, Box, Typography} from '@mui/material';

export default function SingIn() {
  
    const [userId, setUserId] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');
    // const [cookies, setCookies] = useCookies();
    const navigator = useNavigate();
    // const {user, setUser} = useUserStore();

    const signInHandeler =() => {
        if(userId.length === 0 || userPassword.length ===0){
        alert('아이디와 비밀번호를 입력하세요.')
        return;
        }

        const data ={
          userId,
          userPassword
        }

        axios.post("http://localhost:4080/api/auth/signIn", data)
        .then((response) => {
            const responseData = response.data;
            console.log(responseData)
            if(!responseData.result){
              alert("로그인에 실패했습니다");
              return;
            }
            const {token, exprTime, user} = responseData.data;
            const expires = new Date();
            expires.setMilliseconds(expires.getMilliseconds() + exprTime);

            // setCookies('token',token, { expires });
            // setUser(user);
        })
        .catch((error)=>{
            alert('로그인에 실패했습니다')
        });
    }

  return (
    <>
      <Typography
        variant="h3"
        paddingTop={"2vw"}
        textAlign={"center"}
        fontFamily={"logoFont"}
      >
        로그인
      </Typography>
      <Box
        display={"flex"}
        justifyContent={"center"}
        style={{ paddingTop: "3vw" }}
      >
        <Card
          variant="outlined"
          sx={{ width: "30vw", height: "25vw" }}
          style={{ marginBottom: "5vw" }}
        >
          <CardContent>
            <TextField
              fullWidth
              label="아이디"
              type="email"
              variant="standard"
              onChange={(e) => setUserId(e.target.value)}
            />
            <TextField
              fullWidth
              label="비밀번호"
              type="password"
              variant="standard"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </CardContent>
          <CardActions>
            <Box sx={{ width: "100vw" }}>
              <Box component="div">
                <Link to={"/"}>
                  <Button
                    fullWidth
                    onClick={() => signInHandeler()}
                    variant="contained"
                    sx={{ bgcolor: "#F0A500" }}
                  >
                    로그인
                  </Button>
                </Link>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                component="div"
                style={{ marginTop: "4vw" }}
              >
                <Button
                  fullWidth
                  onClick={() => navigator("/findId")}
                  variant="contained"
                  sx={{ bgcolor: "#F0A500" }}
                >
                  아이디 찾기
                </Button>
                <Button
                  fullWidth
                  onClick={() => navigator("/findPassword")}
                  variant="contained"
                  sx={{ bgcolor: "#F0A500" }}
                >
                  비밀번호 찾기
                </Button>
              </Box>
              <Box
                component="div"
                display="flex"
                justifyContent={"space-between"}
                mt={6}
                mr={1}
              >
                <Typography>신규 사용자 이신가요?</Typography>
                <Typography onClick={() => navigator("/signup")}>
                  회원가입
                </Typography>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}