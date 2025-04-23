import AboutInterse from '@/components/layout/about/aboutInterse'
import AwardWinning from '@/components/layout/AwardWin/index'
import DynamicBanner from '@/components/common/banner'
import ProcessSection from '@/components/layout/process'
import Project from '@/components/layout/project'
import WhyChooseUsSection from '@/components/layout/whychooseus'
import React from 'react'

function page() {
  return (
    <>
               <DynamicBanner
  imageUrl="https://res.cloudinary.com/ddgbehuxg/image/upload/v1745220874/details_pgtyvp.avif"
  altText="About Banner"
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "Project ", href: "/project" }
  ]} title="Our Project"
/>
      <Project />
      <AwardWinning />
      <ProcessSection />
      <WhyChooseUsSection />
      <AboutInterse />
    </>
  )
}

export default page
