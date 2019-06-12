import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import ReactMapboxGl, {Layer, Feature, Marker, Popup} from "react-mapbox-gl";
import {library} from '@fortawesome/fontawesome-svg-core'
	;
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMapMarker} from "@fortawesome/free-solid-svg-icons";
import {MapFeature} from "./pages/home/MapFeature";

library.add(faMapMarker);


const App = () => {


	const [points, setPoints] = useState([
		{lat: 35.332, lng: -106.652},
		{lat: 35.339, lng: -106.656},
		{lat: 35.40, lng: -106.666},
		{lat: 35.23, lng: -106.4444}
	]);


	const Map = ReactMapboxGl({
		accessToken: "pk.eyJ1IjoiZ2Vvcmdla2VwaGFydCIsImEiOiJjanQ4cmdmYjkwYnZnNDNwNDF4NXFiMTJmIn0.MwDDiyszR0QFmMYMNvzi1Q"
	});

	return (
		<>
			<Map
				style="mapbox://styles/mapbox/streets-v9"
				containerStyle={{
					height: "100vh",
					width: "100vw"
				}}
				center={[-106.65, 35.33]}
			>
				{points.map(point => (
					<MapFeature point={point} />
				))};
			</Map>

		</>
	)
};


ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

