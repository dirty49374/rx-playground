const observable = new Observable(subscribe => {
  subscribe.next(1);
  subscribe.next(2);
  subscribe.next(3);

  // 예외가 발생되어도 error()를 호출한다
  throw new Error('my error');
});

const observer = {
  next: v => console.log('observed value', v),
  error: e => console.log('observed error', e),
  complete: () => console.log('completed'),
}

observable.subscribe(observer);
