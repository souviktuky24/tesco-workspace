import React from 'react';
import styles from './modalview.module.scss'
import _isEmpty from 'lodash/isEmpty';
const nully = () => null;
function Modal({
    Header = nully,
    Body = nully,
    headerProps = {},
    bodyProps = {},
    headerContainerStyle = {},
    bodyContainerStyle = {},
    ...rest}) {
    return (
        <>
        <div className={styles.header} style={!_isEmpty(headerContainerStyle) ? headerContainerStyle : {}}>
        <Header {...headerProps} />
        </div>
        
        <br />
        <div className={styles.body} style={!_isEmpty(bodyContainerStyle) ? bodyContainerStyle : {}}>
        <Body {...bodyProps} />
        </div>
        
        </>
    )
}

export default React.memo(Modal)