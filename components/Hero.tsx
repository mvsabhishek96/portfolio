'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { site } from "@/site.config";

export default function Hero() {
  return (
    <section className="container py-10">
      <div className="grid md:grid-cols-[1.2fr_0.8fr] items-center gap-8">
        <div className="card">
          <h1 className="text-3xl md:text-4xl font-bold">{site.name}</h1>
          <p className="mt-2 text-lg text-gray-700">{site.tagline}</p>
          <p className="mt-4 text-gray-700">{site.about}</p>
          <div className="mt-6 flex gap-4">
            <a className="link" href={site.github}>GitHub</a>
            <a className="link" href={site.linkedin}>LinkedIn</a>
            <a className="link" href={site.resumeUrl}>Resume</a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card flex items-center justify-center"
        >
          <Image
             src="/me.png"
             alt="Abhishek"
             width={240}
             height={240}
             className="rounded-2xl object-cover"
           />

        </motion.div>
      </div>
    </section>
  );
}
