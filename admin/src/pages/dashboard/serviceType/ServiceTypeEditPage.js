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
import ServiceTypeNewEditForm from "../../../sections/@dashboard/serviceType/ServiceTypeNewEditForm";

// ----------------------------------------------------------------------

export default function ServiceTypeEditPage() {
    const { themeStretch } = useSettingsContext();

    const { name } = useParams();

    const currentServiceType = _consoltingList.find(
        (ServiceType) => paramCase(ServiceType.name) === name
    );

    return (
        <>
            <Helmet>
                <title> ServiceType: Edit Consulting | Rehltk</title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Edit ServiceType"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "ServiceType",
                            href: PATH_DASHBOARD.ServiceType.list,
                        },
                        { name: currentServiceType?.name },
                    ]}
                />

                <ServiceTypeNewEditForm
                    isEdit
                    currentServiceType={currentServiceType}
                />
            </Container>
        </>
    );
}
