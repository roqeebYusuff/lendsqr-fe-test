import usersIcon from '../assets/icons/users.svg';
import guarantorsIcon from '../assets/icons/users 1.svg';
import loansIcon from '../assets/icons/sack 1.svg';
import decisionsIcon from '../assets/icons/handshake-regular 1.svg';
import savingsIcon from '../assets/icons/piggy-bank 1.svg';
import loanReqIcon from '../assets/icons/Group 104.svg';
import whitelistIcon from '../assets/icons/user-check 1.svg';
import karmaIcon from '../assets/icons/user-times 1.svg';
import orgIcon from '../assets/icons/briefcase.svg';
import savingsProductIcon from '../assets/icons/np_bank_148501_000000 1.svg';
import sysmessagesIcon from '../assets/icons/tire 1.svg';
import feesAndChargesIcon from '../assets/icons/coins-solid 1.svg'
import transactionsIcon from '../assets/icons/icon.svg'
import servicesIcon from '../assets/icons/galaxy 1.svg'
import serviceAndAccIcon from '../assets/icons/user-cog 1.svg'
import settlementIcon from '../assets/icons/scroll 1.svg'
import reportsIcon from '../assets/icons/chart-bar 2.svg'
import preferencesIcon from '../assets/icons/sliders-h 1.svg'
import logsIcon from '../assets/icons/clipboard-list 1.svg'
import feesAndPricingIcon from '../assets/icons/badge-percent 1.svg'

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
        icon: guarantorsIcon
    },
    {
        title: "Loans",
        to: "/loans",
        icon: loansIcon
    },
    {
        title: "Decision Models",
        to: "/decision-models",
        icon: decisionsIcon
    },
    {
        title: "Savings",
        to: "/savings",
        icon: savingsIcon
    },
    {
        title: "Loan Requests",
        to: "/loan-requests",
        icon: loanReqIcon
    },
    {
        title: "Whitelist",
        to: "/whitelist",
        icon: whitelistIcon
    },
    {
        title: "Karma",
        to: "/karma",
        icon: karmaIcon
    },
]

export const Businesses: Props[] = [
    {
        title: "Organization",
        to: "/organization",
        icon: orgIcon
    },
    {
        title: "Loan Products",
        to: "/loan-products",
        icon: loanReqIcon
    },
    {
        title: "Savings Products",
        to: "/loans",
        icon: savingsProductIcon
    },
    {
        title: "Fees and Charges",
        to: "/fees-and-charges",
        icon: feesAndChargesIcon
    },
    {
        title: "Transactions",
        to: "/transactions",
        icon: transactionsIcon
    },
    {
        title: "Services",
        to: "/services",
        icon: servicesIcon
    },
    {
        title: "Service Account",
        to: "/service-account",
        icon: serviceAndAccIcon
    },
    {
        title: "Settlements",
        to: "/settlements",
        icon: settlementIcon
    },
    {
        title: "Reports",
        to: "/reports",
        icon: reportsIcon
    },
]

export const Settings: Props[] = [
    {
        title: "Preferences",
        to: "/preferences",
        icon: preferencesIcon
    },
    {
        title: "Fees and Pricing",
        to: "/fees-and-pricing",
        icon: feesAndPricingIcon
    },
    {
        title: "Audit Logs",
        to: "/audit-logs",
        icon: logsIcon
    },
    {
        title: "Systems Messages",
        to: "/systems-messages",
        icon: sysmessagesIcon
    },
]