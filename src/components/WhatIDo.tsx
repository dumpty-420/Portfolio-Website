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
              <h3>AI & GENERATIVE AI</h3>
              <h4>Focus Area</h4>
              <p>
                Designing Agentic AI, multi-agent workflows, and advanced vector search pipelines.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Agentic AI</div>
                <div className="what-tags">LLMs</div>
                <div className="what-tags">RAG</div>
                <div className="what-tags">Hybrid RAG</div>
                <div className="what-tags">Multi-Agent Systems</div>
                <div className="what-tags">LangChain</div>
                <div className="what-tags">LangGraph</div>
                <div className="what-tags">LangSmith</div>
                <div className="what-tags">Prompt Engineering</div>
                <div className="what-tags">RAGAS Evaluation</div>
                <div className="what-tags">HuggingFace Transformers</div>
                <div className="what-tags">Sentence Transformers</div>
                <div className="what-tags">Pinecone</div>
                <div className="what-tags">FAISS</div>
                <div className="what-tags">BM25</div>
                <div className="what-tags">Hybrid Search</div>
                <div className="what-tags">Reciprocal Rank Fusion (RRF)</div>
                <div className="what-tags">Semantic Search</div>
                <div className="what-tags">Cosine Similarity</div>
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
              <h3>APIs & MLOPS</h3>
              <h4>Focus Area</h4>
              <p>
                Integrating proprietary/open-source LLM APIs and building robust containerized deployment pipelines.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Google Gemini</div>
                <div className="what-tags">Anthropic Claude</div>
                <div className="what-tags">OpenAI GPT</div>
                <div className="what-tags">Model Context Protocol (MCP)</div>
                <div className="what-tags">Docker</div>
                <div className="what-tags">GCP Cloud Run</div>
                <div className="what-tags">Artifact Registry</div>
                <div className="what-tags">GitHub Actions</div>
                <div className="what-tags">CI/CD Pipelines</div>
                <div className="what-tags">LangSmith Tracing</div>
                <div className="what-tags">FastAPI</div>
                <div className="what-tags">Streamlit</div>
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
              <h3>DATA & CLOUD</h3>
              <h4>Focus Area</h4>
              <p>
                Backend engineering, relational database design, data analysis, and cloud infrastructure.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Python</div>
                <div className="what-tags">SQL</div>
                <div className="what-tags">PostgreSQL</div>
                <div className="what-tags">SQLite</div>
                <div className="what-tags">Pandas</div>
                <div className="what-tags">Pydantic</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">GCP</div>
                <div className="what-tags">Cloud Build</div>
                <div className="what-tags">Cloud Run</div>
                <div className="what-tags">Microsoft Azure Fundamentals</div>
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
