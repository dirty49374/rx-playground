const observable$ = interval(1000).pipe(take(3));

// observable을 promise로 바꾼다. 가장 마지막에 나오는 값을 resolve한다.
lastValueFrom(observable$)
  .then(r => console.log('then =', r));

lastValueFrom(observable$.pipe(tap(() => { throw -999; })))
  .catch(e => console.error('catch = ', e));

// 주의) 꼭 필요하지 않으면 firstValueFrom을 쓸 것.
//      만약 complete가 호출되지 않거나 누락했으면, promise가 종료디지 않는다.
