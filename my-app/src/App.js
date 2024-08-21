import './App.css';
import logo from './w.png';
import one from './qqqewrq.png';
import two from './qwrqwrqwr.png';
import three from './wer.png';
import four from './qwrqwrwqr.png';


function App() {
  return (
    <div className="App">
      <header 
        className="App-header" 
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <div 
          className="logo-container" 
          style={{ flex: '0 1 auto' }}
        >
          <img 
            src={logo} // Ensure you have a logo.svg file in your src directory
            alt="Esojas Logo" 
            style={{ height: '60px', marginRight: '20px' }} 
          />
        </div>
        <div 
          className="header-content" 
          style={{ flex: '1 1 auto', textAlign: 'center' }}
        >
          <h1>Welcome to Esojas Consulting Services</h1>
          <p>Expert Pharmaceutical Consulting Services in Parsippany, NJ, USA</p>
          <div className="contact-info">
            <p><strong>Contact:</strong> 313-610-1078</p>
            <p><strong>Email:</strong> mchavanpatil9@gmail.com</p>
          </div>
        </div>
      </header>
      
      <section className="about-expertise">
        <h2>About Dr. Mahesh Chavan Patil</h2>
        <p>Dr. Mahesh Chavan Patil is a seasoned subject matter expert with over 20 years of experience in the pharmaceutical industry. His expertise spans from product conception to launch.</p>
        <h3>Key Highlights of His Career:</h3>
        <ul>
          <li><strong>Education and Postdoctoral Fellowship:</strong>
            <ul>
              <li>Ph.D. in Pharmaceutical Sciences from the Institute of Chemical Technology, Mumbai, India.</li>
              <li>Postdoctoral fellowships at the University of Illinois, Chicago, and Wayne State University, Michigan, USA.</li>
            </ul>
          </li>
          <li><strong>Contributions to Renowned Pharmaceutical Companies:</strong> 
          <ul>
                <li>Dr. Mahesh has shared his expertise with leading pharmaceutical companies,
                including Teva, Endo, Amneal, Lupin, MSN, and Tris Pharmaceuticals..</li>
              </ul>   
          </li>
          <li><strong>Extensive work across various product types:</strong> 
              <ul>
                <li> Oral solid formulations (Immediate-Release (IR) and Extended Release (ER))</li>
                <li>Liquid formulations</li>
                <li>Extended-Release suspensions</li>
                <li>Topical and Semisolid products</li>
                <li>Nasal and Ophthalmic formulations</li>
                <li>Sterile lyophilized and liquid injectables</li>
                <li>Prefilled syringes and pen-based injectable (drug-device combination) products</li>
                <li>Biosimilar products</li>
              </ul>
          </li>
          <li><strong>Track Record:</strong> Filing over 100+ ANDAs and several NDAs.</li>
        </ul>
      </section>

      <section className="consulting-offerings">
        <h2>Our Consulting Offerings</h2>
        <h3>Formulation and Analytical Development:</h3>
          <ul>
            <li>Expertise in formulating effective, stable, and easy-to-manufacture products:
              <ul>
                <li>Oral (IR & ER)</li>
                <li>Nasal, Ophthalmic</li>
                <li>Topical</li>
                <li>Injectable (ANDA and NDA) - small molecules and biosimilar</li>
              </ul>
            </li>
            <li>Services include:
              <ul>
                <li>Developability assessments, due diligence for products</li>
                <li>Pre-formulation studies</li>
                <li>Formulation and analytical development</li>
                <li>ANDA and NDA, 505b2 strategy</li>
                <li>Pilot and clinical batch manufacturing (ANDA and NDA-Phase I-III)</li>
              </ul>
            </li>
          </ul>

          <h3>Scale-Up and Manufacturing Support:</h3>
          <ul>
            <li>Seamless transition from lab-scale to commercial production.</li>
            <li>Guiding companies through the scale-up process.</li>
          </ul>

          <h3>Regulatory Assistance:</h3>
          <ul>
            <li>Pre-IND, IND, NDA, BLA, ANDA submissions</li>
            <li>FDA meeting support</li>
            <li>Product approval cycle guidance (CRL, IR responses)</li>
            <li>Remediation of GMP facility warning letter.</li>
          </ul>

          <h3>Expertise Across Industries:</h3>
          <ul>
            <li>Pharmaceuticals</li>
            <li>Biotech</li>
            <li>Medical devices</li>
            <li>Dietary supplements</li>
            <li>Research universities</li>
          </ul>
      </section>

      <section className="our-team">
        <h2>Our Team</h2>
        <h3>Dr. Mahesh is an expert in formulation development and regulatory affairs</h3>
        <p>Dr. Mahesh has previous professional experience working at:</p>
        <div className="company-logos">
          <img src={one} alt="Company 1 Logo" />
          <img src={two} alt="Company 2 Logo" />
          <img src={three} alt="Company 3 Logo" />
          <img src={four} alt="Company 4 Logo" />
        </div>
      </section>

      <section className="annexure">
          <h2>Annexure</h2>
          <p><strong>Key Highlights of Dr. Mahesh’s Career Include:</strong></p>
          <ul>
            <li>
              <strong>Technology Platforms:</strong> Dr. Mahesh has spearheaded the development of novel
              technology platforms to support a robust pipeline, covering conceptualization,
              preformulation, feasibility studies, proof-of-concept investigations (505b2 and NCEs),
              scale-up, clinical batch manufacturing, and product launches.
            </li>
            <li>
              <strong>Biologics Development:</strong> Dr. Mahesh has made significant contributions to biologics
              product development and successfully filed biosimilar injectables. His work includes
              peptide characterization and similarity studies, formulation development, process
              validation, and device design for biologic injectable products.
            </li>
            <li>
              <strong>Industry Engagement:</strong> Dr. Mahesh has collaborated with several Contract Research
              Organizations (CROs) and Contract Development and Manufacturing Organizations
              (CDMOs) across the US, Europe, and Asia for product development and launches.
            </li>
            <li>
              <strong>Setting Up R&D:</strong> Dr. Mahesh played a pivotal role in setting up new R&D facilities,
              including formulation, analytical labs, and manufacturing. He was extensively involved in team
              building, equipment procurement, and establishing standard operating procedures (SOPs)
              for the pharmaceutical industry.
            </li>
            <li>
              <strong>Remediation and Compliance:</strong> Dr. Mahesh’s expertise extends to remediating over 60
              pending development and commercial products, resulting in the removal of a warning
              letter for a GMP facility. He has also handled Pre-Approval Inspections (PAIs) and tech
              transfer activities.
            </li>
            <li>
              <strong>Regulatory Acumen:</strong> Dr. Mahesh is well-versed in filing products in the US and global
              markets, adhering to regulatory guidelines (including USFDA, Europe, and Asia) and
              implementing cGMP and GLP practices.
            </li>
            <li>
              <strong>Intellectual Property:</strong> Dr. Mahesh’s contributions extend beyond practical experience, with
              numerous US patents, applications, and publications to his name.
            </li>
          </ul>
        </section>

      <footer className="App-footer">
        <p>&copy; 2024 Esojas Consulting Services. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;