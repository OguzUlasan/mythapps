import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-50 selection:bg-purple-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-purple-500 to-blue-500" />
            Myth Apps
          </div>
          <a href="#contact" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Contact Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-purple-300 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Accepting New Projects in 2026
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-zinc-500">
            We forge digital myths into <br className="hidden md:block" /> reality.
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            Myth Apps is a boutique digital studio specializing in high-performance mobile and web applications. We don't just build apps; we craft experiences that users love.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#services" className="px-8 py-3 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-colors">
              Explore Our Work
            </a>
            <a href="#contact" className="px-8 py-3 rounded-xl bg-white/10 border border-white/10 font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 border-t border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Expertise</h2>
            <p className="text-zinc-400 max-w-xl">We focus on a core set of technologies to deliver uncompromising quality and performance.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "iOS Development",
                desc: "Native iOS applications built with Swift and SwiftUI for the ultimate Apple ecosystem experience.",
                icon: "📱"
              },
              {
                title: "Android Development",
                desc: "High-performance Android apps using Kotlin and Jetpack Compose tailored for billions of devices.",
                icon: "🤖"
              },
              {
                title: "Web Platforms",
                desc: "Lightning-fast, SEO-optimized web applications using React, Next.js, and modern architectures.",
                icon: "🌐"
              }
            ].map((service, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group cursor-default">
                <div className="text-4xl mb-4 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/10 pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to start your next project?</h2>
          <p className="text-xl text-zinc-400 mb-10">Drop us a line and let's discuss how we can bring your vision to life.</p>
          <a href="mailto:oguzulasan@gmail.com" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-purple-500/25">
            Contact Us Today
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 bg-black text-center text-zinc-500 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-semibold text-zinc-300">
            <div className="w-4 h-4 rounded-sm bg-gradient-to-br from-purple-500 to-blue-500" />
            Myth Apps
          </div>
          <p>© 2026 Myth Apps. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
