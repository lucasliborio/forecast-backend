import { SetupServer } from '@src/server';
import supertest from 'supertest';

beforeAll(() => {
  const server = new SetupServer();
  server.init();
  global.testRequest = supertest(server.getApp()); //Sobe um servidor automaticamente para testar sua rota
});
