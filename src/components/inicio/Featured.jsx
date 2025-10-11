import React from 'react'
import styles from './Pro.module.css'
import { FaArrowDown } from "react-icons/fa";

export const Featured = () => {
  return (
    <div className="my-4">
      <p className={styles.destacados}>Destacados</p>
      <FaArrowDown className={styles.destacadosarrow} />
    </div>
  )
}