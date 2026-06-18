import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface Project {
  name: string;
  category: string;
  tech: string;
  github: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    name: "AgentGuard",
    category: "Agent Runtime & Control Plane",
    tech: "LangGraph, Python asyncio, PostgreSQL, FastAPI, Docker, GCP Cloud Run, LangSmith, Anthropic Claude, OpenAI GPT",
    github: "https://github.com/dumpty-420/agentguard",
    description: "Production-grade Agentic AI runtime built with LangGraph, Python asyncio, and PostgreSQL. Implements circuit-breaker LLM provider failover, real-time cost governance with graceful degradation, and durable checkpoint resumption — reducing agent failure rate by 45% and enabling auditable multi-provider execution across production workloads.",
    image: "/images/agentic_rag.webp",
  },
  {
    name: "HealthLink",
    category: "AI Health Management System",
    tech: "LangChain, LangGraph, Google Gemini, Pinecone, RAG, FastAPI, GCP Cloud Run, GitHub Actions",
    github: "https://github.com/dumpty-420/HealthLink",
    description: "4-agent AI health management system using LangChain, Google Gemini, and Pinecone RAG. Orchestrates sequential Symptom Analysis → Doctor Matching → Appointment Scheduling → Summary generation across 100 doctors and 200+ medical conditions. Deployed end-to-end on GCP Cloud Run with GitHub Actions CI/CD.",
    image: "/images/flytripper.webp",
  },
  {
    name: "HireFlow",
    category: "AI Recruitment Platform",
    tech: "LangChain, Pinecone, BM25, Hybrid RAG, LLM Reranking, Python, FastAPI",
    github: "https://github.com/dumpty-420/Hireflow",
    description: "Hybrid RAG recruitment platform using LangChain, Pinecone, and BM25 retrieval with LLM reranking. Improves candidate match precision by 35% and reduces screening time by 40% across 3,000+ resume-JD pairs.",
    image: "/images/hireflow.webp",
  },
  {
    name: "Inventra",
    category: "AI Inventory & Financial Agent",
    tech: "LangGraph, Google Gemini, PostgreSQL, Python, FastAPI",
    github: "https://github.com/dumpty-420/Inventra-financial-agent",
    description: "4-node Agentic AI inventory management system using LangGraph, Google Gemini, and PostgreSQL. Automates weather-based demand forecasting and reduces manual stock intervention by 60% across 5 regions.",
    image: "/images/inventra.webp",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (box.length === 0) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <p style={{ minHeight: "60px", marginBottom: "15px" }}>{project.description}</p>
                <h4>Tools and features</h4>
                <p>{project.tech}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} link={project.github} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
