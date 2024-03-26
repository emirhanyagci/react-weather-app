import AsyncSelect from "react-select/async";
import searchStyle from "./searchStyle";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(options);
  }, 1000);
};

export default function Search() {
  return (
    <AsyncSelect
      styles={searchStyle}
      placeholder="Search location"
      cacheOptions
      //isLoading
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      loadOptions={loadOptions}
      defaultOptions
    />
  );
}
