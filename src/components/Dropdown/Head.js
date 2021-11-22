import Dropdown from "./index";

const Header = ({ icon, handleChange, options }) => {
  return (
    <header>
      <Dropdown icon={icon} handleChange={handleChange} menuOptions={options}/>
    </header>
  );
};

export default Header;