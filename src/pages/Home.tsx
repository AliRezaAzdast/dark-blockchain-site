import FeaturesCardsSection from "../sections/FeaturesCardsSection"
import FeaturesGridSection from "../sections/FeaturesGridSection"
import HeaderSection from "../sections/HeaderSection"
import HeroSection from "../sections/HeroSection"
import LatestPostsSection from "../sections/LatestPostsSection"

import data from "../content.generated.json";

function Home() {
    const posts = data.blog;
    const latestPosts = posts
  .map(post => ({ ...post, pubDate: new Date(post.pubDate) }))
  .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime()).slice(0, 4);
    return (
        <>
            <HeaderSection />
            <HeroSection />
            <FeaturesCardsSection />
            <FeaturesGridSection />
            <LatestPostsSection latestPosts={latestPosts}/>
        </>
    )
}

export default Home