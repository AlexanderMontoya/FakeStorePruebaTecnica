const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

const targetPathProd = './src/environments/environment.prod.ts';

const apiUrl = process.env['API_URL'];

if(!apiUrl){
  throw new Error('API_URL is not set');
}

const envFileContent = `
export const environment = {
  apiUrl: "${apiUrl}"
};
`;

mkdirSync('./src/environments', { recursive: true });

writeFileSync(targetPathProd, envFileContent);