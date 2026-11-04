const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gao-yiping/",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 8.2H3.3V20h3.2V8.2ZM4.9 3A1.9 1.9 0 1 0 5 6.8 1.9 1.9 0 0 0 4.9 3ZM20.7 13.2c0-3.5-1.9-5.2-4.5-5.2a3.9 3.9 0 0 0-3.6 2h-.1V8.2H9.4V20h3.2v-5.8c0-1.5.3-3 2.2-3 1.9 0 1.9 1.8 1.9 3.1V20h3.2l.8-6.8Z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/pinguin247",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.5 2.4 1.1 3 .8.1-.7.4-1.2.7-1.5-2.3-.3-4.7-1.1-4.7-5A3.9 3.9 0 0 1 6.8 8c-.1-.3-.5-1.3.1-2.8 0 0 .9-.3 3 1.1a10.4 10.4 0 0 1 5.4 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.5.1 2.8a3.9 3.9 0 0 1 1.1 3c0 3.9-2.4 4.7-4.7 5 .4.3.7 1 .7 2V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:yiping247@gmail.com",
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 5h18v14H3V5Zm2 2v.5l7 4.8 7-4.8V7H5Zm14 10V9.9l-7 4.8-7-4.8V17h14Z" />
      </svg>
    ),
  },
];

function SocialLinks() {
  return (
    <div className="hero-socials" aria-label="Professional links">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noreferrer" : undefined}
        >
          <span className="social-icon">{link.icon}</span>
          <span>{link.label}</span>
          <i aria-hidden="true">↗</i>
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
