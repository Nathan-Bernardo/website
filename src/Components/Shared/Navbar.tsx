type navData = {
  name?: string;
  link?: string;
  cName?: string;
};

const navbarData: navData[] = [
  {
    name: "Blogs",
    link: "#",
    cName: "nav-link",
  },
  {
    name: "Resources",
    link: "#",
    cName: "nav-link",
  },
  {
    name: "Contact",
    link: "#",
    cName: "nav-link",
  },
];

const Navbar = (): JSX.Element => {
  return (
    <nav>
      <ul className="main-nav">
          {navbarData.map((item, index) => (
            <li key={index} className={item.cName}>
              {item.name}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Navbar;
