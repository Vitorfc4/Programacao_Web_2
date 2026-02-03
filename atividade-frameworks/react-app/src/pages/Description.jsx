export default function Description() {
  return (
    <main className="page-section">
      <div className="page-inner">
        <h2>Descrição</h2>

        <p>
          Esta é uma aplicação simples criada para a disciplina de Programação Web II
          (ADS 2025.2). A ideia é replicar um layout de página pessoal com um menu de navegação
          e uma listagem de posts.
        </p>

        <h3>O que foi usado</h3>
        <ul>
          <li>React + Vite</li>
          <li>React Router (rotas: Blog, Sobre e Descrição)</li>
          <li>Componentização (Navbar, Hero, PostList, Footer)</li>
        </ul>

        <h3>Como funciona</h3>
        <p>
          A página Blog mostra um “hero” com foto e biografia e uma lista de posts.
          As páginas Sobre e Descrição são telas extras para demonstrar navegação
          entre rotas.
        </p>
      </div>
    </main>
  );
}
