'use client'
import { education } from '../lib/education'
import { motion } from 'framer-motion'
import CertificatesMarquee from './CertificatesMarquee'
import { BookOpenCheck, GraduationCap, Award } from 'lucide-react'

export default function Education() {
  return (
    <section id="edu" className="py-16 md:py-24">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-brand" />
              <h2 className="text-2xl font-semibold">Освіта та підвищення кваліфікації</h2>
            </div>
            <div className="mt-6 relative">
              <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand/50 to-brand/10" />
              <ol className="space-y-5">
                {education.map((e, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.03 }}
                    className="relative pl-20"
                  >
                    <span className="absolute left-0 top-1 inline-flex h-7 items-center justify-center rounded-full bg-brand px-2.5 text-xs font-semibold text-white shadow-sm">
                      {e.year}
                    </span>
                    <div className="rounded-xl border border-gray-100 bg-white/80 p-4 shadow-sm backdrop-blur">
                      <p className="text-sm leading-relaxed">{e.text}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
              <div className="mt-4 flex items-center gap-2 text-xs text-gray-500"><BookOpenCheck className="h-4 w-4" /> Постійний професійний розвиток</div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <Award className="h-6 w-6 text-brand" />
              <h2 className="text-2xl font-semibold">Сертифікати</h2>
            </div>
            <div className="mt-6">
              <CertificatesMarquee />
              <p className="mt-2 text-xs text-gray-500">* Торкніться/наведіть курсор, щоб зупинити авто-прокрутку.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
