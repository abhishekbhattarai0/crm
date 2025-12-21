import { CopyCheck, Home, LayoutDashboard, LockIcon, LucideWebhook } from 'lucide-react'


export const sidebarCategories = [
    {
        icon: Home,
        title: 'Dashboard',
    },
    {
        icon: LayoutDashboard,
        title: 'Apps',
    },
    {
        icon: LucideWebhook,
        title: 'Uikit',
    },
    {
        icon: CopyCheck,
        title: 'Pages',
    },
    {
        icon: LockIcon,
        title: 'Authentication',
    },
]

export const dashboardCategories = [
    {
        title: 'Analytics',
        link: '',
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
                link: ''
            },
            {
                title: 'Reports',
                link: ''
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