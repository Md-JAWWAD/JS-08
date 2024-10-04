var user = prompt('Write any short sentance!');
var userarr = user.split(' ')
var num=0;
for (let i=0; i < userarr.length; i++)
{
    var num = num + 1; 
}

console.log('words:' , user);
console.log('Total words are:',num);