const num = parseInt(prompt("Nhập một số nguyên:"), 10);
let isPrime = true;

if (num < 2) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(`${num} là số nguyên tố.`);
} else {
    console.log(`${num} không phải là số nguyên tố.`);
}
