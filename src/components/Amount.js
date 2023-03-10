export default function Amount({handleInput}) {
    return (
        <div className="left">
        <h3>Amount</h3>
        <input type="text" 
           placeholder="Enter the amount" 
           onChange={handleInput} />
      </div>
    );
}