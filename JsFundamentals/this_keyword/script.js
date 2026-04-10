let obj = {
  age: 20,
  get1: function() {
    console.log(this);
  },
  get:function(){
    console.log(this)
  }
};

obj.get();
obj.get1();
