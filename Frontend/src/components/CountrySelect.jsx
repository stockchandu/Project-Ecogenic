import { indiaFlag } from "../images/allImages";
import "./countryselect.css";
function CountrySelect() {
  return (
    <div className="country-with-flag">
      <div>
        <img src= {indiaFlag} alt="indiaflag" className="flag-img" />
      </div>
      <div className="options-country">
        <select name="" id="">
          <option>India</option>
          <option>France</option>
          <option>China</option>
          <option>Canada</option>
          <option>America</option>
        </select>
      </div>
    </div>
  );
}
export default CountrySelect;