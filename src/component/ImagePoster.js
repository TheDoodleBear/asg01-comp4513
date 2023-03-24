import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";

const AboutDialog = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const replaceImage = error => {
    //replacement of broken Image
    error.target.src =
      "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
  };

  return (
    <div>
      <figure className="p-2">
        <img
          src={"https://image.tmdb.org/t/p/w342/" + props.movie.poster}
          alt={props.movie.title}
          title={props.movie.title}
          onError={replaceImage}
          onClick={handleShow}
        />
      </figure>

      <Modal
        fullscreen="true"
        size="xl"
        movie={props.movie}
        show={show}
        onHide={handleClose}
        onError={replaceImage}
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <img
            src={"https://image.tmdb.org/t/p/w780/" + props.movie.poster}
            alt={props.movie.title}
            title={props.movie.title}
            onError={props.onError}
            className="m-auto"
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AboutDialog;
