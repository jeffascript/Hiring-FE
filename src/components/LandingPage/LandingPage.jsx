import React from "react";
import Banner from "../Banner/Banner";
import GoalsComponent from "./GoalsComponent";
import RatingPartnersComponent from './RatingPartnersComponent';
import Accordian from './FAQsComponent'
import { Container } from "react-bootstrap"
import Footer from "../Footer/Footer";

export default () => {
    return (
      <Container fluid >
      <Banner />
      <GoalsComponent />
      <RatingPartnersComponent />
      <Accordian />
      <Footer />
    </Container>
    );
}

