import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import SalseNewEditForm from "../../../sections/@dashboard/salse/SalseNewEditForm";
import { useNavigate } from "react-router-dom";

// ----------------------------------------------------------------------

export default function SalseCreatePage() {
    const { themeStretch } = useSettingsContext();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user.roles.includes("superAdmin"))
    // if(!user.roles.includes("superAdmin")) {
    //    return navigate(PATH_DASHBOARD.user.list);
    // }
    return (
        <>
            <Helmet>
                <title>Salse: Create a new Salse | Rehltk</title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new Salse"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "salse",
                            href: PATH_DASHBOARD.salse.list,
                        },
                        { name: "New Salse" },
                    ]}
                />
                <SalseNewEditForm />
            </Container>
        </>
    );
}
