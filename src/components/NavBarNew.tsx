import { Button } from "react-bootstrap";
import "../styles/styles.css";

type CountryData = Record<string, string>;

interface NavBarProps {
  countries: CountryData;
  handleChangeCountries: (country: string) => void;
}

const NavBarNew = ({ countries, handleChangeCountries }: NavBarProps) => {
  return (
    <>
      {Object.keys(countries).map((countryCode) => {
        return (
          <div className="button-container py-1">
            <Button
              key={countryCode}
              variant="light"
              onClick={() => handleChangeCountries(countryCode)}
              size="sm"
            >
              {countries[countryCode]}
            </Button>
          </div>
        );
      })}
    </>
  );
};

export default NavBarNew;
