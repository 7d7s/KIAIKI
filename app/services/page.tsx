import DynamicBanner from '@/components/common/banner'
import Services from '@/components/home/service'
import ConsultationCTA from '@/components/common/consultationCTA'
import Faq from '@/components/common/faq'
import React from 'react'

function page() {
  return (
    <>
      <DynamicBanner
        imageUrl="https://res.cloudinary.com/ddgbehuxg/image/upload/v1745220686/servicsbanner_xlpyji.avif"
        altText="About Banner"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" }
        ]} title="Our Services"
      />
      <Services />
      <Faq />
      <ConsultationCTA />
    </>
  )
}

export default page
