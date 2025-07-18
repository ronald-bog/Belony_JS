//const fs = require('fs').promises;
import { promises as fs } from 'fs';

fs.writeFile('./archivoPr.txt', 'Hola como estas', 'utf-8')
    .then(() => console.log('Exitoooooooooooooooo'))
    .catch(() => console.log('Has fallado'));



