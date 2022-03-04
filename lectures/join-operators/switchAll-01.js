timer(0, 1000)
  .pipe(
    // 5초간 테스트한다
    take(5),
    timeline('timer'),

    // 각 event를 observable로 변환한다
    // 변환된 observable은 300ms간격으로 5번의 event를 발생한다
    map(o => timer(0, 300).pipe(take(5), timeline(`timer-${o}`))),

    // switchAll은 exhaustAll과 반대로, 새 observable이 나타나면 바로 switch한다
    switchAll(),
    timeline('switchAll')
  )
  .subscribe(console('switchAll'));
