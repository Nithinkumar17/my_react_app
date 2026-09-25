import "./Projects.css";

function Projects() {
    return (
        <div className="projects-page">

            {/* Page Header */}
            <div className="projects-header">
                <p className="small-title">MY WORK</p>
                <h1>Projects</h1>
                <p>
                    A collection of data analytics projects showcasing my
                    skills in data cleaning, analysis, visualization and
                    business intelligence.
                </p>
            </div>

            {/* Projects Container */}
            <div className="projects-container">

                {/* Project 1 */}
                <div className="project-card">

                    <div className="project-number">01</div>

                    <div className="project-content">

                        <h2>
                            End-to-End Retail Performance
                            <br />
                            & Behavioral Analytics
                        </h2>

                        <p className="project-description">
                            A comprehensive analytics project for RetailNova Inc.
                            designed to drive growth, optimize operations and
                            enhance customer satisfaction.
                        </p>

                        <p className="project-description">
                            The project addresses important business challenges
                            including increasing product returns, customer churn
                            and declining profitability. The workflow includes
                            data cleaning, exploratory data analysis, SQL
                            analysis, KPI extraction and interactive dashboard
                            development.
                        </p>

                        <div className="project-info">

                            <div>
                                <span>ROLE</span>
                                <strong>Data Analyst</strong>
                            </div>

                            <div>
                                <span>TIMELINE</span>
                                <strong>2 Months</strong>
                            </div>

                        </div>

                        <div className="tools">
                            <span>Python</span>
                            <span>SQL</span>
                            <span>Excel</span>
                            <span>Power BI</span>
                            <span>Tableau</span>
                        </div>

                    </div>
                </div>


                {/* Project 2 */}
                <div className="project-card">

                    <div className="project-number">02</div>

                    <div className="project-content">

                        <h2>
                            Data Analysis & Visualization
                            <br />
                            of Global Terrorism
                        </h2>

                        <p className="project-description">
                            An exploratory data analysis and visualization
                            project focused on identifying patterns, trends
                            and geographical insights related to terrorist
                            activities worldwide.
                        </p>

                        <p className="project-description">
                            Using historical incident-level data such as the
                            Global Terrorism Database (GTD), the project
                            transforms complex raw data into meaningful
                            visual insights to understand how terrorism has
                            evolved across time, geography and attack methods.
                        </p>

                        <div className="project-info">

                            <div>
                                <span>ROLE</span>
                                <strong>Data Analyst</strong>
                            </div>

                            <div>
                                <span>TIMELINE</span>
                                <strong>2 Months</strong>
                            </div>

                        </div>

                        <div className="tools">
                            <span>Python</span>
                            <span>SQL</span>
                            <span>Excel</span>
                            <span>Power BI</span>
                            <span>Tableau</span>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default Projects;