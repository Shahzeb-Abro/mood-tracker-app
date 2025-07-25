export const AvatarPlaceholder = ({ width = 64, height = 64 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 64 64"
    >
      <path
        fill="#9393B7"
        d="M0 32C0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32Z"
      />
      <g fill="#fff" clip-path="url(#a)">
        <ellipse cx="32" cy="62.4" rx="25.6" ry="19.2" />
        <circle cx="32" cy="25.6" r="12.8" opacity=".9" />
      </g>
      <defs>
        <clipPath id="a">
          <rect width="64" height="64" fill="#fff" rx="32" />
        </clipPath>
      </defs>
    </svg>
  );
};
