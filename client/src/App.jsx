import Card from "./Card";

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
      <div className="cards">
        {cards.map((card) => {
            return (
              <Card
                key={card.name}
                name={card.name}
                type={card.type}
                attack={card.attack}
                defense={card.defense}
              />
            );
        })}
      </div>

    </main>
  );
}

export default App;
