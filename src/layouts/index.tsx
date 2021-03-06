import React from 'react'
import 'antd/dist/antd.css'
import { renderRoutes, RouteConfig } from 'react-router-config'

import styles from './style/index.module.less'
import { Layout } from 'antd'

import NavHeader from './NavHeader'

const Content = Layout.Content

type MainProps = RouteConfig

type PropsExtra = MainProps
const Main: React.FC<PropsExtra> = (props) => {
  console.log('props', props);
  
  return (
    <Layout className={styles['main-page']}>
      <NavHeader />
      <Layout>
        <Content className={'content-wrap'}>{renderRoutes(props.route.routes)}</Content>
      </Layout>
    </Layout>
  )
}
export default Main
