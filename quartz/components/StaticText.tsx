// quartz/components/StaticText.tsx

export default (() => {
    function StaticText() {
      return (
        <div className="static-text">
        <p>
          Husk at du bør ha skrivesaker når du jobber med matematikk.{" "}
          <a href="/MA-183/hvordan-lese-matematikk">Mer om hvordan du bør jobbe her.</a>
        </p>
      </div>
      );
    }
  
    StaticText.css = `
      .static-text {
        background-color: #363746; /* Light gray background */
        border: 1px solid #624e44; /* Subtle left border */
        padding: 10px; /* Add some space inside */
        
    border-radius: 5px;
      }
  
      .static-text p {
        margin: 0 0 10px 0; /* Space between paragraphs */
      }
    `;
  
    return StaticText;
  }) satisfies QuartzComponentConstructor;
  