const observable$ = interval(1000);

// observable을 promise로 바꾼다. 가장 먼저 나오는 값을 resolve한다.
firstValueFrom(observable$)
  .then(r => console.log('then =', r));

firstValueFrom(observable$.pipe(tap(() => { throw -999; })))
  .catch(e => console.error('catch = ', e));
