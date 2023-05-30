import { Helmet } from "react-helmet-async";
import { paramCase } from "change-case";
import { useParams } from "react-router-dom";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// _mock_
import { _consoltingList } from "../../../_mock/arrays";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import TourNewEditForm from "../../../sections/@dashboard/tour/TourNewEditForm";
import {  useGetToursIdQuery } from "../../../state/ApiTour";

// ----------------------------------------------------------------------

export default function ToursEditPage() {
    const { themeStretch } = useSettingsContext();

    const { name } = useParams();

    const {data, isLoading } = useGetToursIdQuery(name)
    console.log("🚀 ~ file: TourEditPage.js:25 ~ ToursEditPage ~ data:", data?.data?.days[0])

    return (
        <>
            <Helmet>
                <title> Tours: Edit Tours | Rehltk</title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Edit Tours"
                    links={[
                        {
                            name: "tour",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "tour",
                            href: PATH_DASHBOARD.tour.list,
                        },
                        { name: data?.data.name },
                    ]}
                />

                {
                    isLoading? "loading..." : <TourNewEditForm isEdit currentTour={data?.data} />
                }
            </Container>
        </>
    );
}
