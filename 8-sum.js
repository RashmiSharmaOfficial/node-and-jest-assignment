module.exports = {
    sum:function sum(a, b){
        return a - b;
    },

    multi:function multi(a, b){
        return a * b;
    },

    div:function div(a, b){
        return a / b;
    },

    largest2:function large(a, b){
        if(a > b){
            return a;
        }else{
            return b;
        }
    },

    largest3:function large(a, b, c){
        if(a > b && a > c){
            return a;
        }else if(b > a && b > c){
            return b;
        }else{
            return c;
        }
    },

    factorial:function facto(a){
        let num = 1;
        while(a>0){
            num *= a;
            a--; 
        }
        return num;
    },

    oddOrEven: function oddOrEven(a){
        if(a%2 == 0){
            return true;
        }
        else{
            return false;
        }
    },

    largeArray: function largest(arr){
        max = arr[0];

        for(i = 1; i < arr.length; i++){
            if(arr[i]>max){
                max = arr[i];
            }
        }
        return max;
    },

    findEle: function find(arr, element){
        for(i = 0; i < arr.length; i++){
            if(arr[i] == element){
                return true;
            }
        }
        return false;
    }
}






// module.exports = sum, multi, div;

