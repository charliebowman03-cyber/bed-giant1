'use client';

export default function SleepingDog() {
  return (
    <div className="relative w-full select-none" aria-hidden="true">
      <style>{`
        @keyframes bg-breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.015); }
        }
        @keyframes body-breathe {
          0%, 100% { transform: translateY(0px) scaleX(1); }
          50% { transform: translateY(-3px) scaleX(1.02); }
        }
        @keyframes ear-l {
          0%, 85%, 100% { transform: rotate(0deg); }
          90% { transform: rotate(-8deg); }
          95% { transform: rotate(4deg); }
        }
        @keyframes ear-r {
          0%, 88%, 100% { transform: rotate(0deg); }
          93% { transform: rotate(8deg); }
          97% { transform: rotate(-4deg); }
        }
        @keyframes tail-wag {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(18deg); }
        }
        @keyframes paw-l {
          0%, 100% { transform: rotate(0deg) translateY(0px); }
          50% { transform: rotate(-5deg) translateY(-3px); }
        }
        @keyframes paw-r {
          0%, 100% { transform: rotate(0deg) translateY(0px); }
          50% { transform: rotate(5deg) translateY(-2px); }
        }
        @keyframes zzz-a {
          0% { opacity: 0; transform: translate(0px, 0px) scale(0.7); }
          15% { opacity: 0.9; }
          75% { opacity: 0.7; }
          100% { opacity: 0; transform: translate(-18px, -52px) scale(1.05); }
        }
        @keyframes zzz-b {
          0% { opacity: 0; transform: translate(0px, 0px) scale(0.8); }
          15% { opacity: 0.9; }
          75% { opacity: 0.7; }
          100% { opacity: 0; transform: translate(-24px, -68px) scale(1.15); }
        }
        @keyframes zzz-c {
          0% { opacity: 0; transform: translate(0px, 0px) scale(0.9); }
          15% { opacity: 0.9; }
          75% { opacity: 0.7; }
          100% { opacity: 0; transform: translate(-30px, -88px) scale(1.3); }
        }
        @keyframes star-twinkle {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @keyframes snore-bubble {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.04); }
        }
      `}</style>

      <svg
        viewBox="0 0 440 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        {/* ── Background pill ── */}
        <ellipse
          cx="220" cy="210" rx="195" ry="175"
          fill="#F5EFE9"
          style={{ animation: 'bg-breathe 4s ease-in-out infinite', transformOrigin: '220px 210px' }}
        />

        {/* ── Stars ── */}
        {[
          { cx: 320, cy: 65, r: 3, delay: '0s' },
          { cx: 355, cy: 95, r: 2, delay: '0.6s' },
          { cx: 290, cy: 85, r: 2.5, delay: '1.2s' },
          { cx: 345, cy: 128, r: 1.8, delay: '0.3s' },
          { cx: 370, cy: 60, r: 2.2, delay: '0.9s' },
        ].map((s, i) => (
          <circle
            key={i}
            cx={s.cx} cy={s.cy} r={s.r}
            fill="#9A8880"
            style={{ animation: `star-twinkle 2s ease-in-out infinite ${s.delay}` }}
          />
        ))}

        {/* ── Moon ── */}
        <path
          d="M340 58 Q360 75 340 92 Q320 75 340 58Z"
          fill="#EDE0D8"
        />
        <circle cx="338" cy="75" r="14" fill="#F5EFE9" />
        {/* crescent cutout */}
        <circle cx="345" cy="72" r="11" fill="#F5EFE9" />

        {/* ── Headboard ── */}
        <rect x="45" y="178" width="350" height="18" rx="9" fill="#7A5E4A" />
        {/* Headboard pillars */}
        <rect x="45" y="178" width="28" height="110" rx="8" fill="#6B5040" />
        <rect x="367" y="178" width="28" height="110" rx="8" fill="#6B5040" />
        {/* Top rail */}
        <rect x="45" y="162" width="350" height="22" rx="11" fill="#8B6E5A" />

        {/* ── Mattress ── */}
        <rect x="45" y="278" width="350" height="72" rx="16" fill="#EDE8E3" />
        {/* Mattress piping */}
        <rect x="55" y="278" width="330" height="8" rx="4" fill="#E0DAD5" />

        {/* ── Pillow ── */}
        <ellipse cx="125" cy="287" rx="72" ry="25" fill="white" />
        <ellipse cx="125" cy="287" rx="60" ry="18" fill="#FBF8F5" />
        {/* Pillow seam */}
        <ellipse cx="125" cy="287" rx="60" ry="18" stroke="#EDE8E3" strokeWidth="1.5" fill="none" />

        {/* ── Duvet / blanket ── */}
        <path
          d="M45 293 Q90 278 175 287 Q230 293 285 285 Q330 278 395 290 L395 350 L45 350 Z"
          fill="#C4978A"
        />
        {/* Duvet top fold / trim */}
        <path
          d="M45 293 Q90 278 175 287 Q230 293 285 285 Q330 278 395 290"
          stroke="#B08070" strokeWidth="2.5" fill="none"
        />
        {/* Duvet stitching lines */}
        <path d="M100 305 Q140 295 180 305" stroke="#B08070" strokeWidth="1.2" fill="none" opacity="0.5" />
        <path d="M210 300 Q260 292 310 300" stroke="#B08070" strokeWidth="1.2" fill="none" opacity="0.5" />
        <path d="M330 305 Q355 298 380 305" stroke="#B08070" strokeWidth="1.2" fill="none" opacity="0.5" />

        {/* ── Dog — whole group breathes ── */}
        <g style={{ animation: 'body-breathe 3.8s ease-in-out infinite', transformOrigin: '210px 285px' }}>

          {/* Body (mostly under duvet) */}
          <ellipse cx="225" cy="290" rx="95" ry="32" fill="white" />

          {/* Left ear */}
          <g style={{ animation: 'ear-l 7s ease-in-out infinite', transformOrigin: '90px 278px' }}>
            <ellipse cx="90" cy="290" rx="18" ry="26" fill="#D4A898" transform="rotate(-18 90 290)" />
            <ellipse cx="91" cy="292" rx="12" ry="19" fill="#C9907E" transform="rotate(-18 91 292)" />
          </g>

          {/* Right ear (behind head) */}
          <g style={{ animation: 'ear-r 7s ease-in-out infinite 0.4s', transformOrigin: '148px 280px' }}>
            <ellipse cx="148" cy="290" rx="18" ry="24" fill="#D4A898" transform="rotate(18 148 290)" />
          </g>

          {/* Head */}
          <circle cx="118" cy="278" r="36" fill="white" />
          <circle cx="118" cy="278" r="36" stroke="#EDE8E3" strokeWidth="1" fill="none" />

          {/* Snout */}
          <ellipse cx="126" cy="287" rx="18" ry="13" fill="#F5EFE9" />

          {/* Nose */}
          <ellipse cx="126" cy="281" rx="11" ry="7.5" fill="#2A2118" />
          {/* Nose highlight */}
          <ellipse cx="122" cy="279" rx="4" ry="2.5" fill="white" opacity="0.45" />

          {/* Closed eyes — peaceful curves */}
          <path d="M98 268 Q107 261 116 268" stroke="#2A2118" strokeWidth="2.8" strokeLinecap="round" fill="none" />
          <path d="M122 268 Q131 261 140 268" stroke="#2A2118" strokeWidth="2.8" strokeLinecap="round" fill="none" />
          {/* Eyelash dots */}
          <circle cx="98" cy="268" r="1.5" fill="#2A2118" />
          <circle cx="140" cy="268" r="1.5" fill="#2A2118" />

          {/* Happy sleeping smile */}
          <path d="M116 291 Q126 298 136 291" stroke="#9A8880" strokeWidth="1.8" strokeLinecap="round" fill="none" />

          {/* Rosy cheeks */}
          <ellipse cx="96" cy="282" rx="9" ry="6" fill="#E8B4A8" opacity="0.4" />
          <ellipse cx="148" cy="282" rx="9" ry="6" fill="#E8B4A8" opacity="0.4" />

          {/* Left paw (raised) */}
          <g style={{ animation: 'paw-l 3.8s ease-in-out infinite', transformOrigin: '175px 260px' }}>
            <ellipse cx="175" cy="265" rx="16" ry="22" fill="white" transform="rotate(-15 175 265)" />
            <ellipse cx="175" cy="265" rx="16" ry="22" stroke="#EDE8E3" strokeWidth="1" fill="none" transform="rotate(-15 175 265)" />
            {/* Toe beans */}
            <circle cx="164" cy="255" r="5" fill="#EDE0D8" />
            <circle cx="173" cy="250" r="5.5" fill="#EDE0D8" />
            <circle cx="182" cy="253" r="5" fill="#EDE0D8" />
          </g>

          {/* Right paw (raised) */}
          <g style={{ animation: 'paw-r 3.8s ease-in-out infinite 0.4s', transformOrigin: '210px 255px' }}>
            <ellipse cx="210" cy="258" rx="16" ry="22" fill="white" transform="rotate(12 210 258)" />
            <ellipse cx="210" cy="258" rx="16" ry="22" stroke="#EDE8E3" strokeWidth="1" fill="none" transform="rotate(12 210 258)" />
            {/* Toe beans */}
            <circle cx="199" cy="248" r="5" fill="#EDE0D8" />
            <circle cx="208" cy="243" r="5.5" fill="#EDE0D8" />
            <circle cx="218" cy="247" r="5" fill="#EDE0D8" />
          </g>

          {/* Back paws peeking from duvet */}
          <ellipse cx="315" cy="294" rx="20" ry="13" fill="white" />
          <circle cx="307" cy="288" r="5" fill="#EDE0D8" />
          <circle cx="316" cy="285" r="5.5" fill="#EDE0D8" />
          <circle cx="325" cy="288" r="5" fill="#EDE0D8" />

          <ellipse cx="355" cy="297" rx="20" ry="13" fill="white" />
          <circle cx="347" cy="291" r="5" fill="#EDE0D8" />
          <circle cx="356" cy="288" r="5.5" fill="#EDE0D8" />
          <circle cx="365" cy="291" r="5" fill="#EDE0D8" />

          {/* Tail (curled, wagging) */}
          <g style={{ animation: 'tail-wag 1.4s ease-in-out infinite', transformOrigin: '280px 290px' }}>
            <path
              d="M280 290 Q295 268 308 272 Q320 276 315 290"
              stroke="white" strokeWidth="13" strokeLinecap="round" fill="none"
            />
            <path
              d="M280 290 Q295 268 308 272 Q320 276 315 290"
              stroke="#EDE8E3" strokeWidth="9" strokeLinecap="round" fill="none"
            />
          </g>
        </g>

        {/* ── ZZZs floating from nose area ── */}
        <g style={{ animation: 'zzz-a 2.8s ease-out infinite 0s' }}>
          <text
            x="148" y="250"
            fontSize="17" fontWeight="700"
            fill="#8B6E5A" opacity="0.85"
            fontFamily="Georgia, serif"
            letterSpacing="1"
          >z</text>
        </g>
        <g style={{ animation: 'zzz-b 2.8s ease-out infinite 0.9s' }}>
          <text
            x="138" y="228"
            fontSize="22" fontWeight="700"
            fill="#8B6E5A" opacity="0.75"
            fontFamily="Georgia, serif"
            letterSpacing="1"
          >z</text>
        </g>
        <g style={{ animation: 'zzz-c 2.8s ease-out infinite 1.8s' }}>
          <text
            x="124" y="200"
            fontSize="29" fontWeight="700"
            fill="#8B6E5A" opacity="0.65"
            fontFamily="Georgia, serif"
            letterSpacing="1"
          >Z</text>
        </g>

        {/* ── Floor shadow ── */}
        <ellipse cx="220" cy="358" rx="160" ry="10" fill="#2A2118" opacity="0.06" />

      </svg>
    </div>
  );
}
