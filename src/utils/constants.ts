import { CopyCheck, Home, LayoutDashboard, LockIcon, LucideWebhook, Clock5, Users2 } from 'lucide-react'
import { TbActivityHeartbeat } from 'react-icons/tb';
import { MdOutlineCelebration } from 'react-icons/md'


export const sidebarCategories = [
    {
        icon: Home,
        title: 'Dashboard',
        link: 'dashboard',
    },
    {
        icon: LayoutDashboard,
        title: 'Apps',
        link: 'Apps',
    },
    {
        icon: LucideWebhook,
        title: 'Uikit',
        link: 'Uikit',
    },
    {
        icon: CopyCheck,
        title: 'Pages',
        link: 'Pages',
    },
    {
        icon: LockIcon,
        title: 'Authentication',
        link: 'Authentication',
    },
]

export const dashboardCategories = [
    {
        title: 'Analytics',
        link: '/dashboard/analytics',
    },
    {
        title: 'Crypto',
        link: 'Crm',
    },
    {
        title: 'Project',
        link: '',
    },
    {
        title: 'Ecommerce',
        link: '',
    },
    {
        title: 'Helpdesk',
        link: '',
    },
    {
        title: 'Hospital',
        link: '',
    },
]

export const appsCategories = [
    {
        title: 'Analytics',
        link: '',
        children: [
            {
                title: 'Customers',
                link: 'customers'
            },
            {
                title: 'Reports',
                link: 'reports'
            },
        ],
    },
    {
        title: 'Crypto',
        link: '',
        children: [
            {
                title: 'Exchange',
                link: ''
            },
            {
                title: 'Wallet',
                link: ''
            },
            {
                title: 'Crypto News',
                link: ''
            },
            {
                title: 'ICO List',
                link: ''
            },
            {
                title: 'Settings',
                link: ''
            },
        ]
    },
    {
        title: 'crm',
        link: '',
        children: [
            {
                title: 'Contacts',
                link: ''
            },
            {
                title: 'Opportunities',
                link: ''
            },
            {
                title: 'Leads',
                link: ''
            },
            {
                title: 'Customers',
                link: ''
            },
        ]
    },
    {
        title: 'Projects',
        link: '',
        children: [
            {
                title: 'Clients',
                link: ''
            },
            {
                title: 'Team',
                link: ''
            },
            {
                title: 'Project',
                link: ''
            },
            {
                title: 'Task',
                link: ''
            },
        ]

    },
    {
        title: 'Helpdesk',
        link: '',
    },
    {
        title: 'Hospital',
        link: '',
    },
]


export const analayticsCardInfo = [
    {
        title: 'Sessions',
        total: '24k',
        rate: -8.5,
        Icon: Users2,
        desc: 'New Sessions Today'
    },
    {
        title: 'Avg.Sessions',
        total: '24k',
        rate: 8.5,
        Icon: Clock5,
        desc: 'Weekly Avg.Sessions'
    },
    {
        title: 'Sessions',
        total: '24k',
        rate: 8.5,
        Icon: TbActivityHeartbeat,
        desc: 'Bounce Rate Weekly'
    },
    {
        title: 'Sessions',
        total: '24k',
        rate: 8.5,
        Icon: MdOutlineCelebration,
        desc: 'Completions Weekly'
    },
    // {
    //     title: 'Sessions',
    //     total: '24k',
    //     rate: 8.5,
    //     Icon: IoTrendingUpOutline,
    //     desc: ''
    // },
]