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
import ConsultingNewEditForm from "../../../sections/@dashboard/consulting/ConsultingNewEditForm";

// ----------------------------------------------------------------------

export default function ConsultingEditPage() {
    const { themeStretch } = useSettingsContext();

    const { name } = useParams();

    const currentConsulting = _consoltingList.find(
        (Consulting) => paramCase(Consulting.name) === name
    );

    return (
        <>
            <Helmet>
                <title> Consulting: Edit Consulting | Rehltk</title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Edit Consulting"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Consulting",
                            href: PATH_DASHBOARD.Consulting.list,
                        },
                        { name: currentConsulting?.name },
                    ]}
                />

                <ConsultingNewEditForm
                    isEdit
                    currentConsulting={currentConsulting}
                />
            </Container>
        </>
    );
}
