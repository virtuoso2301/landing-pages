import Image from 'next/image';

export default function LoginTypes() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-16 animate-slide-up">Who Is Clerion For?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Client Login */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-700/50 hover:border-blue-500/50">
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-4 text-center">Client Login</h3>
              <p className="text-gray-400 text-center mb-6">Clients can log in to view invoices, make payments, and track their financial history.</p>
            </div>
            <div className="relative w-full h-48 mt-6">
              <Image
                src="/user.png"
                alt="Client Dashboard"
                fill
                className="rounded-2xl object-contain"
              />
            </div>
          </div>

          {/* Practitioner Login */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-700/50 hover:border-green-500/50">
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-4 text-center">Practitioner Login</h3>
              <p className="text-gray-400 text-center mb-6">Practitioners can manage multiple client accounts, generate reports, and oversee transactions.</p>
            </div>
            <div className="relative w-full h-48 mt-6">
              <Image
                src="/practitoner.png"
                alt="Practitioner Dashboard"
                fill
                className="rounded-2xl object-contain"
              />
            </div>
          </div>

          {/* Admin Login */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-700/50 hover:border-purple-500/50">
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-4 text-center">Super Admin Login</h3>
              <p className="text-gray-400 text-center mb-6">Admins have full system control to manage users, roles, and configurations.</p>
            </div>
            <div className="relative w-full h-48 mt-6">
              <Image
                src="/Login.svg"
                alt="Admin Dashboard"
                fill
                className="rounded-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}