import React from 'react'

import styles from './PromoBar.module.css';

const PromoBar = () => {
  return (
    <div className='flex-md-row' id={styles.promoBar}>
        <p id={styles.announcementTitle}>📎 new season = new content: </p>
        <p id={styles.announcementDesc}>explore our autumn drop</p>
    </div>
  )
}

export default PromoBar