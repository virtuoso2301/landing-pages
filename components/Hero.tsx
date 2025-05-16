export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 animate-gradient-x"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent animate-gradient-y"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white/30 rounded-full animate-float-particle-${i % 5}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto relative">
          {/* Logo with simpler animation */}
          <div className="mb-8 transform hover:scale-110 transition-all duration-500">
            <img
              src="/clerion-logo.png"
              alt="Clerion Logo"
              width={350}
              height={225}
              className="mx-auto animate-float"
            />
          </div>

          {/* Tagline with gradient text */}
          <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-6 leading-relaxed animate-slide-up text-center">
            A simplified, intuitive accounting solution designed for clients, practitioners, and administrators.
          </p>

          {/* Description with glass effect */}
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-md rounded-2xl p-6 mb-8 transform hover:scale-105 transition-all duration-300 border border-white/20">
            <p className="text-xl text-white leading-relaxed animate-fade-in text-center font-medium">
              Clerion is a powerful web-based accounting platform designed to simplify financial management for businesses, practitioners, and administrators. From reporting to billing management, Clerion brings everything under one roof
            </p>
          </div>

          {/* Enhanced Try Now Button */}
          <div className="text-center">
            <a
              href="#get-started"
              className="inline-block px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full 
                         hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transform hover:scale-110 transition-all duration-300
                         relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
              <span className="relative">Try Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}