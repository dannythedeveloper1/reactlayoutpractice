import React from 'react'
import Banner from '../Banner/Banner';
import Middle from '../Middle/Middle';
import Location from '../Location/Location';
import Footer from '../Footer/Footer';

const Main = () => {
    const mainStyles = {
        display: "flex",
        flexDirection:"column",
            width: "90%",
			margin: "auto",
            justifyContent: "space-between",
			backgroundColor: "white",
		};
    return (
        <div style={mainStyles}>
            <Banner />
            <Middle />
            <Location />
            <Footer/>
        </div>
    )
}

export default Main
