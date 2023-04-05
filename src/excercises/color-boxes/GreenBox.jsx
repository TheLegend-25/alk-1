import styles from './box.module.css'
import classNames from "classnames";
import {useState} from "react";

export const GreenBox = () => {
    const [isWide, setIsWide] = useState(false)
    return <div>
        <div className={classNames(styles.boxSize, styles.greenBox, {
            [styles.boxWide]: isWide,
        })}/>
        <button onClick={() => setIsWide(!isWide)}>Wide toggle</button>
    </div>
}