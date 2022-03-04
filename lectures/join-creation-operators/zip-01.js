// 각 observable 들을 묶어서 전달한다.
zip(of(1, 2, 3), of('one', 'two', 'three'))
  .subscribe(console('zip'));

// combineLatest는 변경될때마다 전달하지만, zip은 매번 모든 값이 업데이트되면 전달한다.
combineLatest(of(1, 2, 3), of('one', 'two', 'three'))
  .subscribe(console('combineLatest'));
