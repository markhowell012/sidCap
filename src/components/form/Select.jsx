import React, { useState } from "react";

function SelectComponent({ title, options = [], ...rest }) {
  const [selectedOption, setSelectedOption] = useState(options?.length ? options[0] : null); // Set the initial selected option

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={`col-span-2`}>
      <p className="text-primary font-bold mb-2">{title}</p>
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="bg-white text-gray border rounded-2xl h-10 py-1 px-3 w-full" 
        {...rest}
      >
        {options.map((item) => (
          <option value={item.value}>{item.name}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectComponent;
