'use client';

export default function BedroomScene() {
  return (
    <div className="relative w-full select-none" aria-hidden="true">
      <style>{`
        @keyframes curtain-l {
          0%, 100% { transform: skewX(0deg) translateX(0px); }
          50%       { transform: skewX(0.6deg) translateX(1px); }
        }
        @keyframes curtain-r {
          0%, 100% { transform: skewX(0deg) translateX(0px); }
          50%       { transform: skewX(-0.6deg) translateX(-1px); }
        }
        @keyframes window-light {
          0%, 100% { opacity: 0.72; }
          50%       { opacity: 0.92; }
        }
        @keyframes light-ray {
          0%, 100% { opacity: 0.045; }
          50%       { opacity: 0.09; }
        }
        @keyframes duvet-settle {
          0%, 100% { transform: scaleY(1) translateY(0px); }
          40%       { transform: scaleY(1.004) translateY(-1.2px); }
          70%       { transform: scaleY(0.999) translateY(0.4px); }
        }
        @keyframes fold-ripple {
          0%, 100% { d: path('M95,292 Q175,286 240,292 Q310,298 385,292 L385,308 Q310,314 240,308 Q175,302 95,308 Z'); }
          50%       { d: path('M95,292 Q175,289 240,293 Q310,296 385,292 L385,308 Q310,312 240,309 Q175,305 95,308 Z'); }
        }
        @keyframes ambient-shift {
          0%, 100% { opacity: 0.18; }
          50%       { opacity: 0.28; }
        }
      `}</style>

      <svg
        viewBox="0 0 480 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Wall gradient — warm morning light from upper-left */}
          <linearGradient id="wall-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F5EFE9" />
            <stop offset="60%" stopColor="#F0E8DF" />
            <stop offset="100%" stopColor="#EAE0D6" />
          </linearGradient>

          {/* Floor gradient */}
          <linearGradient id="floor-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E4DCD2" />
            <stop offset="100%" stopColor="#D8CEC4" />
          </linearGradient>

          {/* Window glow */}
          <radialGradient id="window-glow" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFFBF5" stopOpacity="1" />
            <stop offset="100%" stopColor="#F5EDE0" stopOpacity="1" />
          </radialGradient>

          {/* Duvet gradient — subtle depth */}
          <linearGradient id="duvet-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F4F0EC" />
          </linearGradient>

          {/* Duvet fold gradient */}
          <linearGradient id="fold-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#EDE8E3" />
          </linearGradient>

          {/* Headboard gradient */}
          <linearGradient id="headboard-grad" x1="0" y1="0" x2="0.3" y2="1">
            <stop offset="0%" stopColor="#9A7A6A" />
            <stop offset="100%" stopColor="#6B5040" />
          </linearGradient>

          {/* Headboard inner */}
          <linearGradient id="headboard-inner" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8B6E5A" />
            <stop offset="100%" stopColor="#7A5E4A" />
          </linearGradient>

          {/* Curtain fabric */}
          <linearGradient id="curtain-l-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F0E8DF" />
            <stop offset="40%" stopColor="#FAF6F2" />
            <stop offset="100%" stopColor="#EDE6DC" />
          </linearGradient>
          <linearGradient id="curtain-r-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#EDE6DC" />
            <stop offset="60%" stopColor="#FAF6F2" />
            <stop offset="100%" stopColor="#F0E8DF" />
          </linearGradient>

          {/* Ambient light ray */}
          <linearGradient id="ray-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF8EC" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFF8EC" stopOpacity="0" />
          </linearGradient>

          {/* Pillow gradient */}
          <linearGradient id="pillow-grad" x1="0" y1="0" x2="0.2" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F0ECE8" />
          </linearGradient>

          {/* Drop shadow filter */}
          <filter id="soft-shadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#2A2118" floodOpacity="0.08" />
          </filter>

          {/* Duvet stitching dash */}
          <pattern id="stitch" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <line x1="0" y1="16" x2="32" y2="16" stroke="#E8E2DC" strokeWidth="0.8" strokeDasharray="4 4" />
          </pattern>
        </defs>

        {/* ── Wall ── */}
        <rect x="0" y="0" width="480" height="340" fill="url(#wall-grad)" />

        {/* ── Window ── */}
        {/* Recess shadow */}
        <rect x="160" y="0" width="160" height="195" rx="0" fill="#DDD5C8" />
        {/* Frame outer */}
        <rect x="164" y="0" width="152" height="190" fill="#E8DFD6" />
        {/* Glass — animated light */}
        <rect
          x="172" y="6" width="136" height="178"
          fill="url(#window-glow)"
          style={{ animation: 'window-light 7s ease-in-out infinite' }}
        />
        {/* Glazing bar horizontal */}
        <rect x="172" y="93" width="136" height="5" fill="#DDD5C8" />
        {/* Glazing bar vertical */}
        <rect x="238" y="6" width="5" height="178" fill="#DDD5C8" />
        {/* Window frame inner highlight */}
        <rect x="172" y="6" width="136" height="3" fill="#F5EFE9" opacity="0.6" />

        {/* ── Light rays from window ── */}
        <polygon
          points="172,6 308,6 400,340 320,340"
          fill="url(#ray-grad)"
          style={{ animation: 'light-ray 8s ease-in-out infinite' }}
        />
        <polygon
          points="200,6 280,6 340,340 240,340"
          fill="url(#ray-grad)"
          style={{ animation: 'light-ray 8s ease-in-out infinite 2s' }}
        />

        {/* Ambient warm glow on left wall from window light */}
        <rect
          x="0" y="0" width="185" height="340"
          fill="#FFF8EC"
          style={{ animation: 'ambient-shift 7s ease-in-out infinite' }}
        />

        {/* ── Curtain rod ── */}
        <rect x="90" y="0" width="300" height="7" rx="3.5" fill="#9A8880" />
        {/* Rod finials */}
        <circle cx="90" cy="3.5" r="6" fill="#8B7870" />
        <circle cx="390" cy="3.5" r="6" fill="#8B7870" />
        {/* Curtain rings */}
        {[108,124,140].map((x, i) => (
          <circle key={i} cx={x} cy="7" r="4" fill="none" stroke="#9A8880" strokeWidth="1.5" />
        ))}
        {[340,356,372].map((x, i) => (
          <circle key={i} cx={x} cy="7" r="4" fill="none" stroke="#9A8880" strokeWidth="1.5" />
        ))}

        {/* ── Left curtain panel ── */}
        <g
          style={{
            animation: 'curtain-l 6s ease-in-out infinite',
            transformOrigin: '90px 0px',
          }}
        >
          {/* Main panel */}
          <path
            d="M90,0 L160,0 Q155,60 158,120 Q160,180 155,250 Q152,310 158,340 L90,340 Q94,310 90,250 Q86,180 88,120 Q90,60 90,0 Z"
            fill="url(#curtain-l-grad)"
          />
          {/* Fabric fold lines — left curtain */}
          <path d="M110,0 Q107,80 110,160 Q112,240 108,340" stroke="#E8DFD6" strokeWidth="1.2" fill="none" opacity="0.6" />
          <path d="M130,0 Q128,90 131,170 Q133,260 129,340" stroke="#E8DFD6" strokeWidth="0.8" fill="none" opacity="0.4" />
          {/* Leading edge highlight */}
          <path d="M158,0 Q153,60 156,120 Q158,180 153,250 Q150,310 156,340" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.5" />
          {/* Bottom hem weight */}
          <rect x="90" y="332" width="68" height="8" rx="2" fill="#E8DFD6" />
        </g>

        {/* ── Right curtain panel ── */}
        <g
          style={{
            animation: 'curtain-r 6s ease-in-out infinite 1.2s',
            transformOrigin: '390px 0px',
          }}
        >
          {/* Main panel */}
          <path
            d="M320,0 L390,0 Q390,60 392,120 Q394,180 392,250 Q390,310 394,340 L320,340 Q325,310 322,250 Q320,180 322,120 Q324,60 320,0 Z"
            fill="url(#curtain-r-grad)"
          />
          {/* Fabric fold lines — right curtain */}
          <path d="M370,0 Q373,80 370,160 Q368,240 372,340" stroke="#E8DFD6" strokeWidth="1.2" fill="none" opacity="0.6" />
          <path d="M350,0 Q352,90 349,170 Q347,260 351,340" stroke="#E8DFD6" strokeWidth="0.8" fill="none" opacity="0.4" />
          {/* Leading edge highlight */}
          <path d="M322,0 Q327,60 324,120 Q322,180 327,250 Q330,310 324,340" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.5" />
          {/* Bottom hem weight */}
          <rect x="320" y="332" width="70" height="8" rx="2" fill="#E8DFD6" />
        </g>

        {/* ── Floor ── */}
        <rect x="0" y="340" width="480" height="80" fill="url(#floor-grad)" />
        {/* Skirting board */}
        <rect x="0" y="337" width="480" height="8" rx="0" fill="#D8CEC4" />
        {/* Floor board lines */}
        {[360, 380, 400, 420].map((y, i) => (
          <line key={i} x1="0" y1={y} x2="480" y2={y} stroke="#CEC4BA" strokeWidth="0.8" opacity="0.5" />
        ))}

        {/* ── Bed ── */}
        {/* Bed legs */}
        <rect x="112" y="358" width="18" height="32" rx="4" fill="#3D2E25" />
        <rect x="350" y="358" width="18" height="32" rx="4" fill="#3D2E25" />

        {/* Bed base / divan */}
        <rect x="100" y="335" width="280" height="42" rx="6" fill="#3D2E25" filter="url(#soft-shadow)" />
        <rect x="102" y="337" width="276" height="6" rx="3" fill="#4D3A2E" />

        {/* Headboard */}
        <rect x="100" y="158" width="280" height="186" rx="14" fill="url(#headboard-grad)" filter="url(#soft-shadow)" />
        {/* Headboard inner panel */}
        <rect x="116" y="172" width="248" height="158" rx="10" fill="url(#headboard-inner)" />
        {/* Headboard tufting buttons — 3x2 grid */}
        {[
          {cx:185,cy:218}, {cx:240,cy:218}, {cx:295,cy:218},
          {cx:185,cy:268}, {cx:240,cy:268}, {cx:295,cy:268},
        ].map((b,i) => (
          <g key={i}>
            <circle cx={b.cx} cy={b.cy} r="5" fill="#6B5040" />
            <circle cx={b.cx} cy={b.cy} r="3" fill="#5A4030" />
            <circle cx={b.cx - 1} cy={b.cy - 1} r="1" fill="#8B6E5A" opacity="0.4" />
            {/* Diamond stitch lines */}
            <line x1={b.cx-14} y1={b.cy-18} x2={b.cx} y2={b.cy} stroke="#6B5040" strokeWidth="0.6" opacity="0.3" />
            <line x1={b.cx+14} y1={b.cy-18} x2={b.cx} y2={b.cy} stroke="#6B5040" strokeWidth="0.6" opacity="0.3" />
          </g>
        ))}

        {/* ── Sheet base (visible above duvet) ── */}
        <rect x="104" y="288" width="272" height="82" rx="8" fill="#FEFCF9" />

        {/* ── Pillows ── */}
        {/* Left pillow */}
        <rect x="112" y="272" width="118" height="52" rx="12" fill="url(#pillow-grad)" filter="url(#soft-shadow)" />
        <rect x="118" y="278" width="106" height="40" rx="9" fill="none" stroke="#EDE8E3" strokeWidth="1" />
        {/* Pillow seam highlight */}
        <path d="M118,285 Q171,281 224,285" stroke="#FFFFFF" strokeWidth="1" opacity="0.7" fill="none" />

        {/* Right pillow */}
        <rect x="250" y="272" width="118" height="52" rx="12" fill="url(#pillow-grad)" filter="url(#soft-shadow)" />
        <rect x="256" y="278" width="106" height="40" rx="9" fill="none" stroke="#EDE8E3" strokeWidth="1" />
        <path d="M256,285 Q309,281 362,285" stroke="#FFFFFF" strokeWidth="1" opacity="0.7" fill="none" />

        {/* ── Duvet — animated ── */}
        <g
          style={{
            animation: 'duvet-settle 7s ease-in-out infinite',
            transformOrigin: '240px 335px',
          }}
        >
          {/* Duvet main body */}
          <rect x="97" y="300" width="286" height="78" rx="12" fill="url(#duvet-grad)" filter="url(#soft-shadow)" />

          {/* Stitching pattern on duvet */}
          <rect x="97" y="300" width="286" height="78" rx="12" fill="url(#stitch)" opacity="0.6" />

          {/* Vertical quilting lines */}
          {[145,192,240,288,335].map((x,i) => (
            <line key={i} x1={x} y1={302} x2={x} y2={376} stroke="#EAE4DE" strokeWidth="0.9" opacity="0.5" />
          ))}

          {/* Duvet top fold — turned down edge */}
          <rect x="97" y="300" width="286" height="30" rx="12" fill="url(#fold-grad)" />
          {/* Fold crease line */}
          <path
            d="M97,327 Q175,322 240,327 Q310,332 383,327"
            stroke="#E8E2DC" strokeWidth="1.2" fill="none" opacity="0.8"
          />
          {/* Fold shadow */}
          <path
            d="M97,328 Q175,325 240,328 Q310,331 383,328 L383,332 Q310,335 240,332 Q175,329 97,332 Z"
            fill="#2A2118" opacity="0.04"
          />

          {/* Duvet surface highlight — light catching the edge */}
          <path
            d="M97,302 Q175,299 240,302 Q310,305 383,302"
            stroke="#FFFFFF" strokeWidth="1.8" fill="none" opacity="0.6"
          />
        </g>

        {/* ── Bedside table (right) ── */}
        <rect x="398" y="296" width="62" height="80" rx="6" fill="#8B6E5A" />
        <rect x="400" y="298" width="58" height="4" rx="2" fill="#9A7A6A" />
        {/* Drawer line */}
        <line x1="400" y1="326" x2="458" y2="326" stroke="#7A5E4A" strokeWidth="1" />
        {/* Drawer handle */}
        <rect x="424" y="330" width="12" height="3" rx="1.5" fill="#6B5040" />
        {/* Small lamp on table */}
        <rect x="420" y="270" width="6" height="26" rx="3" fill="#6B5040" />
        <ellipse cx="423" cy="265" rx="18" ry="10" fill="#F0E8DC" />
        <ellipse cx="423" cy="266" rx="14" ry="7" fill="#FFF8F0" opacity="0.8" />
        {/* Lamp glow */}
        <ellipse cx="423" cy="268" rx="24" ry="14" fill="#FFF4E8" opacity="0.12" />

      </svg>
    </div>
  );
}
