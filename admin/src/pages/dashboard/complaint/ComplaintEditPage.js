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
import ComplaintNewEditForm from "../../../sections/@dashboard/complaint/ComplaintNewEditForm";
import { useEditComplaintMutation, useGetComplaintIdQuery } from "../../../state/ApiComplaint";

// ----------------------------------------------------------------------

export default function ComplaintEditPage() {
    const { themeStretch } = useSettingsContext();

    const { name } = useParams();

    const {data} = useGetComplaintIdQuery(name)
    const [editComplaint, { isLoading }] = useEditComplaintMutation()

    // const currentCourse = _consoltingList.find(
    //     (Course) => paramCase(Course.name) === name
    // );

    return (
        <>
            <Helmet>
                <title> Complaint: Edit Complaint | Rehltk</title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Edit Complaint"
                    links={[
                        {
                            name: "complaint",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "complaint",
                            href: PATH_DASHBOARD.complaint.list,
                        },
                        { name: data?.data.name },
                    ]}
                />

                {
                    isLoading? "loading..." : <ComplaintNewEditForm isEdit currentComplaint={data?.data} />
                }
            </Container>
        </>
    );
}
