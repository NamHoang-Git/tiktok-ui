import { useEffect, useState } from "react";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import avatar from "~/assets/images/tak.jpg";
import Menu from "~/components/Popper/Menu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAddressBook,
    faCircleQuestion,
    faCircleXmark,
    faCloudArrowUp,
    faCoins,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faLanguage,
    faMagnifyingGlass,
    faRightFromBracket,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import { faBell, faComments } from "@fortawesome/free-regular-svg-icons";

import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: "English",
        children: {
            title: "Language",
            data: [
                {
                    type: "language",
                    code: "en",
                    title: "English", // United States, Canada, Australia, etc.
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Tiếng Việt", // Vietnam
                },
                {
                    type: "language",
                    code: "fi",
                    title: "Suomi", // Finland
                },
                {
                    type: "language",
                    code: "no",
                    title: "Norsk", // Norway
                },
                {
                    type: "language",
                    code: "se",
                    title: "Svenska", // Sweden
                },
                {
                    type: "language",
                    code: "dk",
                    title: "Dansk", // Denmark
                },
                {
                    type: "language",
                    code: "ch",
                    title: "Schweizerdeutsch", // Switzerland (Swiss German)
                },
                {
                    type: "language",
                    code: "nl",
                    title: "Nederlands", // Netherlands
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedback and Help",
        to: "/feedback",
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcuts",
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    // Handle Logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case "language":
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faAddressBook} />,
            title: "View Profile",
            to: "/@namhoang",
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: "Get Coins",
            to: "/coin",
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: "Settings",
            to: "/setting",
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: "Log out",
            to: "/logout",
            separate: true,
        },
    ];

    return (
        <header className={cx("wrapper")}>
            <div className={cx("content")}>
                <div className={cx("logo")}>
                    <img src={images.logo} alt="TikTok" />
                </div>

                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx("search-title")}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx("search")}>
                        <input placeholder="Search accounts and videos" spellCheck="false" />
                        <button className={cx("clear")}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

                        <button className={cx("search-btn")}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx("actions")}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx("action-btn")}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                                <button className={cx("action-btn")}>
                                    <FontAwesomeIcon icon={faComments} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Notifications" placement="bottom">
                                <button className={cx("action-btn")}>
                                    <FontAwesomeIcon icon={faBell} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img className={cx("user-avatar")} src={avatar} alt="NamHoang" />
                        ) : (
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
