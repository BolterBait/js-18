// Задача 1
// const answer = prompt('Введіть число');
// if (answer) {
//   const hour = String(Number.parseInt(answer / 60)).padStart(2, 0);
//   const minutes = String(answer % 60).padStart(2, 0);
//   console.log(`${hour}г.:${minutes}хв.`);
// } else {
//   alert('Введіть число!');
// }
// Задача 2

// const max = 60;
// const min = 10;
// let evenNumber = 0;
// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//     evenNumber = evenNumber + i;
//   }
// }
// console.log('Сума', evenNumber);

// const clients = [
//   { hotel: 'Mango', stars: 5 },
//   { hotel: 'Poly', stars: 4 },
//   { hotel: 'Ajax', stars: 3 },
// ];

// console.table(clients);

// const clients = ['Mango', 'Poly', 'Ajax'];
// clients[0] = 'Hilton';
// clients[1] = 'Pango';
// console.log(clients); // ["Kiwi", "Pango", "Ajax"]
// clients.slice(1, 3);
// console.log(clients);

//  const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// console.log(clients.slice(0, -3));

// Ex 6
// const string = 'Я люблю мою кохану дружиноньку';
// let reverseSentence = '';

// for (let i = string.length - 1; i >= 0; i -= 1) {
//   console.log(string[i]);
//   reverseSentence += string[i];
// }
// console.log(reverseSentence);
// Ex 6-2
// let secondVariant = string.split('').reverse().join('');
// console.log(secondVariant);

// Ex6 - 3
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];
// // console.log(smallestNumber);
// for (const number of numbers) {
//   console.log(number, smallestNumber);
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log(smallestNumber);

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits.length - 1;
// console.log(lastElement);
// console.log(fruits[lastElement]);

// function slugify(title) {
//   // Change code below this line

//   let slug = title.toLowerCase().split(' ').join('-');
//   console.log(slug);
//   // Change code above this line
// }
// slugify('Ten secrets of JavaScript');
// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let newArray = firstArray.concat(secondArray);
//   // console.log(newArray);
//   let lengthNewArray = newArray.length;
//   console.log(lengthNewArray);
//   if (lengthNewArray <= maxLength) {
//     console.log(newArray);
//     return newArray;
//   } else {
//     console.log(newArray.slice(0, maxLength));
//     return newArray.slice(0, maxLength);
//   }
//   // Change code above this line
// }
// makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3);
// makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4);

// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;
//   for (let i = 1; i <= number; i += 1) {
//     total += i;
//     console.log(total);
//   }
//   return total;
//   // Change code above this line
// }
// calculateTotal(24);
// const planets = ['Earth', 'Mars', 'Venus'];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// function findLongestWord(string) {
//   const theWords = string.split(' ');
//   let theLongestWord = theWords[0];
//   for (let i = 0; i < theWords.length; i += 1) {
//     if (theLongestWord.length < theWords[i].length) {
//       theLongestWord = theWords[i];
//     }
//   }
//   console.log(theLongestWord);
//   return theLongestWord;
// }

// findLongestWord('The quick brown fox jumped over the lazy dog');

// const word = 'word';
// let i = 0;
// for (i < word.length)
// {
//   i++;
//   console.log('Position:' + i + '.');
//   console.log('char-' + word.charAt(i));
// }
// function filterArray(numbers, value) {
//   // Change code below this line
//   const maxNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       maxNumbers.push(numbers[i]);
//     }
//     console.log(maxNumbers);
//   }
// }
// // Change code above this line
// filterArray([1, 2, 3, 4, 5], 3);

// function getCommonElements(array1, array2) {
//   let commonElements = [];
//   for (let i = 0; i < array1.length; i++) {
//     //   console.log(array1);
//     if (array2.includes(array1[i])) {
//       commonElements.push(array1[i]);
//     }
//   }
//   console.log(commonElements);
//   return commonElements;
// }
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);

// const findFriend = function (allFriends, name) {
//   const isInFriends = allFriends.includes(name);

//   // if (isInFriends) {
//   //   return 'Нашли такого друга';
//   // } else {
//   //   return 'Не нашли';
//   // }

//   return isInFriends ? 'Нашли такого друга' : 'Не нашли';
// };

// const r1 = findFriend(friends, 'Poly');
// console.log(r1);

