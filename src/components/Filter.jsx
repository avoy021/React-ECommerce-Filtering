const Filter = ({Criteria,filterName,setCriteria}) => {
    return (
        <>
            <div className="flex flex-col">
            <div className="font-bold mb-1">{filterName}</div>
                <label htmlFor={`All-${filterName}`}>
                    All{" "}  
                    <input type="radio" name={filterName} id={`All-${filterName}`} value={`All-${filterName}`} onChange={(e) => setCriteria(e.target.value)} /> 
                </label>
                {
                    Criteria.map((criteriaName,index) => {
                        return (
                            <label key={criteriaName} htmlFor={criteriaName}>
                                {criteriaName}{" "}  
                                <input 
                                type="radio" 
                                name={filterName} 
                                id={criteriaName} 
                                value={criteriaName} 
                                onChange={(e) => setCriteria(e.target.value)}
                                />
                            </label>
                        )
                    })
                }                
            </div>
        </>
    )
}

export default Filter;