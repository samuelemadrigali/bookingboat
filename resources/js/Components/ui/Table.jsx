import useLocalization from "@/hooks/useLocalization";

function TableHeader({ columns }) {
    return (
        <thead>
            <tr className="bg-gray-200 dark:bg-gray-900 dark:bg-opacity-40 text-left">
                {columns.map((column, index) => (
                    <th key={index}>{column.label}</th>
                ))}
            </tr>
        </thead>
    );
}

function TableBody({ columns, data }) {
    const { t } = useLocalization();

    return (
        <tbody>
            {data.length === 0 ? (
                <tr>
                    <td colSpan={columns.length} className="text-center">
                        {t("table.no_data")}
                    </td>
                </tr>
            ) : (
                data.map((item, index) => (
                    <tr key={index}>
                        {columns.map((column, index) => (
                            <td key={index}>{item[column.key]}</td>
                        ))}
                    </tr>
                ))
            )}
        </tbody>
    );
}

function Table({ columns, data }) {
    return (
        <div className="overflow-auto">
            <table className="table-sorter table-bordered-bottom w-full text-gray-500 dark:text-gray-400 dataTable-table">
                <TableHeader columns={columns} />
                <TableBody columns={columns} data={data} />
            </table>
        </div>
    );
}

export default Table;
