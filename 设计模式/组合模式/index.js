class CFolder{
    constructor(name) {
        this.name = name;
        this.files = [];
    }
    add(file){
        this.files.push(file);
    }
    scan(){
        for(let file of this.files){
            file.scan();
        }
    }
}
class CFile{
    constructor(name){
        this.name = name;
    }
    add(file){
        throw new Error('文件下面不能添加文件')
    }
    scan(){
        console.log(`开始扫描文件${this.name}`);
    }
}