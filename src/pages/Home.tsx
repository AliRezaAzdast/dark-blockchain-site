import FeaturesCardsSection from "../sections/FeaturesCardsSection"
import FeaturesGridSection from "../sections/FeaturesGridSection"

import HeroSection from "../sections/HeroSection"
import LatestPostsSection from "../sections/LatestPostsSection"

import data from "../content.generated.json";
import TestimonialsSection from "../sections/TestimonialsSection"
import CallToActionSection from "../sections/CallToActionSection"


function Home() {
    const posts = data.blog;
    const latestPosts = posts
  .map(post => ({ ...post, pubDate: new Date(post.pubDate) }))
  .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime()).slice(0, 4);
    return (
        <>

            <HeroSection />
            <FeaturesCardsSection />
            <FeaturesGridSection />
            <LatestPostsSection latestPosts={latestPosts}/>
            <TestimonialsSection/>
            <CallToActionSection/>

        </>
    )
}

export default Home