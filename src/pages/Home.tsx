import FeaturesCardsSection from "../sections/FeaturesCardsSection"
import FeaturesGridSection from "../sections/FeaturesGridSection"
import HeaderSection from "../sections/HeaderSection"
import HeroSection from "../sections/HeroSection"

function Home() {
    return (
        <>
            <HeaderSection />
            <HeroSection/>
            <FeaturesCardsSection/>
            <FeaturesGridSection/>
        </>
    )
}

export default Home