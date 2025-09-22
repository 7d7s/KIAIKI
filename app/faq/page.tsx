import DynamicBanner from "@/components/common/banner";
import ConsultationCTA from "@/components/common/consultationCTA";
import Faq from "@/components/common/faq";

const Faqs = () => {
    return <div>
        <DynamicBanner
            imageUrl="https://res.cloudinary.com/ddgbehuxg/image/upload/v1745220686/servicsbanner_xlpyji.avif"
            altText="Faq Banner"
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Faq", href: "/faq" }
            ]} title="FAQ"
        />
        <Faq />
        <ConsultationCTA />
    </div>;
};
export default Faqs;
