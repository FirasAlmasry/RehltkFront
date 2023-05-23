import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import CompanyNewEditForm from "../../../sections/@dashboard/company/CompanyNewEditForm";

// ----------------------------------------------------------------------

export default function CompanyCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>Company: Create a new Company | Rehltk</title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new Company"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "company",
                            href: PATH_DASHBOARD.company.list,
                        },
                        { name: "New Company" },
                    ]}
                />
                <CompanyNewEditForm />
            </Container>
        </>
    );
}
