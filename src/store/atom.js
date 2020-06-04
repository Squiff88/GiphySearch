import { atom } from 'recoil';


//🕵 Seems like this is a good place to initiate a search string state

export const searchStringState = atom({
    key: 'searchStringState',
    default: 'hello'
});

