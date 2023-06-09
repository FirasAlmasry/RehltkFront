// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
// import Label from '../../../components/label';
// import Iconify from '../../../components/iconify';
import SvgColor from "../../../components/svg-color";

// ----------------------------------------------------------------------

const icon = (name) => (
    <SvgColor
        src={`/assets/icons/navbar/${name}.svg`}
        sx={{ width: 1, height: 1 }}
    />
);

const ICONS = {
    blog: icon("ic_blog"),
    cart: icon("ic_cart"),
    chat: icon("ic_chat"),
    mail: icon("ic_mail"),
    user: icon("ic_user"),
    file: icon("ic_file"),
    lock: icon("ic_lock"),
    label: icon("ic_label"),
    blank: icon("ic_blank"),
    kanban: icon("ic_kanban"),
    folder: icon("ic_folder"),
    banking: icon("ic_banking"),
    booking: icon("ic_booking"),
    invoice: icon("ic_invoice"),
    calendar: icon("ic_calendar"),
    disabled: icon("ic_disabled"),
    external: icon("ic_external"),
    menuItem: icon("ic_menu_item"),
    ecommerce: icon("ic_ecommerce"),
    analytics: icon("ic_analytics"),
    dashboard: icon("ic_dashboard"),
};

const navConfig = [
    // GENERAL
    // ----------------------------------------------------------------------
    // {
    //   subheader: 'general',
    //   items: [
    //     { title: 'app', path: PATH_DASHBOARD.general.app, icon: ICONS.dashboard },
    //     { title: 'ecommerce', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.ecommerce },
    //     { title: 'analytics', path: PATH_DASHBOARD.general.analytics, icon: ICONS.analytics },
    //     { title: 'banking', path: PATH_DASHBOARD.general.banking, icon: ICONS.banking },
    //     { title: 'booking', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking },
    //     { title: 'file', path: PATH_DASHBOARD.general.file, icon: ICONS.file },
    //   ],
    // },

    // MANAGEMENT
    // ----------------------------------------------------------------------
    {
        subheader: "management",
        items: [
            // USER
            {
                title: "user",
                path: PATH_DASHBOARD.user.root,
                icon: ICONS.user,
                children: [
                    { title: "list", path: PATH_DASHBOARD.user.list },
                    // { title: "create", path: PATH_DASHBOARD.user.new },
                    // { title: "edit", path: PATH_DASHBOARD.user.demoEdit },
                    // { title: "account", path: PATH_DASHBOARD.user.account },
                    {title: "Order list", path: PATH_DASHBOARD.user.orderList },
                ],
            },
            // salse
            {
                title: "salse",
                path: PATH_DASHBOARD.salse.root,
                icon: ICONS.invoice,
                children: [
                    // { title: "list", path: PATH_DASHBOARD.salse.list },
                    { title: "create", path: PATH_DASHBOARD.salse.new },
                    // {title: "Order list", path: PATH_DASHBOARD.salse.orderList },
                ],
            },
            // country
            {
                title: "country",
                path: PATH_DASHBOARD.country.root,
                icon: ICONS.folder,
                children: [
                    { title: "list", path: PATH_DASHBOARD.country.list },
                    { title: "create", path: PATH_DASHBOARD.country.new },
                    // {title: "Order list", path: PATH_DASHBOARD.country.orderList },
                ],
            },
            // tour
            {
                title: "tour",
                path: PATH_DASHBOARD.tour.root,
                icon: ICONS.folder,
                children: [
                    { title: "list", path: PATH_DASHBOARD.tour.list },
                    { title: "create", path: PATH_DASHBOARD.tour.new },
                    // {title: "Order list", path: PATH_DASHBOARD.tour.orderList },
                ],
            },
            // company
            {
                title: "company",
                path: PATH_DASHBOARD.company.root,
                icon: ICONS.invoice,
                children: [
                    { title: "list", path: PATH_DASHBOARD.company.list },
                    { title: "create", path: PATH_DASHBOARD.company.new },
                    {title: "Order list", path: PATH_DASHBOARD.company.orderList },
                ],
            },
            // complaint
            {
                title: "complaint",
                path: PATH_DASHBOARD.complaint.root,
                icon: ICONS.booking,
                children: [
                    { title: "list", path: PATH_DASHBOARD.complaint.list },
                    { title: "create", path: PATH_DASHBOARD.complaint.new },
                    // {title: "Order list", path: PATH_DASHBOARD.complaint.orderList },
                ],
            },
            // Employment
            {
                title: "employment",
                path: PATH_DASHBOARD.employment.root,
                icon: ICONS.user,
                children: [
                    { title: "list", path: PATH_DASHBOARD.employment.list },
                    { title: "create", path: PATH_DASHBOARD.employment.new },
                    {title: "Order list", path: PATH_DASHBOARD.employment.orderList },
                ],
            },
        ],
    },
];

export default navConfig;
