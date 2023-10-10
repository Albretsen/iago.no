import DataDisplay from '../components/DataDisplay';
import SectionTitle from '@/components/SectionTitle';
import SectionDescription from '@/components/SectionDescription';
import ContentCard from '@/components/contentCard/ContentCard';
import ContentCardSection from '@/components/contentCard/ContentCardSection';

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-between p-standard">
      <div className="w-full gap-48 flex flex-col items-center">
        <div>
          <SectionTitle title="Våre resultater i tall"/>
          <DataDisplay 
            dataSets={[
              {
                number: '100',
                suffix: '%',
                label: 'Kundetilfredshet'
              },
              {
                number: '120',
                suffix: 'K+',
                label: 'Nedlastinger'
              },
              {
                number: '10',
                suffix: 'K+',
                label: 'Registrerte brukere'
              },
              {
                number: '24',
                suffix: '/7',
                label: 'Oppetid'
              },
          ]}
          />
        </div>

        <div className="flex flex-col">
          <SectionTitle className="mb-2" title="Hvorfor velge oss?"/>
          <SectionDescription text="Med vår dype tekniske innsikt og lidenskap for innovasjon, er vi dedikert til å forme din digitale fremtid og styrke din forretningsvekst." />
          <ContentCardSection>
            <ContentCard
              icon="visibility"
              title="Økt Synlighet" 
              text="Med en profesjonell nettside eller app, vil din bedrift bli mer synlig online, tiltrekke seg flere kunder og styrke merkevaren."
            />
            <ContentCard
              icon="campaign"
              title="Kostnadseffektiv Markedsføring" 
              text="En godt designet nettside eller app er en av de mest kostnadseffektive markedsføringsverktøyene, som gir høy avkastning på investeringen."
            />
            <ContentCard
              icon="event_available"
              title="Tilgjengelig 24/7" 
              text="Din nettside eller app er alltid tilgjengelig, slik at kundene kan nå deg når som helst, dag eller natt."
            />
            <ContentCard
              icon="query_stats"
              title="Skalerbar Vekst" 
              text="Våre løsninger er bygget med tanke på fremtiden, slik at du enkelt kan skalere opp eller tilpasse etter hvert som din bedrift vokser."
            />
            <ContentCard
              icon="sentiment_very_satisfied"
              title="Forbedret Kundetilfredshet" 
              text="Med en intuitiv og brukervennlig plattform, vil kundene dine ha en positiv interaksjon med merkevaren din, noe som fører til økt lojalitet."
            />
            <ContentCard
              icon="workspace_premium"
              title="Konkurransedyktig Fordel" 
              text="Stå ut i markedet med en unik nettpresens som setter deg foran konkurrentene."
            />
          </ContentCardSection>
        </div>
      </div>
    </main>
  )
}
