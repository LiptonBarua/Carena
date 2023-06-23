import React from 'react';
import Banner from '../Banner/Banner';
import Dealership from '../Dealership/Dealership';
import SellCar from '../SellCar/SellCar';
import CarSales from '../CarSales/CarSales';
import CarDealer from '../CarDealer/CarDealer';
import OfferBanner from '../OfferBanner/OfferBanner';
import SmallBanner from '../SmallBanner/SmallBanner';
import AboutUs from '../AboutUs/AboutUs';
import Subscribe from '../Subscribe/Subscribe';
import ContactMap from '../ContactMap/ContactMap';
import Advertice from '../Advertice/Advertice';
import CategoriesName from '../CategoriesName/CategoriesName';
import Testimonial from '../Testimonial/Testimonial';
import Practice from '../Practice/Practice';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Dealership></Dealership>
            <Practice></Practice>
            <CategoriesName></CategoriesName>
            <CarSales></CarSales>
            <SellCar></SellCar>
            <Advertice></Advertice>
            <OfferBanner></OfferBanner>
            <CarDealer></CarDealer>
            <Testimonial></Testimonial>
            <SmallBanner></SmallBanner>
            <AboutUs></AboutUs>
            <Subscribe></Subscribe>
            <ContactMap></ContactMap>
        </div>
    );
};

export default Home;