let num = +prompt("Nhập số lượng số nguyên tố muốn in:");
let index = 0;
let i = 2; 
document.write(`${num} số nguyên tố đầu tiên là: `)
do {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        document.write(i);
        document.write(" ");
        index++;
    }

    i++;
} while (index < num);
