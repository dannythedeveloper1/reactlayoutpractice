import React from "react";

const Location = () => {
	const locationStyles = {
		backgroundImage: `url("https://content.codecademy.com/courses/freelance-1/unit-4/img-locations-background.jpg")`,
        width: "100%",
        opacity:"1",
		backgroundSize: "cover",
		backgroundPosition: "center",
		height: "300px",
		display: "flex",
		flexDirection: "column",
		textAlign: "center",
		alignItems: "space-around",
		locationImg: {
			display: "flex",
			flexWrap: "wrap",
			justifyContent: "space-around",
			alignItems: "space-around",
		},
		card: {
			width: "150px",
			height: "200px",
			backgroundColor: "black",
            color: "white",
            display: "flex",
            flexDirection: "column",
            flexWrap:"wrap",

		},
	};
	const textStyle = {
		margin: "0px",
	};

	return (
		<div style={locationStyles}>
			<div styles={textStyle}>
				<h2>Locations</h2>
			</div>
			<div style={locationStyles.locationImg}>
				<div style={locationStyles.card}>
					<h3>Downtown</h3>
					<h5>384 West 4th St</h5>
					
				</div>
				<div style={locationStyles.card}>
					<h3>East Bayside</h3>
					<h5>3433 Phisherman's Avenue</h5>
				</div>
				<div style={locationStyles.card}>
					<h3>Oakdale</h3>
					<h5>515 Crescent Avenue</h5>
				</div>
			</div>
		</div>
	);
};

export default Location;
