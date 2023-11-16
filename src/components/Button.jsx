import Fa from "solid-fa";
import Styles from "./Button.module.scss";

const isModifiedEvent = (event) =>
    !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

const Button = (props) => {
    const handleClick = (e) => {
        if (!props.onClick) return;

        if (isModifiedEvent(e)) return;

        e.preventDefault();
        props.onClick();
    };

    return (
        <li class={Styles.Button}>
            <a href={props.href} onClick={handleClick}>
                <Fa icon={props.icon} />
                <span>{props.label}</span>
            </a>
        </li>
    );
};
export default Button;