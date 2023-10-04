import DataDisplay from '../components/DataDisplay';
import SectionTitle from '@/components/SectionTitle';
import SectionDescription from '@/components/SectionDescription';
import ContentCard from '@/components/ContentCard';

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

        <div>
          <SectionTitle className="mb-2" title="Hvorfor velge oss?"/>
          <SectionDescription text="Med vår dype tekniske innsikt og lidenskap for innovasjon, er vi dedikert til å forme din digitale fremtid og styrke din forretningsvekst." />
          <ContentCard />
        </div>
      </div>
    </main>
  )
}
