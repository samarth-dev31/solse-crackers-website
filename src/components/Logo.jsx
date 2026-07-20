export default function Logo() {
  return (
    <div className="flex items-center gap-3 select-none">
      <svg
        width="56"
        height="56"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_12px_rgba(255,215,0,0.45)]"
      >
        <defs>
          <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF2A6" />
            <stop offset="100%" stopColor="#F5B800" />
          </linearGradient>
        </defs>

        <circle cx="32" cy="32" r="3.5" fill="url(#gold)" />

        {[
          [32,6],[32,58],[6,32],[58,32],
          [12,12],[52,52],[12,52],[52,12],
          [18,8],[46,56],[8,18],[56,46],
          [18,56],[46,8],[8,46],[56,18],
        ].map(([x,y],i)=>(
          <line
            key={i}
            x1="32"
            y1="32"
            x2={x}
            y2={y}
            stroke="url(#gold)"
            strokeWidth="2.3"
            strokeLinecap="round"
          />
        ))}

        <circle cx="32" cy="6" r="2" fill="#FFD54A"/>
        <circle cx="58" cy="32" r="2" fill="#FFD54A"/>
        <circle cx="6" cy="32" r="2" fill="#FFD54A"/>
        <circle cx="32" cy="58" r="2" fill="#FFD54A"/>
      </svg>

      <div className="leading-tight">
        <h1
          className="text-4xl md:text-4xl font-black tracking-wide"
          style={{
            background:
              "linear-gradient(180deg,#FFF2A6,#FFD54A,#E6A700)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 20px rgba(255,215,0,.35)",
          }}
        >
          Solse Crackers
        </h1>

        <p className="text-[10px] md:text-xs uppercase tracking-[0.45em] text-yellow-100/70">
          Premium Fireworks
        </p>
      </div>
    </div>
  );
}