import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";

interface dropDownProp {
  language: string;
}
const apiKey = "ff20bddb204b47559b98ffd40f9cab78";
let baseUrl = `https://newsapi.org/v2/`;

const LanguageChange = ({ language }: dropDownProp) => {
  const [languages, setLanguages] = useState<dropDownProp[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>(language);

  const fetchLanguages = async () => {
    let dataUrl =
      `${baseUrl}` +
      `top-headlines/` +
      "sources?" +
      `language=${selectedLanguage}&` +
      `apiKey=${apiKey}`;

    try {
      const response = await fetch(dataUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setLanguages(data.sources);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  useEffect(() => {
    fetchLanguages();
  }, [selectedLanguage]);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Change Language
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {languages.map(({ language }) => {
            return (
              <Dropdown.Item
                key={language}
                onClick={() => handleLanguageChange(language)}
              >
                {language}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default LanguageChange;
