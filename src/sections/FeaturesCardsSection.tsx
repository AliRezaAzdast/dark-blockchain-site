import { useEffect, useState } from "react"
import Card from "../components/Card"
import { twMerge } from "tailwind-merge"
import { div } from "motion/react-client"
const cardData = [
    { id: 1, image: '/assets/images/pill.png', title: 'Revolutionary Blockchain API', description: 'Effortlsesly integrate and manage blockchain data with out cuting ege Api, designed for seamless connectivity.', color: 'fuchsia' },
    { id: 2, image: '/assets/images/cuboid.png', title: 'Decentralized Data Solution', description: 'Empower your application with decentralized data solution ensuring security and transparency at everystep.', color: 'lime' },
    { id: 3, image: '/assets/images/cone.png', title: 'Next-Gen Smart Contracts', description: 'Unlock the potential of nect-gen smart contract with our robust and scalable API, tailord for modern blockchain needs.', color: 'cyan' },
    { id: 1, image: '/assets/images/icosahedron.png', title: 'Seamless Blockchain Integration', description: 'Integrate blockchain technology seamlessly into your projects, with minimal effort and maximum efficiency.', color: 'violet' },
]

function FeaturesCardsSection() {
    const [selecterCardIndex, setSelecterCardIndex] = useState(0)
    const [isHoverd, setIsHoverd] = useState(false)

    useEffect(() => {
        if (isHoverd) return;
        const timeout = setTimeout(() => {
            setSelecterCardIndex(curr => curr === cardData.length - 1 ? 0 : curr + 1)
        }, 3000)
        return () => {
            clearTimeout(timeout)
        }
    }, [selecterCardIndex, isHoverd])
    return (
        <section className="py-24 overflow-x-clip md:-mt-28">
            <div className="my-container">
                <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">Discover the future of blockchain with Blockforge</h2>
                <div className="mt-36 lg:mt-48 flex">
                    <div className="flex flex-none gap-8">
                        {cardData.map(({ image, title, description, color }) => (
                            <div
                                className="inline-flex transition-all duration-500 "
                                onMouseEnter={() => { setIsHoverd(true) }}
                                onMouseLeave={() => { setIsHoverd(false) }}
                                style={{
                                    transform: `translateX(calc((-100% - 2rem) * ${selecterCardIndex}))`
                                }}>
                                <Card key={title} className="max-w-xs md:max-w-md" color={color} >
                                    <div className="flex justify-center -mt-28">
                                        <div className="inline-flex relative">
                                            <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                                            <img src={image} alt="pill image" className="size-40 group-hover:-translate-y-8 transition duration-300" />
                                        </div>
                                    </div>
                                    <h3 className="font-heading font-black text-3xl mt-12">{title}</h3>
                                    <p className="text-lg text-zinc-400 mt-4">{description}</p>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-10 ">
                    <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
                        {cardData.map(({ title }, cardIndex) => (
                            <div key={title} className={twMerge("size-2.5 bg-zinc-500 cursor-pointer rounded-full", selecterCardIndex === cardIndex && 'bg-zinc-300')}
                                onClick={() => { setSelecterCardIndex(cardIndex) }}
                            >

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesCardsSection