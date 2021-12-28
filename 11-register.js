const register = {
    regSys: [
        {"uid": "jack", "pwd": "123", "role": "user"},
        {"uid": "alexa", "pwd": "abc", "role": "admin"},
        {"uid": "misa", "pwd": "xyz", "role": "user"},
    ],

    regPeople: function(uid, pwd, role){
        if(uid != "" && pwd!= "" && role !=""){
            let obj = {
                "uid": uid,
                "pwd": pwd,
                "role": role
            }
            this.regSys.push(uid, pwd, role);
            return "successful";
        }
        else{
            return "Unsuccessful"
        }
        
    }
}

module.exports = register;