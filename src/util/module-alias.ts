import * as path from 'path';
import * as moduleAlias from 'module-alias';

const files = path.resolve(__dirname, '../..'); //voltando duas pastas e criando um path completo
console.log(files);
moduleAlias.addAliases({
  '@src': path.join(files, 'src'),
  '@test': path.join(files, 'test'),
});
