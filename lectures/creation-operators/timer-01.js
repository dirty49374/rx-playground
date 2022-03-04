// timer는 지정된 시간 이후에 한번 값을 전달한다
const subscription = timer(1000)
  .subscribe({
    // 값은 0으로 한번 호출된다
    next: console.log,
    // 호출된다
    complete: () => console.log('completed'),
  });

setTimeout(() => {
  // 1초뒤 complete 되었지만, 4초뒤 unsubscribe 해 보자
  subscription.unsubscribe();
  console.log('unsubscribed');
}, 4000);