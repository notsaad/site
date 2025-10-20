import Layout from "../Layout";
import { StyledLink } from "../styled";
import ThemeToggle from "../ThemeToggle";
import { useTheme } from "../ThemeProvider";

const Resume = () => {
  const { isDarkMode } = useTheme();
  
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
        <h1 style={{ textAlign: "center", fontSize: "2em", padding: "0.375em 5em" }}>Resume</h1>
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
          <StyledLink href="/resume.pdf" download="Saad_Mazhar_Resume.pdf" $isDarkMode={isDarkMode}>
            Download Resume
          </StyledLink>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
