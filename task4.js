let str = prompt("Nhập vào chuỗi bất kỳ");
let search = prompt("Nhập vào ký tự cần tìm kiếm");
let isSearch= false;
for(let i =0 ;i<str.length;i++){
    if(str.charAt(i)===search){
        isSearch=true;
        break;
    }
}
if(isSearch){
    alert(`Tồn tại ký tự cần tìm kiếm`);
} else{
    alert(`Không tồn tại ký tự cần tìm kiếm`);
}