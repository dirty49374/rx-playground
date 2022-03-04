const observable = new Observable(subscribe => {
  let count = 0;
  const interval = setInterval(() => {
    console.log('interval called');
    subscribe.next(++count);
  }, 1000);

  return () => {
    // unsubscribe시에 resource를 정리할 수 있다.
    clearInterval(interval);
    console.log('interval cleared');
  }
});

const observer = {
  next: v => console.log('observed value', v),
  error: e => console.log('observed error', e),
  complete: () => console.log('completed'),
}

const subscription = observable.subscribe(observer);
setTimeout(() => {
  subscription.unsubscribe();
}, 3000);
