exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('carpark').del()
    .then(function () {
      // Inserts seed entries
      return knex('carpark').insert([
        {id: 1, name: 'test', rego: '123', mobile: '', parked: false, blocked: false, comments: ''},
        {id: 2, name: '', rego: '', mobile: '', parked: false, blocked: false, comments: ''},
        {id: 3, name: '', rego: '', mobile: '', parked: false, blocked: false, comments: ''},
        {id: 4, name: '', rego: '', mobile: '', parked: false, blocked: false, comments: ''},
        {id: 5, name: '', rego: '', mobile: '', parked: false, blocked: false, comments: ''},
        {id: 6, name: '', rego: '', mobile: '', parked: false, blocked: false, comments: ''},
        {id: 7, name: '', rego: '', mobile: '', parked: false, blocked: false, comments: ''},
        {id: 8, name: '', rego: '', mobile: '', parked: false, blocked: false, comments: ''},
        {id: 9, name: '', rego: '', mobile: '', parked: false, blocked: false, comments: ''},
        {id: 10, name: '', rego: '', mobile: '', parked: false, blocked: false, comments: ''}
      ])
    })
}
