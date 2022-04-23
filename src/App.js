import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import CountriesContainer from "./Main/CountriesContainer/CountriesContainer";
import FilterBar from "./Main/FilterBar/FilterBar";
import MoreInformation from "./Main/MoreInformation/MoreInformation";


function App() {
  
  const [searchValue, setSearchValue] = useState()
  const [regionValue, setRegionValue] = useState()
  const [moreInformationPanel, setMoreInformationPanel] = useState(false)
  const [moreInformation, setMoreInformation] = useState()
  console.log(moreInformationPanel)
  console.log(moreInformation)
  //if true then light them else dark
  const [theme, setTheme] = useState(true)

  return (
    <Router hashType='hashbang'>
      <div className="App">
        <div className="main" style={ theme ? {backgroundColor: '#F2F2F2'} : {backgroundColor: '#202C36'}}>
          <Header set_theme = { setTheme } theme = { theme } />
          <div className="main_container">
            <Routes>

              <Route 
                path = '/' 
                element = { 
                  <>
                    <FilterBar 
                      search_value = { setSearchValue }
                      region_value = { setRegionValue }
                      theme = { theme }
                    />
                    <CountriesContainer 
                        search_value = { searchValue }
                        region_value = { regionValue }
                        theme = { theme }
                        more_information_setter = { setMoreInformation  }
                        more_information_panel_setter = { setMoreInformationPanel }
                        more_information_panel = { moreInformationPanel }
                    />
                  </>
                }
              />



              <Route 
                path = '/more-information'
                element = {
                    <MoreInformation 
                      more_information = { moreInformation } 
                      more_information_panel = { moreInformationPanel } 
                      theme = { theme } 
                    />
                  }
              />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
