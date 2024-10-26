import './Home.css';
import logo from './w.png';
import one from './qqqewrq.png';
import two from './qwrqwrqwr.png';
import three from './wer.png';
import four from './qwrqwrwqr.png';
import pkGraph from './pharmacokinetics.png';
import matrixSystem from './matrixSystem.png';

function Projects() {
  return (
    <div className="App">
      
      {/* Title Section */}
      <section className="project-title">
        <h1>ESS-1: Long-Acting Injectable for Diabetes and Obesity</h1>
      </section>

      {/* Introduction Section */}
      <section className="project-introduction">
        <h2>Introduction</h2>
        <p>Type 2 diabetes mellitus ranks as the fourth leading cause of death and disability worldwide, affecting approximately 1 in 11 adults. This condition brings severe complications, including cardiovascular and renal diseases. Additionally, obesity remains a major global health concern, impacting over 1 billion people, and is linked with various health risks such as hypertension, cardiovascular diseases, and certain types of cancer.</p>
      </section>

      {/* Main Points Section */}
      <section className="main-points">
        <h2>Main Points of ESS-1 Development</h2>
        <ul>
          <li><strong>Pharmacokinetic Study:</strong> A comparison between oral and intravenous (IV) administration of ESS-1 indicated significantly higher plasma concentrations after IV administration.</li>
          <li><strong>Mechanism of Action:</strong> Drug transporters in the renal tubules become saturated after IV administration, reducing the clearance of ESS-1.</li>
          <li><strong>Long-Acting Injectable Potential:</strong> This formulation could allow for monthly dosing, enhancing patient adherence, maintaining stable drug levels, and reducing side effects.</li>

          <li style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <strong>First Proof of Concept (Pharmacokinetics):</strong> The following graph shows the difference in median plasma concentration over time for IV and oral administration of ESS-1, demonstrating the more stable concentration with IV dosing.
            </div>
            <img src={pkGraph} alt="Pharmacokinetic Study - IV vs Oral" style={{ width: '300px', marginLeft: '10px' }} />
          </li>
        </ul>
      </section>

      {/* Additional Points Section */}
      <section className="additional-points">
        <h2>Additional Insights</h2>
        <p>Based on pharmacokinetic studies, it was concluded that the dose required for subcutaneous (SC) or intramuscular (IM) administration could be significantly lower than that for oral formulations, providing enhanced efficacy with reduced dosage.</p>
        <ul>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <strong>Second Proof of Concept: Biodegradable Matrix System</strong> The image below illustrates the biodegradable matrix system designed for ESS-1, enabling controlled release for sustained efficacy over a monthly dosing schedule.
            </div>
            <img src={matrixSystem} alt="ESS-1 Biodegradable Matrix System" style={{ width: '300px', marginLeft: '10px' }} />
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="App-footer">
        <p>&copy; 2024 Esojas Consulting Services. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Projects;