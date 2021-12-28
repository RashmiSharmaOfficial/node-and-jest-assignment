const login = {
    userArr : [
        {"uid": "admin",
         "pwd": "abc"},
        {"uid": "rosy",
         "pwd": "123"},
        {"uid": "jack",
         "pwd": "xyz"},
    ],

    loginFunc: function(uid, pwd){
        flag = false;
        this.userArr.forEach(element => {
            if(element.uid == uid && element.pwd == pwd){
                flag = true;
            }
        });

        if(flag){
            return "Valid User";
        }
        return "Invalid User";
    }
}

module.exports = login;