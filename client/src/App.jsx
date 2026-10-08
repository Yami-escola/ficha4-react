// PONTO DE PARTIDA DA AULA 4
//
// É exatamente onde o professor acabou o live coding do Bloco 1:
// uma app React criada com o Vite, já sem o código de exemplo.
//
// Para pôr a correr (dentro da pasta client/ do teu repo):
//     npm install
//     npm run dev
// e abrir http://localhost:5173
//
// Tarefa 1: substitui este array vazio pelo array cards do teu server
// (o que fizeste na aula 2).
const cards = [
  { name: "Cristiano Ronaldo", type: "Atacante", attack: 10, defense: 3 },
  { name: "Lionel Messi", type: "Atacante", attack: 9, defense: 3 },
  { name: "De Bruyne", type: "Médio", attack: 8, defense: 5 },
  { name: "Sergio Ramos", type: "Defesa", attack: 4, defense: 10 },
  { name: "Neuer", type: "Guarda-Redes", attack: 1, defense: 10 },
];

function App() {
  return (
    <main>
      <h1>A minha coleção</h1>
    </main>
  );
}

export default App;
