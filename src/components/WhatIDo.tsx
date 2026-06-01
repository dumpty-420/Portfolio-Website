import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>AI & ML</h3>
              <h4>Focus Area</h4>
              <p>
                Designing and evaluating robust RAG systems, multi-agent orchestrators, and custom LLM applications.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">LangChain</div>
                <div className="what-tags">LangGraph</div>
                <div className="what-tags">RAG</div>
                <div className="what-tags">Pinecone</div>
                <div className="what-tags">FAISS</div>
                <div className="what-tags">BM25</div>
                <div className="what-tags">Hybrid Search</div>
                <div className="what-tags">Google Gemini</div>
                <div className="what-tags">RAGAS</div>
                <div className="what-tags">Prompt Engineering</div>
                <div className="what-tags">Multi-Agent Systems</div>
                <div className="what-tags">HuggingFace</div>
                <div className="what-tags">LangSmith</div>
                <div className="what-tags">MCP</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>ENGINEERING</h3>
              <h4>Focus Area</h4>
              <p>
                Building production-grade backend services, databases, CI/CD pipelines, and cloud solutions.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Python</div>
                <div className="what-tags">FastAPI</div>
                <div className="what-tags">Streamlit</div>
                <div className="what-tags">PostgreSQL</div>
                <div className="what-tags">SQLite</div>
                <div className="what-tags">SQL</div>
                <div className="what-tags">REST API</div>
                <div className="what-tags">Git</div>
                <div className="what-tags">Docker</div>
                <div className="what-tags">ELK Stack</div>
                <div className="what-tags">Linux</div>
                <div className="what-tags">Kafka</div>
                <div className="what-tags">Elasticsearch</div>
                <div className="what-tags">Microsoft Azure</div>
                <div className="what-tags">ServiceNow</div>
                <div className="what-tags">CI/CD</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 2)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>BUSINESS</h3>
              <h4>Focus Area</h4>
              <p>
                Managing key enterprise SaaS accounts, driving executive business reviews, and accelerating product growth.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Customer Success</div>
                <div className="what-tags">Account Management</div>
                <div className="what-tags">Salesforce</div>
                <div className="what-tags">SaaS</div>
                <div className="what-tags">Stakeholder Management</div>
                <div className="what-tags">Executive Business Reviews</div>
                <div className="what-tags">NRR</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
