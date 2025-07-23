import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { ScrollText, MessageSquare, Shield, Code, Ban, AlertTriangle } from 'lucide-react';

const Regeln = () => {
  const ruleCategories = [
    {
      id: 'rp-regeln',
      title: 'RP-Regeln',
      icon: ScrollText,
      badge: 'Wichtig',
      badgeVariant: 'destructive' as const,
      rules: [
        {
          title: 'Fail-RP',
          description: 'Das Verlassen des Charakters oder unrealistisches Verhalten ist strengstens untersagt.',
          details: [
            'Bleibe immer in deiner Rolle',
            'Vermeide unrealistische Aktionen',
            'Respektiere die RP-Situationen anderer Spieler'
          ]
        },
        {
          title: 'Powergaming',
          description: 'Das Erzwingen von RP-Aktionen ohne Rücksicht auf andere Spieler ist verboten.',
          details: [
            'Gib anderen Spielern eine faire Chance zu reagieren',
            'Verwende /me und /do Befehle angemessen',
            'Respektiere die Grenzen anderer Charaktere'
          ]
        },
        {
          title: 'Metagaming',
          description: 'Die Verwendung von OOC-Informationen im IC-Bereich ist nicht erlaubt.',
          details: [
            'Nutze keine Discord-Informationen im Spiel',
            'Trenne OOC und IC-Wissen strikt',
            'Verwende keine externen Kommunikationsmittel für IC-Vorteile'
          ]
        }
      ]
    },
    {
      id: 'kommunikation',
      title: 'Kommunikation',
      icon: MessageSquare,
      badge: 'Verhalten',
      badgeVariant: 'secondary' as const,
      rules: [
        {
          title: 'Voicechat-Verhalten',
          description: 'Respektvoller Umgang im Voice-Chat ist Pflicht.',
          details: [
            'Keine Beleidigungen oder Diskriminierung',
            'Angemessene Lautstärke verwenden',
            'Push-to-Talk ist empfohlen'
          ]
        },
        {
          title: 'OOC-Kommunikation',
          description: 'Out-of-Character Gespräche sind zu minimieren.',
          details: [
            'Nutze OOC-Chat nur wenn nötig',
            'Verwende ((Text)) für OOC im IC-Chat',
            'Halte OOC-Diskussionen kurz'
          ]
        }
      ]
    },
    {
      id: 'technische-regeln',
      title: 'Technische Regeln',
      icon: Code,
      badge: 'System',
      badgeVariant: 'default' as const,
      rules: [
        {
          title: 'Modding',
          description: 'Nur erlaubte Modifikationen sind gestattet.',
          details: [
            'Keine Gameplay-verändernden Mods',
            'Grafik-Mods sind nach Absprache erlaubt',
            'Menu-Mods sind strengstens verboten'
          ]
        },
        {
          title: 'Exploits',
          description: 'Das Ausnutzen von Spielfehlern ist verboten.',
          details: [
            'Melde gefundene Bugs sofort',
            'Nutze keine Duplikations-Glitches',
            'Respektiere die Spielmechaniken'
          ]
        }
      ]
    },
    {
      id: 'discord-verhalten',
      title: 'Discord-Verhalten',
      icon: Shield,
      badge: 'Community',
      badgeVariant: 'default' as const,
      rules: [
        {
          title: 'Allgemeine Regeln',
          description: 'Respektvoller Umgang in allen Discord-Kanälen.',
          details: [
            'Keine Spam-Nachrichten',
            'Verwende die richtigen Kanäle',
            'Respektiere alle Community-Mitglieder'
          ]
        },
        {
          title: 'Support-Kanal',
          description: 'Nutze den Support-Kanal nur für echte Probleme.',
          details: [
            'Beschreibe dein Problem detailliert',
            'Sei geduldig bei der Antwort',
            'Keine mehrfachen Anfragen'
          ]
        }
      ]
    },
    {
      id: 'strafen-system',
      title: 'Strafen-System',
      icon: Ban,
      badge: 'Konsequenzen',
      badgeVariant: 'destructive' as const,
      rules: [
        {
          title: 'Verwarnungen',
          description: 'Übersicht über das Verwarnungssystem.',
          details: [
            '1. Verwarnung: Mündliche Ermahnung',
            '2. Verwarnung: 24h Bann',
            '3. Verwarnung: 7 Tage Bann',
            '4. Verwarnung: Permanenter Bann'
          ]
        },
        {
          title: 'Schwere Verstöße',
          description: 'Bestimmte Verstöße führen zu sofortigen Konsequenzen.',
          details: [
            'Cheating: Sofortiger permanenter Bann',
            'Diskriminierung: 30 Tage Bann',
            'Trolling: 7 Tage Bann'
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative py-20 px-6">
        <div className="absolute inset-0 bg-gradient-dark opacity-50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-6">
            <ScrollText className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
            Server Regeln
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Für ein respektvolles und authentisches Roleplay-Erlebnis. Bitte lies dir alle Regeln sorgfältig durch.
          </p>
        </div>
      </div>

      {/* Rules Content */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="grid gap-8">
          {ruleCategories.map((category) => (
            <div key={category.id} className="glass-card p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                </div>
                <Badge variant={category.badgeVariant}>{category.badge}</Badge>
              </div>

              <Accordion type="multiple" className="w-full">
                {category.rules.map((rule, index) => (
                  <AccordionItem key={index} value={`${category.id}-${index}`} className="border-border/50">
                    <AccordionTrigger className="text-left hover:text-primary transition-colors">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="w-5 h-5 text-secondary" />
                        <div>
                          <div className="font-semibold">{rule.title}</div>
                          <div className="text-sm text-muted-foreground">{rule.description}</div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-8 pr-4">
                      <ul className="space-y-2">
                        {rule.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="mt-12 glass-card p-6 border-l-4 border-destructive">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-destructive mb-2">Wichtiger Hinweis</h3>
              <p className="text-muted-foreground">
                Unwissenheit schützt vor Strafe nicht. Mit dem Betreten des Servers akzeptierst du automatisch alle hier aufgeführten Regeln. 
                Regeländerungen werden rechtzeitig bekannt gegeben.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regeln;