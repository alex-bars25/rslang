import { IWord } from '../../types/index';

const DATA_URL:string = 'https://app-learnwords-rslang.herokuapp.com'

const getWords = async (group: number, page: number,): Promise<IWord[]> => {
  const rawResponse = await fetch(`${DATA_URL}/words?group=${group}&page=${page}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  const content = await rawResponse.json();
  return content
};

export {
  getWords
}