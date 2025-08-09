import type { ComponentPropsWithoutRef } from "react"
import { twMerge } from 'tailwind-merge'


function CutCornerButton(props: ComponentPropsWithoutRef<'button'>) {
    const { className, children } = props
    return (
        <button className={twMerge('relative cursor-pointer bg-fuchsia-500/20 px-4 py-2 font-extrabold uppercase font-heading text-sm tracking-wide', className)}>
            <div className="absolute inset-0 outline-2 -outline-offset-2 outline-fuchsia-500"
                style={{
                    maskImage: 'linear-gradient(225deg, transparent, transparent 10px, black 10px)',
                    WebkitMaskImage: 'linear-gradient(225deg, transparent, transparent 10px, black 10px)'
                }}></div>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 right-0 text-fuchsia-500"
            >
                <path
                    d="M0 1H12.2667L23 11.7333V24"
                    stroke="currentColor"
                    stroke-width="2"
                ></path>
            </svg>
            <span className="leading-6">{children}</span>
        </button>
    )
}

export default CutCornerButton