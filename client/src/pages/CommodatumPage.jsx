import { useEffect } from "react";
import { useCommodatums } from "../context/CommodatumContext";
import CommodatumCard from "../components/CommodatumCard";
import BarraBusqueda from "../components/BarraBusqueda";
import "../styles/busqueda.css";

export default function CommodatumPage() {
  const { getCommodatums, commodatum } = useCommodatums();

  useEffect(() => {
    getCommodatums();
  }, []);

  return (
    <>
      <h1 className="search-page-title">
        <svg
          style={{ marginRight: "1rem" }}
          width="67px"
          height="67px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M14 14H17M14 10H17M9 9.5V8.5M9 9.5H11.0001M9 9.5C7.20116 9.49996 7.00185 9.93222 7.0001 10.8325C6.99834 11.7328 7.00009 12 9.00009 12C11.0001 12 11.0001 12.2055 11.0001 13.1667C11.0001 13.889 11.0001 14.5 9.00009 14.5M9.00009 14.5L9 15.5M9.00009 14.5H7.0001M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
        Buscar Comodatos
      </h1>

      <BarraBusqueda placeholder="Buscar por número" route="new" />

      <div className="container-resultados">
        <h2 style={{ fontSize: "26px" }}>Comodatos</h2>

        <hr
          style={{
            marginBottom: ".6rem",
            height: "1px",
            border: "none",
            backgroundColor: "rgba(18, 55, 105, 0.10)",
          }}
        />
        {commodatum.map((commodatum) => (
          <CommodatumCard commodatum={commodatum} key={commodatum._id} />
        ))}
      </div>
    </>
  );
}
