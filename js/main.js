// Функции для создания массива из 25 сгенерированных объектов. Каждый объект массива — описание фотографии, опубликованной пользователем.

// Структура каждого объекта должна быть следующей:

// id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.

// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

// description, строка — описание фотографии. Описание придумайте самостоятельно.

// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

// comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии — случайное число от 0 до 30. Все комментарии генерируются случайным образом.


// У каждого комментария есть идентификатор — id — любое число. Идентификаторы не должны повторяться.

// Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.

// Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения из представленных ниже:

// Всё отлично!
// В целом всё неплохо. Но не всё.
// Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
// Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
// Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
// Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!

// Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами. Подставляйте случайное имя в поле name.

NUMBER_OF_PHOTOS = 25;

MIN_PHOTO_ID = 1;
MAX_PHOTO_ID = 25;

MIN_LIKES = 15;
MAX_LIKES = 200;

MIN_COMMENT_ID = 1;
MAX_COMMENT_ID = 1000;

MAX_COMMENTS = 0;
MIN_COMMENTS = 30;

MIN_AVATAR_ID = 1;
MAX_AVATAR_ID = 6;

const USER_NAMES = [
  'Григорий',
  'Александр',
  'Дмитрий',
  'Николай',
  'Анастасия',
  'Вероника',
  'Аделина',
  'Андрей',
  'Павел',
  'Виктория',
];

const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];


const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.floor(Math.random() * (upper - lower + 1) + lower);
  return result;
};


const getRandomUniqueInteger = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error(`Перебраны все числа из диапазона от ${ min } до ${ max}`);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const getCommentId = getRandomUniqueInteger(MIN_COMMENT_ID, MAX_COMMENT_ID);

const createComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${ getRandomInteger(MIN_AVATAR_ID, MAX_AVATAR_ID) }.svg`,
  message: COMMENT_MESSAGES[getRandomInteger(1, COMMENT_MESSAGES.length - 1)],
  name: USER_NAMES[getRandomInteger(1, USER_NAMES.length - 1)],
});

const createPhoto = () => {
  let id = 1;

  return () => {
    const photo = {};
    photo.id = id++;
    photo.url = `photos/${ photo.id }.jpg`;
    photo.description = `Это фотография №${ photo.id }`,
    photo.likes = getRandomInteger(MIN_LIKES, MAX_LIKES);
    photo.comments = Array.from({length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)}, createComment);
    return photo;
  }
};

const createdPhoto = Array.from({length: NUMBER_OF_PHOTOS}, createPhoto());
console.log(createdPhoto);
