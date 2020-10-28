const fs = require('fs')

const block = process.argv[2] // desired block
const debug = true // logs variables if true

fs.readFile('project.json', (err, data) => {
  // log error when reading JSON file
  if (err){
    console.log(err)
  }
  
  const jsonParsed = JSON.parse(data) // parse JSON file
  const sprites = jsonParsed.targets.slice(1) // array of sprite objects
  const stage = jsonParsed.targets[0] //stage object
  let studentBlocks = []
  let stageBlocks = []
  let spriteBlocks = []
  
  // generate array for all sprite blocks
  for(let i = 0; i < sprites.length; i++){
    let obj = sprites[i].blocks
    for(let key in obj){
      spriteBlocks.push(obj[key].opcode)
    }
  }
  
  // generate array for all stage blocks
  for(let key in stage.blocks){
    stageBlocks.push(stage.blocks[key].opcode)
  }
  
  // generate array for all blocks
  studentBlocks = spriteBlocks.concat(stageBlocks)
  
  // verify desired block is being used
  const result = studentBlocks.includes(block) ? true : false
  console.log(result)
  
  // log variables for debugging purposes
  if(debug){
//     console.log(jsonParsed)
//     console.log(sprites)
//     console.log(studentBlocks)
//     console.log(stage)
    console.log(stageBlocks)
    console.log(spriteBlocks)
    console.log(studentBlocks)
    console.log(block)
  }
})