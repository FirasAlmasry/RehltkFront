import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Section from '../components/Ui/Section'
import ToursCity from '../components/ToursCity'
import TravlForm from '../components/TravlForm'
import IconSo from "../components/IconSo";
import { useParams } from 'react-router-dom'
import { useGetCountryIdQuery } from '../state/ApiCountry'

function NestTour() {
    const [countryData, setCountryData] = useState([]);
    let { id } = useParams()
    const { data, isLoading } = useGetCountryIdQuery(id);
    console.log("🚀 ~ file: NestTour.jsx:14 ~ NestTour ~ data:", data)
    useEffect(() => {
        if (data) {
            setCountryData(data.data)
        }
    }, [data])
    return (
        <>
            {/* <Header /> */}
            <IconSo />
                    <Section
                        title={countryData.description}>
                        <ToursCity />
                    </Section>

            <Section title="أحجز الأن">
                <TravlForm />
            </Section>
        </>
    )
}

export default NestTour