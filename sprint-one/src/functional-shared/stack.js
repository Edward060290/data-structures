// Input -
// Output -
var Stack = function() {
 var Instance = {
   count: 0,
   storage: {}
 };
 _.extend(Instance, stackMethods);
 return Instance;
 // Hey! Rewrite in the new style. Your code will wind up looking very similar,
 // but try not not reference your old code in writing the new style.
};

var stackMethods = {
 push: function(value){
   this.storage[this.count] = value;
   this.count++;
 },
 pop: function(){
   if(this.count > 0){
     this.count--;
     var value = this.storage[this.count];
     return value;
   }
 },
 size: function(){
   return this.count;
 }
};
