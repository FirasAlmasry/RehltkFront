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
import ServiceNewEditForm from "../../../sections/@dashboard/service/ServiceNewEditForm";

// ----------------------------------------------------------------------

export default function ServiceEditPage() {
    const { themeStretch } = useSettingsContext();

    const { name } = useParams();

    const currentService = _consoltingList.find(
        (Service) => paramCase(Service.name) === name
    );

    return (
        <>
            <Helmet>
                <title> Service: Edit Consulting | Rehltk</title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Edit Service"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Service",
                            href: PATH_DASHBOARD.service.list,
                        },
                        { name: currentService?.name },
                    ]}
                />

                <ServiceNewEditForm isEdit currentService={currentService} />
            </Container>
        </>
    );
}
