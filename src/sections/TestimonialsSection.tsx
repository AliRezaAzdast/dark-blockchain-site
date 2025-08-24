import React from 'react'
import { twMerge } from 'tailwind-merge'
import { motion } from "motion/react"

const testimonial = [
    {text: 'The user experience is phenomenal, and th support team isalways there to help. Highly recommended!', name:'Erica Wyatt', title: 'Product Manager - BlockLink', avatarimage:'/assets/images/avatar-erica-wyatt.jpg'},
    {text:'Our productivity has skyrocketed since we started using Blockforge. It\'s a game-changer for our team.', name:'Noel Baldwin', title:'Lead Developer - BitBridge', avatarimage:'/assets/images/avatar-noel-baldwin.jpg'},
    {text: 'The integration process was seamless, and the performance improvements are beyond our expectations.', name:'Harry Bender', title: 'CTO CryptoSolutions',avatarimage:'/assets/images/avatar-harry-bender.jpg'},
]

function TestimonialsSection() {
    return (
        <section className='py-32 bg-zinc-800'>
            <div className='my-container'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 lg:gap-12'>
                    {testimonial.map((item, index) => (
                        <motion.blockquote key={index} className={twMerge(index === 2 && 'md:hidden lg:block')}
                        initial={{
                            opacity: 0,
                            y: 24
                        }}
                        whileInView={{
                            opacity:1,
                            y: 0,
                        }}
                        viewport={{
                            once: true
                        }}
                        transition={{
                            delay: index * .5,
                            ease: 'easeInOut',
                            duration: 1
                        }}>
                            <p className='font-heading text-3xl lg:text-4xl font-black'>
                                &ldquo;{item.text}&rdquo;
                            </p>
                            <cite className='mt-8 block '>
                                <div className='flex gap-3 items-center'>
                                    <div>
                                        <div className='size-16 bg-zinc-700 rounded-full bg-cover' style={{backgroundImage: `url(${item.avatarimage})`}}>
                                            
                                        </div>
                                    </div>
                                    <div>
                                        <div className='text-lg not-italic font-black'>{item.name}</div>
                                        <div className='text-zinc-400 not-italic'>{item.title}</div>
                                    </div>
                                </div>
                            </cite>
                        </motion.blockquote>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection