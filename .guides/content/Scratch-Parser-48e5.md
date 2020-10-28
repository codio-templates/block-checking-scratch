----------

## Scratch Parser

There is a Scratch Parser [node package](https://www.npmjs.com/package/scratch-parser). The documentation is incorrect, the parser requires three parameters. Add a Boolean as the second parameter; `true` means you are parsing a sprint, `false` means you are parsing the entire project.

```javascript
parser(buffer, false, (err, project) => {
    if (err){
      console.log(err)
    } 
    console.log(project)
})
```

The result of the Scratch Parser lacks details as opposed to the `project.json` file when unzipping the project.

{try it}(node code/parseIt.js)