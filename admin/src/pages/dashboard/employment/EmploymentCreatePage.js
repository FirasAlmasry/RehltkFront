import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import EmploymentNewEditForm from "../../../sections/@dashboard/course/EmploymentNewEditForm";
// ----------------------------------------------------------------------

export default function EmploymentCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>Employment: Create a new Employment | Rehltk</title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new Employment"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "employment",
                            href: PATH_DASHBOARD.employment.list,
                        },
                        { name: "New Employment" },
                    ]}
                />
                <EmploymentNewEditForm />
            </Container>
        </>
    );
}
