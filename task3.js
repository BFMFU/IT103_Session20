let n = prompt("Nhập số bất kì để kiểm tra");
let m = "";

if(!isNaN(n)){
    for (let i = n.length - 1; i >= 0; i--) {
        m += n.charAt(i);
    }
    
    if (m === n) {
        alert("Đây là số đối xứng");
    } else {
        alert("Đây không phải số đối xứng");
    }
    
} else{
    alert(`Số không hợp lệ`);
}