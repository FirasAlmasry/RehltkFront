import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import ComplaintNewEditForm from "../../../sections/@dashboard/complaint/ComplaintNewEditForm";
// ----------------------------------------------------------------------

export default function ComplaintCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>Complaint: Create a new Complaint | Rehltk</title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new Complaint"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "complaint",
                            href: PATH_DASHBOARD.complaint.list,
                        },
                        { name: "New Complaint" },
                    ]}
                />
                <ComplaintNewEditForm />
            </Container>
        </>
    );
}
