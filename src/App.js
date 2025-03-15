import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Button } from "./components/ui/Button";

function Home() {
  return (
    <div className="text-center p-10 bg-gray-100 min-h-screen">
      <section className="py-16">
        <h1 className="text-5xl font-extrabold text-blue-600">Hi, I'm Venkata Suresh Mallela</h1>
        <p className="text-2xl mt-4 text-gray-700">A DevOps Engineer specializing in Cloud, CI/CD, and Automation.</p>
        <p className="text-lg mt-2 italic text-gray-500">Building scalable, automated, and secure cloud solutions.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Button asChild>
            <a href="/resume.pdf" download>Resume</a>
          </Button>
          <div className="w-4"></div>
          <Button asChild>
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </Button>
          <div className="w-4"></div> {/* Gap between LinkedIn and GitHub */}
          <Button asChild>
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Button>
          <div className="w-4"></div>
          <Button asChild>
            <a href="/contact">Contact Me</a>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800">Skills & Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 text-gray-700 text-center">
          <div className="bg-gray-200 p-4 rounded-lg">AWS, Azure, GCP</div>
          <div className="bg-gray-200 p-4 rounded-lg">Jenkins, GitHub Actions, GitLab CI, ArgoCD</div>
          <div className="bg-gray-200 p-4 rounded-lg">Docker, Kubernetes, Helm</div>
          <div className="bg-gray-200 p-4 rounded-lg">Terraform, CloudFormation, Pulumi</div>
          <div className="bg-gray-200 p-4 rounded-lg">Prometheus, Grafana, CloudWatch, ELK Stack</div>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;