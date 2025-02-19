import React from 'react'
import { InfoIntro } from '../components/Informacion/InfoIntro'
import style from '../pages/Home.module.css'


export const Info = () => {
    return (
        <div className={style.ContainerHome}>
            <InfoIntro />
        </div>
    )
}