import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function GnModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
        Pain Points
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          Zdecydowanie Redux, którego dotychczas używałem w bardzo ograniczony
          sposób. Dopracowania wymaga też stylizowanie które jest zrobione w
          bardo podstawowy sposób. Logika w kilku miejscach równiez musi być
          dopracowana. Niestety, ze wzgledu na obowiązki służbowe miałem mało
          czasu na dopracowanie.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-info" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default GnModal;
