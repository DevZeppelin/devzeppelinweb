import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { social } from "@/lib/site";

const links = [
  { href: social.linkedin, label: "LinkedIn", Icon: FaLinkedin },
  { href: social.github, label: "GitHub", Icon: FaGithub },
  { href: social.instagram, label: "Instagram", Icon: FaInstagram },
];

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="hover:text-yellow transition-colors"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
