import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import ServiceTypeNewEditForm from "../../../sections/@dashboard/serviceType/ServiceTypeNewEditForm";

// ----------------------------------------------------------------------

export default function ServiceTypeCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>
                    ServiceType: Create a new ServiceType | Rehltk
                </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new ServiceType"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "ServiceType",
                            href: PATH_DASHBOARD.serviceType.list,
                        },
                        { name: "New ServiceType" },
                    ]}
                />
                <ServiceTypeNewEditForm />
            </Container>
        </>
    );
}
