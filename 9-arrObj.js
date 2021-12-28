const library = {
        libArr : [
            {"id": "b01",
             "bName": "HarryPotter",
             "bAuthor": "JK Rowling",
             "bCost": 900},

             {"id": "b02",
             "bName": "The Nightangle",
             "bAuthor": "Kristin Hannah",
             "bCost": 450},

             {"id": "b03",
             "bName": "Anxious People",
             "bAuthor": "Fredrick Beckman",
             "bCost": 700}
    ],
    
    getBookById: function(id){
        for(var i=0; i<this.libArr.length; i++){
            if(this.libArr[i].bookId == id){
                return this.libArr[i];
            }
        }
    },

    mapBook: function (id) {
        this.libArr.map((item) => {
            return (item.id == id)
        })
    }
}

module.exports=library;