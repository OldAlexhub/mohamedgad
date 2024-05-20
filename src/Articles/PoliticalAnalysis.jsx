import React from "react";
import one from "../images/1.png";
import two from "../images/2.png";
import three from "../images/3.png";
import four from "../images/4.png";
import five from "../images/5.png";
import six from "../images/6.png";

const PoliticalAnalysis = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-4">World Happiness Analysis (2015-2020)</h1>
      <p>
        After downloading the World Happiness dataset from Kaggle.com, I noticed
        it contains data from 2015 to 2020. This dataset offers a unique
        opportunity to examine the state of the world just before the COVID-19
        pandemic significantly impacted our lives. My curiosity led me to
        explore this data deeply, hoping to uncover insights through the power
        of data science and R programming.
      </p>
      <p>
        I began by importing the dataset into an R session. My initial analysis
        focused on the top 5 countries in terms of happiness, generosity, and
        democracy scores. Additionally, I looked at the number of countries per
        continent. Using the "dplyr" library, I identified the global rankings
        based on happiness scores. Unsurprisingly, Africa ranked lowest, likely
        due to its historical and ongoing challenges.
      </p>
      <div className="my-4">
        <h3>Global Happiness Rankings</h3>
        <img
          src={one}
          alt="overall"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      <p>
        Here are some quick facts: Europe has 38 countries, Asia has 37, Africa
        has 32, South America has 20, North America has 3, and Australia has 2.
        Australia is the most generous continent, while South America is the
        least. Australia also ranks highest in democracy practices, whereas
        Africa ranks lowest.
      </p>
      <img
        src={two}
        alt="overall"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <div className="my-4">
        <h3>Continent Comparison</h3>
      </div>
      <p>
        Driven by curiosity, I further analyzed the dataset to find the top 5
        countries in various categories. Here are my findings:
      </p>
      <ol>
        <li>
          Happiest countries:
          <ul>
            <li>Finland</li>
            <li>Denmark</li>
            <li>Norway</li>
            <li>Switzerland</li>
            <li>Iceland</li>
          </ul>
        </li>
        <li>
          Highest GDP per capita:
          <ul>
            <li>Luxembourg</li>
            <li>UAE</li>
            <li>Singapore</li>
            <li>Kuwait</li>
            <li>Norway</li>
          </ul>
        </li>
        <li>
          Best health accessibility:
          <ul>
            <li>Singapore</li>
            <li>Japan</li>
            <li>Spain</li>
            <li>Switzerland</li>
            <li>Italy</li>
          </ul>
        </li>
        <li>
          Top democratic countries:
          <ul>
            <li>Uzbekistan</li>
            <li>Cambodia</li>
            <li>Norway</li>
            <li>Denmark</li>
            <li>Finland</li>
          </ul>
        </li>
        <li>
          Most trusted governments:
          <ul>
            <li>Singapore</li>
            <li>Rwanda</li>
            <li>Denmark</li>
            <li>Finland</li>
            <li>New Zealand</li>
          </ul>
        </li>
        <li>
          Least corrupt countries:
          <ul>
            <li>Switzerland</li>
            <li>Sweden</li>
            <li>Finland</li>
            <li>Denmark</li>
            <li>New Zealand</li>
          </ul>
        </li>
      </ol>
      <img
        src={three}
        alt="overall"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <div className="my-4">
        <h3>Top 5 Countries Analysis</h3>
      </div>
      <p>
        Next, I examined the bottom 5 countries in the same categories. Here are
        the results:
      </p>
      <ol>
        <li>
          Least happy countries:
          <ul>
            <li>Burundi</li>
            <li>Afghanistan</li>
            <li>Rwanda</li>
            <li>Tanzania</li>
            <li>Yemen</li>
          </ul>
        </li>
        <li>
          Lowest GDP:
          <ul>
            <li>Burundi</li>
            <li>Liberia</li>
            <li>Niger</li>
            <li>Malawi</li>
            <li>Madagascar</li>
          </ul>
        </li>
        <li>
          Poor health accessibility:
          <ul>
            <li>Sierra Leone</li>
            <li>Chad</li>
            <li>Nigeria</li>
            <li>Mali</li>
            <li>Cameron</li>
          </ul>
        </li>
        <li>
          Weakest democracies:
          <ul>
            <li>Afghanistan</li>
            <li>Greece</li>
            <li>Haiti</li>
            <li>Burundi</li>
            <li>Mauritania</li>
          </ul>
        </li>
        <li>
          Least trusted governments:
          <ul>
            <li>Bosnia and Herzegovina</li>
            <li>Romania</li>
            <li>Bulgaria</li>
            <li>Moldova</li>
            <li>Ukraine</li>
          </ul>
        </li>
        <li>
          Most corrupt countries:
          <ul>
            <li>Afghanistan</li>
            <li>Yemen</li>
            <li>Libya</li>
            <li>Venezuela</li>
            <li>Iraq</li>
          </ul>
        </li>
      </ol>

      <p>
        Interestingly, three out of the least democratic countries have been
        invaded by the United States to spread democracy, which hasn't been
        successful.
      </p>
      <img
        src={four}
        alt="overall"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <div className="my-4">
        <h3>Bottom 5 Countries Analysis</h3>
      </div>
      <p>
        My next focus is a deeper analysis of Africa, my home continent. I'll
        zoom in on Egypt, comparing it with the highest and lowest ranked
        countries in Africa. Preliminary findings show Mauritius as the happiest
        and Burundi as the least happy, with Egypt in the middle.
      </p>
      <img
        src={five}
        alt="overall"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <p>
        For an in-depth study of Egypt, please refer to the interactive
        dashboard below. Interestingly, I found that the least happy countries
        often have higher trust in their governments, which is quite
        counterintuitive.
      </p>
      <img
        src={six}
        alt="overall"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <p>Enjoy the interactive dashboard below!</p>
      <div>
        <iframe
          src="/politics.html"
          style={{ width: "100%", height: "800px", border: "none" }}
          title="Dashboard"
        ></iframe>
      </div>
    </div>
  );
};

export default PoliticalAnalysis;
