import { Navigate, useRoutes } from "react-router-dom";
// auth
import AuthGuard from "../auth/AuthGuard";
import GuestGuard from "../auth/GuestGuard";
// layouts
import MainLayout from "../layouts/main";
import SimpleLayout from "../layouts/simple";
import CompactLayout from "../layouts/compact";
import DashboardLayout from "../layouts/dashboard";
// config
import { PATH_AFTER_LOGIN } from "../config-global";
//
import {
    // Auth
    LoginPage,
    RegisterPage,
    VerifyCodePage,
    NewPasswordPage,
    ResetPasswordPage,
    // Dashboard: User
    UserListPage,
    UserEditPage,
    UserCreatePage,
    UserProfilePage,
    UserAccountPage,

    //
    Page500,
    Page403,
    Page404,
    PaymentPage,
    EmploymentListPage,
    EmploymentCreatePage,
    EmploymentEditPage,
    EmploymentOrderListPage,
    UserOrderListPage,
    CompanyListPage,
    CompanyCreatePage,
    CompanyOrderListPage,
    CountryListPage,
    CountryCreatePage,
    CountryOrderListPage,
    TourListPage,
    TourCreatePage,
    TourOrderListPage,
    SalseListPage,
    SalseCreatePage,
    SalseOrderListPage,
    CompanyEditPage,
    CountryEditPage,
    ComplaintListPage,
    ComplaintCreatePage,
    ComplaintOrderListPage,
    ComplaintEditPage,
    SalseEditPage,
    TourEditPage,
} from "./elements";

// ----------------------------------------------------------------------

export default function Router() {
    return useRoutes([
        // Auth
        {
            path: "auth",
            children: [
                {
                    path: "login",
                    element: (
                        <GuestGuard>
                            <LoginPage />
                        </GuestGuard>
                    ),
                },
                {
                    path: "register",
                    element: (
                        <GuestGuard>
                            <RegisterPage />
                        </GuestGuard>
                    ),
                },
                { path: "login-unprotected", element: <LoginPage /> },
                { path: "register-unprotected", element: <RegisterPage /> },
                {
                    element: <CompactLayout />,
                    children: [
                        {
                            path: "reset-password",
                            element: <ResetPasswordPage />,
                        },
                        { path: "new-password", element: <NewPasswordPage /> },
                        { path: "verify", element: <VerifyCodePage /> },
                    ],
                },
            ],
        },

        // Dashboard
        {
            path: "dashboard",
            element: (
                <AuthGuard>
                    <DashboardLayout />
                </AuthGuard>
            ),
            children: [
                {
                    element: <Navigate to={PATH_AFTER_LOGIN} replace />,
                    index: true,
                },
                {
                    path: "user",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/user/list" replace />
                            ),
                            index: true,
                        },
                        // { path: 'profile', element: <UserProfilePage /> },
                        // { path: 'cards', element: <UserCardsPage /> },
                        { path: "list", element: <UserListPage /> },
                        { path: "new", element: <UserCreatePage /> },
                        { path: ":name/edit", element: <UserEditPage /> },
                        { path: "account", element: <UserAccountPage /> },
                        {
                            path: "order-list",
                            element: <UserOrderListPage />,
                        },
                    ],
                },
                {
                    path: "employment",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/employment/list" replace />
                            ),
                            index: true,
                        },
                        { path: "list", element: <EmploymentListPage /> },
                        { path: "new", element: <EmploymentCreatePage /> },
                        {
                            path: "order-list",
                            element: <EmploymentOrderListPage />,
                        },
                        { path: ":name/edit", element: <EmploymentEditPage /> },
                    ],
                },
                {
                    path: "company",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/company/list" replace />
                            ),
                            index: true,
                        },
                        // { path: 'profile', element: <UserProfilePage /> },
                        // { path: 'cards', element: <UserCardsPage /> },
                        { path: "list", element: <CompanyListPage /> },
                        { path: "new", element: <CompanyCreatePage /> },
                        {
                            path: "order-list",
                            element: <CompanyOrderListPage />,
                        },
                        { path: ":name/edit", element: <CompanyEditPage /> },
                    ],
                },
                {
                    path: "complaint",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/complaint/list" replace />
                            ),
                            index: true,
                        },
                        // { path: 'profile', element: <UserProfilePage /> },
                        // { path: 'cards', element: <UserCardsPage /> },
                        { path: "list", element: <ComplaintListPage /> },
                        { path: "new", element: <ComplaintCreatePage /> },
                        // {
                        //     path: "order-list",
                        //     element: <ComplaintOrderListPage />,
                        // },
                        { path: ":name/edit", element: <ComplaintEditPage /> },
                    ],
                },
                {
                    path: "country",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/country/list" replace />
                            ),
                            index: true,
                        },
                        // { path: 'profile', element: <UserProfilePage /> },
                        // { path: 'cards', element: <UserCardsPage /> },
                        { path: "list", element: <CountryListPage /> },
                        { path: "new", element: <CountryCreatePage /> },
                        // {
                        //     path: "order-list",
                        //     element: <CountryOrderListPage />,
                        // },
                        { path: ":name/edit", element: <CountryEditPage /> },
                    ],
                },
                {
                    path: "tour",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/tour/list" replace />
                            ),
                            index: true,
                        },
                        // { path: 'profile', element: <UserProfilePage /> },
                        // { path: 'cards', element: <UserCardsPage /> },
                        { path: "list", element: <TourListPage /> },
                        { path: "new", element: <TourCreatePage /> },
                        // {
                        //     path: "order-list",
                        //     element: <TourOrderListPage />,
                        // },
                        { path: ":name/edit", element: <TourEditPage /> },
                    ],
                },
                {
                    path: "salse",
                    children: [
                        {
                            element: (
                                <Navigate to="/dashboard/salse/list" replace />
                            ),
                            index: true,
                        },
                        // { path: 'profile', element: <UserProfilePage /> },
                        // { path: 'cards', element: <UserCardsPage /> },
                        { path: "list", element: <SalseListPage /> },
                        { path: "new", element: <SalseCreatePage /> },
                        // {
                        //     path: "order-list",
                        //     element: <SalseOrderListPage />,
                        // },
                        { path: ":name/edit", element: <SalseEditPage /> },
                    ],
                },
            ],
        },

        // Main Routes
        {
            // element: <MainLayout />,
            children: [
                {
                    element: (
                        <GuestGuard>
                            <LoginPage />
                        </GuestGuard>
                    ),
                    index: true,
                },
            ],
        },
        {
            element: <CompactLayout />,
            children: [
                { path: "500", element: <Page500 /> },
                { path: "404", element: <Page404 /> },
                { path: "403", element: <Page403 /> },
            ],
        },
        { path: "*", element: <Navigate to="/404" replace /> },
    ]);
}
