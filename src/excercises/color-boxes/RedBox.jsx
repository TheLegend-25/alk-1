import styles from './box.module.css'
import classNames from "classnames";

export const RedBox = () => {
    return <div className={classNames(styles.boxSize, styles.redBox)} />
}