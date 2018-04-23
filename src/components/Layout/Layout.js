import React from 'react'
import Header from '../Header/Header'
import Main from '../../containers/Main';
import Styles from './Layout.css'

const Layout = () => {
  return (
    <div>
        <Header className={Styles.header} />
        <Main className={Styles.main} />
    </div>
  )
}

export default Layout
