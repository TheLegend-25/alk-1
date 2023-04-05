import styles from './styles.module.css';
import classNames from "classnames";
import { useState } from "react";

export const ColorPicker = () => {
    const [pickedColor, setPickedColor] = useState("red"); // green, blue

    return <div>
        {/*<div className={classNames(styles.box)} style={{ backgroundColor: pickedColor }} />*/}
        <div className={classNames(styles.box, {
            [styles.redBox]: pickedColor === "red",
            [styles.blueBox]: pickedColor === "blue",
            [styles.greenBox]: pickedColor === "green"
        })} />

        <div>
            <button onClick={() => {setPickedColor("red")}}>Red</button>
            <button onClick={() => {setPickedColor("green")}}>Green</button>
            <button onClick={() => {setPickedColor("blue")}}>Blue</button>
        </div>
    </div>
}