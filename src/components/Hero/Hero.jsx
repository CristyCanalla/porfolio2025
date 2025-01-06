import avatar from "../../assets/img/77w2.gif";
import { FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import { ImGithub } from "react-icons/im";
import { Container, Centered, Logo, Bg, P, SocialIcons, A } from "./StylesHero";
import NavBar from "../NavBar/NavBar";

export function Hero() {
  const [text, count] = useTypewriter({
    
    words: [
      
      "Hi 🙂!",
       "Welcome to my porfolio",
      
      
    ],
    loop: true,
    delaySpeed: 2000,
    
  });
  return (
    <Container id="home">
      <Bg></Bg>
      <Centered>
        <Logo src={avatar} alt="smile" />
        <div>
          <br/>
          <br/>
        </div>
        <div>
          <h1>
            <span>{text}</span>
            <Cursor cursorColor="#34e360" />
          </h1>
        </div>
      
      </Centered>
      <NavBar />
    </Container>
  );
}
