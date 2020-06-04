
import { selector } from 'recoil';
import { searchStringState } from './atom';
import axios from 'axios';


export const fetchGiphy = selector({
  key: 'fetchGiphy',

  get: async({get}) => {

    // 🕵 Perhaps this is a good place to get the current state of the search input


    const apiKey = 'Jn5LlyqnbMgxjm8iwFsJucTtfcd0rGQR';
    const images = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=5`);

   return images?.data?.data;
  }
})