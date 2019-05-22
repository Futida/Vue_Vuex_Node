export default Object.freeze({
  users: {
    create: 'users/add',
    delete: (id) => `users/delete/' + ${id}`,
    update: (id) => `users/update/' + ${id}`,
    get: 'users',
  },
});

