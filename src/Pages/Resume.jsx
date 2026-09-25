import './Resume.css';

function Resume() {

const calculateSum = () => {
    const number1= Number(document.getElementById("number1").value);
    const number2= Number(document.getElementById("number2").value);
   
    alert("Sum = " +(number1 + number2));
};


    return (
        <div className = "Resume">
            <header>
                <h1>Nithinkumar</h1>
                <h3>Email : nallanithinkumar6@gmail.com</h3>
                <h3>Phone no : +919347832511 </h3>
            </header>

            {/*Resume Summary*/}

            <section>
                <h2>Resume Summary</h2>
                <hr/>
                <p> 
                    Data Analyst with 1 year of professional experience in collecting, cleaning, analyzing, and interpreting data to support business decision-making. Proficient in Python, SQL, Excel, Power BI, and Tableau, with hands-on experience in data cleaning, exploratory data analysis, dashboard development, KPI reporting, and data visualization. Skilled at transforming raw data into meaningful insights and presenting findings to stakeholders. Strong analytical, problem-solving, and communication skills with a keen interest in using data to improve business performance.
                </p>
            </section>

            {/*Technical Skills*/}

            <section>
                <h2>Technical Skills</h2>
                <hr/>
                <ul>
                     <li>Python</li>
                     <li>SQL</li>
                     <li>Excel</li>
                     <li>PowerBI</li>
                     <li>Tableau</li>  
                </ul>
            </section>

            {/*Professional Experience*/}

            <section>
                <h2>Professional Experience</h2>
                <hr/>
                  <div className="experience">
                     <h3>Company 1</h3>
                     <p><strong>Designation:</strong> Software Developer</p>
                     <p><strong>Working Period:</strong> APR 2025 - 2026</p>
                  </div>

                  <div className="experience">
                     <h3>Company 2</h3>
                     <p><strong>Designation:</strong> Junior Developer</p>
                     <p><strong>Working Period:</strong> JAN 2024 - MAR 2025</p>
                  </div>
            </section>

            {/* Personal Details */}

            <section>
                <h2> Personal Details</h2>
                <hr/>

                <p><strong>Name:</strong> Nithinkumar</p>
                <p><strong>Gender:</strong> Male</p>
                <p><strong>DOB:</strong> 17 August 2003</p>
            </section>

            {/* Social Media Links */}

            <section>
                <h2>Social Media Links</h2>
                <hr/>
                <div className="sociallinks">
                    <ul>
                        <li>
                        <a 
                         href = "https://www.instagram.com/?hl=en"
                         target = "_blank"
                         rel = "noreferrer"
                        >  
                        Instagram
                        </a>
                        </li>
                        <li>
                        <a
                        href = "https://www.facebook.com/"
                        target = "_balnk"
                        rel = "noreferrer"
                        >
                        Facebook
                        </a>
                        </li>
                        <li>
                        <a
                        href = "https://x.com/home"
                        target = "_balnk"
                        rel = "noreferror"
                        >
                        Twitter
                        </a>
                        </li>
                        <li>
                        <a
                        href = "https://www.linkedin.com/feed/"
                        target = "_balnk"
                        rel = "noreferrer"
                        >
                        Linkedin
                        </a>
                        </li>
                    </ul>
                    
                </div>
                
            </section>

            {/* Adding Section */}
            <section>
                <h2>Add Two Numbers</h2>
                <hr/>
                <div className = "calculator">
                    <label>Number 1</label>
                    <input
                      type = "number"
                      id = "number1"
                      placeholder= "Enter Number 1"
                    />

                    <label>Number 2</label>
                    <input
                      type = "number"
                      id = "number2"
                      placeholder = "Enter Number 2"
                    />

                    <button onClick ={calculateSum}>
                     Add
                    </button>

                </div>
            </section>

        </div> 
    );
}

export default Resume;
