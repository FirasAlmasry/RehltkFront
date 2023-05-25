import React from "react";
import Header from "../components/Header";
import TestimonialsList from "../components/TestimonialsList";
import ToursList from "../components/ToursList";
import TravlForm from "../components/TravlForm";
import Section from "../components/Ui/Section";
import SotialIcon from "../components/SotialIcon";
import CardBlog from "../components/CardBlog";
import IconSo from "../components/IconSo";
import ListReview from "../components/ListReview";

function Home() {
    return (
        <>
            <Header />
            <Section title="الوجهات السياحية الدولية">
            <IconSo />
                <ToursList />
            </Section>
            <Section title="اراء العملاء">
                <ListReview />
                {/* <TestimonialsList /> */}
            </Section>
            <Section title="حساباتنا">
                <SotialIcon />
            </Section>
            <Section title="المدونة">
                <CardBlog />
            </Section>
            <Section title="أحجز الأن">
                <TravlForm />
            </Section>
        </>
    );
}

export default Home;
