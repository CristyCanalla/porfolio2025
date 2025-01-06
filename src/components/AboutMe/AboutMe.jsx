import photo from "../../assets/img/FOTOPERFIL.jpeg";
import {
  Main,
  AboutGrid,
  Img,
  AboutMeTitle,
  Dowload,
  P,
  Photo,
  InfoContainer,
  FromSpan,
} from "./AboutMeStyles";
function AboutMe() {
  return (
    <Main
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 3 }}
    >
      <AboutGrid>
        <Photo>
          <Img src={photo} alt="" />
        </Photo>
        <InfoContainer>
          <AboutMeTitle
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.1 }}
          >
            About me
          </AboutMeTitle>
          <P
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.1 }}
          >
            My name is Cristina Gómez, I am a responsible, dedicated, and committed person in my personal challenges. I have over 4 years of experience in the systems field, including project management for websites, gathering clear and readable code, functional analysis, and corresponding manual testing
          </P>
          <P
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.1 }}
          >
            <FromSpan>From:</FromSpan> Rosario, Argentina
          </P>
          <Dowload
            target="blank"
            href="https://drive.google.com/file/d/1ZUrJTAlBSyAnBANZSZQ2aR8TtIKMvXXa/view?usp=sharing"
          >
            Download CV
          </Dowload>
        </InfoContainer>
      </AboutGrid>
    </Main>
  );
}

export default AboutMe;
