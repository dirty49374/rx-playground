const obs$ = ajax('https://api.github.com/users?per_page=5');

obs$.subscribe({
  next: v => console.log(JSON.stringify(v.response.map(p => p.login), null, 4)),
  error: e => console.error(e),
  complete: () => console.log('completed'),
});
