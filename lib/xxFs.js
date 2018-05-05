var fs = require("fs");
let myFs = (pt)=>{
    return new Promise((resolve, reject)=>{
        fs.readdir(pt, (err,files)=>{
            if (err) {
                reject(err);
            }else{
                resolve(files)
            }
        })
    })
}
let write = (name,ct)=>{
    return new Promise((resolve, reject)=>{
        console.log(123,name)
        fs.writeFile(name, ct,(err)=> {
            if (err) {
                reject(err);
            }
            resolve('success')
        });

    })
}
let read = (name)=>{
    return new Promise((resolve, reject)=>{
        fs.readFile(name,'utf8',(err, data)=> {
            if (err) {
                reject(err);
            }
            resolve(data.toString())
         });

    })

}
// 获取目录下所有，写文件,读取文件
module.exports  = {
    getAll:myFs,
    write:write,
    read:read,
    path:'./mind'
};