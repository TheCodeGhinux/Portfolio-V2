import React, { CSSProperties, ReactNode } from 'react'
import './layout.css'

interface LayoutProps {
  children: ReactNode
  style?: CSSProperties
}

const Layout = ({ children, style }: LayoutProps) => {
  return (
    <div className='layout' style={style}>
      {children}
      {/* <Footer />  */}
    </div>
  )
}

export default Layout
