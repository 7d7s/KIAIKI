import AboutInterse from '@/components/layout/about/aboutInterse'
import AwardWinning from '@/components/layout/AwardWin'
import DynamicBanner from '@/components/common/banner'
import Contact from '@/components/layout/contact'
import NewSection from '@/components/layout/news'
import Team from '@/components/layout/team'
import React from 'react'

function page() {
  return (
    <div>
       <DynamicBanner
  imageUrl="https://res.cloudinary.com/ddgbehuxg/image/upload/v1745220686/aboutbanner_scvogx.avif"
  altText="About Banner"
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "About", href: "/about" }
  ]} title="About Us"
/>
      <AboutInterse/>
      <AwardWinning/>
      <Team/>
      <Contact/>
      <NewSection/>
    </div>
  )
}

export default page
