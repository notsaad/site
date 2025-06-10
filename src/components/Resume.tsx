import Layout from "./Layout";
import { StyledLink } from "./styled";
import ThemeToggle from "./ThemeToggle";

const Resume = () => {
  return (
    <Layout>
      <ThemeToggle />
      <div
        className="resume-container"
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <h1 style={{ marginBottom: "20px", textAlign: "center" }}>Resume</h1>
        <div
          style={{
            width: "100%",
            maxWidth: "900px",
            height: "80vh",
            border: "1px solid #ccc",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <iframe
            src="/resume.pdf"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="Saad Mazhar Resume"
          />
        </div>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <StyledLink href="/resume.pdf" download="Saad_Mazhar_Resume.pdf">
            Download Resume
          </StyledLink>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
