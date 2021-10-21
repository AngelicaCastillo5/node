//para levantar el servidor
const http=require('http')
const url=require('url')
const fs=require('fs')

http.createServer((req,res)=>{
    console.log('Dentro del servicio')
    res.end()
}


)
.listen(3000,()=>{console.log('servicio http://localhost:3000')})