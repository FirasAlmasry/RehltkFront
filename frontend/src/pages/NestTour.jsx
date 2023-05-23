import React from 'react'
import Header from '../components/Header'
import Section from '../components/Ui/Section'
import ToursCity from '../components/ToursCity'
import TravlForm from '../components/TravlForm'

function NestTour() {
    return (
        <>
            {/* <Header /> */}
            <Section title="رحلات سياحية في ماليزيا">
                <ToursCity />
            </Section>

            <Section title="أحجز الأن">
                <TravlForm />
            </Section>
        </>
    )
}

export default NestTour