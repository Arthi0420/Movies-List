import { createContext, useState } from "react"; 

export const MovieProvider = ({ children }) => 
    {

    const [movies, setMovies] = useState([   
        {
            id: 1,
            name: "Aditya Varma",
            isFavourite: false
        },

        {
            id: 2,
            name: "OK Kanmani",
            isFavourite: false
        },
        {
            id: 3,
            name: "Amaran",
            isFavourite: false
        },
        {
            id: 4,
            name: "Sita Ramam",
            isFavourite: false
        },
        {
            id: 5,
            name: "Ayothi",
            isFavourite: false
        },
    ]);

    // Add Favourite
    const addFavourite = (id) => {
        const updatedMovies = movies.map((movies) => {
            if (movies.id === id) {
                return { ...movies, isFavourite: true };
            }
            
            return movies;
        });
        setMovies(updatedMovies);
       
    };

    // Remove Favourite
    const removeFavourite = (id) => {
        const updatedMovies = movies.map((movies) => {
            if (movies.id === id) {
                return { ...movies, isFavourite: false };
            }
            return movies;
        });
        setMovies(updatedMovies);
    };

    return (
        // Context Provider
        <MovieContext.Provider value={{ movies, addFavourite, removeFavourite }}> 
            {children}
        </MovieContext.Provider>
    );
};



export const MovieContext = createContext(); 