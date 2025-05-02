import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img
                className={cx("avatar")}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/88b8dd546230d24b27c670b4d2dd4d7d~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=ce3f2a6f&x-expires=1746288000&x-signature=aAbSNJgZJTOP6qdp9tdlz6ZjMag%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                alt=""
            />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>Nam Hoang</span>
                    <FontAwesomeIcon className={cx("check")} icon={faCircleCheck} />
                </h4>
                <span className={cx("user-name")}>namhoang68</span>
            </div>
        </div>
    );
}

export default AccountItem;
