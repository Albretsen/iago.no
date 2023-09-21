type DataSet = {
    suffix: string;
    label: string;
    number: string;
};

type DataDisplayProps = {
    title: string;
    dataSets: Array<DataSet>;
}

export default function DataDisplay({title, dataSets} : DataDisplayProps) {
    return (
        <div>
            <div>{title}</div>
            {dataSets.map((obj: DataSet) => (
                <div>
                    <span className="text-font-color">{obj.number}</span>
                    <span className="text-light-color">{obj.suffix}</span>
                </div>
            ))}
        </div>

    )
}