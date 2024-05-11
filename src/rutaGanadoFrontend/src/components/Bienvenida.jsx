import React from 'react';
import "./style.css";

const Login = () => {
  return (
    <div className="frame" style={{backgroundImage: `url(panoramica-medellin-nocturna-1.png)`}}>
      <div className="overlap">
        <div className="text-wrapper">GlideNGO</div>
        <img className="logoapp" alt="Logoapp" src="logoapp-1.png" />
        {/**<img className="logo2" alt="Polygon" src="panoramica-medellin-nocturna-1.png" />*/}
      </div>
      <div className="div">Ingresa con Internet Identity</div>
    </div>
  );
};

export default Login;
