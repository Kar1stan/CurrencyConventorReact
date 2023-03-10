import Dropdown from 'react-dropdown';

export default function DropdownTo({options,to,handleTo}) {
    return (
        <div className="right">
          <h3>To</h3>
          <Dropdown options={options} 
                    onChange={handleTo} 
          value={to} placeholder="To" />
        </div>
    );
}