// const r2 = findFriend(friends, 'Chelsy');
// console.log(r2);

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];
//   // const number = numbers[i];

//   for (const number of numbers) {
//     // for (let i = 0; i < numbers.length; i += 1) {
//     //   const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   console.log(filteredNumbers);
//   return filteredNumbers;
//   // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3);

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   let evenNumbersArray = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       evenNumbersArray.push(i);
//     }
//   }
//   console.log(evenNumbersArray);
//   return evenNumbersArray;
//   // Change code above this line
// }
// getEvenNumbers(6, 12);
// function fn() {
//   for (let i = 0; i <= 5; i += 1) {
//     console.log(i);

//     if (i === 3) {
//       console.log(
//         'Знайшли число 3, робимо повернення, перериваючи цикл і функцію',
//       );
//       return i;
//     }
//   }

//   // Цей console.log не виконається
//   console.log('Лог після циклу в тілі функції');
// }

// const result = fn();
// console.log('Лог після виходу з функції');
// console.log(`Результат виконання функції ${result}`);

// function includes(array, value) {
//   // Change code below this line

//   for (let i = 0; i < array.length; i++) {
//     let itemToFind = array[i];
//     if (itemToFind === value) {
//       console.log(itemToFind);
//     }

//     // else {
//     //   return true;
//     //   console.log(array);
//     // }
//   }
//   return true;
//   // Change code above this line
// }
// includes(['apple', 'plum', 'pear', 'orange'], 'plum');

// const propName = 'name';
// const userID = 'ID';
// const user = {
//   age: 25,
//   // Ім'я цієї властивості буде взяте зі значення змінної propName
//   [propName]: 'Генрі Сибола',
//   [userID]: 'GSibola',
// };

// console.log(user.ID); // 'Генрі Сибола'

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Якщо це власна властивість - виконуємо тіло if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Якщо це невласна властивість - нічого не робимо
// }

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значення властивості
//   console.log(book[key]);
// }
// const firstBook = {
//   title: 'The Last Kingdom',
//   coverImage:
//     'https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg',
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = 'https://via.placeholder.com/640/480',
// } = firstBook;

// console.log(firstTitle); // The Last Kingdom
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//   title: 'Сон смішної людини',
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = 'https://via.placeholder.com/640/480',
// } = secondBook;

// console.log(secondTitle); // Сон смішної людини
// console.log(secondCoverImage); // https://via.placeholder.com/640/480
//Создайте массив styles с элементами «Джаз» и «Блюз».
//Добавьте «Рок-н-ролл» в конец.
//Замените значение «Блюз» на «Классика».
//Удалите первый элемент массива и выведите его в консоль.
//Вставьте «Рэп» и «Регги» в начало массива.
// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// styles.unshift('Классика');
// styles.splice(styles.indexOf('Блюз'), 1, 'Классика');
// console.log(styles.shift());

// console.log(styles);

// Напишите функцию caclculateAverage()
//которая принимает произвольное количество
//аргументов и возвращает их среднее значение.
//Добавить проверку, что аргументы это числа.

// function caclculateAverage(...args) {
//   let sum = 0;
//   let countOfArgs = 0;
//   for (const arg of args) {
//     if (typeof arg === 'number') {
//       sum += arg;
//       countOfArgs += 1;
//       continue;
//     }
//     console.log(sum);
//     console.log(sum / countOfArgs);
//     return sum / countOfArgs;
//   }
// }
// caclculateAverage(15, 20, 40);

// function caclculateAverage(...args) {
//   let sum = 0;
//   let countOfArgs = args.length;
//   for (const arg of args) {
//     if (typeof arg !== 'number') {
//       countOfArgs -= 1;
//       continue;
//     }
//     sum += arg;
//   }
//   return sum / countOfArgs;
// }
// caclculateAverage(15, 20, 40, 'dddd');

// function caclculateAverage(...args) {
//   let sum = 0;
//   let countOfArgs = args.length;

//   for (const arg of args) {
//     if (typeof arg !== 'number') {
//       countOfArgs -= 1;
//       continue;
//     }
//     sum += arg;

//     let total = sum / countOfArgs;
//   }
//   console.log(total);
// }
// caclculateAverage(10, 10, 10, 'fdwsfdsw');

