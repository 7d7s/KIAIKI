import React from "react";
import ImageSlider from "@/components/common/sliderComponent";

const sliderImages = [
    {
        src: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744446151/partner_luhhqg.png",
        alt: "Best Award 2020",
        className: "",
    },
    {
        src: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744446150/partner3_mmls9b.png",
        alt: "Future Design Award",
        className: "",
    },
    {
        src: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744446150/partner4_yl9rmn.png",
        alt: "2020 Excellence Award",
        className: "",
    },
    {
        src: "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744446150/partner1_bacgns.png",
        alt: "2020 Excellence Award",
        className: "",
    },
];

const TrustedPartners: React.FC = () => {
    return (
        <div className="bg-white py-28 hidden md:block overflow-hidden">
            <div className="container mx-auto grid md:grid-cols-3 gap-5 justify-evenly items-center md:px-12 px-4" data-aos="fade-up">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold text-black">
                        Trusted By <span className="bg-primary-givry px-1 font-bold">1542 +</span>
                        <br />
                        Partners
                    </h3>
                </div>

                <div className="md:col-span-2">
                    <ImageSlider items={sliderImages} />
                </div>
            </div>
        </div>
    );
};

export default TrustedPartners;