import Layout from "./Layout";
import ThemeToggle from "./ThemeToggle";

const Resume = () => {
  return (
    <Layout>
      <ThemeToggle />
      <div className="resume-container" style={{ 
        padding: '20px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        minHeight: '100vh'
      }}>
        <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>Resume</h1>
        <div style={{ 
          width: '100%', 
          maxWidth: '900px', 
          height: '80vh',
          border: '1px solid #ccc',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <iframe
            src="/resume.pdf"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Saad Mazhar Resume"
          />
        </div>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <a 
            href="/resume.pdf" 
            download="Saad_Mazhar_Resume.pdf"
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '5px',
              display: 'inline-block'
            }}
          >
            Download Resume
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
