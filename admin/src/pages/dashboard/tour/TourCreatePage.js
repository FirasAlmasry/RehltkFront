import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import TourNewEditForm from "../../../sections/@dashboard/tour/TourNewEditForm";

// ----------------------------------------------------------------------

export default function TourCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>Tour: Create a new Tour | Rehltk</title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new Tour"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "tour",
                            href: PATH_DASHBOARD.tour.list,
                        },
                        { name: "New Tour" },
                    ]}
                />
                <TourNewEditForm />
            </Container>
        </>
    );
}
