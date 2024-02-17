import React from "react";
import Ahly from "../images/ahly.png";
import Egypt from "../images/egypt.png";

const Hobbies = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Hobbies</h2>
      <div className="row">
        <div className="col-md-6 mx-auto">
          {/* Soccer Section */}
          <div className="hobby mb-3">
            <h3 className="mb-3">Soccer</h3>
            <p className="text-justify">
              A fervent fan of the beautiful game, I find joy and excitement in
              following soccer closely. My heart belongs to the illustrious{" "}
              <img
                src={Ahly}
                alt="Al Ahly SC"
                className="img-fluid rounded-circle me-2"
                style={{ width: "24px", height: "24px" }}
              />
              <strong>Egyptian Al Ahly SC</strong>, a team renowned for its rich
              history and record-breaking achievements in African football.
              Additionally, I proudly support the{" "}
              <img
                src={Egypt}
                alt="Egyptian National Team"
                className="img-fluid rounded-circle me-2"
                style={{ width: "24px", height: "24px" }}
              />
              <strong>Egyptian National Team</strong>, drawing inspiration from
              their spirited performances on the international stage. Beyond
              mere spectating, I actively engage in playing soccer, often taking
              up the role of a center midfielder. This position allows me to
              orchestrate the game, demonstrating my strategic understanding and
              physical agility. Whether it's celebrating a victory or analyzing
              a match, soccer is a significant part of my life.
            </p>
          </div>

          {/* Music Section */}
          <div className="hobby mb-3">
            <h3 className="mb-3">Music</h3>
            <p className="text-justify">
              Music is a universal language that resonates deeply with me,
              connecting me to diverse cultures and emotions. My musical taste
              spans genres and eras, reflecting my appreciation for both the
              classics and contemporary sounds. I am an absolute fan of{" "}
              <strong>Mohamed Mounir</strong>, whose music is not just sound but
              an expression of Egyptian soul and identity. His songs are a blend
              of Nubian rhythms and philosophical insights, accompanied by his
              charismatic voice.
            </p>
            <p className="text-justify">
              The legendary <strong>Bob Marley</strong> and his reggae music
              have always inspired me with messages of love, peace, and
              resistance. Marley's ability to convey profound truths through his
              music has left a lasting impact on my life. Similarly, the iconic
              rock bands <strong>Aerosmith</strong> and <strong>Queen</strong>{" "}
              have fueled my passion for rock music with their groundbreaking
              sound and electrifying performances.
            </p>
            <p className="text-justify">
              Additionally, I hold a special place in my heart for{" "}
              <strong>Cairokee</strong>, an Egyptian rock band that beautifully
              merges rock tunes with Egyptian lyrics, capturing the essence of
              modern Egyptian society and its challenges. Their music speaks to
              the youth, encouraging change and self-expression.
            </p>
            <div className="d-flex justify-content-start align-items-center mb-2">
              <img
                src="https://www.gqmiddleeast.com/public/styles/full_img_sml/public/images/2020/12/17/MohamedMounir_GQMOTY2020_2.jpg"
                alt="Mohamed Mounir"
                className="img-fluid rounded-circle me-2"
                style={{ width: "50px", height: "50px" }}
              />

              <img
                src="https://blog.richmond.edu/heroes/files/2021/03/Bob-Marley.jpeg"
                alt="Bob Marley"
                className="img-fluid rounded-circle me-2"
                style={{ width: "50px", height: "50px" }}
              />

              <img
                src="https://pbs.twimg.com/profile_images/1653020430083473408/HU4t7EcO_400x400.jpg"
                alt="Aerosmith"
                className="img-fluid rounded-circle me-2"
                style={{ width: "50px", height: "50px" }}
              />

              <img
                src="https://yt3.googleusercontent.com/X1hxG_g3g4zgQhkwPK1Q_InYbxGSjwAHdoZQWPG1Fp8cUDgMWi7j0MudKSuFYMLTvKYm9RjR44o=s900-c-k-c0x00ffffff-no-rj"
                alt="Queen"
                className="img-fluid rounded-circle me-2"
                style={{ width: "50px", height: "50px" }}
              />

              <img
                src="https://ih1.redbubble.net/image.3946544875.3307/raf,750x1000,075,t,101010:01c5ca27c6.jpg"
                alt="Cairokee"
                className="img-fluid rounded-circle me-2"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            {/* Arabic Poetry Section */}
            <div className="hobby mb-3">
              <h3 className="mb-3">Egyptian Poetry</h3>
              <p className="text-justify">
                My passion for literature deeply intertwines with my love for
                Arabic poetry, an art form that paints emotions and narratives
                with the beauty of words. Esteemed Egyptian poets like{" "}
                <strong>Abdel Rahman al-Abnoudy</strong>, known for his
                vernacular verse that vividly captures the essence of Egyptian
                folk life; <strong>Salah Jahin</strong>, whose quatrains blend
                wisdom, humor, and political satire;{" "}
                <strong>Ahmed Fouad Negm</strong>, celebrated for his daring
                colloquial poetry that voices the struggles and aspirations of
                the common people; and <strong>Magdy Naguib</strong>, who adds a
                contemporary touch to the tradition, have all profoundly
                influenced my perception and appreciation of Arabic poetry.
                Their works not only entertain but also challenge me to reflect
                on societal issues, personal identity, and the human condition
                at large.
              </p>
              <p className="text-justify">
                These poets, among many others, represent a rich tapestry of
                Egyptian cultural heritage, offering insights into the complex
                layers of Middle Eastern history, society, and philosophy.
                Engaging with their poetry allows me to connect with my roots
                and explore the depth of Arabic linguistic artistry.
              </p>
            </div>
            <div className="hobby mb-3">
              <h3 className="mb-3">Coding - JavaScript</h3>
              <p className="text-justify">
                My journey into the world of coding has been transformative,
                offering a creative outlet and a means to solve problems and
                build solutions. Among various programming languages,{" "}
                <strong>JavaScript</strong> holds a special place in my heart.
                Its versatility and capability to bring websites to life
                fascinate me. From developing dynamic web applications to
                experimenting with the latest frameworks and libraries,
                JavaScript continues to offer endless possibilities for
                innovation. The thrill of coding, debugging, and seeing my ideas
                materialize into functional, interactive elements on the web
                fuels my passion for continuous learning and development in the
                tech field.
              </p>
            </div>
            {/* World Politics Section */}
            <div className="hobby mb-3">
              <h3 className="mb-3">World Politics</h3>
              <p className="text-justify">
                As a political scientist, holding a BA degree in Political
                Science, my fascination with the global political landscape goes
                beyond mere interest; it's a part of who I am. The intricate
                dance of diplomacy, the strategies of international relations,
                and the dynamic shifts in power on the world stage captivate me.
                I thrive in dissecting political theories, analyzing current
                events, and predicting future trends. This passion not only
                defines my academic pursuits but also shapes my perspective on
                global issues, driving me to explore the complexities of
                governance, policy-making, and social justice across different
                cultures and countries. The political world stage is not just an
                area of professional interest; it is where I find myself,
                constantly learning and evolving with each unfolding event.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
