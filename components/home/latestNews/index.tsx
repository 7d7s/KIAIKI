import ArticleCard from '@/components/common/cards/articalCard';

const articles = [
    {
      category: 'Insight',
      title: '8 Best Affordable Bathroom Remodel Ideas For Style On A Budget',
      description:
        'Transform your bathroom without breaking the bank. Discover smart, stylish, and cost-effective remodeling tips to elevate your space while staying on a budget.',
      image: 'https://res.cloudinary.com/ddgbehuxg/image/upload/v1744614055/about9_w9y8zq.avif',
      link: '#',
    },
    {
      category: 'Furniture',
      title: '12 Best Outdoor Furniture Ideas For Cozy Backyard Living',
      description:
        'Upgrade your backyard with stylish outdoor furniture ideas that offer comfort, charm, and functionality perfect for relaxing or entertaining guests in any season.',
      image: 'https://res.cloudinary.com/ddgbehuxg/image/upload/v1744613650/home1_n7sbcy.avif',
      link: '#',
    },
    {
      category: 'Interior',
      title: 'Top 13 Luxury Home Décor Ideas For A High-End Interior',
      description:
        'Explore elegant home décor ideas that bring luxury into every corner of your interior. From textures to tones, create a high-end aesthetic with ease.',
      image: 'https://res.cloudinary.com/ddgbehuxg/image/upload/v1744613358/about1_ubg762.avif',
      link: '#',
    },
  ];

const LatestNews: React.FC = () => {
  return (
    <section className=" bg-white text-black">
        <div className="container mx-auto px-4 lg:px-16 md:py-20 py-5">
        <div className='flex items-center justify-center flex-col' data-aos="fade-up" data-aos-delay="500">
        <p className="text-sm tracking-widest text-primary-accent uppercase">Our Blog</p>
        <h2 className="text-3xl font-bold mt-5">
        Latest  <span className="pl-1 text-black bg-transparent bg-[linear-gradient(270deg,transparent_54%,#EBD1AE_53%)] ms-2"> News </span> and Articles
      </h2>
        <p className="mt-5 text-gray-500 max-w-xl">
        Stay updated with our latest insights, tips, and expert advice on design, decor, and innovation. Discover trending topics and fresh ideas to inspire your next home or lifestyle upgrade.
      </p>
        </div>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10 " data-aos="fade-up" data-aos-delay="200">
      {articles.map((article, i) => (
        <ArticleCard key={i} {...article} />
      ))}
    </div>
    </div>
    </section>
  );
}

export default LatestNews;