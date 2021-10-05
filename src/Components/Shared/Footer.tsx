import {
  AiFillGoogleCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const iconSize = 36;

const Footer = (): JSX.Element => {
  return (
    <section>
      <div className="footer">
        2021 by Nathan Bernardo. All Rights Reserved. Built with React. | View
        on Github | Tags | Contact{" "}
      </div>
      <div className="footer-icons">
        <AiFillGoogleCircle size={iconSize} style={{ color: "#34A853"}} />
        <AiFillGithub size={iconSize} style={{color: "#913399"}} />
        <AiFillLinkedin size={iconSize} style={{ color: "#0072B1" }} />
      </div>
    </section>
  );
};

export default Footer;
