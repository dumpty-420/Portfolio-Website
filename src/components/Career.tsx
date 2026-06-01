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
                <h4>Senior Customer Success Manager</h4>
                <h5>Infosys, Bengaluru</h5>
              </div>
              <h3>Jul 2023 - Mar 2025</h3>
            </div>
            <p>
              • Managed Fortune 500 enterprise SaaS accounts, 28% account growth
              <br />
              • Led Executive Business Reviews, 33% feature adoption increase
              <br />
              • Closed $1.2M+ in expansion revenue, 110% net revenue retention
              <br />
              • Influenced 5 product roadmap enhancements
              <br />
              • 40% faster time-to-value, 20% decrease in early-stage churn
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Customer Success Manager</h4>
                <h5>Fractal Analytics, Bengaluru</h5>
              </div>
              <h3>Aug 2021 - Aug 2022</h3>
            </div>
            <p>
              • Built KPI dashboard with Salesforce and ChurnZero, reduced at-risk revenue by 35%
              <br />
              • 25% increase in active users per enterprise account
              <br />
              • 30% uplift in feature utilization
              <br />
              • Mentored junior CSMs, 15% improvement in team NRR
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>UBS Business Solutions, Pune</h5>
              </div>
              <h3>Jul 2019 - Aug 2021</h3>
            </div>
            <p>
              • ELK Stack migration, 40% operational cost savings
              <br />
              • Led Level Support (L3) via ServiceNow, 10+ tickets daily
              <br />
              • Reduced incident downtime by 70%
              <br />
              • CI/CD pipelines with Git, GitLab, Jenkins, 50% more efficient releases
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science & Engineering</h4>
                <h5>Vellore Institute of Technology</h5>
              </div>
              <h3>May 2019</h3>
            </div>
            <p>
              • GPA: 8.61/10 (Top 10% of 1500)
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>Professional Development</h5>
              </div>
              <h3>2025 - 2026</h3>
            </div>
            <p>
              • Generative AI — Coding Ninjas (Nov 2025 - Jul 2026)
              <br />
              • Microsoft Azure Certified Fundamentals
              <br />
              • HubSpot Academy: Inbound Service Fundamentals (2025)
              <br />
              • HubSpot Academy: Inbound Marketing (2025)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
