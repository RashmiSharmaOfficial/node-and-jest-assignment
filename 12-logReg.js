const logReg = {
    users: [
        {"uid": "rosy", "pwd": "123"}
    ],

    login: function(uid, pwd){
        flag = false;

        this.users.forEach(element => {
            if(element.uid == uid && element.pwd == pwd){
                flag = true;
            }
        });

        if(flag){
            return "Login Successful!"
        }
        return "Invalid user!"
    },

    reg: function(uid, pwd){
        flag = false
        this.users.forEach(element => {
            if(element.uid == uid && element.pwd == pwd){
                flag = true;
            }
        }); 

        if(flag){
            return "User already exist!"
        }
        else{
            let obj ={
                "uid":uid, "pwd": pwd
            }
            this.users.push(obj);
            return "Reg successful!"
        }


    }
}

module.exports = logReg;