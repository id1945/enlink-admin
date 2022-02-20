import { SideNavInterface } from '../../interfaces/side-nav.type';

export const ROUTES: SideNavInterface[] = [
    {
        path: '',
        title: 'Dashboard',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'dashboard',
        submenu: [
            {
                path: '/dashboard/default',
                title: 'Default',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/dashboard/crm',
                title: 'CRM',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/dashboard/e-commerce',
                title: 'E-commerce',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/dashboard/projects',
                title: 'Projects',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
        ]
    },
    {
        path: '',
        title: 'Apps',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'appstore',
        submenu: [
            {
                path: '/apps/chat',
                title: 'Chat',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/apps/file-manager',
                title: 'File Manager',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/apps/mail',
                title: 'Mail',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '',
                title: 'Projects',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                    {
                        path: '/apps/projects/project-list',
                        title: 'Project List',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/apps/projects/project-details',
                        title: 'Project Details',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                ]
            },
            {
                path: '',
                title: 'E-commerce',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                    {
                        path: '/apps/e-commerce/orders-list',
                        title: 'Orders List',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/apps/e-commerce/product',
                        title: 'Products',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/apps/e-commerce/products-list',
                        title: 'Products List',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    }
                ]
            }
        ]
    },
    {
        path: '',
        title: 'Components',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'layout',
        submenu: [
            {
                path: '',
                title: 'General',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                    {
                        path: '/demo/components/grid/en',
                        title: 'Ant Grid',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/button/en',
                        title: 'Button',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/icon/en',
                        title: 'Icon',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/typography/en',
                        title: 'Typography',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    }
                ]
            },
            {
                path: '',
                title: 'Navigation',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                    {
                        path: '/demo/components/affix/en',
                        title: 'Affix',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/breadcrumb/en',
                        title: 'Breadcrumb',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/dropdown/en',
                        title: 'Dropdown',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/menu/en',
                        title: 'Menu',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/page-header/en',
                        title: 'Page Header',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/pagination/en',
                        title: 'Pagination',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/steps/en',
                        title: 'Steps',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    }
                ]
            },
            {
                path: '',
                title: 'Data Entry',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                    {
                        path: '/demo/components/auto-complete/en/',
                        title: 'Autocomplete',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/cascader/en/',
                        title: 'Cascader',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/checkbox/en/',
                        title: 'Checkbox',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/date-picker/en/',
                        title: 'Date Picker',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/form/en/',
                        title: 'Form',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/input/en/',
                        title: 'Input',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/input-number/en/',
                        title: 'Input Number',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/mention/en/',
                        title: 'Mention',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/radio/en/',
                        title: 'Radio',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/rate/en/',
                        title: 'Rate',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/select/en/',
                        title: 'Select',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/slider/en/',
                        title: 'Slider',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/switch/en/',
                        title: 'Switch',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/time-picker/en/',
                        title: 'Time Picker',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/transfer/en/',
                        title: 'Transfer',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/tree-select/en/',
                        title: 'Tree Select',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/upload/en/',
                        title: 'Upload',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                ]
            },
            {
                path: '',
                title: 'Data Display',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                    {
                        path: '/demo/components/avatar/en',
                        title: 'Avatar',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/badge/en',
                        title: 'Badge',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/calendar/en',
                        title: 'Calendar',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/card/en',
                        title: 'Card',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/carousel/en',
                        title: 'Carousel',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/collapse/en',
                        title: 'Collapse',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/comment/en',
                        title: 'Comment',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/descriptions/en',
                        title: 'Descriptions',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/empty/en',
                        title: 'Empty',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/list/en',
                        title: 'List',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/popover/en',
                        title: 'Popover',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/statistic/en',
                        title: 'Statistic',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/table/en',
                        title: 'Table',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/tabs/en',
                        title: 'Tabs',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/tag/en',
                        title: 'Tag',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/timeline/en',
                        title: 'Timeline',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/tooltip/en',
                        title: 'Tooltip',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/tree/en',
                        title: 'Tree',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                ]
            },
            {
                path: '',
                title: 'Feedback',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                    {
                        path: '/demo/components/alert/en',
                        title: 'Alert',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/drawer/en',
                        title: 'Drawer',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/message/en',
                        title: 'Message',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/modal/en',
                        title: 'Modal',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/notification/en',
                        title: 'Notification',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/popconfirm/en',
                        title: 'Popconfirm',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/progress/en',
                        title: 'Progress',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/skeleton/en',
                        title: 'Skeleton',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/spin/en',
                        title: 'Spin',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                ]
            },
            {
                path: '',
                title: 'Others',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                    {
                        path: '/demo/components/anchor/en',
                        title: 'Anchor',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/back-top/en',
                        title: 'BackTop',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/demo/components/divider/en',
                        title: 'Divider',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    }
                ]
            },
        ]
    },
    {
        path: '/charts/chartjs',
        title: 'Chart',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'pie-chart',
        submenu: [
        ]
    },
    {
        path: '',
        title: 'Pages',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'file',
        submenu: [
            {
                path: '/pages/profile',
                title: 'Profile',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/pages/invoice',
                title: 'Invoice',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/pages/members',
                title: 'Members',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/pages/pricing',
                title: 'Pricing',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/pages/setting',
                title: 'Setting',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '',
                title: 'Blog',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                    {
                        path: '/pages/blog/blog-grid',
                        title: 'Blog Grid',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/pages/blog/blog-list',
                        title: 'Blog List',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    },
                    {
                        path: '/pages/blog/blog-post',
                        title: 'Blog Post',
                        iconType: '',
                        icon: '',
                        iconTheme: '',
                        submenu: []
                    }
                ]
            }
        ]
    },
    {
        path: '',
        title: 'Authentication',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'lock',
        submenu: [
            {
                path: '/authentication/login-1',
                title: 'Login 1',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/authentication/login-2',
                title: 'Login 2',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/authentication/login-3',
                title: 'Login 3',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/authentication/sign-up-1',
                title: 'Sign Up 1',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/authentication/sign-up-2',
                title: 'Sign Up 2',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/authentication/sign-up-3',
                title: 'Sign Up 3',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/authentication/error-1',
                title: 'Error 1',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            },
            {
                path: '/authentication/error-2',
                title: 'Error 2',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: []
            }
        ]
    }
]    