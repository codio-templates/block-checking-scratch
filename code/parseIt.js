const fs = require('fs')
const parser = require('scratch-parser')
 
const buffer = fs.readFileSync('setupfixit2.sb3')
parser(buffer, false, (err, project) => {
    if (err){
      console.log(err)
    } 
    console.log(project)
})