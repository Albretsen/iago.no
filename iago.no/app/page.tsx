import DataDisplay from '../components/DataDisplay'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <DataDisplay 
          title="tsests"
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
        ]}
        />
        <p className="text-blue-400">Hello</p>
      </div>
    </main>
  )
}
