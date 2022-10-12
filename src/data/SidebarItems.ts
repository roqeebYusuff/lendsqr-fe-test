import usersIcon from '../assets/icons/users.svg';

interface Props {
    title: string,
    to: string,
    icon: any
}

export const Customers: Props[] = [
    {
        title: "Users",
        to: "/users",
        icon: usersIcon
    },
    {
        title: "Guarantors",
        to: "/guarantors",
        icon: usersIcon
    },
    {
        title: "Loans",
        to: "/loans",
        icon: usersIcon
    },
    {
        title: "Decision Models",
        to: "/decision-models",
        icon: usersIcon
    },
    {
        title: "Savings",
        to: "/savings",
        icon: usersIcon
    },
    {
        title: "Loan Requests",
        to: "/loan-requests",
        icon: usersIcon
    },
    {
        title: "Whitelist",
        to: "/whitelist",
        icon: usersIcon
    },
    {
        title: "Karma",
        to: "/karma",
        icon: usersIcon
    },
]

export const Businesses: Props[] = [
    {
        title: "Organization",
        to: "/organization",
        icon: usersIcon
    },
    {
        title: "Loan Products",
        to: "/loan-products",
        icon: usersIcon
    },
    {
        title: "Savings Products",
        to: "/loans",
        icon: usersIcon
    },
    {
        title: "Fees and Charges",
        to: "/fees-and-charges",
        icon: usersIcon
    },
    {
        title: "Transactions",
        to: "/transactions",
        icon: usersIcon
    },
    {
        title: "Services",
        to: "/services",
        icon: usersIcon
    },
    {
        title: "Service Account",
        to: "/service-account",
        icon: usersIcon
    },
    {
        title: "Settlements",
        to: "/settlements",
        icon: usersIcon
    },
    {
        title: "Reports",
        to: "/reports",
        icon: usersIcon
    },
]

export const Settings: Props[] = [
    {
        title: "Preferences",
        to: "/preferences",
        icon: usersIcon
    },
    {
        title: "Fees and Pricing",
        to: "/fees-and-pricing",
        icon: usersIcon
    },
    {
        title: "Audit Logs",
        to: "/audit-logs",
        icon: usersIcon
    },
    {
        title: "Systems Messages",
        to: "/systems-messages",
        icon: usersIcon
    },
]