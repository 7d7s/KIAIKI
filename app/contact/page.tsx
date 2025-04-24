import DynamicBanner from '@/components/common/banner'
import AddressSection from '@/components/layout/contact/address'
import React from 'react'

function page() {
  return (
    <>
           <DynamicBanner
  imageUrl="https://res.cloudinary.com/ddgbehuxg/image/upload/v1745220686/aboutbanner_scvogx.avif"
  altText="About Banner"
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" }
  ]} title="Contact Us"
/>
      <AddressSection/>
    </>
  )
}

export default page
