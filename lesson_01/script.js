// result = prompt("Введите необходимое число возводимое во 2 -й степени")
// alert(result ** 2 )

// result1 = prompt("Введите необходимое 1 число из двух среднее арифметическое которых нужно вывести")
// result2 = prompt("Введите необходимое 2-е число из двух среднее арифметическое которых нужно вывести")
// alert((result1 + result2)/2)

// let area = prompt("Какая длина у стороны квадрата" , "")
// alert(area * area)


// let kilometers = prompt("Введите данные в километрах которые нужно конвертировать в мили: ")
// const miles = 0.621371
// alert( kilometers * miles )


// python list = [] , JavaScript let array = [1, 2, 3, 4[4, 5, 6[ 5, 5, 1]]] console.log(array[0])

// let todos = []

// let result = 0;

// for (let i = 0; i <= 5; i+=2){
//     result += i
// }
// console.log(result)


let totaleven = 0;
let totalodd = 0;

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        totaleven += i;
    } else {
        totalodd += i;
    }

}

console.log(totaleven, totalodd) 