//Напишите скрипт который заменяет регистр каждого символа
//в стороке на противоположный
//Например 'JavaScript' должен вернуть 'jAVAsCRIPT'
// -----------------------------------------
//Напишите функцию findTheColor()
//которая принимает название цвета
//определяет его наличие в массиве
//если цвет есть, усталавливет его как фон документа
//если цвета нет выводит console.error('Такой цвет не найден');
//и устанавливает цвет документа красный
// document.body.style.background = 'red';
//const colors = ['blue', 'yellow', 'olive', 'fuchsia', 'lime', 'aqua', 'maroon']
// -------------------------------------
//Напиши скрипт, который для объекта user,
//последовательно:
//1 добавит поле mood со значением 'happy'
//2 заменит hobby на 'skydiving'
//3 заменит значение premium на false
//4 выводит содержимое объекта users в фортмате
//ключ:значение используя Object.keys() и for...of
// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
// ------------------------------------------------
//Создайте объект calculator с тремя методами
//read(a, b) - принимает два аргумента и сохраняет их
//как свойства объекта
//sum() возвращает сумму сохраненных значений
//mult() перемножает сохраненные значения и возвращает результат

// const calculator = {
//   read(a, b) {},
//   sum() {},
//   mult() {},
// };
// -----------------------------------
//Напишите функцию updateObject, которая принимает объект и возвращает
//новый объект без указанного параметра
//Ожидаемый результат ({a: 1. b: 2}, 'b') => {a: 1}
// ------------------------------------------
// Напишите функцию updateObject, которая принимает объект и возвращает
//новый объект без указанных параметров
// Ожидаемый результат ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }
// console.log(keys);
// console.log(values);

// ✅ Логічно і синтаксично згруповані сутності
// const bookShelf = {
//   books: ['The Last Kingdom', 'Dream Guardian'],
//   // Це метод об'єкта
//   getBooks() {
//     console.log('Цей метод буде повертати всі книги - властивість books');
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     console.log('Цей метод буде додавати нову книгу у властивість books');
//   },
// };

// // Виклики методів
// bookShelf.getBooks();
// bookShelf.addBook('Нова книга');
// console.log(bookShelf.books);
// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;

// console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"
// Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest('Манго', greet);

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line

//   // Change code above this line
//   return totalSalary;
// }
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// // Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// // Це стандартна практика, якщо callback-функція досить велика.

// // Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// // то створюємо її і записуємо їй значення 0.
// // В іншому випадку збільшуємо значення на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// // ✅ Логічно і синтаксично згруповані сутності
// const bookShelf = {
//   books: ['The Last Kingdom', 'Dream Guardian'],
//   // Це метод об'єкта
//   getBooks() {
//     console.log('Цей метод буде повертати всі книги - властивість books');
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     console.log('Цей метод буде додавати нову книгу у властивість books');
//   },
// };

// // Виклики методів
// bookShelf.getBooks();
// bookShelf.addBook('Нова книга');

// console.log(bookShelf);
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   // let nameToFind = product.name;
//   for (const product of products) {
//     if (productName === product.name) {
//       console.log(product.price);

//       return product.price;
//     }
//   }
//   console.log(null);
//   return null;
//   // Change code above this line
// }
// getProductPrice('Radar');
// getProductPrice('Scanner');
// getProductPrice('Engine');

// const add = function (x, y) {
//   return x + y;
// };
// add(5, 3);
// console.log('результат', add(5, 3));

// const log111 = ['afjkjf', 'affjaljr', 'ertfafc'];

// const findLogin = function (allLogins, loginToFind) {
//   console.log(allLogins);
// };

// findLogin(log111, 'djsfa');
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line

//   for (const product of products) {
//     const nameToFind = Object.keys(product);

//     if (nameToFind[0] === productName) {
//       console.log(product.name);
//     }
//   }

//   // Change code above this line
// }

// getProductPrice('name');

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let nameToFind = Object.values(products);
//   let result = [];
//   for (nameToFind of products) {
//     console.log(Object.values(products));
//     if (propName === nameToFind) {
//       console.log(result);
//     }
//   }

//   // Change code above this line
// }
// getAllPropValues('name');

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line

//   const allNames = [];

