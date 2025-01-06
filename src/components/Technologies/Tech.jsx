import { imgtech } from "../../assets/img/index";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";

import CardTech from "./CardTech";
import { SectionTech, ImgTechContainer, TitleTech, Title } from "./StylesTech";

function Tech() {
  const [text, count] = useTypewriter({
    words: ["Skills", "💻"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <SectionTech
    >
      <TitleTech>
        <Title
          id='skills'
          initial={{ opacity: 0, scale: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3 }}
        >
          {text}
          <Cursor cursorColor="#01DF3A" />
        </Title>
      </TitleTech>
      <ImgTechContainer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <CardTech imgtech={imgtech.html} name={"html"} />
        <CardTech imgtech={imgtech.css} name={"css"} />
        <CardTech imgtech={imgtech.js} name={"JavaScript"} />
        <CardTech imgtech={imgtech.react} name={"React"} />
        <CardTech imgtech={imgtech.bootstrap} name={"Bootstrap"} />
        <CardTech imgtech={imgtech.azure} name={"Azure"} />
        <CardTech imgtech={imgtech.postman} name={"Postman"} />
        <CardTech imgtech={imgtech.git} name={"git"} />
        <CardTech imgtech={imgtech.figma} name={"Figma"} />
        <CardTech imgtech={imgtech.swagger} name={"Swagger"} />
        <CardTech imgtech={imgtech.jira} name={"Jira"} />
        <CardTech imgtech={imgtech.sql} name={"SQL"} />
        <CardTech imgtech={imgtech.cypress} name={"Cypress"} />
        <CardTech imgtech={imgtech.mysql} name={"Mysql"} />
        <CardTech imgtech={imgtech.node} name={"Node.js"} />
      </ImgTechContainer>
    </SectionTech>
  );
}

export default Tech;
