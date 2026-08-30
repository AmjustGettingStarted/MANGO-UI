import {
    Download01Icon,
    CodeIcon,
    Clock01Icon,
    SparklesIcon,
    GridIcon,
    DashboardSquare01Icon,
    Layout01Icon,
    AuctionIcon,
} from '@hugeicons/core-free-icons';

export interface NavChild {
    title: string;
    slug: string;
    href: string;
}

export interface NavParentItem {
    type: 'collapsible';
    title: string;
    slug: string;
    icon: typeof SparklesIcon;
    children: NavChild[];
}

export interface NavLinkItem {
    type: 'link';
    title: string;
    slug: string;
    href: string;
    icon: typeof Download01Icon;
}

export interface NavFlyoutItem {
    type: 'flyout';
    title: string;
    slug: string;
    icon: typeof AuctionIcon;
}

export type NavItem = NavLinkItem | NavParentItem | NavFlyoutItem;

export interface NavGroup {
    sectionTitle?: string;
    items: NavItem[];
}

export const navigationData: NavGroup[] = [
    {
        sectionTitle: 'Quickstart',
        items: [
            { type: 'link', title: 'Installation', slug: 'installation', href: '/installation', icon: Download01Icon },
            { type: 'link', title: 'Framework Support', slug: 'framework-support', href: '/framework-support', icon: CodeIcon },
            { type: 'link', title: 'Developers', slug: 'developers', href: '/developers', icon: CodeIcon },
            { type: 'link', title: 'Changelog', slug: 'changelog', href: '/changelog', icon: Clock01Icon },
        ],
    },
    {
        sectionTitle: 'Explore',
        items: [
            {
                type: 'collapsible',
                title: 'Animated',
                slug: 'animated',
                icon: SparklesIcon,
                children: [
                    { title: 'Accordion', slug: 'accordion', href: '/animated/accordion' },
                    { title: 'Action', slug: 'action', href: '/animated/action' },
                    { title: 'Buttons', slug: 'buttons', href: '/animated/buttons' },
                    { title: 'Cards', slug: 'cards', href: '/animated/cards' },
                    { title: 'Carousel', slug: 'carousel', href: '/animated/carousel' },
                    { title: 'Choice-chips', slug: 'choice-chips', href: '/animated/choice-chips' },
                    { title: 'Dialog', slug: 'dialog', href: '/animated/dialog' },
                    { title: 'Disclosure', slug: 'disclosure', href: '/animated/disclosure' },
                    { title: 'Dropdown', slug: 'dropdown', href: '/animated/dropdown' },
                    { title: 'Filters', slug: 'filters', href: '/animated/filters' },
                    { title: 'Inputs', slug: 'inputs', href: '/animated/inputs' },
                    { title: 'Interaction', slug: 'interaction', href: '/animated/interaction' },
                    { title: 'Lists', slug: 'lists', href: '/animated/lists' },
                    { title: 'Map', slug: 'map', href: '/animated/map' },
                    { title: 'Marketing', slug: 'marketing', href: '/animated/marketing' },
                    { title: 'Media', slug: 'media', href: '/animated/media' },
                    { title: 'Micro-interaction', slug: 'micro-interaction', href: '/animated/micro-interaction' },
                    { title: 'Navigation', slug: 'navigation', href: '/animated/navigation' },
                    { title: 'Pagination', slug: 'pagination', href: '/animated/pagination' },
                    { title: 'Popover', slug: 'popover', href: '/animated/popover' },
                    { title: 'Scheduler', slug: 'scheduler', href: '/animated/scheduler' },
                    { title: 'Sliders', slug: 'sliders', href: '/animated/sliders' },
                    { title: 'Tabs', slug: 'tabs', href: '/animated/tabs' },
                    { title: 'Toggle', slug: 'toggle', href: '/animated/toggle' },
                    { title: 'Tooltip', slug: 'tooltip', href: '/animated/tooltip' },
                    { title: 'Widgets', slug: 'widgets', href: '/animated/widgets' },
                ],
            },
            {
                type: 'collapsible',
                title: 'Component',
                slug: 'component',
                icon: GridIcon,
                children: [
                    { title: 'Accordion', slug: 'accordion', href: '/component/accordion' },
                    { title: 'Alerts', slug: 'alerts', href: '/component/alerts' },
                    { title: 'Avatar', slug: 'avatar', href: '/component/avatar' },
                    { title: 'Badge', slug: 'badge', href: '/component/badge' },
                    { title: 'Breadcrumb', slug: 'breadcrumb', href: '/component/breadcrumb' },
                    { title: 'Button', slug: 'button', href: '/component/button' },
                    { title: 'Button Group', slug: 'button-group', href: '/component/button-group' },
                    { title: 'Calendar', slug: 'calendar', href: '/component/calendar' },
                    { title: 'Card', slug: 'card', href: '/component/card' },
                    { title: 'Checkbox', slug: 'checkbox', href: '/component/checkbox' },
                    { title: 'Collapsible', slug: 'collapsible', href: '/component/collapsible' },
                    { title: 'Combobox', slug: 'combobox', href: '/component/combobox' },
                    { title: 'Data Table', slug: 'data-table', href: '/component/data-table' },
                    { title: 'Date Picker', slug: 'date-picker', href: '/component/date-picker' },
                    { title: 'Dialog', slug: 'dialog', href: '/component/dialog' },
                    { title: 'Dropdown Menu', slug: 'dropdown-menu', href: '/component/dropdown-menu' },
                    { title: 'Form', slug: 'form', href: '/component/form' },
                    { title: 'Input Mask', slug: 'input-mask', href: '/component/input-mask' },
                    { title: 'Input OTP', slug: 'input-otp', href: '/component/input-otp' },
                    { title: 'Pagination', slug: 'pagination', href: '/component/pagination' },
                    { title: 'Popover', slug: 'popover', href: '/component/popover' },
                    { title: 'Radio Group', slug: 'radio-group', href: '/component/radio-group' },
                    { title: 'Select', slug: 'select', href: '/component/select' },
                    { title: 'Sheet', slug: 'sheet', href: '/component/sheet' },
                    { title: 'Sonner', slug: 'sonner', href: '/component/sonner' },
                    { title: 'Switch', slug: 'switch', href: '/component/switch' },
                    { title: 'Table', slug: 'table', href: '/component/table' },
                    { title: 'Tabs', slug: 'tabs', href: '/component/tabs' },
                    { title: 'Textarea', slug: 'textarea', href: '/component/textarea' },
                    { title: 'Tooltip', slug: 'tooltip', href: '/component/tooltip' },
                ],
            },
            {
                type: 'collapsible',
                title: 'Showcase',
                slug: 'showcase',
                icon: SparklesIcon,
                children: [
                    { title: 'SaaS Launch Stack', slug: 'saas-launch-stack', href: '/showcase/saas-launch-stack' },
                    { title: 'Product Waitlist Funnel', slug: 'product-waitlist-funnel', href: '/showcase/product-waitlist-funnel' },
                ],
            },
            {
                type: 'collapsible',
                title: 'Blocks',
                slug: 'blocks',
                icon: Layout01Icon,
                children: [
                    { title: 'Announcement', slug: 'announcement', href: '/blocks/announcement' },
                    { title: 'Auth', slug: 'auth', href: '/blocks/auth' },
                    { title: 'Bento', slug: 'bento', href: '/blocks/bento' },
                    { title: 'Blog', slug: 'blog', href: '/blocks/blog' },
                    { title: 'Career', slug: 'career', href: '/blocks/career' },
                    { title: 'Contact', slug: 'contact', href: '/blocks/contact' },
                    { title: 'CTA', slug: 'cta', href: '/blocks/cta' },
                    { title: 'Error', slug: 'error', href: '/blocks/error' },
                    { title: 'FAQ', slug: 'faq', href: '/blocks/faq' },
                    { title: 'Feature', slug: 'feature', href: '/blocks/feature' },
                    { title: 'File-upload', slug: 'file-upload', href: '/blocks/file-upload' },
                    { title: 'Footer', slug: 'footer', href: '/blocks/footer' },
                    { title: 'Hero', slug: 'hero', href: '/blocks/hero' },
                    { title: 'Integrations', slug: 'integrations', href: '/blocks/integrations' },
                    { title: 'Navigation', slug: 'navigation', href: '/blocks/navigation' },
                    { title: 'Newsletter', slug: 'newsletter', href: '/blocks/newsletter' },
                    { title: 'Notification', slug: 'notification', href: '/blocks/notification' },
                    { title: 'Pricing', slug: 'pricing', href: '/blocks/pricing' },
                    { title: 'Stats', slug: 'stats', href: '/blocks/stats' },
                    { title: 'Team', slug: 'team', href: '/blocks/team' },
                    { title: 'Testimonials', slug: 'testimonials', href: '/blocks/testimonials' },
                    { title: 'Widget', slug: 'widget', href: '/blocks/widget' },
                ],
            },
            { type: 'link', title: 'Dashboards', slug: 'dashboards', href: '/dashboards', icon: DashboardSquare01Icon },
            { type: 'link', title: 'Templates', slug: 'templates', href: '/templates', icon: Layout01Icon },
        ],
    },
    {
        items: [{ type: 'flyout', title: 'Legal', slug: 'legal', icon: AuctionIcon }],
    },
];

/**
 * Helper function for Header Breadcrumbs.
 * Resolves current URL pathname (e.g. "/animated/accordion") into titles ["Animated", "Accordion"]
 */
export function getBreadcrumbItems(pathname: string): { title: string; href?: string }[] {
    const breadcrumbs: { title: string; href?: string }[] = [];

    for (const group of navigationData) {
        for (const item of group.items) {
            if (item.type === 'link' && item.href === pathname) {
                return [{ title: item.title, href: item.href }];
            }

            if (item.type === 'collapsible') {
                const matchedChild = item.children.find((child) => child.href === pathname);
                if (matchedChild) {
                    return [
                        { title: item.title }, // Section Parent (e.g., "Animated")
                        { title: matchedChild.title, href: matchedChild.href }, // Child Page (e.g., "Accordion")
                    ];
                }
            }
        }
    }

    // Fallback for unmatched URLs
    const fallbackSegments = pathname.split('/').filter(Boolean);
    return fallbackSegments.map((segment) => ({
        title: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
    }));
}