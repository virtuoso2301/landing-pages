export default function Solutions() {
  const solutions = [
    {
      title: 'Multi-Company & Branch Handling',
      icon: '🏢',
      description: 'Start by setting up multiple companies and branches in one place',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Customer & Supplier Management',
      icon: '🤝',
      description: 'Manage all your business relationships efficiently',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Sales, Invoicing, and Returns',
      icon: '📊',
      description: 'Handle day-to-day transactions seamlessly',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Tax Management',
      icon: '💰',
      description: 'Automate tax calculations and compliance',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Automated Reports & Analysis',
      icon: '📈',
      description: 'Get insights from your business data',
      gradient: 'from-rose-500 to-orange-500'
    },
    {
      title: 'Centralized Store & Stock Groups',
      icon: '🏪',
      description: 'Keep track of inventory across locations',
      gradient: 'from-orange-500 to-amber-500'
    },
    {
      title: 'Email/SMS Reminders',
      icon: '📱',
      description: 'Stay connected with automated notifications',
      gradient: 'from-amber-500 to-yellow-500'
    },
    {
      title: 'Import/Export & Backup Support',
      icon: '💾',
      description: 'Secure and manage your business data',
      gradient: 'from-yellow-500 to-green-500'
    }
  ];

  return (
    <section className="min-h-screen py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-slide-in">
          How Clerion Works
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto text-lg animate-slide-in" 
           style={{ animationDelay: '0.2s' }}>
          A streamlined workflow for your business accounting needs
        </p>
        
        <div className="relative max-w-4xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`flex items-center gap-8 ${index % 2 === 0 ? '' : 'flex-row-reverse'} mb-16
                         group animate-slide-in hover:scale-105 transition-transform duration-500
                         relative z-10`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-20 h-20 flex-shrink-0 bg-gradient-to-br ${solution.gradient}
                            rounded-full flex items-center justify-center shadow-lg
                            group-hover:animate-pulse group-hover:shadow-2xl
                            group-hover:shadow-${solution.gradient.split(' ')[1].replace('to-', '')}/30
                            transition-all duration-500`}>
                <span className="text-4xl transform group-hover:scale-125 transition-transform duration-500">
                  {solution.icon}
                </span>
              </div>
              
              <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}
                              p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm
                              group-hover:bg-gray-800/80 transition-all duration-500
                              border border-gray-700/50 group-hover:border-${solution.gradient.split(' ')[1].replace('to-', '')}/50`}>
                <h3 className={`text-2xl font-semibold mb-2 bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent
                               transform group-hover:translate-x-${index % 2 === 0 ? '2' : '-2'} transition-transform duration-500`}>
                  {solution.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                  {solution.description}
                </p>
              </div>

              {index < solutions.length - 1 && (
                <div className="absolute left-10 h-full">
                  <div className="h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500
                                opacity-20 group-hover:opacity-40 transition-opacity duration-500
                                rounded-full glow" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}