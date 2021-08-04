export declare const links: ({
    label: string;
    icon: string;
    href: string;
    items?: undefined;
    calloutClass?: undefined;
} | {
    label: string;
    icon: string;
    items: ({
        label: string;
        href: string;
        target: string;
    } | {
        label: string;
        href: string;
        target?: undefined;
    })[];
    href?: undefined;
    calloutClass?: undefined;
} | {
    label: string;
    icon: string;
    href: string;
    calloutClass: string;
    items?: undefined;
} | {
    label: string;
    icon: string;
    items: ({
        label: string;
        href: string;
        cycleType: string;
    } | {
        label: string;
        href: string;
        cycleType?: undefined;
    })[];
    href?: undefined;
    calloutClass?: undefined;
})[];
export declare const socials: ({
    label: string;
    icon: string;
    items: {
        channel: {
            icon: string;
            label: string;
            href: string;
        };
        chats: {
            icon: string;
            label: string;
            href: string;
        }[];
    };
    href?: undefined;
} | {
    label: string;
    icon: string;
    href: string;
    items?: undefined;
})[];
export declare const footerTitle = "Last top deals";
export declare const deals: {
    dealName: string;
    dealDate: string;
    coupleFirst: string;
    coupleLast: string;
    dealValue: number;
}[];
export declare const BSWPriceLabel = "BSW";
export declare const BSWPriceValue = 1234.947;
export declare const footerStatistic: {
    label: string;
    value: number;
}[];
export declare const aboutLinks: {
    label: string;
    href: string;
}[];
export declare const productLinks: {
    label: string;
    href: string;
}[];
export declare const serviceLinks: {
    label: string;
    href: string;
}[];
export declare const pendingTransactions = 2;
export declare const MENU_HEIGHT = 72;
export declare const MENU_HEIGHT_MOBILE = 64;
export declare const MENU_ENTRY_HEIGHT = 48;
export declare const SIDEBAR_WIDTH_FULL = 224;
export declare const SIDEBAR_WIDTH_REDUCED = 74;
