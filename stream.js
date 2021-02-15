const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog2.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog3.txt');

// on is data event listener , we receive buffer of data

// readStream.on('data', (chunk) => {
//     console.log('----------- New Chunk -----');
//     console.log(chunk.toString());
//     writeStream.write('\nNew Chunk\n');
//     writeStream.write(chunk);
// })

//piping
readStream.pipe(writeStream);