import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import Cricle from "../components/Cricle"
import CutCornerButton from "../components/CutCornerButton"
import Hexagon from "../components/Hexagon"


function HeroSection() {
  const icosahedronRef = useRef(null)
  const cubeRef = useRef(null)
  const torusRef = useRef(null)
  const cuboidRef = useRef(null)


  // torus animation
  const { scrollYProgress: cuboidScrollYProgress } = useScroll({
    target: cuboidRef,
    offset: ['start end', 'end start']
  })
  const cuboidRotate = useTransform(cuboidScrollYProgress, [0, 1], [20, -20])


  // torus animation
  const { scrollYProgress: torusScrollYProgress } = useScroll({
    target: torusRef,
    offset: ['start end', 'end start']
  })
  const torusRotate = useTransform(torusScrollYProgress, [0, 1], [20, -20])

  // cube animation
  const { scrollYProgress: cubeScrollYProgress } = useScroll({
    target: cubeRef,
    offset: ['start end', 'end start']
  })
  const cubeRotate = useTransform(cubeScrollYProgress, [0, 1], [100, -45])

  // icosahedron animation
  const { scrollYProgress } = useScroll({
    target: icosahedronRef,
    offset: ['start end', 'end start']
  })
  const icosahedronRotate = useTransform(scrollYProgress, [0, 1], [30, -45])

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
              <Hexagon className="size-[1100px]" size={1100} speed={25}/>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
              <Hexagon className="size-[1800px]" size={1800} reverse={true}/>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
              <Cricle className="absolute left-[200px] -top-[900px]" animate={true}>
                <motion.img ref={cubeRef} style={{ rotate: cubeRotate }}  src="./assets/images/cube.png" alt="cube 3D image" className="size-[140px]" />
              </Cricle>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
              <Cricle className="absolute left-[200px] top-[270px]" animate={true} reverse={true} speed={20}>
                <motion.img ref={cuboidRef} style={{rotate:cuboidRotate}} src="./assets/images/cuboid.png" alt="Cuboid 3D image" className="size-[140px]" />
              </Cricle>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
              <Cricle className="absolute -left-[600px] -top-[80px]" animate={true} speed={25}>
                <motion.img ref={torusRef} style={{ rotate: torusRotate }} src="./assets/images/torus.png" alt="Torus 3D image" className="size-[140px]" />
              </Cricle>
            </div>
            <motion.div className="inline-flex" style={{ rotate: icosahedronRotate }} ref={icosahedronRef}>
              <img src="./assets/images/icosahedron.png" className="absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 saturate-[10%] brightness-[4%] hue-rotate-[240deg]" />
              <img src="./assets/images/icosahedron.png" alt="Icosahedron 3D Image" className="w-[500px]" />
            </motion.div>
          </div>
        </div>
        <div className="flex items-center flex-col mt-40 md:mt-80 gap-4">
          <div className="h-10 w-5 outline-[6px] outline-fuchsia-500/10 inline-flex justify-center pt-2 rounded-full">
            <motion.div 
              animate={{
                translateY: 12,
                opacity: 0.2,
              }}
              transition={{
                duration:2,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'loop'
              }}
            className="h-3 w-1 bg-fuchsia-500 rounded-full"></motion.div>
          </div>
          <p className="uppercase text-zinc-500 font-extrabold tracking-wider">Scroll to learn more</p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection