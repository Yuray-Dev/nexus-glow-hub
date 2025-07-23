import { useState } from 'react';
import { Menu, X, MessageCircle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import heroImage from '@/assets/hero-video-placeholder.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Startseite', href: '/' },
    { name: 'Regeln', href: '/regeln' },
    { name: 'Team', href: '/team' },
    { name: 'Updates', href: '/updates' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="FiveM Server Background" 
          className="hero-video"
        />
        <div className="hero-overlay" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 w-full p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary">
            FiveM Server
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary font-semibold'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex space-x-4">
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <MessageCircle className="w-4 h-4 mr-2" />
              Discord
            </Button>
            <Button className="neon-button">
              <Users className="w-4 h-4 mr-2" />
              Jetzt beitreten
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-card m-6 p-6">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary font-semibold'
                      : 'text-foreground hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Discord
                </Button>
                <Button className="neon-button">
                  <Users className="w-4 h-4 mr-2" />
                  Jetzt beitreten
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
            Willkommen bei<br />FiveM Server
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Dein RP-Abenteuer beginnt hier. Erlebe die ultimative Roleplay-Erfahrung in einer lebendigen und authentischen Welt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="neon-button text-lg px-8 py-4">
              <Users className="w-5 h-5 mr-2" />
              Jetzt beitreten
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4">
              <MessageCircle className="w-5 h-5 mr-2" />
              Discord Community
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10 text-center pb-8">
        <div className="inline-block animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;