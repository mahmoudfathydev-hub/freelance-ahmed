"use client";

const FloatingBubble = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Large floating bubble */}
      <div
        className="absolute rounded-full blur-3xl opacity-20 animate-pulse"
        style={{
          width: "300px",
          height: "300px",
          backgroundColor: "#FF6C0C",
          top: "10%",
          left: "5%",
          animation: "float 6s ease-in-out infinite",
        }}
      />

      {/* Medium floating bubble */}
      <div
        className="absolute rounded-full blur-3xl opacity-15 animate-pulse"
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "#FF6C0C",
          bottom: "20%",
          right: "10%",
          animation: "float 8s ease-in-out infinite 1s",
        }}
      />

      {/* Small floating bubble */}
      <div
        className="absolute rounded-full blur-3xl opacity-10 animate-pulse"
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: "#FF6C0C",
          top: "50%",
          right: "5%",
          animation: "float 7s ease-in-out infinite 2s",
        }}
      />

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingBubble;
