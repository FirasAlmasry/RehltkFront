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
import EmploymentNewEditForm from "../../../sections/@dashboard/course/EmploymentNewEditForm";
import { useEditEmploymentMutation, useGetEmploymentIdQuery } from "../../../state/ApiEmployment";

// ----------------------------------------------------------------------

export default function EmploymentEditPage() {
    const { themeStretch } = useSettingsContext();

    const { name } = useParams();

    const {data} = useGetEmploymentIdQuery(name)
    const [editEmployment, { isLoading }] = useEditEmploymentMutation()

    return (
        <>
            <Helmet>
                <title> Employment: Edit Employment | Rehltk</title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Edit Employment"
                    links={[
                        {
                            name: "employment",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "employment",
                            href: PATH_DASHBOARD.employment.list,
                        },
                        { name: data?.data.name },
                    ]}
                />

                {
                    isLoading? "loading..." : <EmploymentNewEditForm isEdit currentEmployment={data?.data} />
                }
            </Container>
        </>
    );
}
