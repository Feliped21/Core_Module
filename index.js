const fs = require('fs');

// leitura de um arquivo txt
fs.readFile('arquivo.txt', 'utf-8',(err, data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});