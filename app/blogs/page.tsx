import BlogSection from '@/components/layout/blog'
import DynamicBanner from '@/components/common/banner'
import React from 'react'

function page() {
  return (
    <>
           <DynamicBanner
  imageUrl="https://res.cloudinary.com/ddgbehuxg/image/upload/v1745220686/blogbanner_vcovuz.avif"
  altText="About Banner"
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blogs" }
  ]} title="Our Blogs"
/>
     <BlogSection/> 
    </>
  )
}

export default page
