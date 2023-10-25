let num = 9
let factor = 0
for(let i =1;i<num;i++){
    if (num % i == 0){
        factor++
    }
}
if (factor == 2){
    console.log(num,"is prime number")
} else {
    console.log(num, "is not  prime number")
}