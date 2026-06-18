import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Career <span>&</span>
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Generative AI Enthusiast (Certification)</h4>
                <h5>Coding Ninjas, Remote</h5>
              </div>
              <h3>Nov 2025 – Present</h3>
            </div>
            <p>
              • Advanced Certification in Generative AI & Multi-Agent Systems
              <br />
              • Building production-grade agentic workflows using LangGraph and LangChain
              <br />
              • Developed AgentGuard (agent runtime), HealthLink (4-agent health system),
                HireFlow (Hybrid RAG recruitment), and Inventra (financial inventory agent)
              <br />
              • Deployed all projects end-to-end on GCP Cloud Run with GitHub Actions CI/CD
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Team Lead</h4>
                <h5>Infosys Pvt Ltd, Bengaluru</h5>
              </div>
              <h3>July 2023 – March 2025</h3>
            </div>
            <p>
              • Delegated authority and fostered self-organisation among 12+ engineers,
                achieving 95% SLA compliance and converting 80% of CSATs to top-box ratings
              <br />
              • Provided technical expertise for O365 products — Exchange Online, SharePoint,
                OneDrive, and Teams — improving system reliability by 30%
              <br />
              • Conducted case reviews for 50+ daily tickets in ServiceNow, achieving an
                SSAT of 189 and improving team efficiency by 25%
              <br />
              • Led resolution of 500+ monthly tickets, achieving 98% customer satisfaction
                and reducing resolution time by 20%
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cloud Support Engineer</h4>
                <h5>Fractal Analytics, Bengaluru</h5>
              </div>
              <h3>Aug 2021 – Aug 2022</h3>
            </div>
            <p>
              • Troubleshot and optimised weekly data refresh processes using KNIME,
                maintaining 80% efficiency and reducing delays by 25%
              <br />
              • Managed 20+ daily tickets in ServiceNow, achieving 99.8% success rate
                and reducing resolution time by 30%
              <br />
              • Resolved technical issues with Azure diagnostic tools, increasing
                stakeholder satisfaction by 35%
              <br />
              • Configured Azure Monitor and Application Insights, reducing
                manpower needs by 60%
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>UBS Business Solutions, Pune</h5>
              </div>
              <h3>July 2019 – Aug 2021</h3>
            </div>
            <p>
              • Designed and implemented backend solutions and GRC controls for 4+ use
                cases in the IP Center platform using Java and SQL, enhancing efficiency by 30%
              <br />
              • Spearheaded Linux to ELK Stack migration — Elasticsearch, Logstash, Kibana —
                achieving 40% cost reduction and enhanced observability
              <br />
              • Led India team resolving 10+ Level 3 tickets in ServiceNow for IP Center
                systems, achieving 95% resolution rate and minimising downtime by 30%
              <br />
              • Streamlined release management via CI/CD pipelines using Git, GitLab,
                and Jenkins, reducing release cycle time by 35%
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science</h4>
                <h5>VIT Bangalore</h5>
              </div>
              <h3>May 2019</h3>
            </div>
            <p>
              • GPA: 8.61/10 (Top 10% in the class of 1500)
              <br />
              • Graduated May 2019
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications & Achievements</h4>
                <h5>Professional Development</h5>
              </div>
              <h3>2025 - 2026</h3>
            </div>
            <p>
              • Microsoft Azure Certified Fundamentals
              <br />
              • Advanced Certification in Generative AI & Multi-Agent Systems by Coding Ninjas
              <br />
              • Infosys "Best Technical Lead" Award
              <br />
              • Top Performer — Coding Ninjas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
