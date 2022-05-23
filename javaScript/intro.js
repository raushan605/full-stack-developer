function print(){
   // alert('Hello Welcome to edureka...')
   document.write("java script");

}
var a=10; //Global scope variable
function multiply(a,b){
    var num1=a;
    var num2=b;
    return num1*num2;
}
var result=multiply(4,6);
console.log(result);
console.log(num1);
console.log(num2);
//************************************data types */
// number
// Boolean
var isOpen; //camelcase
isOpen=true;
isOpen=false;
typeof(isOpen); //boolean
//undefines vs null
var Fname;
console.log(Fname); //undefined
Fname='shubham';
Fname=null;
////////
var student={
    name:"shubham",
    age:24,
    address:"delhi"
};
//array
var students=['shubham','niyati','amir'];
var numbers=[1,2,3,4]
//array of object
var students=[{
    name:"shubham",
    age:24,
    addres:"delhi"
},
{
    name:"shubham",
    age:24,
    addres:"delhi"

}
]; //array of object
//function
function add(a,b)
{
    return a+b;
}
 ////**************operator */ 
// arithmatic operator
var numb1=10;
var numb2=2;
var add=numb1+numb2;   //12
var add=numb1-numb2;  //8
var add=numb1*numb2;  //20
var add=numb1/numb2; //5
var add=numb1%numb2;  //0

numb1=numb1+2;
numb1+=2;
numb1++;
//assignment operator//

numb1=numb1+2; //12
numb1+=2;  //12
numb1-=2; //8
numb1*=2; //20
numb1%=2;  //0

//comparison operator//

///inreview question == vs ===
if(20=='20'){
    console.log("matched");  //matched
else {
        console.log("unmatched");
    }
////--------------------
    if(20===20){
        console.log("matched");
    else {
            console.log("unmatched"); ///unmatched
        }


/// == values comparison
//=== values and data types are also compared

 //20>21 //false
 //20<21 //true
 //20>=21 //
 // logical operators
  true && true
  (20>10) && (20>15) //true
  true && false //false
  false && true //false
  false && false //false

  // OR opearator 

  (20>10) || (20>15) //true
  true || false //true
  false || true //true
  false || false //false

  // 
  !true //false
  !false //true

  var isloggedIn=false;
  isloggedIn=!isloggedIn;

  //**********Output statements */

   // document.write() html output


  







