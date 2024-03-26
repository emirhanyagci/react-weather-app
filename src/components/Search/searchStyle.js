import config from "../../../tailwind.config.js";
const colors = config.theme.extend.colors.base;
console.log(colors);
const searchStyle = {
  control: (styles) => ({
    ...styles,
    boxShadow: "none",
    outline: "none ",
    border: "none",
    height: "3rem",
    borderRadius: ".5rem",
    backgroundColor: colors[700],
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
  }),
  input: (styles) => ({ ...styles, color: colors[100] }),
  menuList: (styles) => ({
    ...styles,
    borderRadius: ".5rem",
    padding: 0,
    backgroundColor: colors[700],
  }),
  singleValue: (provided) => ({
    ...provided,
    color: colors[100],
  }),
  option: (styles, { isFocused }) => {
    return {
      ...styles,
      cursor: "pointer",
      backgroundColor: isFocused ? colors[400] : colors[500],
      ":active": {
        undefined,
      },
      borderBottom: `1px solid ${colors[700]}`,
    };
  },
};

export default searchStyle;
