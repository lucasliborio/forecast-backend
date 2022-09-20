const { resolve } = require('path');
const root = resolve(__dirname);
module.exports = {
  rootDir: root,
  displayName: 'root-tests', //Adiciona um label para diferenciar os tipos de testes
  testMatch: ['<rootDir>/src/**/*.test.ts'], // qual serão os arquvios que serão testados
  testEnvironment: 'node',
  clearMocks: true, //limpar os mocks por padrão
  preset: 'ts-jest',
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@test/(.*)': '<rootDir>/test/$1',
  },
};