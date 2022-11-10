import React, {createContext, useEffect, useState} from 'react';

const FavouriteContext = createContext();

const ListContext = ({children}) => {
  const [favourite, setFavourite] = useState([]);
  return (
    <FavouriteContext.Provider value={{favourite, setFavourite}}>
      {children}
    </FavouriteContext.Provider>
  );
};

export {ListContext, FavouriteContext};
