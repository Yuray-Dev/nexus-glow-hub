import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Activity, Shield, Zap, MessageCircle, Star } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Users,
      title: 'Aktive Community',
      description: 'Über 500 aktive Spieler täglich in einer lebendigen RP-Welt.',
      color: 'neon-cyan'
    },
    {
      icon: Shield,
      title: 'Faire Moderation',
      description: 'Erfahrenes Admin-Team sorgt für ein respektvolles Miteinander.',
      color: 'neon-purple'
    },
    {
      icon: Zap,
      title: 'Regelmäßige Updates',
      description: 'Kontinuierliche Verbesserungen und neue Content-Updates.',
      color: 'neon-green'
    },
    {
      icon: Activity,
      title: 'Stabile Performance',
      description: 'Hochwertige Server-Hardware für optimale Spielerfahrung.',
      color: 'neon-cyan'
    }
  ];

  const stats = [
    { label: 'Aktive Spieler', value: '500+', icon: Users },
    { label: 'Durchschnittliche Uptime', value: '99.9%', icon: Activity },
    { label: 'Community-Mitglieder', value: '2.5k+', icon: MessageCircle },
    { label: 'Bewertung', value: '4.8/5', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Warum unser Server?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Entdecke, was unseren FiveM Server zu einem besonderen Roleplay-Erlebnis macht.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-glow-gold">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Server-Statistiken
            </h2>
            <p className="text-xl text-muted-foreground">
              Zahlen, die für unsere Qualität sprechen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
              Bereit für dein Abenteuer?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Tritt unserer Community bei und erlebe Roleplay auf einem völlig neuen Level. 
              Deine Geschichte beginnt hier!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="neon-button text-lg px-8 py-4">
                <Users className="w-5 h-5 mr-2" />
                Server beitreten
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4">
                <MessageCircle className="w-5 h-5 mr-2" />
                Discord Community
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              <Badge variant="secondary">Whitelisted</Badge>
              <Badge variant="secondary">Realistic RP</Badge>
              <Badge variant="secondary">Custom Scripts</Badge>
              <Badge variant="secondary">Active Admins</Badge>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
