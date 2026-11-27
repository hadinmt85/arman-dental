export function Flourish({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`ornament-line ${className}`}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.4l2.2 7.4L21.6 12l-7.4 2.2L12 21.6l-2.2-7.4L2.4 12l7.4-2.2L12 2.4Z" />
      </svg>
    </span>
  );
}
