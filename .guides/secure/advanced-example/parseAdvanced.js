const fs = require('fs')

const blocks = process.argv[2] // array of desired blocks
const debug = false // logs variables if true

// generate array for all sprite blocks
const generateSpriteBlocks = (data) => {
  let blocks = []
  for(let i = 0; i < data.length; i++){
    let obj = data[i].blocks
    for(let key in obj){
      blocks.push(obj[key].opcode)
    }
  }
  return blocks
}

// generate array for all stage blocks
const generateStageBlocks = (data) => {
  let blocks = []
  for(let key in data.blocks){
    blocks.push(data.blocks[key].opcode)
  }
  return blocks
}

// generate array for all blocks
const generateStudentBlocks = (sprite, stage) => {
  return sprite.concat(stage)
}

// check for desired blocks
const checkBlocks = (desired, student) => {
  let results = []
  desired.forEach(block => {
    if(student.includes(block)){
      results.push({
        name : block,
        present : true,
        error : null
      })
    } else {
      results.push({
        name : block,
        present : false,
        error : `You did not use the ${block} block.`
      })
    }
  })
  return results
}

const logResults = (results) => {
  let failed = false
  results.forEach(result => {
    if(!result.present){
      console.log(result.error)
      failed = true
    }
  })
  
  if(failed){
    process.exit(1)
  } else {
    console.log('You have used all of the required blocks')
    process.exit(0)
  }
}

// read the text file and generate desired blocks
fs.readFile(blocks, 'UTF-8', (err, data) => {
  // log error when reading text file
  if(err){
    console.log(err)
  }
  
  // transform string into list of strings
  let desiredBlocks = data.split('\n')
  
  // read the JSON file check the blocks
  fs.readFile('project.json', desiredBlocks, (err, data) => {
    // log error when reading JSON file
    if (err){
      console.log(err)
    }

    const jsonParsed = JSON.parse(data) // parse JSON file
    const sprites = jsonParsed.targets.slice(1) // array of sprite objects
    const stage = jsonParsed.targets[0] //stage object
    let stageBlocks = generateStageBlocks(stage) 
    let spriteBlocks = generateSpriteBlocks(sprites) 
    let studentBlocks = generateStudentBlocks(spriteBlocks, stageBlocks)
    let results = checkBlocks(desiredBlocks, studentBlocks)
    logResults(results)

    // log variables for debugging purposes
    if(debug){
  //     console.log(jsonParsed)
  //     console.log(sprites)
  //     console.log(studentBlocks)
  //     console.log(stage)
  //     console.log(stageBlocks)
      console.log(spriteBlocks)
  //     console.log(studentBlocks)
      console.log(blocks)
  //     console.log(results)
    }
  })
})
