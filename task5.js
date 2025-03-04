let firstNumber= +prompt("Mời bạn nhập vào số đầu tiên");
let secondNumber= +prompt("Mời bạn nhập vào số thứ hai");
let tmp=firstNumber;
if(!isNaN(firstNumber) && !isNaN(secondNumber)){
    for(let i= 1; i<secondNumber;i++){
        firstNumber*=tmp;
    }
    alert(firstNumber);
} else{
    alert('Không hợp lệ')
}