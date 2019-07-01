import React from 'react'
import { PageHeader } from 'antd'

const styles = {
  pageHeaderContainer: {
    border: '1px solid #D9D9D9',
    marginBottom: 10,
  }
}

export default () => (
  <PageHeader 
    style={styles.pageHeaderContainer} 
    title="OpenTable" 
    subTitle="Find restaurants near you" 
  />
)
