import Users from '../assets/icons/userss.svg'
import ActiveUsers from '../assets/icons/users-active.svg'
import Loans from '../assets/icons/loan.svg'
import Savings from '../assets/icons/money.svg'

interface Cards {
    type: string,
    total: string,
    icon: any
}

const DashboardCards: Cards[] = [
    {
        type: 'Users',
        total: '2,453',
        icon: Users
    },
    {
        type: 'Active Users',
        total: '2,453',
        icon: ActiveUsers
    },
    {
        type: 'Users with Loans',
        total: '12,453',
        icon: Loans
    },
    {
        type: 'Users with Savings',
        total: '102,453',
        icon: Savings
    }
]

export default DashboardCards