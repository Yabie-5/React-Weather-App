
const Results =({results})=>{
    const {country, cityName, temperature, conditionText, icon} = results;
    return (
        <div className="results-city">
            {country && <div>{country}</div>}
            {cityName && <div>{cityName}</div>}
            {temperature && <div>{temperature}<span>℃</span></div>}
            {conditionText && 
                            <div>
                                <img src={icon} alt="icon" />
                                <spen>{conditionText}</spen>
                            </div>
                        }
        </div>
    );
};

export default Results;