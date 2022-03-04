function addClickHandler(handler) {
  document.addEventListener('mousemove', handler);
}
 
function removeClickHandler(handler) {
  document.removeEventListener('mousemove', handler);
}

// handler 함수를 등록하는 방식을 observable로 전환한다
const clicks = fromEventPattern(
  addClickHandler,
  removeClickHandler
);

const subscription = clicks.subscribe(console('fromEventPattern'));
setTimeout(() => subscription.unsubscribe(), 500);
