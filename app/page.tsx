import Image from "next/image";
import { CheckCircle2, Star, Check, ArrowRight, Play } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAF9] font-sans text-[#0B2118]">
      {/* Navbar */}
      <nav className="bg-[#0B2118] text-white px-6 py-4 flex items-center justify-between rounded-full mx-4 mt-4 max-w-7xl xl:mx-auto">
        <div className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-[#0B2118] rounded-full"></div>
          </div>
          Pastilaris
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="text-[#C4FF00]">About</a>
          <a href="#" className="hover:text-[#C4FF00] transition-colors">Skill</a>
          <a href="#" className="hover:text-[#C4FF00] transition-colors">Project</a>
          <a href="#" className="hover:text-[#C4FF00] transition-colors">Tanggapan</a>
        </div>
        <button className="border border-white/30 rounded-full px-6 py-2 text-sm font-medium hover:bg-white/10 transition-colors">
          Hubungi
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] text-[#0B2118] mb-6 tracking-tight">
            Making Great<br />
            Business <span className="bg-[#C4FF00] px-2 rounded-lg inline-block mt-2">Decision</span>
          </h1>
          <p className="text-gray-600 mb-10 text-lg">
            Track your customers behavior to make a good decision that helps the customer use our services better way.
          </p>
          <button className="bg-[#C4FF00] text-[#0B2118] font-bold px-8 py-4 rounded-full hover:bg-[#aee600] transition-colors shadow-lg shadow-[#C4FF00]/20">
            Get Started
          </button>
        </div>
        <div className="relative h-[500px] w-full flex items-center justify-center">
          {/* Abstract dashboard mockup */}
          <div className="bg-white rounded-[2rem] shadow-2xl p-8 border border-gray-100 w-full max-w-md relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-[#0B2118] rounded-full"></div>
              </div>
              <div className="font-bold text-lg">Pastilaris</div>
            </div>
            <div className="space-y-4">
              <div className="h-12 bg-gray-50 rounded-xl flex items-center px-4 gap-3 border border-gray-100">
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                <div className="h-2 w-24 bg-gray-200 rounded-full"></div>
              </div>
              <div className="h-12 bg-[#C4FF00]/20 rounded-xl flex items-center px-4 gap-3 border border-[#C4FF00]/30">
                <div className="w-4 h-4 bg-[#C4FF00] rounded-full"></div>
                <div className="h-2 w-24 bg-[#0B2118] rounded-full"></div>
              </div>
              <div className="h-12 bg-gray-50 rounded-xl flex items-center px-4 gap-3 border border-gray-100">
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                <div className="h-2 w-24 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute -left-12 top-32 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-start gap-4 w-64 border border-gray-50">
            <Image src="https://picsum.photos/seed/avatar1/100/100" alt="Avatar" width={48} height={48} className="rounded-full object-cover" />
            <div>
              <div className="font-bold text-sm">Benson</div>
              <div className="text-xs text-gray-500 mb-1">CEO, Amazon</div>
              <div className="flex text-yellow-400 text-xs mb-2">
                <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
              </div>
              <p className="text-[10px] text-gray-600 leading-tight">I can improve your skills and save to grow your business</p>
            </div>
          </div>

          <div className="absolute -right-8 top-16 bg-white p-4 rounded-2xl shadow-xl z-20 flex flex-col items-center gap-2 border border-gray-50">
            <div className="bg-[#C4FF00] p-3 rounded-full">
              <Check className="w-6 h-6 text-[#0B2118]" />
            </div>
            <span className="font-bold text-sm">Get bigger</span>
          </div>
          
          <div className="absolute right-4 bottom-24 bg-white p-5 rounded-2xl shadow-xl z-20 w-48 border border-gray-50">
             <div className="text-xs text-gray-500 font-medium mb-1">Overview</div>
             <div className="text-2xl font-bold mb-4">18,500,000</div>
             <div className="flex -space-x-2">
                <Image src="https://picsum.photos/seed/p1/40/40" alt="User" width={24} height={24} className="rounded-full border-2 border-white" />
                <Image src="https://picsum.photos/seed/p2/40/40" alt="User" width={24} height={24} className="rounded-full border-2 border-white" />
                <Image src="https://picsum.photos/seed/p3/40/40" alt="User" width={24} height={24} className="rounded-full border-2 border-white" />
                <div className="w-6 h-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] font-bold">+5</div>
             </div>
          </div>
        </div>
      </section>

      {/* Logo Cloud */}
      <section className="py-12 border-t border-gray-200/60">
        <h3 className="text-center text-xl font-bold text-[#0B2118] mb-10">We Help You To Grow</h3>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-2 font-bold text-xl">
              <div className="w-6 h-6 bg-current rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              Logoipsum
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#0B2118] text-white py-20 px-6 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold relative z-10">
              Be better and excel
            </h2>
            {/* Decorative squiggly line */}
            <svg className="absolute -right-16 -top-8 w-32 h-32 text-[#C4FF00] opacity-80 z-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 50 C 20 20, 40 80, 50 50 C 60 20, 80 80, 90 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
            <div className="flex items-start gap-5">
              <div className="bg-[#C4FF00] p-3 rounded-full text-[#0B2118] shrink-0">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">12,390</div>
                <div className="text-sm text-gray-400 font-medium">Happy Customers<br/>Using Product</div>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="bg-[#C4FF00] p-3 rounded-full text-[#0B2118] shrink-0">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">829</div>
                <div className="text-sm text-gray-400 font-medium">Successful On<br/>Big Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B2118] mb-4">Good For Your Business</h2>
          <p className="text-gray-500 font-medium">designing the smartest features.</p>
        </div>
        
        <div className="flex justify-center gap-4 mb-20 overflow-x-auto pb-4 no-scrollbar">
          <button className="flex items-center gap-3 bg-white border border-gray-200 px-6 py-3 rounded-full shadow-sm whitespace-nowrap">
            <div className="bg-[#C4FF00] p-1.5 rounded-full"><Check className="w-4 h-4 text-[#0B2118]" /></div>
            <span className="font-bold text-[#0B2118]">Automations</span>
          </button>
          <button className="flex items-center gap-3 bg-transparent text-gray-500 hover:bg-gray-100 px-6 py-3 rounded-full transition-colors whitespace-nowrap">
            <div className="bg-gray-200 p-1.5 rounded-full"><Check className="w-4 h-4 text-gray-500" /></div>
            <span className="font-bold">Real-time</span>
          </button>
          <button className="flex items-center gap-3 bg-transparent text-gray-500 hover:bg-gray-100 px-6 py-3 rounded-full transition-colors whitespace-nowrap">
            <div className="bg-gray-200 p-1.5 rounded-full"><Check className="w-4 h-4 text-gray-500" /></div>
            <span className="font-bold">Lifetime Support</span>
          </button>
          <button className="flex items-center gap-3 bg-transparent text-gray-500 hover:bg-gray-100 px-6 py-3 rounded-full transition-colors whitespace-nowrap">
            <div className="bg-gray-200 p-1.5 rounded-full"><Check className="w-4 h-4 text-gray-500" /></div>
            <span className="font-bold">High Protection</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl relative h-[400px] flex gap-6 overflow-hidden">
             {/* Left sidebar mockup */}
             <div className="w-1/3 bg-gray-50 rounded-2xl p-4 flex flex-col gap-4 border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                  <div className="h-2 w-16 bg-gray-200 rounded-full"></div>
                </div>
                <div className="h-8 bg-[#C4FF00]/20 rounded-lg border border-[#C4FF00]/30"></div>
                <div className="h-8 bg-white rounded-lg border border-gray-100"></div>
                <div className="h-8 bg-white rounded-lg border border-gray-100"></div>
                <div className="h-8 bg-white rounded-lg border border-gray-100"></div>
             </div>
             {/* Right content mockup */}
             <div className="w-2/3 flex flex-col gap-6 pt-4">
                <div className="h-4 w-24 bg-gray-200 rounded-full"></div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex-1 relative">
                   <div className="h-3 w-32 bg-gray-200 rounded-full mb-4"></div>
                   <div className="h-8 w-48 bg-[#0B2118] rounded-lg mb-6"></div>
                   <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                      <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
                   </div>
                   <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#C4FF00] w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                     <ArrowRight className="w-5 h-5 text-[#0B2118]" />
                   </div>
                </div>
             </div>
          </div>
          
          <div className="max-w-lg">
            <h3 className="text-3xl md:text-4xl font-bold text-[#0B2118] mb-6 leading-tight">We&apos;re Helping Big<br/>Global Companies Grow</h3>
            <p className="text-gray-600 mb-8 text-lg">Track your customers behavior to make a good decision that helps the customer use our services better way.</p>
            <ul className="space-y-5 mb-10">
              <li className="flex items-center gap-4">
                <div className="bg-[#C4FF00] p-1.5 rounded-full shrink-0"><Check className="w-4 h-4 text-[#0B2118]" /></div>
                <span className="font-bold text-[#0B2118]">Auto running when reaches certain number</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-[#C4FF00] p-1.5 rounded-full shrink-0"><Check className="w-4 h-4 text-[#0B2118]" /></div>
                <span className="font-bold text-[#0B2118]">Sending message to server for reputation</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-[#C4FF00] p-1.5 rounded-full shrink-0"><Check className="w-4 h-4 text-[#0B2118]" /></div>
                <span className="font-bold text-[#0B2118]">Reporting and extending the data</span>
              </li>
            </ul>
            <button className="border-2 border-gray-200 text-[#0B2118] font-bold px-8 py-3 rounded-full hover:border-[#0B2118] transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* "For Everyone" Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B2118] mb-6">For Everyone</h2>
            <p className="text-gray-600 mb-10 text-lg">Track your customers behavior to make a good decision that helps the customer use our services better way.</p>
            <button className="bg-[#C4FF00] text-[#0B2118] font-bold px-8 py-4 rounded-full hover:bg-[#aee600] transition-colors shadow-lg shadow-[#C4FF00]/20">
              Get Started
            </button>
          </div>
          <div className="relative flex justify-end">
            <Image src="https://picsum.photos/seed/work/800/600" alt="Working" width={600} height={450} className="rounded-[2rem] object-cover h-[450px] w-full max-w-lg shadow-xl" />
            <div className="absolute left-0 lg:-left-12 top-1/2 -translate-y-1/2 bg-white p-5 rounded-2xl shadow-2xl flex flex-col gap-4 border border-gray-50 w-56">
              <div className="flex items-center gap-3">
                <div className="bg-[#C4FF00] p-2.5 rounded-xl"><Check className="w-5 h-5 text-[#0B2118]" /></div>
                <div>
                  <div className="font-bold text-sm">Web</div>
                  <div className="text-xs text-gray-500 font-medium">Developer</div>
                </div>
              </div>
              <div className="flex items-end gap-1.5 h-16 mt-2">
                <div className="w-full bg-gray-100 h-1/3 rounded-t-sm"></div>
                <div className="w-full bg-gray-100 h-2/3 rounded-t-sm"></div>
                <div className="w-full bg-[#C4FF00] h-full rounded-t-sm"></div>
                <div className="w-full bg-gray-100 h-1/2 rounded-t-sm"></div>
                <div className="w-full bg-gray-100 h-3/4 rounded-t-sm"></div>
                <div className="w-full bg-gray-100 h-1/4 rounded-t-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative flex justify-center lg:justify-start">
          <Image src="https://picsum.photos/seed/couch/600/800" alt="Working on couch" width={450} height={600} className="rounded-[2rem] object-cover h-[600px] w-full max-w-md shadow-xl" />
          
          <div className="absolute -left-4 lg:-left-12 top-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-50">
            <div className="bg-[#C4FF00] p-2 rounded-full"><Check className="w-4 h-4 text-[#0B2118]" /></div>
            <span className="font-bold text-sm">Hyper Growth</span>
          </div>
          
          <div className="absolute -right-4 lg:-right-12 bottom-24 bg-white p-5 rounded-2xl shadow-xl flex flex-col items-center gap-3 border border-gray-50">
            <div className="bg-[#C4FF00] p-3 rounded-xl"><Check className="w-6 h-6 text-[#0B2118]" /></div>
            <span className="font-bold text-sm text-center leading-tight">Get Bigger<br/>Funding</span>
          </div>
        </div>
        
        <div className="max-w-lg">
          <div className="flex text-[#FF9900] mb-8 gap-1">
            <Star className="w-6 h-6 fill-current" /><Star className="w-6 h-6 fill-current" /><Star className="w-6 h-6 fill-current" /><Star className="w-6 h-6 fill-current" /><Star className="w-6 h-6 fill-current" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-[#0B2118] leading-tight mb-8">
            Pastilaris figured out that our previous <span className="bg-[#C4FF00] px-2 rounded-lg inline-block mt-1">system lacking of automation</span> and spend a lot of time doing wrong things.
          </h3>
          <div className="text-sm text-gray-500 mb-10 font-medium">
            <span className="font-bold text-[#0B2118] text-base">Jangye Yin</span>, CEO Digimain Ltd
          </div>
          <ul className="space-y-5">
            <li className="flex items-center gap-4">
              <div className="bg-[#0B2118] p-1.5 rounded-full shrink-0"><Check className="w-4 h-4 text-white" /></div>
              <span className="font-bold text-[#0B2118]">Business successfully growth</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="bg-[#0B2118] p-1.5 rounded-full shrink-0"><Check className="w-4 h-4 text-white" /></div>
              <span className="font-bold text-[#0B2118]">Reduce bottleneck in ecosystem</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="bg-[#0B2118] text-white overflow-hidden">
        <div className="grid lg:grid-cols-2 max-w-7xl mx-auto">
          <div className="p-12 md:p-24 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Grow your business</h2>
            <p className="text-gray-400 mb-10 text-lg max-w-md leading-relaxed">Track your customers behavior to make a good decision that helps the customer use our services better way.</p>
            <div>
              <button className="bg-[#C4FF00] text-[#0B2118] font-bold px-8 py-4 rounded-full hover:bg-[#aee600] transition-colors shadow-lg shadow-[#C4FF00]/10">
                Get Started
              </button>
            </div>
          </div>
          <div className="relative h-80 lg:h-auto w-full">
            <Image src="https://picsum.photos/seed/teamwork/800/800" alt="Team" fill className="object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
