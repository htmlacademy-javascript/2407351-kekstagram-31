/**
 * Проверяет длину строки с максимально допустимой длиной
 * @param {string} string - строка
 * @param {number} maxLength - максимальное число знаков
 * @returns {boolean}
*/
const checkLength = (string = '', maxLength = 1) => string.length <= maxLength;

checkLength('Проверяемая строка', 20);

/**
 * Проверяет, является ли строка палиндромом
 * @param {*} string - строка
 * @returns {boolean}
 */
const isPalindrome = (string = '') => {
  const normalizedString = string.replace(/\s/g, '').toUpperCase();
  let reverseString = '';
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reverseString += normalizedString[i];
  }
  return reverseString === normalizedString;
};

isPalindrome('Осело колесо');

/**
 * Принимает строку, извлекает содержащиеся цифры
 * @param {string | number} input
 * @returns {number | NaN}
 */
const getNumber = (input) => {
  let result = '';
  input = input.toString();
  for (let i = 0; i <= input.length - 1; i++) {
    if (Number.isNaN(parseInt(input[i], 10)) === false) {
      result += input[i];
    }
  }
  return result === '' ? NaN : parseInt(result, 10);
};

getNumber('Сейчас 2024 год');
