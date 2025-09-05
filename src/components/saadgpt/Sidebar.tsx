import React from "react";
import {
  Sidebar as SidebarStyled,
  TopSidebarButton,
  SidebarHeader,
} from "./styled";

export const Sidebar: React.FC = () => {
  const sidebarItems = [
    {
      id: "1",
      title: "This Site!",
      technologies: "Typescript, React",
      url: "/",
      displayDate: "June 2025",
    },
    {
      id: "2",
      title: "Interpreter in Go",
      technologies: "Go",
      url: "https://github.com/notsaad/interpreter",
      displayDate: "October 2024",
    },
    {
      id: "3",
      title: "Sustain App",
      technologies: "Javascript, Python, Flask",
      url: "https://github.com/notsaad/uOttaHack2024",
      displayDate: "Feb 2024",
    },
  ];

  return (
    <SidebarStyled>
      <TopSidebarButton onClick={() => window.location.reload()}>
        New Chat
      </TopSidebarButton>
      <TopSidebarButton
        onClick={(e) => window.open("https://github.com/notsaad", "_blank")}
      >
        GitHub
      </TopSidebarButton>

      <div style={{ marginTop: "20px", overflowY: "auto", flex: 1 }}>
        {sidebarItems.map((item) => (
          <div key={item.id}>
            <SidebarHeader>{item.displayDate}</SidebarHeader>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "10px",
                  textAlign: "left",
                  backgroundColor: "transparent",
                  border: "none",
                  color: "white",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "14px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                  transition: "background-color 0.2s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#2b2c2f")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "transparent")
                }
              >
                {item.title}
                <br />
                <span style={{ fontSize: "12px", color: "#8e8ea0" }}>
                  {item.technologies}
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "auto",
          padding: "10px 0",
          borderTop: "1px solid #4d4d4f",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "8px",
            marginBottom: "15px",
            justifyContent: "center",
          }}
        >
          <a
            href="/"
            style={{
              padding: "10px",
              textAlign: "center",
              backgroundColor: "transparent",
              border: "1px solid #4d4d4f",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "14px",
              textDecoration: "none",
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#2b2c2f";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Home
          </a>
          <a
            href="/resume"
            style={{
              padding: "10px",
              textAlign: "center",
              backgroundColor: "transparent",
              border: "1px solid #4d4d4f",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "14px",
              textDecoration: "none",
              transition: "background-color 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#2b2c2f";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            Resume
          </a>
        </div>
        <div
          style={{
            color: "#8e8ea0",
            fontSize: "12px",
            textAlign: "center",
            paddingTop: "10px",
            borderTop: "1px solid #4d4d4f",
          }}
        >
          SaadGPT v1.0.0
        </div>
      </div>
    </SidebarStyled>
  );
};
