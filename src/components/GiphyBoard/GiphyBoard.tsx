import React, { Suspense } from 'react';
import './GiphyBoard.css';
import { searchStringState } from '../../store/atom'
import { useRecoilState} from 'recoil';
import GetGiphy from '../GetGiphy/GetGiphy';

interface TeaserBoardPropTypes {
    startTime: (input) => void;
    stopTimer: (input) => void;
    timer: boolean;
}

const GiphyBoard = (props: TeaserBoardPropTypes):JSX.Element => {

    const [searchVal, setSearchString] = useRecoilState(searchStringState);
    
    const [searchGiphy, setSearchGiphy] = React.useState(false);


    React.useEffect(() => {
        if(searchGiphy){
            setSearchGiphy(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ searchVal])

    /**
     * OR
     *     const searchVal = useRecoilValue(searchString);
           const setSearchString = useSetRecoilState(searchString);
     * 
     */

     /**
      * 
      * OR WE CAN UPDATE THE STATE LIKE THAT !!!
      */
     const searchHandlerInput = (string) => {
         console.log(string)
         setSearchString(string)
     }

    

    return (

        <Suspense fallback={<> 
        <div className='BoardWrapper'>
            <input type="text" value={searchVal} onChange={(e) => searchHandlerInput(e.target.value)} />
            
            <button onClick={() => setSearchGiphy(true)}>Search</button>
        </div> 
        </>}>
            <div className='BoardWrapper'>
                <input type="text" value={searchVal} onChange={(e) => searchHandlerInput(e.target.value)} />
                {searchGiphy && <GetGiphy />}
                <button onClick={() => setSearchGiphy(true)}>Search</button>
            </div>
        </Suspense>
    )
}

export default GiphyBoard;
