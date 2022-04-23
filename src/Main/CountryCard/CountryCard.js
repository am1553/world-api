import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CountryCard({name, population, region, capital, flag, theme, native_name,sub_region, top_level_domain, currencies, languages, borders_list,more_information_setter, country_code_names_list, more_information_panel_setter, more_information_panel
}) {
  let navigate = useNavigate()
  const currencyName = currencies !== undefined ? currencies[0].name : 'Country has no currency.'

  const allLanguages = () => {
    const lang = []
    for(let i = 0; i < languages.length; i++) { 

      if(i === languages.length - 1 ) {
        lang.push( languages[i].name )
      } else {
        lang.push( languages[i].name + ', ' )
      }
    }
    return lang
  }

  const borderCountries = () => {
    const countriesAtBoder = []
    if(borders_list) {
      for(let i = 0; i < borders_list.length; i++) {

        for(let j = 0; j < country_code_names_list.length; j++) {
          if(borders_list[i] === country_code_names_list[j][0]) {
            countriesAtBoder.push(
              <span className= 'border_country'>
                {country_code_names_list[j][1]}
              </span>
            )
          }
        }
      }
    }
    return countriesAtBoder
  }

  const moreInformation = () => {
    more_information_setter({
      flag: flag,
      name: name,
      nativeName: native_name,
      population: population,
      region: region,
      subRegion: sub_region,
      capital: capital,
      topLevelDomain: top_level_domain,
      currencies: currencyName,
      languages: allLanguages(),
      countryBorders: borderCountries(),
    });
    more_information_panel_setter(!more_information_panel)
    navigate('/more-information')
  }

  return (
    <div 
    className='main__countries_container__country_card' 
    style={ theme ? {backgroundColor: '#fff'} : {backgroundColor: '#2B3844'} }
    onClick={ () => moreInformation() }
    >
        <div className="flag">
            <img src={ flag } alt="" />
        </div>
        <div className="text_wrapper">
            <h2 style={ theme ? { color: '#000' } : {color: '#fff'} }>{ name }</h2>
            <ul>
                <li style={ theme ? { color: '#000' } : {color: '#fff'} }><span>Population:</span> { population }</li>
                <li style={ theme ? { color: '#000' } : {color: '#fff'} }><span>Region:</span> { region }</li>
                <li style={ theme ? { color: '#000' } : {color: '#fff'} }><span>Capital:</span> { capital }</li>
            </ul>
        </div>
    </div>
  )
}

export default CountryCard