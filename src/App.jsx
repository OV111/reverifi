import Navbar from "./components/Navbar";
import React from "react";
import Hero from "./pages/HeroPart";
import FeaturedList from "./pages/FeaturedList";
import Event1 from "./pages/Event1Part";
import ListingsGrid from "./pages/Pages";
import Footer from "./components/Footer";
const App = () => {
    return (
        <React.Fragment>
            
            <Navbar></Navbar>
            <Hero></Hero>
            <FeaturedList></FeaturedList>
            <Event1></Event1>
            <ListingsGrid></ListingsGrid>
            <Footer></Footer>
        </React.Fragment>
    )
}
export default App;