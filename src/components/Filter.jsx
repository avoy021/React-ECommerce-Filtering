const Filter = ({Criteria,filterName,setCriteria}) => {
    return (
        <>
            <div className="category flex flex-col">
                <label htmlFor="All">
                    All{" "}  
                    <input type="radio" name={filterName} id="All" value="All" onChange={(e) => setCriteria(e.target.value)} /> 
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