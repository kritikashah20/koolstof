import Select from 'react-select';

const Dropdown = ({ icon, handleChange, menuOptions }) => {
  const options = [];

  Object.keys(menuOptions).forEach((theme) => {
    options.push({
      value: theme,
      label: theme.charAt(0).toUpperCase() + theme.slice(1)
    });
  });

  return (
    <div style={{display: 'flex', flexDirection: 'row', width: 100}}>
      {icon}
      <Select
        style={{width: '20px'}}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};

export default Dropdown;