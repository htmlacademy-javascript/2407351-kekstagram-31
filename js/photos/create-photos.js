// import { getRandomInteger, getRandomUniqueInteger } from '../utils/random-value.js';
// import { NUMBER_OF_PHOTOS, USER_NAMES, COMMENT_MESSAGES } from '../mocks/data.js';

// const LikesCount = {
//   MIN: 15,
//   MAX: 200,
// };

// const CommentsCount = {
//   MIN: 0,
//   MAX: 30,
// };

// const CommentID = {
//   MIN: 1,
//   MAX: 1000,
// };

// const AvatarId = {
//   FIRST: 1,
//   LAST: 6,
// };

// const getCommentId = getRandomUniqueInteger(CommentID.MIN, CommentID.MAX);

// const createComment = () => ({
//   id: getCommentId(),
//   avatar: `img/avatar-${getRandomInteger(AvatarId.FIRST, AvatarId.LAST)}.svg`,
//   message: COMMENT_MESSAGES[getRandomInteger(1, COMMENT_MESSAGES.length - 1)],
//   name: USER_NAMES[getRandomInteger(1, USER_NAMES.length - 1)],
// });

// const createPhoto = () => {
//   let id = 1;

//   return () => {
//     const photo = {};
//     photo.id = id++;
//     photo.url = `photos/${photo.id}.jpg`;
//     photo.description = `Это фотография №${photo.id}`;
//     photo.likes = getRandomInteger(LikesCount.MIN, LikesCount.MAX);
//     photo.comments = Array.from({length: getRandomInteger(CommentsCount.MIN, CommentsCount.MAX)}, createComment);
//     return photo;
//   };
// };

// const createdPhotos = Array.from({length: NUMBER_OF_PHOTOS}, createPhoto());
// // console.log(createdPhotos);

// let createPhotos = (photos) => createPhotos = photos;

// export { createPhotos };
