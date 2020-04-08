import React from 'react'
import styled from 'styled-components'
import { Header } from '../components/Header'
import styles from './home.css'

export default function() {
  return (
    <div className={styles.normal}>
      <Header title="Bookshelf | 书架" />
      <Content>练功房脚手架</Content>
    </div>
  )
}

const Content = styled.div`
  min-height: calc(100vh - (56px + 50px));
`
