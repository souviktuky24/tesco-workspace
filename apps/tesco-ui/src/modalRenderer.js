import React, { useState } from 'react';
import Modal from './modal';
import styles from './modalview.module.scss';
import PropTypes from 'proptypes';
function ModalView({
    Component = Modal,
    ...rest}) {
        const [isVisible, updateIsVisible] = useState(true)
    return (
        <div className={styles.parent} onClick={() => {
            updateIsVisible(false)
        }}>
            {
                isVisible && (
                    <div className={styles.modal}>
                        <Component {...rest} />
                    </div>
                )
            }
        </div>
    )
}

ModalView.propTypes = {
    Component: PropTypes.func
}

export default ModalView;
