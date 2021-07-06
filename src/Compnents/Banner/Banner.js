import React from "react";

const Banner = () => {
	const bannerStyles = {
		height: "400px",
		display: "flex",
		Color: "black",
	};
	const imgStyles = {
        backgroundImage: `url("https://content.codecademy.com/courses/freelance-1/unit-4/img-mission-background.jpg")`,
        width: "100%",
        height: "400px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center"
    };
    const textStyles = {
        color: "white",
        width: "100%",
        textAlign: "center",
        backgroundColor: "black",
        margin:"0px"
    }
	return (
		<div style={bannerStyles}>
			<div style={imgStyles}>
				<h2 style={textStyles}>Our Mission</h2>
				<h4 style={textStyles}>Handpicked,Artisanally</h4>
			</div>
		</div>
	);
};

export default Banner;
