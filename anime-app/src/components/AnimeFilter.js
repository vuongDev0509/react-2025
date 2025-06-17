function AnimeFilter({animeTypes, selectedType, setSelectedType}){
    const handleTypeChange = (event) => {
        const type = event.target.value;
        const checked = event.target.checked;
    
        setSelectedType((prev) =>
          checked
            ? [...prev, type]                // if tick add to array
            : prev.filter((t) => t !== type) // if untick remove from array
        );
    };
    
    return(
        <div className="vv-anime-filter"> 
            <h4>Filter by Type</h4>
            <ul className="vv-anime-filter__list"> 
                {animeTypes.map((type) => (
                    <li key={type}> 
                    <input
                        type="checkbox"
                        value={type}
                        checked={selectedType.includes(type)}
                        onChange={handleTypeChange}
                    />
                    {' '}{type}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AnimeFilter;