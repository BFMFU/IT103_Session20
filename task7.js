let n = +prompt("Nhập số lượng số Fibonacci: ");
if (n <= 0 || isNaN(n)) {
    console.log("Vui lòng nhập đúng dữ liệu !!!");
} else {
    let f0 = 1, f1 = 1;
    let result = "" + f0;
    if (n > 1) {
        result += " " + f1;
    }
    for (let i = 2; i < n; i++) {
        let fn = f0 + f1;
        result += " " + fn;
        f0 = f1;
        f1 = fn;
    }
    console.log(result);
}