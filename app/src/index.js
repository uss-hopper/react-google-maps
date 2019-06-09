import React from 'react';
import ReactDOM from 'react-dom';
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";


const App = withScriptjs(withGoogleMap((props) =>
	<GoogleMap
		defaultZoom={8}
		defaultCenter={{lat: 35.0856197, lng: -106.64924}}
	>
		{props.isMarkerShown && <Marker position={{lat: -34.397, lng: 150.644}}/>}
	</GoogleMap>
));


ReactDOM.render(
	<App
	googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCp8aJ6-c7UwVvh-tVeXsWQ3nYQrQ4c3r4"
	loadingElement={<div style={{height: `100%`}}/>}
	containerElement={<div style={{height: `400px`}}/>}
	mapElement={<div style={{height: `100%`}}/>}

/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

