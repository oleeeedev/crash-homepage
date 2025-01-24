import React from 'react';

export default function WhyVLang() {
  return (
    <div className="py-20 text-white relative">
      <div className="absolute bottom-20 right-0 w-[50vw] h-screen">
        <div
          className="w-full h-full bg-cover bg-right opacity-80"
          style={{
            background: "url('./grain-blur.svg') no-repeat",
            maskImage: 'linear-gradient( black 70%, transparent)',
          }}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-16 z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 py-3">
          Why Crash Programming Language?
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-300">
          Crash is a modern programming language designed for simplicity, speed, and safety. Whether you're building small scripts or large applications, Crash offers an efficient, readable, and enjoyable coding experience.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard title="Speed" description="Crash is designed to be incredibly fast with minimal runtime overhead. It compiles directly to machine code, ensuring that your applications run at lightning speed." />
          <FeatureCard title="Simplicity" description="Crash's syntax is simple, intuitive, and beginner-friendly, making it ideal for developers of all experience levels. With fewer concepts to learn, you can start writing productive code quickly." />
          <FeatureCard title="Safety" description="Crash ensures memory safety with no garbage collector and provides features like null safety, type safety, and thread safety, so you can write reliable, error-free code." />
          <FeatureCard title="Cross-platform" description="Crash compiles to multiple platforms including macOS, Windows, and Linux, with minimal dependencies, so you can build cross-platform applications with ease." />
          <FeatureCard title="Developer Community" description="The Crash community is growing fast, with passionate contributors and open-source projects. Whether you're a beginner or an experienced developer, you'll find a helpful and welcoming community." />
          <FeatureCard title="Modern Features" description="Crash comes with modern features like built-in testing, documentation generation, and powerful tools for clean and maintainable code, empowering you to be more productive." />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ title, description } : { title: string, description: string }) {
  return (
    <div className="relative p-6 border border-neutral-800 bg-neutral-900/50 backdrop-blur-lg">
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-red-500 text-xl font-bold">+</div>
      <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-red-500 text-xl font-bold">+</div>
      <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-red-500 text-xl font-bold">+</div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-red-500 text-xl font-bold">+</div>

      <h3 className="text-2xl font-semibold text-gray-100">{title}</h3>
      <p className="mt-4 text-lg text-gray-400">{description}</p>
    </div>
  );
}
