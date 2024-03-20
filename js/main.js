// const USER_NAMES = [
//   'Григорий',
//   'Александр',
//   'Дмитрий',
//   'Николай',
//   'Анастасия',
//   'Вероника',
//   'Аделина',
//   'Андрей',
//   'Павел',
//   'Виктория',
// ];

// // const USER_AVATARS = [];

// const COMMENT_MESSAGE = [
//   'Всё отлично!',
//   'В целом всё неплохо. Но не всё.',
//   'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
//   'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
//   'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
//   'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
// ];


// const getRandomInteger = (a, b) => {
//   const lower = Math.ceil(Math.min(a, b));
//   const upper = Math.floor(Math.max(a, b));
//   const result = Math.random() * (upper - lower + 1) + lower;
//   return Math.floor(result);
// };

// // const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// function createRandomIdFromRangeGenerator (min, max) {
//   const previousValues = [];

//   return function () {
//     let currentValue = getRandomInteger(min, max);
//     if (previousValues.length >= (max - min + 1)) {
//       // console.error(`Перебраны все числа из диапазона от ${ min } до ${ max}`);
//       return null;
//     }
//     while (previousValues.includes(currentValue)) {
//       currentValue = getRandomInteger(min, max);
//     }
//     previousValues.push(currentValue);
//     return currentValue;
//   };
// }

// const createDescription = () => ({
//   id: getRandomInteger(1, 25),
//   // url: ,
//   description: '',
// });

// const createUser = () => ({
//   id: createRandomIdFromRangeGenerator(1, 100),
//   avatar: `img/avatar-${ createRandomIdFromRangeGenerator (1, 6)}.svg`,
//   message: COMMENT_MESSAGE[getRandomInteger(1, COMMENT_MESSAGE.length - 1)],
//   name: USER_NAMES[getRandomInteger(1, USER_NAMES.length - 1)],
// });
