let number=+prompt("Mời bạn nhập số nguyên dương bất kì để thực hiện phép toán");
let result=0;
if(!isNaN(number) && number>0){
    for (let i=1;i<=number;i++){
        result+=i;
    }
} else {
    result="Dữ liệu nhập vào không hợp lệ";
}
alert(result);