
String.prototype.reverse = function(){
  return this.split('').reverse().join('');
}
console.log('hello'.reverse());

function repeat(str,num){
  let val = '';
  while(val.length < str.length*num){
    val = val + str;
  }
  return val;
}
console.log(repeat('hello', 2));

function maxStr(arg) {
  return Math.max.apply(Math, arg);
}
console.log(maxStr(['88', '29', '36']));
