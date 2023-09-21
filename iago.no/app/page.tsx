import DataDisplay from '../components/DataDisplay'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full">
        <DataDisplay 
          title="Våre resultater i tall"
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
    </main>
  )
}
