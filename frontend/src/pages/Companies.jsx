import { Box } from "@mui/material";
import Header1 from "../components/Header1";
import CompaniesForm from "../components/CompaniesForm";
import { Container } from "@mui/system";
import IconSo from "../components/IconSo";

function Companies() {
    return (
        <Box>
            <IconSo />
            <Header1
                title="القسم الخاص بالشركات  "
                desc="تنظيم المعارض حجز الطيران والفنادق                "
            />
            <Container
                sx={{
                    mt: 5,
                    mb: 5,
                }}
            >
                <CompaniesForm />
            </Container>
        </Box>
    );
}

export default Companies;
