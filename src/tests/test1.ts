const { fromEvent, interval, map, mergeAll, take, window } = require("rxjs");

exports.default = function (timeline, log) {
  const clicks = fromEvent(document, 'click')
    .pipe(timeline('click'));
  const sec = interval(1000)
    .pipe(timeline('sec'));
  const result = clicks.pipe(
    window(sec),
    map((win, n) => win.pipe(timeline(`${n}th map`), take(2))), // each window has at most 2 emissions
    mergeAll(),              // flatten the Observable-of-Observables
  );
  return result;
}
