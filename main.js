const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let anythingnumber;
let firstword = '';
let secondword = '';

rl.question('Введіть число: ', (input) => {
  anythingnumber = input.trim();

  if (anythingnumber.length === 1) {
    from0to9();
  } else if (anythingnumber.length === 2) {
    let numberToCompare = anythingnumber[0];
    if (numberToCompare === '1') {
      from10to19();
    } else {
      from20to99();
    }
  } else {
    console.log('Уведіть число від 0 до 99');
  }

  console.log(firstword + " " + secondword);
  rl.close();
});

function from0to9() {
  switch (anythingnumber[0]) {
    case '1':
      firstword = 'Один';
      break;
    case '2':
      firstword = 'Два';
      break;
    case '3':
      firstword = 'Три';
      break;
    case '4':
      firstword = 'Чотири';
      break;
    case '5':
      firstword = 'П\'ять';
      break;
    case '6':
      firstword = 'Шість';
      break;
    case '7':
      firstword = 'Сім';
      break;
    case '8':
      firstword = 'Вісім';
      break;
    case '9':
      firstword = 'Дев\'ять';
      break;
  }
}

function from10to19() {
  switch (anythingnumber[1]) {
    case '0':
      firstword = 'Десять';
      break;
    case '1':
      firstword = 'Одинадцять';
      break;
    case '2':
      firstword = 'Дванадцять';
      break;
    case '3':
      firstword = 'Тринадцять';
      break;
    case '4':
      firstword = 'Чотирнадцять';
      break;
    case '5':
      firstword = 'П\'ятнадцять';
      break;
    case '6':
      firstword = 'Шістнадцять';
      break;
    case '7':
      firstword = 'Сімнадцять';
      break;
    case '8':
      firstword = 'Вісімнадцять';
      break;
    case '9':
      firstword = 'Дев\'ятнадцять';
      break;
  }
}

function from20to99() {
  switch (anythingnumber[0]) {
    case '2':
      firstword = 'Двадцять';
      break;
    case '3':
      firstword = 'Тридцять';
      break;
    case '4':
      firstword = 'Сорок';
      break;
    case '5':
      firstword = 'П\'ятдесят';
      break;
    case '6':
      firstword = 'Шістдесят';
      break;
    case '7':
      firstword = 'Сімдесят';
      break;
    case '8':
      firstword = 'Вісімдесят';
      break;
    case '9':
      firstword = 'Дев\'яносто';
      break;
  }

  switch (anythingnumber[1]) {
    case '0':
      secondword = '';
      break;
    case '1':
      secondword = 'один';
      break;
    case '2':
      secondword = 'два';
      break;
    case '3':
      secondword = 'три';
      break;
    case '4':
      secondword = 'чотири';
      break;
    case '5':
      secondword = 'п\'ять';
      break;
    case '6':
      secondword = 'шість';
      break;
    case '7':
      secondword = 'сім';
      break;
    case '8':
      secondword = 'вісім';
      break;
    case '9':
      secondword = 'дев\'ять';
      break;
  }
}
