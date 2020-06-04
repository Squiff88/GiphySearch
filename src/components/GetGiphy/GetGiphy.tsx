import React from 'react';
import './GetGiphy.css';
import {  useRecoilValue } from 'recoil';
import { fetchGiphy } from '../../store/selector';


const GetGiphy = () => {

    // 🕵 Looks like a perfect spot to get giphys that are fetched from the API


    return (
        <div className='GiphyWrapper' >
                {giphyResult.map(giphy => <img src={`${giphy.images.original.url}`} alt={giphy.url} key={giphy.url}/>)}
        </div>
    )
}

export default GetGiphy;
