import Card from "../components/Card"


function LatestPostsSection(props: {
    latestPosts: any
}) {
    const { latestPosts } = props
    return (
        <section className="py-60">
            <div className="my-container">
                <h2 className="font-heading font-black text-4xl text-center">Your portal to everything blockchain.</h2>
                <p className="text-xl text-center text-zinc-400 mt-8">keep up with the newst trends, updates, and insights in the blockchain world, updated weekly</p>
                <div className="mt-16 flex flex-col gap-32">
                    {latestPosts.map(({ title, description, category }, postIndex) => (
                        <Card key={postIndex} buttonText="Read More">
                            <div className="px-3 py-1.5 uppercase font-heading font-extrabold tracking-wider text-xs bg-fuchsia-500/15 text-fuchsia-500 inline-flex rounded-full">{category}</div>
                            <h3 className="font-heading font-black text-3xl mt-4 ">{title}</h3>
                            <p className="text-lg text-zinc-400 mt-6">{description}</p>
                        </Card>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default LatestPostsSection