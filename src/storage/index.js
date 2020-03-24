const STORAGE_KEY ='mall';

export default{
    //设置storage某一个键值
    setItem(key,value,module_name){
        if(module_name){
            let val=this.getStorage()[module_name];
            val[key]=value;
            this.setItem(module_name,val);
        }
        else{
            let val=this.getStorage();
            val[key]=value;
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
        }
    },
    //获取storage某一个键值
    getItem(key,module_name){
        if(module_name){
            let val=this.getItem(module_name);
            if(val){
                return val[key];
            }
        }
        return this.getStorage()[key];
    },
    //获取整个storage
    getStorage(){
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY)||'{}');
    },
    //清除某个键值
    clear(key,module_name){
        let val=this.getStorage();
        if(module_name){
            delete val[module_name][key];
        }
        else{
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
    }
}