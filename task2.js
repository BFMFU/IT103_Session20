let number=+prompt("Mời bạn nhập số nguyên dương bất kì để kiểm tra");
if(!isNaN(number) && number>0){
    document.write(`Các số chia hết cho 5 từ 1 đến ${number} là: `)
    for (let i=1;i<=number;i++){
        if(i%5===0){
            document.write(i);
        }
        document.write(" ");
    }
} else {
    document.write("Dữ liệu nhập vào không hợp lệ");
}
