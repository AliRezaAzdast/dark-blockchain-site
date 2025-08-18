import type { ComponentPropsWithoutRef } from "react"
import { twMerge } from "tailwind-merge"
import { motion } from "motion/react"


function Cricle(props: ComponentPropsWithoutRef<'div'> & { animate?: boolean, reverse?: boolean, speed?: number }) {
    const { className, children, animate = false, reverse= false, speed= 15 } = props
    return (
        <div className={twMerge('relative bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full', className)}>
            <motion.div
                animate={animate && {
                    rotate: reverse ? -360 : 360,
                }}
                transition={{
                    ease: 'linear',
                    duration: speed,
                    repeat: Infinity
                }}
                className={twMerge("absolute inset-0 rounded-full outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10 ", animate  && 'border-[6px] border-transparent border-t-fuchsia-500/30')}></motion.div>
            {children}
        </div>
    )
}

export default Cricle