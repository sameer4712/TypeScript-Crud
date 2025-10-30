class Name{
    getinfo(name:string):string;
    getinfo(id:number):string;
    getinfo(value:any):string{
        if(typeof value ==="number")
        {
            return `userid is ${value}`
        }
        else
            {
            return `username is ${value}`
        }
    }
}

const obj = new Name()
console.log(obj.getinfo(100));
console.log(obj.getinfo("sameer"));
