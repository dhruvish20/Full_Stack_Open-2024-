import axios from "axios";
import { useEffect , useState} from "react";
import CountryData from "./components/countrydata";
import Countries from "./components/countries";

const App = () => {

  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleQueryChange = (event) => {
    const search = event.target.value;
    setQuery(search);
    setCountriesToShow(
      countries.filter((country) => 
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
    )
  }


  return (
    <div>
      <div>
        Find countries <input value={query} onChange={handleQueryChange} />
      </div>
      {countriesToShow.length === 1 ? (
        <CountryData country={countriesToShow[0]} />
      ) : null}
      {countriesToShow.length > 10 ? (
        <div>Too many matches, specify another filter</div>
      ) : (
        <Countries
          countriesToShow={countriesToShow}
          setCountriesToShow={setCountriesToShow}
        />
      )}
    </div>
  );
};

export default App;