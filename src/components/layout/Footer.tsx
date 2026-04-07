import { FaGithub, FaFigma, FaDiscord } from "react-icons/fa6";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-secondary mt-16 pb-8 pt-8">
      <div className="max-w-[1024px] mx-auto px-4 lg:px-0">
        
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-6">
              {/* Logo */}
              <div className="flex items-center gap-2 group">
                <div className="w-4 h-4 relative">
                  <div className="absolute top-0 left-0 w-3 h-3 border-2 border-white group-hover:border-primary transition-colors" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-2 border-white group-hover:border-primary transition-colors" />
                </div>
                <span className="font-semibold text-white tracking-wide">Ilyas</span>
              </div>
              
              <a href="mailto:hello@ilyasaudy.com" className="text-secondary text-sm hover:text-white transition-colors">
                hello@ilyasaudy.com
              </a>
            </div>
            
            <p className="text-white">
              Web designer and front-end developer
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            <h3 className="text-white text-xl font-medium">Media</h3>
            <div className="flex gap-4 text-secondary">
              <a href="#" className="hover:text-white transition-colors"><FaGithub size={24} /></a>
              <a href="#" className="hover:text-white transition-colors"><FaFigma size={24} /></a>
              <a href="#" className="hover:text-white transition-colors"><FaDiscord size={24} /></a>
            </div>
          </div>
          
        </div>
        
        <div className="text-center text-secondary text-sm">
          © Copyright {currentYear}. Made by Ilyas
        </div>
        
      </div>
    </footer>
  );
}
