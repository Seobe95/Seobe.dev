import Header from '../components/base/Header'
import Footer from '../components/base/Footer'
import { ComponentType } from 'react'

export default function withHeaderFooter(WrappedComponent: ComponentType<any>) {
  return function WithHeaderFooter(props: any) {
    return (
      <>
        <Header />
        <WrappedComponent {...props} />
        <Footer />
      </>
    )
  }
}