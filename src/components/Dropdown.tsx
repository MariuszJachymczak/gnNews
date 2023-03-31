import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch } from "react-redux";
import { setViewMode } from "../viewSlice";

function GnDropdown() {
  const dispatch = useDispatch();

  const handleViewChangeMode = (viewMode: string) => {
    dispatch(setViewMode(viewMode));
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Zmiana Widoku
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleViewChangeMode("list")}>
          List
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleViewChangeMode("tiles")}>
          Tiles
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default GnDropdown;
