export default function Features() {
  return (
    <section className="h-[100vh] snap-start bg-gray-900 flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 h-full flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 w-full max-w-7xl mx-auto">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 leading-tight">
              One Stop Solution for the Accounting & Taxation Services
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed">
              CLERION is a technology backed-up Accounting and Legal Service Firm providing the Services for the Small Businesses, Start-up Firms, Large Businesses and Corporate Companies across India and USA.
            </p>
            <div className="space-y-6">
              {['Real-time Updates', 'Automated Calculations', 'Custom Reports'].map((feature, index) => (
                <div key={index} 
                     className="flex items-center space-x-4 group transform hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center
                                shadow-lg shadow-purple-500/20 transform group-hover:scale-110 transition-all duration-300">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative group transform hover:scale-105 transition-all duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-30 
                            group-hover:opacity-50 transition-all duration-500"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl 
                            border border-gray-700/50 group-hover:border-purple-500/50">
                <img 
                  src="/Group 9.png" 
                  alt="Accounting and Taxation Services" 
                  className="rounded-lg w-full group-hover:opacity-90 transition-opacity duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}