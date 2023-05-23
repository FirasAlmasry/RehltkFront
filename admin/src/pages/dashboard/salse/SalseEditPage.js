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
import SalseNewEditForm from "../../../sections/@dashboard/salse/SalseNewEditForm";
import { useEditSalesMutation, useGetSalesIdQuery } from "../../../state/ApiSales";

// ----------------------------------------------------------------------

export default function SalseEditPage() {
    const { themeStretch } = useSettingsContext();

    const { name } = useParams();

    const {data} = useGetSalesIdQuery(name)
    const [editSalse, { isLoading }] = useEditSalesMutation()

    // const currentCourse = _consoltingList.find(
    //     (Course) => paramCase(Course.name) === name
    // );

    return (
        <>
            <Helmet>
                <title> Salse: Edit Salse | Rehltk</title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Edit Salse"
                    links={[
                        {
                            name: "salse",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "salse",
                            href: PATH_DASHBOARD.salse.list,
                        },
                        { name: data?.data.name },
                    ]}
                />

                {
                    isLoading? "loading..." : <SalseNewEditForm isEdit currentSalse={data?.data} />
                }
            </Container>
        </>
    );
}
