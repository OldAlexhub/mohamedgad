import React from "react";
import Ahly from "../images/ahly.png";
import Egypt from "../images/egypt.png";

const Hobbies = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Hobbies & Interests</h2>
      <div className="row">
        {/* Soccer Section */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Soccer</h3>
              <p className="card-text">
                A fervent fan of the beautiful game, I follow soccer closely. My
                heart belongs to{" "}
                <img
                  src={Ahly}
                  alt="Al Ahly SC"
                  className="rounded-circle me-2"
                  style={{ width: "24px", height: "24px" }}
                />
                <strong>Al Ahly SC</strong> and the{" "}
                <img
                  src={Egypt}
                  alt="Egyptian National Team"
                  className="rounded-circle me-2"
                  style={{ width: "24px", height: "24px" }}
                />
                <strong>Egyptian National Team</strong>. I also play as a center
                midfielder, demonstrating strategy and agility.
              </p>
            </div>
          </div>
        </div>

        {/* Music Section */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Music</h3>
              <p className="card-text">
                My musical interests are diverse, ranging from{" "}
                <strong>Mohamed Mounir</strong> and <strong>Cairokee</strong> to{" "}
                <strong>Bob Marley</strong>, <strong>Aerosmith</strong>, and{" "}
                <strong>Queen</strong>. Music transcends cultures and speaks to
                the soul.
              </p>
              <div className="d-flex justify-content-start align-items-center">
                {/* Musician Images */}
                <img
                  src="https://www.gqmiddleeast.com/public/styles/full_img_sml/public/images/2020/12/17/MohamedMounir_GQMOTY2020_2.jpg"
                  alt="Mohamed Mounir"
                  className="rounded-circle me-2"
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src="https://blog.richmond.edu/heroes/files/2021/03/Bob-Marley.jpeg"
                  alt="Bob Marley"
                  className="rounded-circle me-2"
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src="https://miro.medium.com/v2/resize:fit:600/1*6dlDil8oYQiU_kkwp7aruw.png"
                  alt="Aerosmith"
                  className="rounded-circle me-2"
                  style={{ width: "40px", height: "40px" }}
                />
                <img
                  src="https://ih1.redbubble.net/image.3946544875.3307/raf,750x1000,075,t,101010:01c5ca27c6.jpg"
                  alt="Cairokee"
                  className="img-fluid rounded-circle me-2"
                  style={{ width: "50px", height: "50px" }}
                />
                <img
                  src="https://www.the-sun.com/wp-content/uploads/sites/6/2022/11/members-brian-roger-taylor-freddie-555539482.jpg?w=620"
                  alt="Queen"
                  className="img-fluid rounded-circle me-2"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Egyptian Poetry Section */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Egyptian Poetry</h3>
              <p className="card-text">
                I have a deep appreciation for Arabic poetry, especially works
                by <strong>Abdel Rahman al-Abnoudy</strong>,{" "}
                <strong>Salah Jahin</strong>, and{" "}
                <strong>Ahmed Fouad Negm</strong>. Their poems capture the
                essence of Egyptian culture and folklore.
              </p>
            </div>
          </div>
        </div>

        {/* Coding Section */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Coding - JavaScript</h3>
              <p className="card-text">
                JavaScript has been a gateway to creativity and innovation for
                me. Its versatility allows me to build interactive web
                applications and experiment with new frameworks and libraries.
              </p>
            </div>
          </div>
        </div>

        {/* World Politics Section */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title">World Politics</h3>
              <p className="card-text">
                With a BA in Political Science, I have a keen interest in
                analyzing political theories, current events, and international
                relations. My passion for politics shapes my perspective on
                global issues.
              </p>
            </div>
          </div>
        </div>

        {/* Data Science Section */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Data Science</h3>
              <p className="card-text">
                I utilize tools like <strong>R</strong>, <strong>Python</strong>
                , and <strong>Tableau</strong> to analyze data and create
                dashboards. My goal is to leverage data to drive insights and
                solve complex problems.
              </p>
            </div>
          </div>
        </div>

        {/* Machine Learning and AI Section */}
        <div className="col-md-12 mb-4">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="card-title">Machine Learning and AI</h3>
              <p className="card-text">
                My journey into Machine Learning and AI has been fueled by a
                fascination with data-driven intelligence and automation. I
                often build full-stack applications that integrate MERN with
                Python, utilizing AI for predictive modeling, natural language
                processing, and recommendation systems.
              </p>
              <p className="card-text">
                Whether it's developing predictive algorithms for stock
                analysis, building AI-powered search engines, or creating
                intelligent solutions for business automation, I am dedicated to
                harnessing the power of AI to transform ideas into impactful
                realities.
              </p>
              <p className="card-text">
                I am particularly passionate about deep learning and its
                applications in computer vision and NLP. Leveraging libraries
                like TensorFlow, Keras, and PyTorch, I experiment with models
                that classify images, process language, and even generate new
                content. My projects are a testament to my commitment to staying
                at the forefront of AI innovation and bringing cutting-edge
                solutions to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
