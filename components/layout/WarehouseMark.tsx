export default function WarehouseMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
    >
      <rect x="2" y="10" width="18" height="10" rx="1" fill="white" opacity="0.9" />
      <path d="M1 10L11 2L21 10" stroke="white" strokeWidth="2" strokeLinejoin="round" />
      <rect x="8" y="13" width="6" height="7" rx="0.5" fill="#0f4c81" />
    </svg>
  );
}
