// throwError()는 error를 발생하는 observable을 생성한다.
throwError(() => -999)
  .subscribe(console('throwError'));