import React from 'react'
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';



function MoreInformation({ more_information, theme, more_information_panel }) {
    let navigate = useNavigate()
  return (
    <div className= { more_information_panel ? 'main__more_information main__more_information-active' : 'main__more_information' }>
        <button 
            style = { theme ? 
                {backgroundColor: '#fff', color: '#000'} : 
                {backgroundColor: '#2B3844', color: '#fff'} 
                }
            
            onClick = { ()=> navigate('/') }
            >
            <KeyboardBackspaceIcon />
            Back
        </button>
        <div className="information_wrapper" style={ theme ? {color: '#000'} : {color: '#fff'} }>
            <img src={ more_information.flag } alt="" />
            <div className="text_wrapper">
                <h2>{ more_information.name }</h2>
                <ul className='general'>
                    <li><span className="label">Native Name:</span> { more_information.nativeName }</li>
                    <li> <span className="label">Top Level Domain:</span> { more_information.topLevelDomain }</li>
                    <li> <span className="label">Population:</span> { more_information.population }</li>
                    <li> <span className="label">Sub Region:</span> { more_information.subRegion }</li>
                    <li> <span className="label">Capital:</span> { more_information.capital }</li>
                    <li> <span className="label">Region:</span> { more_information.region }</li>
                    <li> <span className="label">Currencies:</span> { more_information.currencies }</li>
                    <li> <span className="label">Languages:</span> { more_information.languages }</li>
                </ul>
                <ul>
                    <li className='borders'>
                        <span className="label">Border Countries:</span>
                        <>
                            { more_information.countryBorders }
                        </>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default MoreInformation