import React from 'react';
import './GetGiphy.css';
import {  useRecoilValue } from 'recoil';
import { setGiphys } from '../../store/selector';


const GetGiphy = () => {
    const setGiphy = useRecoilValue(setGiphys);

    return (
        <div className='GiphyWrapper' >
            {setGiphy.map(giphy => <img src={`${giphy.images.original.url}`} alt={giphy.url} key={giphy.url}/>)}
        </div>
    )
}

export default GetGiphy;
