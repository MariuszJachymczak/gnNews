import { Navbar, Nav, Container } from "react-bootstrap";
import GnDropdown from "./Dropdown";
import GnModal from "./PainPointModal";
import "../styles/styles.css";
import LanguageChange from "./LanguageChange";

interface gnNewsProps {
  language: string;
}

const GnHeader = ({ language }: gnNewsProps) => {
  return (
    <Navbar expand="lg" className="bg-dark fixed-top">
      <Container className="heder-container">
        <Navbar.Brand href="/home">gnNEWS</Navbar.Brand>
        <Nav>
          <LanguageChange language={language} />
          <GnDropdown />
          <GnModal />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default GnHeader;
