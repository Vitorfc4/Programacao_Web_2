export default function Hero({ name, imageUrl }) {
  return (
    <header className="hero">
      <div className="hero-inner">
        <div className="avatar">
          <img src={imageUrl} alt="Foto de perfil" />
        </div>

        <div className="hero-text">
          <h1>{name}</h1>
          <p>
            Sou estudante de tecnologia, apaixonado por programação e segurança da
            informação. Quero viajar o mundo, aprender coisas novas e evoluir
            sempre — construindo projetos, explorando ideias e me desafiando a
            cada passo.
          </p>
        </div>
      </div>
    </header>
  );
}
