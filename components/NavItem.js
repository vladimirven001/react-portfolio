import Link from "next/link";

const NavItem = ({ text, href, active }) => {
  return (
<Link href={href} className={`nav__link ${active ? 'active' : ''}`}>
      {text}
    </Link>
  );
};

export default NavItem;
