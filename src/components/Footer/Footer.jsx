import logo from "../../assets/img/758X.gif";
import { LogoSeb, FooterSection  } from "./StylesFooter";

function Footer() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <FooterSection>
      <div>

      </div>
      <div>
      
        <h3>MCG 👩‍💻 </h3>
        
      </div>
    </FooterSection>
  );
}

export default Footer;
