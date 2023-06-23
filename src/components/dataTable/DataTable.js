const DataTable = ({data}) => {

    const rows = data.map(pair => <tr><td>{new Date(pair.dateTime).getTime()}</td><td>{pair.value}</td></tr>);
    return (
        <table>
            {rows}
        </table>
    );
}

export default DataTable;