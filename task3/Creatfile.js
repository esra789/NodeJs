const fs = require('fs');
fs.writeFile('welcome.txt','hello',(error)=>{
    if (error) throw error
    console.log('the file has been created')
})
fs.readFile('welcome.txt',(error,data)=>{
    if (error) throw error
    console.log(data.toString())
})