//   for (const product of products) {
//     if (Object.keys(product).includes(propName)) {
//       let arg = product[propName];
//       allNames.push(arg);
//     }
//   }
//   console.log(allNames);
//   return allNames;
// }

//   for (const product of products) {
//     let arg = product[propName];
//     allNames.push(arg);
//   }
//   console.log(allNames);
//   return allNames;
// }

// Change code above this line

// getAllPropValues('name');
// getAllPropValues('quantity');
// getAllPropValues('price');
// getAllPropValues('category');

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   // const values = Object.values(products);

//   let sum = 0;

//   for (const product of products) {
//     if (Object.values(product).includes(productName)) {
//       sum = product.price * product.quantity;
//     }
//   }
//   console.log(sum);
//   return sum;
//   // Change code above this line
// }
// calculateTotalPrice('Radar');
// calculateTotalPrice('Blaster');

// Change code below this line
// function add(...args) {
//      let total = 0;
//      for (const arg of args) {
//        total += arg;
//      }
//      console.log(total);

//      return total;
//   // Change code above this line
// }
// add(74, 11, 62, 46, 12, 36);
// Change code below this line
// function addOverNum(firstElement, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstElement) {
//       total += arg;
//     }
//   }
//   console.log(total);
//   return total;
//   // Change code above this line
// }
// addOverNum(50, 15, 27);
// Change code below this line
// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line
//   for (const arg of args) {
//     if (array.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   console.log(matches);
//   // Change code above this line
//   return matches;
// }
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);

// function includes(array, value) {
//   // Change code below this line

//   for (let i = 0; i < array.length; i++) {
//     let itemToFind = array[i];
//     if (itemToFind === value) {
//       console.log(itemToFind);
//     }

//     // else {
//     //   return true;
//     //   console.log(array);
//     // }
//   }
//   return true;
//   // Change code above this line
// }
// includes(['apple', 'plum', 'pear', 'orange'], 'plum');
// const petya = {
//   username: 'Petya',
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.username);
//   },
// };

// petya.showThis(); // {username: "Petya", showThis: ƒ, showName: ƒ}
// petya.showName(); // 'Petya'
// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return 'Deleting book ${bookName}';
//   },
//   updateBook(oldName, newName) {
//     return 'Updating book ${oldName} to ${newName}';
//   },

//   // Change code above this line
// };
// bookShelf.removeBook('Red sunset');

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     // Change code below this line
//     atTheOldToad.potions.push(potionName);
//     console.log(atTheOldToad.potions);
//     return atTheOldToad.potions;
//     // Change code above this line
//   },
// };
// atTheOldToad.addPotion('Invisibility');
// atTheOldToad.potions;

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     // Change code below this line
//     const potionsIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionsIndex, 1);

//     console.log(atTheOldToad.potions);
//     // Change code above this line
//   },
// };
// atTheOldToad.removePotion('Dragon breath');
// atTheOldToad.potions;

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line

//     const potionsIndex = this.potions.indexOf(oldName);
//     this.potions.splice(potionsIndex, 1, newName);
//     console.log(atTheOldToad.potions);
//     // Change code above this line
//   },
// };
// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    let thisPotions = [];
    for (let i = 0; i < this.potions.length; i++) {
      thisPotions = this.potions[i];
      // console.log(thisPotions);
    }
    return thisPotions;
  },
  addPotion(newPotion) {
    // let thisPotions = [];
    // for (let i = 0; i < this.potions.length; i++) {
    //   thisPotions = this.potions[i];
    let addPotions = this.potions;
    for (const potion of addPotions) {
      if (potion === newPotion) {
        console.log(newPotion);
        console.log`Error! Potion ${newPotion} is already in your inventory!`;
        return `Error! Potion ${newPotion} is already in your inventory!`;
      }

      // this.addPotion.push(newPotion);
    }
    // console.log(thisPotions);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf[`oldName`];

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice[`potionIndex, 1, newName`];
    // console.log(atTheOldToad.thisPotions);
  },
  // Change code above this line
};
atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion');
atTheOldToad.getPotions();
atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
atTheOldToad.addPotion({ name: 'Power potion', price: 270 });
atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 });
atTheOldToad.addPotion({ name: 'Stone skin', price: 240 });
atTheOldToad.removePotion('Dragon breath');
atTheOldToad.removePotion('Speed potion');
atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
