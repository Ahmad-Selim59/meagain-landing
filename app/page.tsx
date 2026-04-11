import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header / Navbar */}
      <header className="fixed w-full top-0 z-50 bg-background-light/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="relative h-[40px] w-[40px]">
                {/* Added sizes to fix next/image performance warning */}
                <Image
                  src="/meagain_icon.png"
                  alt="MeAgain Logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <span className="font-display font-semibold text-2xl text-primary">MeAgain</span>
            </div>

            <nav className="flex items-center">
              <a
                href="#register"
                className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full font-medium transition-colors shadow-sm"
              >
                Register now
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[image:var(--background-image-hero-pattern)] bg-cover bg-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight text-primary mb-6 leading-tight">
                  No one prepares you for this part. <br className="hidden md:block" />
                  <span className="text-gray-800">We do.</span>
                </h1>
                <p className="mt-6 text-xl text-gray-700 max-w-2xl leading-relaxed">
                  MeAgain helps women prepare for, and manage, menopause symptoms caused by breast cancer treatment, including poor sleep, anxiety, and overwhelming fatigue, before treatment starts and during active treatment.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <a href="#register" className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-hover shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5">
                    Register your interest
                  </a>
                </div>
              </div>
              <div className="relative order-first lg:order-last">
                <div className="aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCosbQL_marZArR4qm33YH8tY4HSdycRls_pmfeRFAaSloePahSZ3aflVHBBV-r8__EhKiw3SIc5YBC94BqqnHA90edKNdIlx4qttJRa_XDpNFNb2wbjGSkf4d0CynvTuhyC-duCfU0n1aqDEGMpJTNgNihkKXPLHwnt5Nyh0O924SODEagTHShcRswEGSgokNAxyqD73MzxAfWuDk6hTdnRYG8CrJT1f9flCuAupYZlpsoWK8jDNpv2F4KtL5uW1Ughx5ddQ_RxAQ" alt="Calming botanical leaves" className="object-cover w-full h-full" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent-green/20 w-48 h-48 rounded-full -z-10 blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Bridging the Gap in Care */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-6">Bridging the Gap in Care</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We're building an evidence-informed, cancer-aware hormone support pathway designed to bridge the gap between hospital cancer care and the day-to-day impact of these changes.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our goal is to help you understand what's happening to your body, stabilise distressing symptoms, and feel more in control again during your treatment journey.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Real abstract silky placeholder */}
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0gWdZElrJnlga8VXN4Jl_EcnBsClSMkFyXzTjbOjqsmAWHKRjEiEgNDRgc7rwE0vd4BCCgS0A7axlOcoo3T_8huKxtIhmiThnfYm8O70Vaz52lgq1eL99YVUDrX1nqjruU1gaGTHU1qx0gEFrmTZekuWi9fpvb6LZc4PWNOn2oIIV25cZx1n-Q5Vmdv4KPZrUA23TwRNN4N4U4-DtSzpaTKz06t6bv2RgHR_RbrLKtF74PAViAtQXIdj_eRRicW25GLT-_XkVKgA" alt="Soft abstract flowing silk textures" className="object-cover w-full h-full" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-accent-pink/10 w-24 h-24 rounded-full -z-10 blur-xl"></div>
                <div className="absolute -top-6 -right-6 bg-accent-green/20 w-32 h-32 rounded-full -z-10 blur-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Your Pathway to Support */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-4">Your Pathway to Support</h2>
              <p className="text-lg text-gray-600">Simple steps to access the tailored support you need during your treatment.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Assessment</h3>
                <p className="text-gray-600">Complete a comprehensive symptom assessment tailored for breast cancer patients.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Care Plan</h3>
                <p className="text-gray-600">Receive an evidence-informed care plan designed to safely manage your specific symptoms.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Ongoing Support</h3>
                <p className="text-gray-600">Access continuous monitoring and support to adjust your plan as your needs change.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Join the Waitlist */}
        <section id="register" className="py-24 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50 pointer-events-none"></div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-display font-semibold text-gray-900 mb-4">Join the Waitlist</h2>
                <p className="text-gray-600">Be the first to know when we launch our full pathway support services.</p>
              </div>
              <form
                action=""
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" name="name" id="name" className="block w-full rounded-xl border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4 transition-colors border outline-none" placeholder="Jane Doe" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" name="email" id="email" className="block w-full rounded-xl border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4 transition-colors border outline-none" placeholder="jane@example.com" required />
                </div>
                <div className="pt-4">
                  <button type="submit" className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors cursor-pointer">
                    Keep Me Updated
                  </button>
                </div>
                <p className="text-xs text-center text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Simplified Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 grayscale opacity-70">
              <Image src="/meagain_icon.png" alt="MeAgain Logo Small" fill sizes="32px" className="object-contain" />
            </div>
            <span className="font-display font-medium text-gray-500">&copy; 2026 MeAgain. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
