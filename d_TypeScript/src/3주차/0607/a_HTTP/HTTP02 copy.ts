/*
! HTTP 프로토콜의 역할과 중요성 설명

? 1 HTTP 프로토콜 개요

"HTTP (HyperText Transfer Protocol)"

: 웹 상에서 클라이언트와 서버 간의 통신을 위한 규약
>> 요청(Request)과 응답(Response)의 형식으로 데이터를 교환

#
HTTP는 어떻게 작동하나요?

클라이언트가 서버에 특정 작업을 요청(예: 웹 페이지를 보여 달라는 요청)
서버는 이 요청을 처리하고 적절한 응답을 클라이언트에게 보냄
#

? 2 HTTP 요청과 응답 구조

=== HTTP 요청(Request) ===

- 메서드(Method): 작업의 종류를 지정
  (예: GET, POST, PUT, DELETE)

- URL: 요청 대상 리소스의 위치를 지정
  
- 헤더(Headers): 요청의 메타데이터를 포함
  (예: 인증 정보, 콘텐츠 유형)

- 본문(Body): POST, PUT 요청에서 데이터를 포함 가능

#
HTTP 요청은 다음 요소로 구성:

메서드(Method): 이것은 서버에게 무엇을 할지를 알려주는 동작 예를 들어, GET 메서드는 정보를 요청할 때 사용되고, POST 메서드는 정보를 서버에 제출할 때 사용
URL(Uniform Resource Locator): 요청하는 자원의 위치 예를 들어, https://wwwexamplecom/page는 'wwwexamplecom'이라는 서버의 'page'라는 자원을 가리킵니다
헤더(Headers): 요청에 대한 추가 정보를 포함 예를 들어, 웹 페이지의 언어 선호도나 요청된 파일의 형식 등을 지정할 수 있습니다
본문(Body): POST나 PUT 같은 요청에서 전송할 데이터를 담습니다
#

=== HTTP 응답(Response) ===

- 상태 코드(Status Code): 요청의 처리 결과를 나타냄
  (예: 200 OK, 404 Not Found, 500 Internal Server Error)

- 헤더(Headers): 응답의 메타데이터를 포함
  (예: 콘텐츠 유형, 캐시 제어)

- 본문(Body): 요청에 대한 실제 데이터를 포함
  (예: HTML, JSON)

#
HTTP 응답은 다음 요소로 구성:

상태 코드(Status Code): 요청이 성공적이었는지, 오류가 발생했는지를 알려주는 코드 예를 들어, 200 OK는 성공적인 응답을 나타내고, 404 Not Found는 요청한 자원을 찾을 수 없음을 나타냄
헤더(Headers): 응답에 대한 추가 정보를 제공, 예를 들어 응답 데이터의 형식을 지정
본문(Body): 실제 요청된 데이터를 포함 예를 들어, HTML 문서나 JSON 데이터 등이 될 수 있습니다
#

? 3 HTTP의 중요성

- 표준화된 통신: 모든 웹 클라이언트와 서버가 동일한 방식으로 통신 가능능

- 인터넷의 기초: 웹 페이지, API, 웹 애플리케이션 등 다양한 웹 서비스의 기반

- 확장성: HTTP/2, HTTP/3 등 지속적인 발전을 통해 성능과 보안이 향상

#
HTTP의 중요성
표준화된 통신: HTTP 덕분에 세계 어디에서나 모든 웹 브라우저와 서버가 서로 정보를 주고받을 수 있는 표준 방식을 갖게 되었습니다 이로 인해 사용자가 다양한 기기와 운영체제에서 일관된 인터넷 경험을 할 수 있습니다

인터넷의 기초: 웹 페이지 접속, 온라인 쇼핑, 비디오 스트리밍 등 대부분의 웹 서비스는 HTTP를 기반으로 작동

확장성: HTTP는 시간이 지남에 따라 발전하여 더 빠르고 안전한 버전이 개발되었습니다 예를 들어, HTTP/2는 한 번의 연결로 여러 요청과 응답을 동시에 처리할 수 있어 효율성이 크게 향상되었습니다
#

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
*

!========================================!
서버없는 프론트엔드 개발자가 왜 알아야 하는가
효율적인 디버깅:

네트워크 요청/응답의 작동 방식을 이해하면, 요청 실패 시 문제 원인을 신속하게 파악할 수 있습니다.
API 통합:

클라이언트 애플리케이션이 서버와 통신할 때 HTTP 프로토콜을 사용하여 RESTful API 또는 GraphQL API를 호출합니다. HTTP 프로토콜의 작동 원리를 이해하면 API 통합이 더 원활해집니다.
보안:

HTTPS를 통해 안전한 통신을 설정하는 방법을 이해하면, 데이터를 안전하게 전송할 수 있습니다. CORS 정책 이해는 보안 측면에서 중요합니다.
최적화:

HTTP/2, HTTP/3 등의 최신 프로토콜을 활용하여 성능 최적화가 가능합니다. 이는 애플리케이션의 응답 속도와 사용자 경험을 개선합니다.
사용자 경험:

네트워크 요청 지연 시간 최소화, 적절한 캐싱 설정 등을 통해 사용자에게 더 나은 경험을 제공할 수 있습니다.
협업:

서버 개발자와의 원활한 소통을 위해, HTTP 프로토콜과 클라이언트-서버 모델에 대한 이해는 필수적입니다. 이는 프로젝트의 성공적인 수행과 품질 향상에 기여합니다.
*/