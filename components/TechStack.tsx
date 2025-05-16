export default function TechStack() {
  const technologies = [
    {
      name: 'Laravel',
      description: 'Backend Framework',
      icon: '⚡',
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'SQL Database',
      description: 'Structured Data Storage',
      icon: '🗄️',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Firebase',
      description: 'Chatbot & Real-Time Notifications',
      icon: '🔥',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Tailwind CSS',
      description: 'Modern UI Styling',
      icon: '🎨',
      color: 'from-teal-500 to-green-500'
    },
    {
      name: 'Notifications',
      description: 'Real-time alerts and updates',
      icon: '🔔',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Cloud Hosting',
      description: 'Global Availability',
      icon: '☁️',
      color: 'from-blue-400 to-indigo-400'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4 animate-slide-in">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Built with Scalable, Secure Technologies
          </span>
        </h2>
        <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto text-lg animate-slide-in"
           style={{ animationDelay: '0.2s' }}>
          Powered by modern technologies to ensure performance, security, and flexibility
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gray-800 p-8
                       transform hover:-translate-y-2 transition-all duration-300
                       animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0
                            group-hover:opacity-20 transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-4 transform group-hover:scale-110 
                            transition-transform duration-300">
                  {tech.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent
                           group-hover:bg-clip-text group-hover:bg-gradient-to-r
                           group-hover:from-white group-hover:to-gray-300
                           transition-colors duration-300">
                  {tech.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 group-hover:text-gray-300
                          transition-colors duration-300">
                  {tech.description}
                </p>

                {/* Decorative Circle */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full
                            bg-gradient-to-br ${tech.color} opacity-10 blur-xl
                            group-hover:opacity-20 transition-opacity duration-300" />
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent
                            group-hover:border-white/10 rounded-2xl
                            transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}