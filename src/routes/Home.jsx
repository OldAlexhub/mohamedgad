import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import Holidays from "date-holidays";
import "../styles/Home.css";
import SentimentChart from "../components/Sentiment";


const Home = () => {
  const [newsData, setNewsData] = useState([]);
  const [date, setDate] = useState(new Date());
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_GET_NEWS);

        if (Array.isArray(response.data)) {
          setNewsData(response.data.slice(0, 8)); // Only take the top 6 articles
        } else if (
          response.data.status === "ok" &&
          Array.isArray(response.data.articles)
        ) {
          setNewsData(response.data.articles.slice(0, 8));
        } else {
          console.error("Unexpected API response structure:", response.data);
          setNewsData([]);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setNewsData([]);
      }
    };
    fetchNews();
  }, []);

  useEffect(() => {
    const hd = new Holidays("US");
    const thisYearHolidays = hd.getHolidays(new Date().getFullYear());
    setHolidays(thisYearHolidays);
  }, []);

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="display-4">Welcome to Mohamed Gad's Personal Website</h1>
        <div>
          <SentimentChart />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="mb-4">
            <h2 className="h5">Quick Links</h2>
            <ul className="list-group">
              <li className="list-group-item list-group-item-action">
                To learn about me{" "}
                <Link
                  to="/aboutme"
                  className="stretched-link text-decoration-none text-dark"
                ></Link>
              </li>
              <li className="list-group-item list-group-item-action">
                My Career Analysis{" "}
                <Link
                  to="/analysis"
                  className="stretched-link text-decoration-none text-dark"
                ></Link>
              </li>
              <li className="list-group-item list-group-item-action">
                Business Portfolio{" "}
                <Link
                  to="/portfolio"
                  className="stretched-link text-decoration-none text-dark"
                ></Link>
              </li>
              <li className="list-group-item list-group-item-action">
                My hobbies{" "}
                <Link
                  to="/hobbies"
                  className="stretched-link text-decoration-none text-dark"
                ></Link>
              </li>
              <li className="list-group-item list-group-item-action">
                Full Stack Projects- MERN Technology{" "}
                <Link
                  to="/projects"
                  className="stretched-link text-decoration-none text-dark"
                ></Link>
              </li>
              <li className="list-group-item list-group-item-action">
                Data Analysis and Machine Learning Projects{" "}
                <Link
                  to="/articles"
                  className="stretched-link text-decoration-none text-dark"
                ></Link>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="h5">USA National Holidays</h2>
            <Calendar
              onChange={setDate}
              value={date}
              tileContent={({ date, view }) => {
                if (view === "month") {
                  const holiday = holidays.find(
                    (h) =>
                      format(new Date(h.date), "yyyy-MM-dd") ===
                      format(date, "yyyy-MM-dd")
                  );
                  return holiday ? <p>{holiday.name}</p> : null;
                }
              }}
            />
          </div>
          <div>
            <h2 className="h5">Latest News</h2>
            <ul className="list-group">
              {newsData.length > 0 ? (
                newsData.map((article, index) => (
                  <li className="list-group-item d-flex" key={index}>
                    {article.urlToImage && (
                      <img
                        src={article.urlToImage}
                        alt={article.title}
                        className="img-thumbnail me-3"
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "cover",
                        }}
                      />
                    )}
                    <div>
                      <h6 className="mb-1">{article.title}</h6>
                      <a
                        href={article.url}
                        className="btn btn-link p-0"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read More
                      </a>
                    </div>
                  </li>
                ))
              ) : (
                <li className="list-group-item">No news articles available.</li>
              )}
            </ul>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card p-4 mb-4">
            <h2 className="card-title">Welcome to My Personal Website</h2>
            <p className="card-text">
              Here you will find information about my career, projects, hobbies,
              and much more. Feel free to explore the links and learn more about
              what I do.
            </p>
            <h3 className="card-title mt-4">Professional Interests</h3>
            <p className="card-text">
              My professional journey has been shaped by a passion for
              technology and a keen interest in renewable energy. I have
              invested significantly in the stock market, focusing on companies
              that are at the forefront of innovation in electric vehicles (EV)
              and technology.
            </p>
            <p className="card-text">
              As a partner at Trans Voyage Taxi and the owner of Old Alex Hub,
              LLC, I have gained extensive experience in managing and growing
              businesses. These ventures reflect my commitment to excellence and
              my drive to explore new opportunities.
            </p>
            <h3 className="card-title mt-4">Hobbies and Personal Interests</h3>
            <p className="card-text">
              Soccer is a significant part of my life, both as a player and a
              fan. I follow the illustrious Al Ahly SC and the Egyptian National
              Team, and enjoy playing as a center midfielder.
            </p>
            <p className="card-text">
              Music is another passion of mine. I enjoy a diverse range of
              genres, from the soulful tunes of Mohamed Mounir to the legendary
              reggae of Bob Marley, and the classic rock sounds of Aerosmith and
              Queen.
            </p>
            <p className="card-text">
              My love for literature, particularly Egyptian poetry, has also
              been a constant source of inspiration. Engaging with the works of
              renowned poets like Abdel Rahman al-Abnoudy and Salah Jahin helps
              me connect with my cultural roots.
            </p>
            <p className="card-text">
              Coding, especially in JavaScript, has become a creative outlet for
              me. The ability to build dynamic web applications and solve
              complex problems fuels my passion for continuous learning in the
              tech field.
            </p>
            <h3 className="card-title mt-4">Projects</h3>
            <p className="card-text">
              My projects span a wide range of interests, from developing an EV
              Battery Degradation Calculator to creating comprehensive web
              applications for business and transportation management. Each
              project is a testament to my dedication to leveraging technology
              to solve real-world problems.
            </p>
            <p className="card-text">
              Some of my notable projects include:
              <ul>
                <li>EV Battery Degradation Calculator</li>
                <li>Travel and Transportation Web Application</li>
                <li>Business and Ticketing Management</li>
                <li>Movie Web-App V1</li>
                <li>Comprehensive Taxi Application</li>
              </ul>
            </p>
            <h3 className="card-title mt-4">Data Analysis</h3>
            <p className="card-text">
              Data analysis is a critical part of my work, enabling me to derive
              actionable insights from complex datasets. I have undertaken
              various projects that involve analyzing car sales data, human
              resources datasets, and more. My analysis work helps businesses
              make informed decisions and drives strategic growth.
            </p>
            <p className="card-text">
              Some of my data analysis projects include:
              <ul>
                <li>Comprehensive Analysis of Car Sales Data</li>
                <li>Human Resources Dataset Analysis</li>
                <li>SuperStore Sales Dashboard</li>
                <li>HR Dashboard Visualization</li>
                <li>EV Sales in Washington State</li>
                <li>
                  Unveiling Global Happiness: A Deep Dive into World Happiness
                  Data (2015-2020)
                </li>
                <li>
                  Exploratory Data Analysis of Crimes in Denver (2018 - 2024)
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
