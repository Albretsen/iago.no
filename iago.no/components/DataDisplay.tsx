type DataSet = {
    suffix: string;
    label: string;
    number: string;
};

type DataDisplayProps = {
    dataSets: Array<DataSet>;
}

export default function DataDisplay({dataSets} : DataDisplayProps) {
    return (
        <div className="flex flex-row justify-evenly w-full flex-wrap gap-16">
            {dataSets.map((obj: DataSet) => (
                <div className="flex-grow text-center w-40">
                    <div className="text-3xl font-bold">
                        <span className="text-font-color">{obj.number}</span>
                        <span className="text-light-color">{obj.suffix}</span>
                    </div>
                    <p className="text-font-color text-base font-bold">{obj.label}</p>
                </div>
            ))}
        </div>
    )
}