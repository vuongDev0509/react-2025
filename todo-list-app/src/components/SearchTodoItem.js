import React, { useState }  from 'react';
function SearchItem ({value, onChange,}){
    return (
        <div className="vv-toto-app__search"> 
            <input
                type="text"
                placeholder="Search Item"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}
export default SearchItem;