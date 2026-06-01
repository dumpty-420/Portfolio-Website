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
    name: "HireFlow",
    category: "Hybrid RAG Recruitment Platform",
    tech: "LangChain, Pinecone, Google Gemini, RAGAS, BM25, Streamlit",
    github: "https://github.com/dumpty-420/Hireflow",
    description: "AI recruitment platform using hybrid vector + BM25 search with LLM reranking and RAGAS evaluation to match candidates to job descriptions. Central Orchestrator architecture with LangChain RunnableBranch routing shallow vs deep search.",
    image: "/images/hireflow.webp",
  },
  {
    name: "Inventra Financial Agent",
    category: "AI Inventory & Financial Management",
    tech: "LangGraph, LangChain, Google Gemini, SQLite, OpenWeather API, Streamlit",
    github: "https://github.com/dumpty-420/Inventra-financial-agent",
    description: "Multi-agent system for inventory management, financial analysis, and weather-based demand forecasting. 4-node LangGraph workflow with Central Orchestrator architecture. Includes MCP tools, LangSmith tracing, and automated vendor ticketing.",
    image: "/images/inventra.webp",
  },
  {
    name: "Agentic RAG",
    category: "Single + Multi-Domain RAG System",
    tech: "LangGraph, LangChain, Pinecone, Google Gemini, HuggingFace, FastAPI",
    github: "https://github.com/dumpty-420/Agentic-Rag",
    description: "Two-part RAG system — Single Agentic RAG with planning, reranking, criticism, and memory loop; Multi-Agentic RAG with 7 LangGraph agents across 3 Pinecone domain indexes using Reciprocal Rank Fusion and reflection loops. Hybrid architecture.",
    image: "/images/agentic_rag.webp",
  },
  {
    name: "FlyTripper",
    category: "AI Travel Planner",
    tech: "Multi-agent system, Google Gemini, Streamlit",
    github: "https://github.com/dumpty-420/FlyTripper",
    description: "Multi-agent AI travel planning system where autonomous agents collaborate to research, plan, and generate complete travel itineraries. Multi-agent architecture with tool-using agents.",
    image: "/images/flytripper.webp",
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
