import React,{createContext,useState} from 'react'

export const bookContext = createContext();

function BookContextProvider(props) {
    const [books, setBooks] = useState([
        {title:"The Lord of the kings", id:1},
        {title:"The Animal Farm", id:2},
        {title:"1984", id:3},
        {title:"Good things", id:4}
    ]);
    return (
        <div>
            <bookContext.Provider value={{books}} >
                {props.children}
            </bookContext.Provider> 
        </div>
    );
}

export default BookContextProvider;
