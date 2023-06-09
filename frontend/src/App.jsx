import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/Home";
import About from "./pages/About";
import Order from "./pages/Order";
import Companies from "./pages/Companies";
import Complaint from "./pages/Complaint";
import Employment from "./pages/Employment";
import ToursDetiles from "./pages/ToursDetiles";
import Footer from "./components/Footer";
import NestTour from "./pages/NestTour";
import NestTourCard from "./components/NestTourCard";
import CardBlogDesc from "./components/CardBlogDesc";
import CardBlogDescBar from "./components/CardBlogDescBar";
import CardBlogDescBhre from "./components/CardBlogDescBhre";
import CardBlogDescMostar from "./components/CardBlogDescMostar";
import LssuingTouristVisas from "./pages/OtherServise/LssuingTouristVisas";
import InternationalLicense from "./pages/OtherServise/InternationalLicense";
import BookingFlight from "./pages/OtherServise/BookingFlight";
import AllBlog from "./pages/AllBlog";
import SupmitDone from "./components/SupmitDone";

function App() {
    return (
        <div className="App" dir="rtl">
            <CssBaseline />
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/order" element={<Order />} />
                <Route path="/companies" element={<Companies />} />
                <Route path="/complaint" element={<Complaint />} />
                <Route path="/employment" element={<Employment />} />
                <Route path="/tours/:id" element={<NestTour />} />
                <Route path="/tourCity/:id" element={<NestTourCard />} />
                <Route path="/tourDetails/:id" element={<ToursDetiles />} />
                <Route path="/blog" element={<AllBlog />} />
                <Route path="/done" element={<SupmitDone />} />
                <Route path="/blog/aoruba" element={<CardBlogDesc />} />
                <Route path="/blog/barshlona" element={<CardBlogDescBar />} />
                <Route path="/blog/bhre" element={<CardBlogDescBhre />} />
                <Route path="/blog/mostar" element={<CardBlogDescMostar />} />
                <Route
                    path="/LssuingTouristVisas"
                    element={<LssuingTouristVisas />}
                />
                <Route
                    path="/InternationalLicense"
                    element={<InternationalLicense />}
                />
                <Route path="/BookingFlight" element={<BookingFlight />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
