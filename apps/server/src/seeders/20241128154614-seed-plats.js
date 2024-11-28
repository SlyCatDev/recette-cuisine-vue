'use strict';

import plats from '../data/plats.json';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('plats', plats, {});
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('plats', null, {});
  },
};