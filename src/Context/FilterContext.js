import { useState, createContext,} from 'react';

export const FilterContext = createContext();

function FilterContextProvider(props) {
    const [isChecked, setIsChecked] = useState(false);
    const [filterNames, setFilterNames] = useState([]);
    return (
        <FilterContext.Provider
            value={{
                isChecked,
                setIsChecked,
                filterNames, 
                setFilterNames
            }}
        >
            {props.children}
        </FilterContext.Provider>
    );
}
export default FilterContextProvider;
