//para levantar el servidor
const http=require('http')
const url=require('url')
const fs=require('fs')

http.createServer((req,res)=>{
    
    if (req.url.startsWith('/crear')){
        let agnio=new Date().getFullYear()
        let mes=new Date().getMonth() +1
        let dia=new Date().getDate()
        //se concatena 
        let fecha= `${dia <10 ? '0'+dia : dia}/${mes < 10?'0'+ mes:mes}/${agnio}`
        res.write('fecha= '+fecha)
        fs.writeFile()
        
    }


    res.end()

    
}


)
.listen(3000,()=>{console.log('servicio http://localhost:3000')})


console.log('algo')