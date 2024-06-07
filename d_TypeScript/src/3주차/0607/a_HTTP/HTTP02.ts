/*
! HTTP 프로토콜의 역할과 중요성 설명

? 1. HTTP 프로토콜 개요

"HTTP (HyperText Transfer Protocol)"

: 웹 상에서 클라이언트와 서버 간의 통신을 위한 규약
>> 요청(Request)과 응답(Response)의 형식으로 데이터를 교환

? 2. HTTP 요청과 응답 구조

=== HTTP 요청(Request) ===

- 메서드(Method): 작업의 종류를 지정
  (예: GET, POST, PUT, DELETE)

- URL: 요청 대상 리소스의 위치를 지정
  
- 헤더(Headers): 요청의 메타데이터를 포함
  (예: 인증 정보, 콘텐츠 유형)

- 본문(Body): POST, PUT 요청에서 데이터를 포함 가능

=== HTTP 응답(Response) ===

- 상태 코드(Status Code): 요청의 처리 결과를 나타냄
  (예: 200 OK, 404 Not Found, 500 Internal Server Error)

- 헤더(Headers): 응답의 메타데이터를 포함
  (예: 콘텐츠 유형, 캐시 제어)

- 본문(Body): 요청에 대한 실제 데이터를 포함
  (예: HTML, JSON)

? 3 HTTP의 중요성

- 표준화된 통신: 모든 웹 클라이언트와 서버가 동일한 방식으로 통신 가능능

- 인터넷의 기초: 웹 페이지, API, 웹 애플리케이션 등 다양한 웹 서비스의 기반

- 확장성: HTTP/2, HTTP/3 등 지속적인 발전을 통해 성능과 보안이 향상

! HTTP 요청 예시
사용자가 웹 브라우저에 'https://jsonplaceholdertypicodecom/posts/1'을 입력하여 첫 번째 게시글을 요청

? HTTP 요청
{
  "method": "GET",
  "url": "https://jsonplaceholdertypicodecom/posts/1",
  "headers": {
    "Accept": "application/json"
  }
}

>> 
메소드(Method): GET은 서버로부터 데이터를 요청하는 메소드

URL: 리소스의 위치를 나타냄
  여기서는 첫 번째 게시글의 정보를 요청

헤더(Headers): 클라이언트가 JSON 형식의 응답을 원한다고 서버에 알림
  (Accept: application/json)

? 서버 응답
{
  "statusCode": 200,
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
}

>>
상태 코드(StatusCode): 200 OK는 요청이 성공적으로 처리되었음을 나타냄

헤더(Headers): 응답 데이터의 형식이 JSON임을 나타냄
  (Content-Type: application/json)

본문(Body): 요청된 게시글의 정보를 JSON 형식으로 포함
  여기에는 사용자 ID, 게시글 ID, 제목, 내용 등이 포함

*
=== fetch() 응답 객체의 속성들 ===

fetch() 함수를 사용하면 Promise를 반환하며, 이 Promise는 응답 객체(Response)로 이어짐
>> 이 객체는 다음과 같은 속성을 포함

ok: 응답 상태 코드가 200-299 범위인 경우 true를 반환
>> 요청이 성공적으로 완료되었음을 나타냄

status: HTTP 상태 코드를 나타내는 정수 값 (예: 200, 404)

statusText: HTTP 상태 코드에 대한 텍스트 메시지 (예: "OK", "Not Found")

headers: 응답 헤더들을 다루는 Headers 객체 헤더를 검색하고 접근하는 데 사용

url: 응답이 온 URL

redirected: 요청이 리다이렉트되었는지 여부를 나타냄

type: 응답의 유형을 나타냄 (예: "basic", "cors")

body: 읽을 수 있는 스트림으로서, 응답의 본문을 제공
>> 해당 스트림은 json(), text(), blob(), formData() 등의 메소드를 사용하여 데이터로 변환 가능

=== Axios 응답 객체의 속성들 ===
Axios를 사용하면 응답 객체는 다음과 같은 속성을 포함

data: 서버로부터 반환된 실제 데이터 설정에 따라 자동으로 JSON으로 파싱 가능

status: HTTP 상태 코드

statusText: HTTP 상태 코드에 대한 설명 문자열

headers: 서버에서 응답으로 보낸 HTTP 헤더들

config: 요청에 사용된 Axios의 설정 객체

request: 요청을 보낼 때 사용된 XMLHttpRequest 객체 (브라우저 환경에서만 해당)
*/