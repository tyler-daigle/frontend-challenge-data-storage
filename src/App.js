import "./App.css";

import ControlPanel from "./components/ControlPanel";
import Logo from "./components/Logo";
import Toolbar from "./components/Toolbar";
import Button from "./components/Button";
import StorageBar from "./components/StorageBar";
import StoragePanel from "./components/StoragePanel";
import StorageString from "./components/StorageString";
import StorageLeft from "./components/StorageLeft";

import DocumentIcon from "./images/icon-document.svg";
import FolderIcon from "./images/icon-folder.svg";
import UploadIcon from "./images/icon-upload.svg";

const storage = { total: 1000, used: 400, unit: "GB" };

export default function App() {
  return (
    <div className="main-container">
      <ControlPanel>
        <Logo />
        <Toolbar>
          <Button>
            <img
              className="icon-image"
              src={DocumentIcon}
              alt="Document Icon"
            />
          </Button>
          <Button>
            <img className="icon-image" src={FolderIcon} alt="Document Icon" />
          </Button>
          <Button>
            <img className="icon-image" src={UploadIcon} alt="Document Icon" />
          </Button>
        </Toolbar>
      </ControlPanel>

      <StoragePanel>
        <StorageString storage={storage} />
        <StorageBar storage={storage} />
        <StorageLeft storage={storage} />
      </StoragePanel>
    </div>
  );
}
