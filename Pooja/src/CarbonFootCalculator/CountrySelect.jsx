import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const CountrySelect = () => {
  return (
    <div>
      const [selected, setSelected] = useState('');
      <ReactFlagsSelect selected={Us} onSelect={(code) => setSelected(code)} />
    </div>
  );
};

export default CountrySelect;
