const faker = require('faker');

const ids = [];
for(let i = 0; i < 50; i++) {
  ids.push(i + 1);
}
const fakeData = ids.map((id) => {
  return {
    name: faker.company.companyName(),
    address: faker.address.streetAddress(),
    phone: faker.phone.phoneNumber(),
    createdBy: 'seed'
  };
});

exports.seed = function(knex, Promise) {
  return knex('restaurants').del()
    .then(function () {
      return knex('restaurants').insert(fakeData);
    });
};
