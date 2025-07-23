import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, Shield, Code, MessageCircle, Clock, MapPin } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Max Mueller',
      role: 'Server Owner',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      description: 'Gründer und Hauptverantwortlicher des Servers. Zuständig für strategische Entscheidungen und Community-Management.',
      status: 'online',
      availability: 'Täglich 18:00 - 23:00',
      discord: 'MaxMueller#1234',
      department: 'Administration',
      icon: Crown,
      badgeColor: 'destructive' as const
    },
    {
      id: 2,
      name: 'Anna Schmidt',
      role: 'Head Admin',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      description: 'Leitung des Admin-Teams und Ansprechpartnerin für alle administrativen Belange.',
      status: 'online',
      availability: 'Mo-Fr 20:00 - 24:00',
      discord: 'AnnaS#5678',
      department: 'Administration',
      icon: Shield,
      badgeColor: 'destructive' as const
    },
    {
      id: 3,
      name: 'Tom Weber',
      role: 'Senior Admin',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      description: 'Erfahrener Administrator mit Fokus auf Event-Management und Spieler-Support.',
      status: 'away',
      availability: 'Di, Do, Sa 19:00 - 22:00',
      discord: 'TomW#9012',
      department: 'Administration',
      icon: Shield,
      badgeColor: 'destructive' as const
    },
    {
      id: 4,
      name: 'Lisa Berger',
      role: 'Supporter',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      description: 'Erste Anlaufstelle für neue Spieler und allgemeine Fragen.',
      status: 'online',
      availability: 'Täglich 16:00 - 20:00',
      discord: 'LisaB#3456',
      department: 'Support',
      icon: MessageCircle,
      badgeColor: 'secondary' as const
    },
    {
      id: 5,
      name: 'Mark Fischer',
      role: 'Developer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      description: 'Verantwortlich für Script-Entwicklung und technische Implementierungen.',
      status: 'offline',
      availability: 'Projektbasis',
      discord: 'MarkDev#7890',
      department: 'Development',
      icon: Code,
      badgeColor: 'default' as const
    },
    {
      id: 6,
      name: 'Sarah Klein',
      role: 'Web Developer',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
      description: 'Zuständig für Website-Entwicklung und Online-Präsenz des Servers.',
      status: 'online',
      availability: 'Mo-Mi 14:00 - 18:00',
      discord: 'SarahWeb#2468',
      department: 'Development',
      icon: Code,
      badgeColor: 'default' as const
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-neon-green';
      case 'away': return 'bg-yellow-500';
      case 'offline': return 'bg-muted';
      default: return 'bg-muted';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online': return 'Online';
      case 'away': return 'Abwesend';
      case 'offline': return 'Offline';
      default: return 'Unbekannt';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-dark opacity-50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-6">
            <Shield className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
            Unser Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Lerne das engagierte Team kennen, das für ein großartiges Spielerlebnis sorgt. 
            Wir sind hier, um dir zu helfen und eine faire Spielumgebung zu gewährleisten.
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-glow-gold">
              <CardContent className="p-6">
                {/* Avatar and Status */}
                <div className="relative mb-4">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-border group-hover:ring-primary transition-all duration-300"
                  />
                  <div className={`absolute bottom-2 right-1/2 translate-x-8 w-6 h-6 ${getStatusColor(member.status)} rounded-full border-2 border-background flex items-center justify-center`}>
                    <div className="w-2 h-2 bg-background rounded-full opacity-80" />
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <member.icon className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{member.role}</span>
                  </div>
                  <Badge variant={member.badgeColor} className="mb-3">
                    {member.department}
                  </Badge>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <div className={`w-2 h-2 ${getStatusColor(member.status)} rounded-full`} />
                    <span className="text-muted-foreground">{getStatusText(member.status)}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground text-center mb-4">
                  {member.description}
                </p>

                {/* Contact Info */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{member.availability}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MessageCircle className="w-4 h-4 text-primary" />
                    <span className="font-mono">{member.discord}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="glass-card p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Kontakt aufnehmen</h2>
            <p className="text-muted-foreground mb-6">
              Hast du Fragen oder benötigst Hilfe? Unser Team ist gerne für dich da!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-destructive/20 rounded-lg mb-3">
                  <Shield className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Administrative Angelegenheiten</h3>
                <p className="text-sm text-muted-foreground">Wende dich an unsere Admins</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary/20 rounded-lg mb-3">
                  <MessageCircle className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Allgemeiner Support</h3>
                <p className="text-sm text-muted-foreground">Unser Support-Team hilft dir</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg mb-3">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Technische Probleme</h3>
                <p className="text-sm text-muted-foreground">Unsere Entwickler helfen weiter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;