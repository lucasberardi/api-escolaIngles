'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'Ana Souza',
        ativo: true,
        email: 'ana@mail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Marcos Cintra',
        ativo: true,
        email: 'marcos@mail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Juliette Silva',
        ativo: true,
        email: 'juli@mail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Jorge Manolo',
        ativo: true,
        email: 'jorge@mail.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Pedro Pipoca',
        ativo: false,
        email: 'pedro@mail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
