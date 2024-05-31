{
  //& 싱글톤 패턴
  // : 특정 클래스의 인스턴스가 프로그램 내에서 오직 하나만 존재하도록 보장하는 디자인 패턴

  // 주로 자원을 공유해야 하는 상황에서 유용
  // , 일관된 상태를 유지하고 싶을 때 적합

  //? 사용 예시
  // : 데이터베이스 연결이나 로그 파일 핸들러와 같이 시스템 전체에서 단 하나만 있어야 하는 리소스를 관리할 때 사용

  //? 싱글톤 패턴의 구현 방법

  // 1) 생성자를 비공개로 설정
  // : 클래스의 외부에서 new 키워드를 사용하여 인스턴스를 생성할 수 없도록 설정

  // 2) 클래스 내부에서 인스턴스 생성
  // : '클래스 자체가 자신의 유일한 인스턴스를 생성하고 관리'

  // 3) 전역 접근점 제공
  // : 인스턴스에 접근할 수 있는 정적 메소드(보통 getInstance라고 명명)를 제공
  // >> 필요할 때 인스턴스를 생성하고, 이미 인스턴스가 존재하면 기존 인스턴스를 반환

  //! TypeScript에서의 싱글톤 패턴 구현 예제
  // 로거 기능을 싱글톤으로 구현
  // : 로거는 애플리케이션의 다양한 부분에서 메시지를 로깅하는 데 사용

  // LogLevel 타입 정의
  type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'fatal';

  // Logger 클래스 정의
  class Logger {
    private static instance: Logger;
    private logLevel: LogLevel = 'info';
    private logs: string[] = [];

    // 외부에서 직접적인 인스턴스 생성을 불가능하게 설정
    private constructor() {}

    public static getInstance(): Logger {
      if(!Logger.instance) {
        Logger.instance = new Logger();
      }
      return Logger.instance;
    }

    public setLogLevel(level: LogLevel): void {
      this.logLevel = level;
    }

    public log(message: string, level: LogLevel = 'info'): void {
      const levels: LogLevel[] = ['debug', 'info', 'warn', 'error', 'fatal'];

      // 입력된 로그 레벨이 현재 설정된 로그 레벨 이상일 때만 로그를 기록
      if (levels.indexOf(level) >= levels.indexOf(this.logLevel)) {
        const timestamp = new Date().toISOString();
        const formattedMsg = `[${timestamp}] [${level}]: ${message}`;

        this.logs.push(formattedMsg);
        console.log(formattedMsg);
      }
    }

    public printLogHistory(): void {
      console.log(this.logs.join('\n'));
    }
  }

  const logger = Logger.getInstance();
  logger.setLogLevel('debug'); // 로그 레벨을 debug로 설정

  logger.log('이것은 디버그 메시지입니다.', 'debug');
  logger.log('이것은 정보출력 메시지입니다.', 'info');

  // logger.printLogHistory();

  const anotherLogger = Logger.getInstance();
  anotherLogger.printLogHistory();


  //?
  // : Logger 클래스는 자신의 유일한 인스턴스를 관리하며, 이 인스턴스에 대한 전역 접근점을 제공
  // : getInstance 메소드는 인스턴스가 아직 생성되지 않았다면 새로 생성하고, 이미 존재한다면 기존 인스턴스를 반환

  // >> Loogger 클래스의 모든 사용자가 동일한 인스턴스를 공유

  //# ================== #//
  // 로거(Logger)
  // : 소프트웨어의 실행 중에 발생하는 이벤트를 기록하는 도구

  // - 개발자나 시스템 관리자가 소프트웨어의 상태를 실시간으로 모니터링하거나, 나중에 문제를 진단할 수 있는 기록을 남기는 것이 가능

  // - 주로 디버깅, 오류 추적, 시스템 상태 모니터링, 보안 감사 등 다양한 목적으로 사용
}
