import "./Loader.css";

export default function Loader() {
  return (
    <>
      {/* Fondo 3D */}
      <div className="grid-container">
        <div className="plane">
          <div className="grid"></div>
          <div className="glow"></div>
        </div>

        <div className="plane">
          <div className="grid"></div>
          <div className="glow"></div>
        </div>
      </div>

      {/* Loader centrado */}
      <div className="loader-container">
        <h1 className="loader-title">Bienvenido</h1>
        <div className="loader-bar">
          <div className="loader-fill"></div>
        </div>
      </div>
    </>
  );
}
