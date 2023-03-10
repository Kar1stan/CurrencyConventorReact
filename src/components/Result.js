export default function Result({convert,input,from,output,to}) {
    return (
    <div className="result">
        <button onClick={convert}>Convert</button>
        <h2>Converted Amount:</h2>
        <p>{input+" "+from+" = "+output.toPrecision(6) + " " + to}</p>
    </div>
    );
}