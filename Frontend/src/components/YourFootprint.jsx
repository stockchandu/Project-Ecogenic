import "../styles/yourfootprint.css";

function YourFootprint() {
  return (
    <div className="your-footprint-calc">
      <div className="your-footprint">
        <p>YOUR FOOTPRINT</p>
      </div>
      <div className="footprint-content-details">
        <div className="calculated-footprint-value">
          <p>2.90</p>
          <span>Tons of CO2</span>
        </div>
        <div className="smart-choice-content">
          <p>
            Offsetting is a smart choice - and
            <br /> we can help you go beyond
          </p>
        </div>
      </div>
    </div>
  );
}

export default YourFootprint;
