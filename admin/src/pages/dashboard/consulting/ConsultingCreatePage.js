import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import ConsoltingNewEditForm from "../../../sections/@dashboard/consulting/ConsultingNewEditForm";

// ----------------------------------------------------------------------

export default function UserCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>
                    {" "}
                    Consulting: Create a new consulting | Rehltk
                </title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new consulting"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "consulting",
                            href: PATH_DASHBOARD.consulting.list,
                        },
                        { name: "New consulting" },
                    ]}
                />
                <ConsoltingNewEditForm />
            </Container>
        </>
    );
}
