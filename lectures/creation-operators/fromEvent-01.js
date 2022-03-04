// event를 observable로 변환한다
const subscription = fromEvent(document, 'mousemove')
  .subscribe(console('mousemove'));

setTimeout(() => {
  subscription.unsubscribe();
  console.log('unsubscribed');
}, 500);
