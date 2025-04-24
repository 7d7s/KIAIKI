import DynamicBanner from '@/components/common/banner'
import ConsultationSection from '@/components/layout/contact/consultationSection'
import Faq from '@/components/layout/faq'
import React from 'react'

const Page: React.FC = () => {
  return (
    <>
    <DynamicBanner
  imageUrl="https://res.cloudinary.com/ddgbehuxg/image/upload/v1745220686/contactbanner_l1h4u4.avif"
  altText="FAQs Banner"
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "FAQs", href: "/faqs" }
  ]} title="Our Frequently Asked Questions"
/>
      <Faq/>
      <ConsultationSection/>
    </>
  )
}

export default Page
