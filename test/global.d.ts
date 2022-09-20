//sobrescrevendo tipos globais em NODEJS
/* declare namespace NodeJS{
    interface testRequest {
        testRequest: import('supertest').SuperTest<import('supertest').Test>; //necessario fazer import inline para que funcione
        //caso esse import seja feito TOP LEVE IMPORT ele não sobrescreverá
    }
}  */

declare var testRequest: import('supertest').SuperTest<import('supertest').Test>;
