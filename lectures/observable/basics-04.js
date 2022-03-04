const observable = new Observable(subscribe => {
  // next() 함수를 호출하면, observer에 값을 보낼 수 있다.
  subscribe.next(1);
  subscribe.next(2);
  subscribe.next(3);
});

const observer = {
  next: v => console.log('observed value', v),
  error: e => console.log('observed error', e),
  complete: () => console.log('completed'),
}

observable.subscribe(observer);
