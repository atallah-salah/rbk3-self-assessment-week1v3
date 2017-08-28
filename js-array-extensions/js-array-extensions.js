 Array.prototype.first=function(){
    return this[0];
  //console.log(this[0])
  };
  Array.prototype.last=  function(){
    return this[this.length-1];
  };



  var myarray= [1,2,3,4,5,6]
console.log(myarray.first())