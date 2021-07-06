import React from "react";

const Nav = () => {
	const navStyle = {
		height: "69px",
		// backgroundColor: "blue",
		color: "white",
        display: "flex",
        alignItems:"center",
		justifyContent: "space-between",
        img: {
            // flexGrow: "0.1",
			height: "60px",
            width: "200px",
            
			backgroundSize: "cover",
			backgroundPosition: "center",
			margin: "10px",
			backgroundImage: `url("https://content.codecademy.com/courses/freelance-1/unit-4/img-tea-cozy-logo.png")`,
		},
		unorderList: {
			width: "200px",
			display: "flex",
			listStyle: "none",
			textDecoration: "underline",
			justifyContent: "space-between",
		},
	};
	return (
		<div style={navStyle}>
			<div style={navStyle.img}></div>
			<div>
				<ul style={navStyle.unorderList}>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</div>
		</div>
	);
};

export default Nav;
