export interface PagesArray {
    name: string;
    link: string;
    activeIndex: number;
    selectedIndex?: number;
}

export const pageList: PagesArray[] = [
    {name: "Home", link: "/", activeIndex: 0},
    {name: "Services", link: "/services", activeIndex: 1},
    {name: "The Revolution", link: "/revolution", activeIndex: 2},
    {name: "About Us", link: "/about", activeIndex: 3},
    {name: "Contact Us", link: "/contact", activeIndex: 4},
    {name: "Free Estimate", link: "/estimate", activeIndex: 5},
];

export const menuOptions: PagesArray[] = [
    {name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0},
    {
        name: "Custom Software Development",
        link: "/customsoftware",
        activeIndex: 1,
        selectedIndex: 1,
    },
    {
        name: "iOS/Android Apps Development",
        link: "/mobileapps",
        activeIndex: 1,
        selectedIndex: 2,
    },
    {
        name: "Website Development",
        link: "/websites",
        activeIndex: 1,
        selectedIndex: 3,
    },
];
