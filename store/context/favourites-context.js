import { createContext, useState } from "react";

export const FavouritesContext = createContext({
    ids: [],
    addFavourite: (id) => {
        console.log('here');
    },
    removeFavourite: (id) => {
        console.log('remove');
    }
});

const FavouritesContextProvider = ({ children }) => {
    const [favouriteMealIds, setFavouriteMealIds] = useState([]);

    const addFavourite = (id) => {
        setFavouriteMealIds((ids) => [...ids, id]);
    }

    const removeFavourite = (id) => {
        setFavouriteMealIds((ids) => ids.filter((curId) => curId !== id));
    }

    const value = {
        ids: favouriteMealIds,
        addFavourite,
        removeFavourite
    }
     
    return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>
}

export default FavouritesContextProvider;