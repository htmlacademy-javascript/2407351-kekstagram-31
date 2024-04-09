
const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  [Method.GET]: 'Не удалось загрузить данные. Попробуйте ещё раз',
  [Method.POST]: 'Не удалось отправить данные формы',
};

const load = async (route, method = Method.GET, body = null) => {
  const response = await fetch(`${BASE_URL}${route}`, { method, body });
  return response.ok ? await response.json : Promise.reject({ message: ErrorText[method], status: response.status });
};

// fetch(`${BASE_URL}${Route.GET_DATA}`)
//   .then((response) => response.json())
//   .then((photos) => {
//     console.log(photos)
//   })
//   .catch(() => {
//     failFormSubmission()
//   });

const getPhotos = () => load(Route.GET_DATA);
// const photos = getPhotos();
// console.log(JSON.parse(photos));

const sendPhotos
 = (body) => load(Route.SEND_DATA, Method.POST, body);

export { getPhotos, sendPhotos };


