import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import Message from "./Message";
function CountryList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  if (!countries.length) {
    return (
      <Message message="Add your first country by clicking no a city on the map" />
    );
  }

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.counry} />
      ))}
    </ul>
  );
}

export default CountryList;
