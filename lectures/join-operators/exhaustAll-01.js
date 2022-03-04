timer(0, 1000)
  .pipe(
    // 5초간 테스트한다
    take(5),
    timeline('timer'),

    // 각 event를 observable로 변환한다
    // 변환된 observable은 300ms간격으로 5번의 event를 발생한다
    map(o => timer(0, 300).pipe(take(5), timeline(`timer-${o}`))),

    // exhaustAll은 기존 observable이 끝나기 전에 들어오는 observable은 모두 skip한다
    exhaustAll(),
    timeline('exhaustAll')
  )
  .subscribe(console('exhaustAll'));
