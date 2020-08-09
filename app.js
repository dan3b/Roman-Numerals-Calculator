// Roman numerals calculator

let convertToRoman = [
    { number: 1000, romNum: 'M' },
    { number: 900, romNum: 'CM' },
    { number: 500, romNum: 'D', },
    { number: 400, romNum: 'CD' },
    { number: 100, romNum: 'C'  },
    { number: 90, romNum: 'XC' },
    { number: 50, romNum: 'L'  },
    { number: 40, romNum: 'XL' },
    { number: 10, romNum: 'X' },
    { number: 9, romNum: 'IX' },
    { number: 5, romNum: 'V'  },
    { number: 4, romNum: 'IV' },
    { number: 1, romNum: 'I' }
];

function convert(arabicNum) {
    let romanNum = '';
    let number = arabicNum;
    for (let i = 0; x < convertToRoman.length; i++) {
        if(convertToRoman[i].number <=number) {
            number = number - convertToRoman[i].number;
            romanNum = romanNum + convertToRoman[i].number

            i--;
        }
    }

    console.log(romanNum);
    document.getElementById('romanInput').value = romanNum;
    console.log(romanNum);
}

document.getElementById('convert').addEventListener('click', function(){
    let number = document.getElementById('numberInput').value;

    convert(number);
});

console.log(12);
    






