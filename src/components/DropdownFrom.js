import Dropdown from 'react-dropdown';

export default function DropdownFrom({options,from,handleFrom}) {
    return (
        <div className="middle">
          <h3>From</h3>
          <Dropdown options={options} 
                    onChange={handleFrom}
          value={from} placeholder="From" />
        </div>
    );
}