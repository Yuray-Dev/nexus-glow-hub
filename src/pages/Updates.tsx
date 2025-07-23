import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Calendar, Star, Bug, Settings, Info, Plus, Zap } from 'lucide-react';

const Updates = () => {
  const updates = [
    {
      id: 1,
      date: '2024-01-15',
      title: 'Großes Wirtschafts-Update',
      version: 'v2.3.0',
      type: 'major',
      tags: ['Neu', 'Wirtschaft', 'Jobs'],
      description: 'Umfassende Überarbeitung des Wirtschaftssystems mit neuen Jobs und Geschäftsmöglichkeiten.',
      changes: [
        'Neue Job-Systeme: Taxi, Müllabfuhr, und Lieferservice',
        'Überarbeitetes Banksystem mit Krediten und Zinsen',
        'Neue Geschäfte und Interaktionsmöglichkeiten',
        'Balancing der Preise und Löhne',
        'Performance-Optimierungen für bessere Stabilität'
      ],
      isHighlighted: true
    },
    {
      id: 2,
      date: '2024-01-10',
      title: 'Bugfixes und Verbesserungen',
      version: 'v2.2.1',
      type: 'patch',
      tags: ['Fix', 'Performance'],
      description: 'Wichtige Bugfixes und Performance-Verbesserungen.',
      changes: [
        'Behoben: Fahrzeuge verschwinden manchmal beim Aussteigen',
        'Behoben: Chat-Nachrichten werden nicht korrekt angezeigt',
        'Verbessert: Server-Performance bei vielen Spielern',
        'Optimiert: Ladezeiten beim Serverstart'
      ],
      isHighlighted: false
    },
    {
      id: 3,
      date: '2024-01-05',
      title: 'Polizei-System Überarbeitung',
      version: 'v2.2.0',
      type: 'minor',
      tags: ['Neu', 'Polizei', 'RP'],
      description: 'Umfangreiche Verbesserungen für das Polizei-Roleplay.',
      changes: [
        'Neues MDT-System für Polizisten',
        'Erweiterte Fahndungsfunktionen',
        'Neue Polizei-Fahrzeuge und Ausrüstung',
        'Verbesserte Gefängnis-Mechaniken',
        'Neue Ermittlungs-Tools'
      ],
      isHighlighted: false
    },
    {
      id: 4,
      date: '2023-12-28',
      title: 'Weihnachts-Event 2023',
      version: 'v2.1.5',
      type: 'event',
      tags: ['Event', 'Weihnachten', 'Zeitlich begrenzt'],
      description: 'Festliches Weihnachts-Event mit besonderen Belohnungen.',
      changes: [
        'Weihnachtlich dekorierte Bereiche in der Stadt',
        'Spezielle Weihnachts-Missions und Belohnungen',
        'Neue festliche Kleidung und Fahrzeuge',
        'Weihnachtsmarkt im Stadtzentrum',
        'Event-Ende: 7. Januar 2024'
      ],
      isHighlighted: false
    },
    {
      id: 5,
      date: '2023-12-20',
      title: 'Performance-Update',
      version: 'v2.1.4',
      type: 'patch',
      tags: ['Performance', 'Optimierung'],
      description: 'Umfassende Performance-Optimierungen und Stabilitätsverbesserungen.',
      changes: [
        'Reduzierte Serverlatenz um durchschnittlich 30%',
        'Optimierte Ressourcen-Nutzung',
        'Verbesserte Anti-Cheat-Systeme',
        'Bugfixes für seltene Crashes'
      ],
      isHighlighted: false
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'major': return Star;
      case 'minor': return Plus;
      case 'patch': return Bug;
      case 'event': return Calendar;
      default: return Info;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'major': return 'destructive';
      case 'minor': return 'secondary';
      case 'patch': return 'default';
      case 'event': return 'default';
      default: return 'default';
    }
  };

  const getTagVariant = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'neu': return 'default';
      case 'fix': return 'secondary';
      case 'event': return 'destructive';
      case 'performance': return 'default';
      default: return 'secondary';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-dark opacity-50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-6">
            <Zap className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
            Updates & Changelog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bleib auf dem Laufenden über alle neuen Features, Verbesserungen und Bugfixes. 
            Wir arbeiten kontinuierlich daran, dein Spielerlebnis zu verbessern.
          </p>
        </div>
      </div>

      {/* Updates Content */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="space-y-8">
          {updates.map((update, index) => {
            const TypeIcon = getTypeIcon(update.type);
            return (
              <Card 
                key={update.id} 
                className={`glass-card border-border/50 transition-all duration-300 hover:border-primary/50 ${
                  update.isHighlighted ? 'ring-2 ring-primary/30 shadow-glow-gold' : ''
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`flex items-center justify-center w-12 h-12 bg-${getTypeColor(update.type)}/20 rounded-lg`}>
                        <TypeIcon className={`w-6 h-6 text-${getTypeColor(update.type)}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h2 className="text-xl font-bold text-foreground">{update.title}</h2>
                          {update.isHighlighted && (
                            <Badge variant="destructive" className="animate-pulse">
                              Neu
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(update.date)}</span>
                          <Separator orientation="vertical" className="h-4" />
                          <span className="font-mono">{update.version}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {update.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant={getTagVariant(tag)}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{update.description}</p>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground mb-3">Änderungen:</h3>
                    <ul className="space-y-2">
                      {update.changes.map((change, changeIndex) => (
                        <li key={changeIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{change}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Archive Notice */}
        <div className="mt-12 glass-card p-6 text-center">
          <Settings className="w-8 h-8 text-primary mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">Ältere Updates</h3>
          <p className="text-muted-foreground">
            Suchst du nach älteren Changelog-Einträgen? Diese findest du in unserem Discord-Server 
            im #changelog-archiv Kanal oder auf Anfrage beim Support-Team.
          </p>
        </div>

        {/* Roadmap Teaser */}
        <div className="mt-8 glass-card p-6 border-l-4 border-primary">
          <div className="flex items-start gap-4">
            <Star className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-primary mb-2">Kommende Features</h3>
              <p className="text-muted-foreground mb-3">
                Wir arbeiten bereits an spannenden neuen Features für die nächsten Updates:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Erweiterte Housing-Systeme mit Möbel-Customization</li>
                <li>• Neue Fraktions-Systeme und Gang-Mechaniken</li>
                <li>• Überarbeitete Character-Erstellung</li>
                <li>• Mobile App für Spieler-Interaktionen</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;