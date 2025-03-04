let firstNumber= +prompt("Mời bạn nhập vào số đầu tiên");
let secondNumber= +prompt("Mời bạn nhập vào số thứ hai");
let result=firstNumber;
if(!isNaN(firstNumber) && !isNaN(secondNumber) && secondNumber>0){
    for(let i= 1; i<secondNumber;i++){
        result*=firstNumber;
    }
    alert(result);
} else{
    alert('Không hợp lệ')
}
