import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import { useSettingsContext } from "../../../components/settings";
import CustomBreadcrumbs from "../../../components/custom-breadcrumbs";
// sections
import CourseNewEditForm from "../../../sections/@dashboard/course/EmploymentNewEditForm";

// ----------------------------------------------------------------------

export default function CourseCreatePage() {
    const { themeStretch } = useSettingsContext();

    return (
        <>
            <Helmet>
                <title>Course: Create a new course | Rehltk</title>
            </Helmet>

            <Container maxWidth={themeStretch ? false : "lg"}>
                <CustomBreadcrumbs
                    heading="Create a new course"
                    links={[
                        {
                            name: "Dashboard",
                            href: PATH_DASHBOARD.root,
                        },
                        {
                            name: "course",
                            href: PATH_DASHBOARD.course.list,
                        },
                        { name: "New course" },
                    ]}
                />
                <CourseNewEditForm />
            </Container>
        </>
    );
}
