import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ArticlesList from "../components/ArticlesList";
import Header from "../components/Header";
import NavBarNew from "../components/NavBarNew";
import "../styles/styles.css";
import { countryNames } from "../components/countries";
import Footer from "../components/Footer";

interface NewsData {
  articles: {
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: number;
    content: string;
    language: string;
    source: {
      name: string;
    };
  }[];

  totalResults: number;
}

const apiKey = "ff20bddb204b47559b98ffd40f9cab78";
let baseUrl = `https://newsapi.org/v2/`;

const MainPage = () => {
  const [news, setNews] = useState<NewsData>({
    articles: [],
    totalResults: 0,
  });

  const [countryName, setCountryName] = useState<string>("us");
  const [results, setResults] = useState<number>(0);

  let topHeadLinesUrl =
    `${baseUrl}` +
    `top-headlines?` +
    `country=${countryName}&` +
    `apiKey=${apiKey}`;

  const fetchNews = async () => {
    try {
      const response = await fetch(topHeadLinesUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setResults(data.totalResults);
      setNews(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const handleChangeCountries = (country: string) => {
    setCountryName(country);
  };

  useEffect(() => {
    fetchNews();
  }, [countryName]);

  return (
    <>
      <Row>
        <Header language="" />
        <Col sm={2} className="py-4">
          <NavBarNew
            countries={countryNames}
            handleChangeCountries={handleChangeCountries}
          />
        </Col>
        <Col sm={10} className="py-4">
          {news.articles.map(
            (
              { title, publishedAt, source, author, url, urlToImage, content },
              index
            ) => (
              <div className="py-4 text-center">
                <ArticlesList
                  key={index}
                  author={author}
                  title={title}
                  publishedAt={publishedAt}
                  source={source}
                  url={url}
                  urlToImage={urlToImage}
                  content={content}
                />
              </div>
            )
          )}
        </Col>
        <Footer totalResults={results} />
      </Row>
    </>
  );
};

export default MainPage;
