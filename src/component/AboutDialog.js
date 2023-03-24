import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Logo from "../logo.svg";

const AboutDialog = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <button
        onClick={handleShow}
        className="bg-[#4C5760] mr-3 hover:bg-[#A59E8C] text-white font-bold py-2 px-4 border border-blue-700 rounded ml-3"
        variant="primary"
      >
        About
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            About COMP4513 Assignment01
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="w-full justify-items-center">
            <img
              src={Logo}
              alt="React Logo"
              title="React Logo"
              className="h-[150px] place-content-center m-auto"
            />
          </div>
          <label>Primary Contributor:</label>
          <span> Lorenzo Young</span>{" "}
          <div>
            <h4>Libraries used for this assignment </h4>
            <ul>
              <li>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  [React]
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  [Tailwind CSS]
                </a>
              </li>
              <li>
                <a
                  href="https://react-bootstrap.github.io/components/modal/"
                  target="_blank"
                  rel="noreferrer"
                >
                  [React Bootstrap Modal]
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/s-yadav/react-number-format"
                  target="_blank"
                  rel="noreferrer"
                >
                  [React Number Format]
                </a>
              </li>
              <li>
                <a
                  href="https://react-icons.github.io/react-icons/"
                  target="_blank"
                  rel="noreferrer"
                >
                  [React Icons module for Font Awesome Star]
                </a>
              </li>
            </ul>
          </div>
          <h4>Credits</h4>
          <div>
            <label>Home Splash Screen</label>
            <ul>
              <li>
                <span>Photo by: Jon Tyson</span>
              </li>
              <li>
                <span>
                  Website:{" "}
                  <a
                    href="https://unsplash.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    [Unsplash]
                  </a>
                </span>
              </li>
              <li>
                <span>
                  Photo url:{" "}
                  <a
                    href="https://unsplash.com/photos/A-obUh61bKw"
                    target="_blank"
                    rel="noreferrer"
                  >
                    [@jontyson]
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <label>Loading Animation Tutorial</label>
            <ul>
              <li>
                <span>
                  <a
                    href="https://braydoncoyer.dev/blog/how-to-create-an-animated-loading-spinner-with-tailwind-css"
                    target="_blank"
                    rel="noreferrer"
                  >
                    [How To Create an Animated Loading Spinner with Tailwind
                    CSS]
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <label>Empty Image Place Holder</label>
            <ul>
              <li>
                <span>
                  <a
                    href="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    [No Image Available]
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <label>React Dynamic Star Tutorial</label>
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=eDw46GYAIDQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  [React Dynamic Star]
                </a>
              </li>
            </ul>
          </div>
          <div>
            <label>Font Awesome Icons</label>
            <ul>
              <li>
                <a
                  href="https://react-icons.github.io/react-icons/icons?name=fa"
                  target="_blank"
                  rel="noreferrer"
                >
                  [Font Awesome]
                </a>
              </li>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            variant="secondary"
            onClick={handleClose}
            className="bg-[#4C5760] mr-3 hover:bg-[#A59E8C] text-white font-bold py-2 px-4 border border-blue-700 rounded ml-3"
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AboutDialog;
