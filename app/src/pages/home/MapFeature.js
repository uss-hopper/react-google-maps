import React, {useState} from "react"
import {Marker} from "react-mapbox-gl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const MapFeature = ({object}) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Marker
				coordinates={{lat:object.lat, lng:object.lng}}
				anchor="bottom">
				<FontAwesomeIcon icon="map-marker" size="lg" onClick={handleShow}/>

				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>{object.content}</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
						<Button variant="primary" onClick={handleClose}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
			</Marker>
		</>
	)

};