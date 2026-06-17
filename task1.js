let num1=prompt("write any number")
let opr=prompt("write any operator")
let num2=prompt("write any number")
num1=Number(num1)
num2=Number(num2)
switch(opr){
    case '+':
    console.log("addition is",num1+num2);
    break
    case '-':
    console.log("subtraction is",num1-num2);
    break
    case '*':
    console.log("multiplication is",num1*num2);
    break
    case '/':
    console.log("division is",num1/num2);
    break
    case '%':
    console.log("remainder is",num%num2);
    break
    default:
    console.log("invaild number");
    
}
