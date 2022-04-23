import React, { useState, useEffect } from 'react'
import CountryCard from '../CountryCard/CountryCard'
import axios, { Axios } from 'axios'

const api = axios.create({
    baseURL: 'https://restcountries.com/v2/all'
})

function CountriesContainer({search_value, region_value, theme, more_information_setter, more_information_panel_setter, more_information_panel}) {

    const [data, setData] = useState([])
    const [countryCodeName, setCountryCodeName] = useState()
    useEffect(() => {
      axios.get('https://restcountries.com/v2/all')
      .then(res => {
        setData(res.data)
        setCountryCodeName(() => {
          const allNamesCodes = []
          for(let i = 0; i < res.data.length; i++) {
            allNamesCodes.push([res.data[i].alpha3Code, res.data[i].name])
          }
          return allNamesCodes
        })
      })
      .catch(err => {
        console.log(err)
      })
    }, [])


  return (
    <div className='main__countries_container' >
        {
            data.filter((res) => {
              const lowerCaseName = res.name.toLowerCase()
              if(search_value === undefined && region_value === undefined) {
                return res
              } else if(lowerCaseName.includes(search_value) || res.region === region_value) {
                return res
              }
            }).map((res, key) => {
                return(
                    <CountryCard 
                        key = { res.name }
                        flag = { res.flag }
                        name = { res.name }
                        population = { res.population }
                        capital = { res.capital }
                        region = { res.region }
                        theme = { theme }
                        native_name = { res.nativeName }
                        sub_region = { res.subregion }
                        top_level_domain = { res.topLevelDomain }
                        currencies = { res.currencies } 
                        languages = { res.languages }
                        borders_list = { res.borders }
                        more_information_setter = { more_information_setter }
                        country_code_names_list = { countryCodeName }
                        more_information_panel_setter = { more_information_panel_setter }
                    />
                )
            })
        }
    </div>
  )
}

export default CountriesContainer
