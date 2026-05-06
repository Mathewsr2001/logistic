export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      viewBox="0 0 64 64"
      className={className}
    >
      <circle
        cx="32"
        cy="32"
        r="29.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-white/90"
      />
      <g fill="#2997ff" transform="translate(0 1)">
        <polygon points="14,44 20,44 28,26 34,44 41,44 31,18 22,18" />
        <polygon points="28,44 34,44 38,34 43,44 49,44 40,20 32,20" />
        <polygon points="43,44 49,44 53,37 56,44 61,44 55,23 46,21" />
      </g>
    </svg>
  );
}
