// timer를 interval처럼 쓸 수도 있다
// 0초에 시작하고, 매 1초마다 발생한다
const subscription = timer(0, 1000)
  .subscribe({
    // 값은 0, 1, 2, ...
    next: console.log,
    // 애석하게도 호출되지 않는다
    complete: () => console.log('completed'),
  });

setTimeout(() => {
  // 4초뒤 unsubscribe 한다
  subscription.unsubscribe();
  console.log('unsubscribed');
}, 4000);
