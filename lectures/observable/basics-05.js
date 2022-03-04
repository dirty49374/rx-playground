const observable = new Observable(subscribe => {
  subscribe.next(1);
  subscribe.next(2);
  subscribe.next(3);
  // error도 보낼 수 있다
  subscribe.error(-999);
});

const observer = {
  next: v => console.log('observed value', v),
  error: e => console.log('observed error', e),
  complete: () => console.log('completed'),
}

observable.subscribe(observer);
