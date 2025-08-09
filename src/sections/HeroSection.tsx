import Cricle from "../components/Cricle"
import CutCornerButton from "../components/CutCornerButton"
import Hexagon from "../components/Hexagon"


function HeroSection() {
  return (
    <section className="py-24 md:py-52 overflow-clip">
      <div className="my-container">
        <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">Introducing Blockforge</p>
        <h1 className="font-heading font-black max-w-2xl mx-auto text-5xl md:text-6xl lg:text-7xl text-center mt-4">The Futur of blockchain is here</h1>
        <p className="text-center mx-auto text-xl md:text-2xl max-w-xl mt-6 text-zinc-400">Blockforge is pioneering smart contract integrity with cutting age data solution</p>
        <div className="flex justify-center mt-10">
          <CutCornerButton children={'Get Started'} className="" />
        </div>
        <div className="flex justify-center">
          <div className="inline-flex mt-24 relative z-0">
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
              <Hexagon className="size-[1100px]" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
              <Hexagon className="size-[1800px]" />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
              <Cricle className="absolute left-[200px] -top-[900px]">
                <img src="./assets/images/cube.png" alt="cube 3D image" className="size-[140px]" />
              </Cricle>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
              <Cricle className="absolute left-[200px] top-[270px]">
                <img src="./assets/images/cuboid.png" alt="Cuboid 3D image" className="size-[140px]" />
              </Cricle>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
              <Cricle className="absolute -left-[600px] -top-[80px]">
                <img src="./assets/images/torus.png" alt="Torus 3D image" className="size-[140px]" />
              </Cricle>
            </div>
            <img src="./assets/images/icosahedron.png" className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 saturate-[10%] brightness-[4%] hue-rotate-[240deg]" />
            <img src="./assets/images/icosahedron.png" alt="Icosahedron 3D Image" className="w-[500px]" />
          </div>
        </div>
        <div className="flex items-center flex-col mt-40 md:mt-80 gap-4">
          <div className="h-10 w-5 outline-[6px] outline-fuchsia-500/10 inline-flex justify-center pt-2 rounded-full">
            <div className="h-3 w-1 bg-fuchsia-500 rounded-full"></div>
          </div>
          <p className="uppercase text-zinc-500 font-extrabold tracking-wider">Scroll to learn more</p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection