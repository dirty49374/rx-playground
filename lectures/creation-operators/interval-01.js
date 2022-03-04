// interval은 지정된 시간마다 값을 전달한다
const subscription = interval(1000)
  .subscribe({
    next: console.log,
    // 애석하게도 호출되지 않는다
    complete: () => console.log('completed'),
  });

setTimeout(() => {
  // 4초뒤 unsubscribe 한다
  subscription.unsubscribe();
  console.log('unsubscribed');
}, 4000);
