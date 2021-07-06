import React from "react";

const Middle = () => {
	const middleStyles = {
		display: "flex",
		flexDirection: "column",
		height: "500px",
		backgroundColor: "black",
		color: "white",
		textAlign: "center",
		middleimg: {
			display: "inline-flex",
			flexWrap: "wrap",
            justifyContent: "space-around",
            alignContent:"space-around",
			alignItems: "space-between",
			padding:"50px"
		},
		divSize: {
			backgroundImage: `url("https://content.codecademy.com/courses/freelance-1/unit-4/img-donut.jpg")`,
			backgroundPosition: "center",
			backgroundSize: "cover",
			height: "100px",
			width: "150px",
			display: "flex",
		},
	};
    const textStyle = {
        margin:"0px"
    }
	return (
		<div style={middleStyles}>
			<div style={textStyle}>
				<h2>Tea of the Month</h2>
				<h3>What's Steeping at the Tea Cozy?</h3>
			</div>
			<div style={middleStyles.middleimg}>
				<div style={middleStyles.divSize}></div>
				<div style={middleStyles.divSize}></div>
				<div style={middleStyles.divSize}></div>
				<div style={middleStyles.divSize}></div>
				<div style={middleStyles.divSize}></div>
			</div>
		</div>
	);
};

export default Middle;
