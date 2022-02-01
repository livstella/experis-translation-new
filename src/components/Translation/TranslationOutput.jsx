import React, { useState } from 'react';
import { LETTERS_REGEX } from '../../const/regex';
import { useLatestTranslation } from '../../context/LatestTranslationContext';

const TranslationOutput = () => {
  
    //context for getting and setting the latest translation
    const {latestTranslation} = useLatestTranslation()

    //state for showing sing language images
    const [images, setImages] = useState([null])
    
    //list of images to display as a translation
    const imageObjects = []

    //function to translate - REPLACE WITH EVENT LISTENING OR BY MOVING TO VIEW/INPUT
    const translate = () => { 
    for (let index = 0; index < latestTranslation.length; index++){
        let letter = latestTranslation[index]
        if (letter.match(LETTERS_REGEX)){
            imageObjects.push({image: `img/${letter}.png`,
            id: index})
        } else if (letter === ' '){
            imageObjects.push({image:'img/space.png', 
            id: index})
        }
    }
    setImages(imageObjects.map(imageObject => {
        return <img
        src={imageObject.image}
        width='50'
        key={imageObject.id}
        />
    }))
    }

    return <div>
        <button onClick={translate}>TEST TRANSLATE IN OUTPUT COMP</button>
      <h2>Your text in American sign language:</h2>
      {images}
  </div>;
};

export default TranslationOutput;
