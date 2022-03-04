const ob1 = timer(0, 1000);
const ob2 = timer(500, 1000);

// observable들의 값이 변화할때마다, 최종값을 조합해서 반환한다.
// 단) 모든 값을 읽은 이후에만 적용된다.
const sub1 = combineLatest([ob1, ob2])
  .subscribe(console('combineLatest array'));

setTimeout(() => {
  sub1.unsubscribe();
  console.log('unsubscribed');
}, 1500);
