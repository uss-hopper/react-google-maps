import React, {useState} from "react";

import ReactMapboxGl from "react-mapbox-gl/lib/index";
import {MapFeature} from "./MapFeature";
import {Layer} from "react-mapbox-gl/lib-esm";

export const Home = () => {


	const [points, setPoints] = useState([
		{lat: 35.332, lng: -106.652, content: "hi"},
		{lat: 35.339, lng: -106.656, content: "Bye"},
		{lat: 35.40, lng: -106.666, content: "marty"},
		{lat: 35.23, lng: -106.4444, content: "Stinks"}
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
				<Layer>
					{points.map(point => (
							<MapFeature point={point}/>
						)
					)};
				</Layer>
			</Map>

		</>
	)
};