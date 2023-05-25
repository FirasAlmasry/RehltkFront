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
import CompanyNewEditForm from "../../../sections/@dashboard/company/CompanyNewEditForm";
import { useEditCompanyMutation, useGetCompanyIdQuery } from "../../../state/ApiCompany";

// ----------------------------------------------------------------------

export default function CompanyEditPage() {
    const { themeStretch } = useSettingsContext();

    const { name } = useParams();

    const {data} = useGetCompanyIdQuery(name)
    const [editCompany, { isLoading }] = useEditCompanyMutation()

    // const currentCourse = _consoltingList.find(
    //     (Course) => paramCase(Course.name) === name
    // );

    return (
        <>
            <Helmet>
                <title> Company: Edit Company | Rehltk</title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Edit Company"
                    links={[
                        {
                            name: "company",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "company",
                            href: PATH_DASHBOARD.company.list,
                        },
                        { name: data?.data.name },
                    ]}
                />

                {
                    isLoading? "loading..." : <CompanyNewEditForm isEdit currentCompany={data?.data} />
                }
            </Container>
        </>
    );
}
