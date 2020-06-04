
***Don't be lazy dear friend , try and solve the task yourself ! 😇 ***


# If the task seem hard to you , then let me give you hint or two !


## Remember , atoms are the building blocks of your universe , i bet that it's a good starting point for your endeavour. 

- First of all check your atom , it needs to hold two parameters - key and default ! 
    -   Keys are usually a string

    -   And default could be just about anything

    -   Don't forget to export your newly created atom , and use it in the appropriate place !



# It's hard to shape a universe i know , let me help you further in this noble role !

- Go to your selector and look around , there's probably a malicious bug around !
    - Perhaps it would make sense to read and get the current state ?

    - Of course that the get method is the key to you success !

    - Pretty sure that the get method expects the key from the atom state , right ?


# How to fetch that giphy you will ask , perhaps a recoil hook will be perfect for that task.

- Go inside GetGiphy component and observe , there must be clues hidden,  but preserved !
    - All the giphys wait to be fetched , there is 1 line of code missing that will do just that.

    - Exactly ! We need the value from fetchGiphy , but how in the world can we get that? Wait, (processing...) there was a hook for that right ? 

    - Perfect , the only thing to do is use that one hook to get the value of fetchGiphy selector !




# If every hope is dead and gone, don't be sad, but scroll some more !





















- inside atom.js 

> export const searchStringState = atom({
    key: 'searchStringState',
    default: 'hello'
});


- inside selector.js

> const searchTerm = get(searchStringState);



- inside GetGiphy.tsx

> const giphyResult = useRecoilValue(fetchGiphy);
