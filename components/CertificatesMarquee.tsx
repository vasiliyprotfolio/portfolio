'use client'
import Image from 'next/image'
import { useState } from 'react'
import { certificates } from '../lib/education'

export default function CertificatesMarquee() {
  const [paused, setPaused] = useState(false)
  const split = Math.ceil(certificates.length / 2)
  const left = certificates.slice(0, split)
  const right = certificates.slice(split)

  return (
    <div
      className="group relative grid grid-cols-2 gap-3 overflow-hidden rounded-2xl border border-gray-100 bg-white p-3"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <Col items={left} speed={10} paused={paused} />
      <Col items={right} speed={12} paused={paused} reverse />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
    </div>
  )
}

function Col({ items, speed, paused, reverse }:{ items:{src:string,alt:string}[]; speed:number; paused:boolean; reverse?:boolean }) {
  const heights = ['h-40','h-52','h-44','h-56','h-48']
  return (
    <div className="relative">
      <div
        className={'marquee-vert-bounce space-y-3 ' + (reverse ? 'reverse' : '')}
        style={{ animationDuration: `${speed}s`, animationPlayState: paused ? 'paused' as any : 'running' as any }}
      >
        {items.map((c, i) => (
          <a key={i} href={c.src} target="_blank" rel="noreferrer"
             className={`relative block w-full overflow-hidden rounded-xl border border-gray-100 ${heights[i % heights.length]}`}>
            <Image src={c.src} alt={c.alt} fill className="object-cover" sizes="(max-width:768px) 50vw, 25vw" />
          </a>
        ))}
      </div>
    </div>
  )
}
