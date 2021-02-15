const fs = require('fs');

//reading files, second callback is asynchronous
// fs.readFile('./docs/blog.txt', (err, data) => {
// if(err){
//     console.log(err);
// }
// console.log(data.toString());
// });

// console.log('last line');

// writing files , if the file doesn't exist it creates the file
// fs.writeFile('./docs/blog.txt', 'jo write kkt', ()=> {
//     console.log('file was written');
// });

//directories 
// if(!fs.existsSync('./assests')){ 
// fs.mkdir('./assets', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log('folder created');
// });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         } 
//         console.log('folder deleted');
//     });
// }

// deleting files

// if(fs.existsSync('./docs/deleteme.txt')){
//     console.log('jo existuje');
//     fs.unlink('./docs/deleteme.txt', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('file deleted');
//     })
// }