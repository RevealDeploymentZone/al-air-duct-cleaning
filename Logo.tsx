import { SVGProps } from 'react';

interface LogoProps extends SVGProps<SVGSVGElement> {
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
  className?: string;
}

export default function Logo({ showText = true, size = 'md', variant = 'light', className, ...props }: LogoProps) {
  // Dimensions based on size prop - 1:1 aspect ratio matching the 500x500 viewBox exactly
  const dimensions = {
    sm: { width: 68, height: 68, iconSize: 40 },
    md: { width: 95, height: 95, iconSize: 60 },
    lg: { width: 135, height: 135, iconSize: 85 },
    xl: { width: 190, height: 190, iconSize: 120 }
  };

  const currentDim = dimensions[size];
  const isDark = variant === 'dark';
  const textColor = isDark ? '#ffffff' : '#1e293b';
  const chimneyColor = isDark ? '#475569' : '#1e293b';

  return (
    <div className={`flex items-center gap-2.5 ${className || ''}`} id="brand-logo-container">
      {/* High-fidelity vector SVG reproducing the user's gold/black house-duct logo */}
      <svg
        viewBox="0 0 500 500"
        width={showText ? currentDim.width : currentDim.iconSize}
        height={showText ? currentDim.height : currentDim.iconSize}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="select-none flex-shrink-0"
        {...props}
      >
        <g id="logo-icon-and-graphic-elements">
          {/* DEFINITIONS FOR GRADIENTS */}
          <defs>
            {/* Metallic Steel Gradient for the flexible duct pipe */}
            <linearGradient id="metallic-steel" x1="300" y1="100" x2="450" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="25%" stopColor="#cbd5e1" />
              <stop offset="50%" stopColor="#f8fafc" />
              <stop offset="75%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
            
            {/* Golden Honey Premium Gradient matching the gold branding */}
            <linearGradient id="gold-honey" x1="50" y1="150" x2="400" y2="300" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
          </defs>

          {/* 1. BLACK CHIMNEY (VERTICAL RECTANGLE BEHIND ROOF) */}
          <rect x="265" y="110" width="30" height="96" fill={chimneyColor} rx="2" />

          {/* 2. THE MAIN SHINY METALLIC FLEX DUCT PIPE (CURVING FROM UNDER THE ROOF UP AND RIGHT) */}
          {/* Main pipe body */}
          <path
            d="M 302 232 C 302 180, 310 120, 385 120 C 400 120, 420 125, 412 180"
            stroke="url(#metallic-steel)"
            strokeWidth="50"
            strokeLinecap="butt"
            fill="none"
            id="pipe-backbone"
          />

          {/* Ribs detailing on the flexible metallic duct simulating the spine */}
          <path d="M 300 215 Q 312 212 325 215" stroke="#334155" strokeWidth="6" fill="none" />
          <path d="M 301 190 Q 315 186 328 190" stroke="#334155" strokeWidth="6" fill="none" />
          <path d="M 304 165 Q 320 160 334 165" stroke="#334155" strokeWidth="6" fill="none" />
          <path d="M 314 142 Q 334 135 351 142" stroke="#334155" strokeWidth="6" fill="none" />
          <path d="M 334 125 Q 355 116 373 125" stroke="#334155" strokeWidth="6" fill="none" />
          <path d="M 360 115 Q 380 111 394 120" stroke="#334155" strokeWidth="6" fill="none" />
          <path d="M 378 126 Q 396 130 405 146" stroke="#334155" strokeWidth="6" fill="none" />
          <path d="M 384 146 Q 396 156 397 174" stroke="#334155" strokeWidth="6" fill="none" />

          {/* Duct Terminal Gold Collar Ring */}
          <ellipse cx="399" cy="151" rx="14" ry="29" fill="#f59e0b" transform="rotate(-15, 399, 151)" stroke="#d97706" strokeWidth="4" />
          <ellipse cx="399" cy="151" rx="8" ry="19" fill={chimneyColor} transform="rotate(-15, 399, 151)" />

          {/* 3. DYNAMIC BLOWING ORANGE/GOLD AIR BREEZE CURVES OUT FROM THE PIPE */}
          <path d="M 405 142 Q 440 142 475 148 Q 490 151 505 142" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M 405 152 Q 445 156 480 170 Q 495 174 510 166" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M 402 162 Q 435 172 468 186 Q 482 192 498 182" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" fill="none" />

          {/* 4. BLACK LOWER ROOF INFILL (SYMMETRICAL INNER SLICE) */}
          <path d="M 145 220 L 210 148 L 275 220 Z" fill={chimneyColor} />

          {/* 5. BLACK 4-PANE WINDOW */}
          <g transform="translate(187, 204)">
            <rect x="0" y="0" width="20" height="20" fill={chimneyColor} rx="1" />
            <rect x="24" y="0" width="20" height="20" fill={chimneyColor} rx="1" />
            <rect x="0" y="24" width="20" height="20" fill={chimneyColor} rx="1" />
            <rect x="24" y="24" width="20" height="20" fill={chimneyColor} rx="1" />
          </g>

          {/* 6. GOLD INNER ROOF PITCH & SOLID BASE OUTLINE */}
          {/* Golden Roof Line - Symmetrical peak */}
          <path
            d="M 70 256 L 210 92 L 405 256"
            stroke="#d97706"
            strokeWidth="32"
            strokeLinecap="round"
            strokeLinejoin="miter"
            fill="none"
          />

          {/* Tiny left chimney/gable accent block */}
          <path d="M 120 180 L 120 140 L 145 140 L 145 170" fill="#d97706" />

          {/* 7. BRAND TYPOGRAPHY: "AL AIR DUCT" & "CLEANING SERVICE" */}
          <text
            x="248"
            y="322"
            fontFamily="'Inter', 'Helvetica Neue', sans-serif"
            fontSize="68"
            fontWeight="900"
            textAnchor="middle"
            letterSpacing="-1"
          >
            <tspan fill="#d97706">AL </tspan>
            <tspan fill={textColor}>AIR DUCT</tspan>
          </text>

          {/* Thin horizontal gold rules flanking the lower text */}
          <line x1="42" y1="365" x2="165" y2="365" stroke="#d97706" strokeWidth="5" strokeLinecap="round" />
          <line x1="335" y1="365" x2="458" y2="365" stroke="#d97706" strokeWidth="5" strokeLinecap="round" />

          {/* Subtext: "CLEANING SERVICE" centered with spaced-out letters */}
          <text
            x="250"
            y="375"
            fontFamily="'Inter', 'Helvetica Neue', sans-serif"
            fontSize="30"
            fontWeight="800"
            letterSpacing="8"
            fill={textColor}
            textAnchor="middle"
          >
            CLEANING SERVICE
          </text>

          {/* 8. GOLD ELEMENT: DYNAMIC WAVE UNDERLINING THE ENTIRE BRAND */}
          <path
            d="M 80 435 C 130 405, 180 395, 250 415 C 315 435, 385 415, 420 395"
            stroke="#d97705"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
}
