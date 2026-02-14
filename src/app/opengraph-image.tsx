import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Perkkk | Creative Developer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  // Font loading is skipped for simplicity, using system/fallback fonts
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050505",
          backgroundImage:
            "radial-gradient(circle at 50% 100%, #10B981 0%, transparent 50%)",
          color: "white",
          fontFamily: "monospace",
        }}
      >
        <div 
          style={{
            position: 'absolute',
             top: 40,
             left: 60,
             display: 'flex',
             alignItems: 'center',
             gap: '12px',
             color: '#10B981',
             fontSize: '18px',
             letterSpacing: '0.2em',
             fontWeight: 'bold',
             textTransform: 'uppercase'
          }}
        >
             <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#10B981' }} />
             System Online
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
          <div
            style={{
              fontSize: 160,
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.05em",
              lineHeight: 0.9,
              marginTop: 40,
              backgroundClip: "text",
              color: "transparent",
              backgroundImage: "linear-gradient(180deg, #ffffff, #ffffff, rgba(255,255,255,0.4))",
            }}
          >
            PERKKK
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 400,
              color: "rgba(16, 185, 129, 0.8)",
              textAlign: "center",
              letterSpacing: "0.05em",
              maxWidth: 800,
            }}
          >
            Computer Science Student & Creative Developer
          </div>
        </div>

        <div 
            style={{
                position: 'absolute',
                bottom: 40,
                right: 60,
                color: 'rgba(255,255,255,0.4)',
                fontSize: 24,
                letterSpacing: '0.1em'
            }}
        >
            LAUNCHING 27.03.2026
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
