const observable = new Observable(subscribe => {
  subscribe.next(1);
  subscribe.next(2);
  subscribe.next(3);
  subscribe.error(-999);

  // 한번 에러를 발생하면 끝이다
  subscribe.next(4);
  subscribe.error(-999);
  subscribe.complete();
});

const observer = {
  next: v => console.log('observed value', v),
  error: e => console.log('observed error', e),
  complete: () => console.log('completed'),
}

observable.subscribe(observer);
