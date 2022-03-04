const fetchUserSince$ = since =>
  ajax
    .getJSON(`https://api.github.com/users?since=${since}&per_page=2`)
    .pipe(
      map(v => v.map(p => p.login)),
      tap(v => console.log('received', v))
    );

// mergeScan의 적적한 예는 infinite scroll과 같은 경우이다.
// 입력값이 무엇인지 중요하지 않고, 계속해서 덧붙여 나간다.
// mergeScan()에 concurrent값을 추가하면, 동시에 발생되는 경우를 제한할 수 있다.
fromEvent(document, 'click')
  .pipe(
    mergeScan(
      (acc, _) => fetchUserSince$(acc.length).pipe(map(v => [...acc, ...v])),
      []
    )
  )
  .subscribe(console('mergeScan'));
