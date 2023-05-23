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
import CourseNewEditForm from "../../../sections/@dashboard/course/EmploymentNewEditForm";

// ----------------------------------------------------------------------

export default function CourseEditPage() {
    const { themeStretch } = useSettingsContext();

    const { name } = useParams();

    const currentCourse = _consoltingList.find(
        (Course) => paramCase(Course.name) === name
    );

    return (
        <>
            <Helmet>
                <title> Course: Edit Consulting | Rehltk</title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Edit Course"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "Course",
                            href: PATH_DASHBOARD.course.list,
                        },
                        { name: currentCourse?.name },
                    ]}
                />

                <CourseNewEditForm isEdit currentCourse={currentCourse} />
            </Container>
        </>
    );
}
