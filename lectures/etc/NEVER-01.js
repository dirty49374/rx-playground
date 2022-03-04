// 아무것도 발생하지 않아, 절대 끝나지 않는다.
const subscription = NEVER.subscribe(console('NEVER'));

setTimeout(() => {
  subscription.unsubscribe();
  console.log('force unsubscribed');
}, 5_000);
