// import "babel-polyfill";
import {sum, square, variable, MyClass} from './import';

var person = {
    name: 'Ting Ge',
    mail: '505253293@163.com'
},
ting = new MyClass(person);

var main = document.getElementById('main');
var str = [
  `<h1>Console 内容: </h1>`,
  `<pre>My Name: ${ting.getName()}<br/>`,
  `square(5)= ${square(5)} </pre>`
].join('');
console.log(str);
main.innerHTML += str;
