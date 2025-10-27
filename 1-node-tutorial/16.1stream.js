const {createReadStream}=require('fs')
const { getDefaultHighWaterMark } = require('stream')

const stream=createReadStream('./content/big.txt',{encoding:'utf8',highWaterMark:9000})

stream.on('data',(result)=>{
    console.log(result)
})
stream.on('error',(err)=>{
    console.log(err)
})