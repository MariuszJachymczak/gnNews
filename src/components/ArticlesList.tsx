import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../styles/styles.css";

interface ArticlesListProps {
  author: string;
  title: string;
  publishedAt: number;
  source: { name: string };
  url: string;
  urlToImage: string;
  content: string;
}

const ArticlesList = ({
  title,
  publishedAt,
  source,
  author,
  url,
  urlToImage,
  content,
}: ArticlesListProps) => {
  const [showModal, setShowModal] = useState(false);
  const [modalSource, setModalSource] = useState("");
  const [modalMainBody, setModalMainBody] = useState("");
  const [authorModal, setModalAuthor] = useState("");

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleGoToArticle = () => {
    window.open(url, "_blank");
  };

  const handleShowModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowModal(true);
    setModalSource(`${source.name}`);
    setModalMainBody(`${content}`);
    setModalAuthor(`${author}`);
  };

  const viewMode = useSelector((state: any) => state.view.viewMode);
  return (
    <div>
      {viewMode === "list" ? (
        <div>
          <div className="container">
            <div className="row">
              <div className="col-9 offset-1 gy-1">
                <Card className="text-center">
                  <Card.Body>
                    <Card.Header as="h5">{source.name}</Card.Header>
                    <Button variant="light" onClick={(e) => handleShowModal(e)}>
                      <Card.Title as="h2">{title}</Card.Title>
                    </Button>
                    <Card.Footer as="h6">{publishedAt}</Card.Footer>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          {showModal && (
            <Modal show={showModal} onHide={handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title>{modalSource}</Modal.Title>
              </Modal.Header>
              <Modal.Body>{modalMainBody}</Modal.Body>
              <Modal.Footer>
                <p className="me-auto">Author: {authorModal}</p>
                <Button variant="outline-info" onClick={handleCloseModal}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleGoToArticle}>
                  Go to Article
                </Button>
              </Modal.Footer>
            </Modal>
          )}
        </div>
      ) : (
        // Display alternative view
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="left" src={urlToImage} className="" />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Button onClick={handleGoToArticle} variant="primary">
                Check this news!
              </Button>
            </Card.Body>
          </Card>

          {showModal && (
            <Modal show={showModal} onHide={handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title>{modalSource}</Modal.Title>
              </Modal.Header>
              <Modal.Body>{modalMainBody}</Modal.Body>
              <Modal.Footer>
                <p className="me-auto">Author: {authorModal}</p>
                <Button variant="outline-info" onClick={handleCloseModal}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleGoToArticle}>
                  Go to Article!
                </Button>
              </Modal.Footer>
            </Modal>
          )}
        </div>
      )}
    </div>
  );
};

export default ArticlesList;
