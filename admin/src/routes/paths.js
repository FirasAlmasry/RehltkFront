// ----------------------------------------------------------------------

function path(root, sublink) {
    return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/dashboard";

// ----------------------------------------------------------------------

export const PATH_AUTH = {
    root: ROOTS_AUTH,
    login: path(ROOTS_AUTH, "/login"),
    register: path(ROOTS_AUTH, "/register"),
    loginUnprotected: path(ROOTS_AUTH, "/login-unprotected"),
    registerUnprotected: path(ROOTS_AUTH, "/register-unprotected"),
    verify: path(ROOTS_AUTH, "/verify"),
    resetPassword: path(ROOTS_AUTH, "/reset-password"),
    newPassword: path(ROOTS_AUTH, "/new-password"),
};

export const PATH_PAGE = {
    comingSoon: "/coming-soon",
    maintenance: "/maintenance",
    pricing: "/pricing",
    payment: "/payment",
    about: "/about-us",
    contact: "/contact-us",
    faqs: "/faqs",
    page403: "/403",
    page404: "/404",
    page500: "/500",
    components: "/components",
};

export const PATH_DASHBOARD = {
    root: ROOTS_DASHBOARD,
    kanban: path(ROOTS_DASHBOARD, "/kanban"),
    calendar: path(ROOTS_DASHBOARD, "/calendar"),
    fileManager: path(ROOTS_DASHBOARD, "/files-manager"),
    permissionDenied: path(ROOTS_DASHBOARD, "/permission-denied"),
    blank: path(ROOTS_DASHBOARD, "/blank"),
    general: {
        app: path(ROOTS_DASHBOARD, "/app"),
        ecommerce: path(ROOTS_DASHBOARD, "/ecommerce"),
        analytics: path(ROOTS_DASHBOARD, "/analytics"),
        banking: path(ROOTS_DASHBOARD, "/banking"),
        booking: path(ROOTS_DASHBOARD, "/booking"),
        file: path(ROOTS_DASHBOARD, "/file"),
    },
    mail: {
        root: path(ROOTS_DASHBOARD, "/mail"),
        all: path(ROOTS_DASHBOARD, "/mail/all"),
    },
    chat: {
        root: path(ROOTS_DASHBOARD, "/chat"),
        new: path(ROOTS_DASHBOARD, "/chat/new"),
        view: (name) => path(ROOTS_DASHBOARD, `/chat/${name}`),
    },
    user: {
        root: path(ROOTS_DASHBOARD, "/user"),
        new: path(ROOTS_DASHBOARD, "/user/new"),
        list: path(ROOTS_DASHBOARD, "/user/list"),
        cards: path(ROOTS_DASHBOARD, "/user/cards"),
        profile: path(ROOTS_DASHBOARD, "/user/profile"),
        account: path(ROOTS_DASHBOARD, "/user/account"),
        orderList: path(ROOTS_DASHBOARD, "/user/order-list"),
        edit: (name) => path(ROOTS_DASHBOARD, `/user/${name}/edit`),
        demoEdit: path(ROOTS_DASHBOARD, `/user/reece-chung/edit`),
    },
    salse: {
        root: path(ROOTS_DASHBOARD, "/salse/new"),
        new: path(ROOTS_DASHBOARD, "/salse/new"),
        list: path(ROOTS_DASHBOARD, "/salse/list"),
        edit: (name) => path(ROOTS_DASHBOARD, `/salse/${name}/edit`),
    },
    country: {
        root: path(ROOTS_DASHBOARD, "/country"),
        new: path(ROOTS_DASHBOARD, "/country/new"),
        list: path(ROOTS_DASHBOARD, "/country/list"),
        // orderList: path(ROOTS_DASHBOARD, "/country/order-list"),
        edit: (name) => path(ROOTS_DASHBOARD, `/country/${name}/edit`),
    },
    tour: {
        root: path(ROOTS_DASHBOARD, "/tour"),
        new: path(ROOTS_DASHBOARD, "/tour/new"),
        list: path(ROOTS_DASHBOARD, "/tour/list"),
        // orderList: path(ROOTS_DASHBOARD, "/tour/order-list"),
        edit: (name) => path(ROOTS_DASHBOARD, `/tour/${name}/edit`),
    },
    employment: {
        root: path(ROOTS_DASHBOARD, "/employment"),
        new: path(ROOTS_DASHBOARD, "/employment/new"),
        list: path(ROOTS_DASHBOARD, "/employment/list"),
        orderList: path(ROOTS_DASHBOARD, "/employment/order-list"),
        edit: (name) => path(ROOTS_DASHBOARD, `/employment/${name}/edit`),
    },
    company: {
        root: path(ROOTS_DASHBOARD, "/company"),
        new: path(ROOTS_DASHBOARD, "/company/new"),
        list: path(ROOTS_DASHBOARD, "/company/list"),
        orderList: path(ROOTS_DASHBOARD, "/company/order-list"),
        edit: (name) => path(ROOTS_DASHBOARD, `/company/${name}/edit`),
    },
    complaint: {
        root: path(ROOTS_DASHBOARD, "/complaint"),
        new: path(ROOTS_DASHBOARD, "/complaint/new"),
        list: path(ROOTS_DASHBOARD, "/complaint/list"),
        // orderList: path(ROOTS_DASHBOARD, "/complaint/order-list"),
        edit: (name) => path(ROOTS_DASHBOARD, `/complaint/${name}/edit`),
    },
    course: {
        root: path(ROOTS_DASHBOARD, "/course"),
        new: path(ROOTS_DASHBOARD, "/course/new"),
        list: path(ROOTS_DASHBOARD, "/course/list"),
        orderList: path(ROOTS_DASHBOARD, "/course/order-list"),
        edit: (name) => path(ROOTS_DASHBOARD, `/course/${name}/edit`),
    },
};

export const PATH_DOCS = {
    root: "https://docs.Rehltkagency.com",
    changelog: "https://docs.Rehltkagency.com/changelog",
};

export const PATH_ZONE_ON_STORE =
    "https://mui.com/store/items/zone-landing-page/";

export const PATH_MINIMAL_ON_STORE =
    "https://mui.com/store/items/minimal-dashboard/";

export const PATH_FREE_VERSION =
    "https://mui.com/store/items/minimal-dashboard-free/";

export const PATH_FIGMA_PREVIEW =
    "https://www.figma.com/file/rWMDOkMZYw2VpTdNuBBCvN/%5BPreview%5D-Minimal-Web.26.11.22?node-id=0%3A1&t=ya2mDFiuhTXXLLF1-1";
