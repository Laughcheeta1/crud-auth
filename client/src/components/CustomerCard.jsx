import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export default function CustomerCard({ customer }) {
    return (
        <div className="resultado-busqueda">
            <div className="flex gap-x-2 items-center">
                <p style={{ marginRight: "1rem" }} className="text-xl font-medium">
                    {customer.name}
                </p>
                    <button
                    className="btn btn-rojo"
                    onClick={() => {
                    deleteContainer(container._id);
                    }} >
                    Eliminar
                </button>
            </div>
            <p style={{ marginRight: "1rem" }} className="text-xl font-medium">
                {customer.phone}
            </p>
            <p style={{ marginRight: "1rem" }} className="text-xl font-medium">
                {customer.address}
            </p>
            <p style={{ marginRight: "1rem" }} className="text-xl font-medium">
                {customer.company_NIT}
            </p>
            <p className="text-sm">
                {dayjs(customer.updatedAt).utc().format("DD/MM/YY")}
            </p>
        </div>
    );
}