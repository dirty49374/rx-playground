const ob1 = timer(0, 1000);
const ob2 = timer(500, 1000);

// array대신 object로 반환한다
const sub1 = combineLatest({ ob1, ob2 })
  .subscribe(console('combineLatest object'));

setTimeout(() => {
  sub1.unsubscribe();
  console.log('unsubscribed');
}, 1500);
