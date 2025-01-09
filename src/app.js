// Definición de los palos (símbolos) de las cartas
const palos = [
  { nombre: "corazones", simbolo: "\u2665" }, // ♥
  { nombre: "diamantes", simbolo: "\u2666" }, // ♦
  { nombre: "tréboles", simbolo: "\u2663" }, // ♣
  { nombre: "picas", simbolo: "\u2660" } // ♠
];

// Definición de los valores (números o letras) de las cartas
const valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

// Función para obtener una carta aleatoria
function obtenerCartaAleatoria() {
  // Elegir un palo aleatorio
  const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
  // Elegir un valor aleatorio
  const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];
  return { palo: paloAleatorio, valor: valorAleatorio };
}

// Función para mostrar la carta aleatoria en la pantalla
function mostrarCartaAleatoria() {
  const carta = obtenerCartaAleatoria();
  const elementoCarta = document.getElementById("cartaAleatoria");
  const numeroCentro = elementoCarta.querySelector(".numero-centro");
  const simboloSuperiorIzquierda = elementoCarta.querySelector(
    ".simbolo-superior-izquierda"
  );
  const simboloInferiorDerecha = elementoCarta.querySelector(
    ".simbolo-inferior-derecha"
  );

  // Asignar las clases de estilo según el palo de la carta
  elementoCarta.className = `carta-poker ${carta.palo.nombre}`;

  // Mostrar el valor (número/letra) en el centro
  numeroCentro.textContent = carta.valor;

  // Mostrar el símbolo en las esquinas superior izquierda e inferior derecha
  simboloSuperiorIzquierda.textContent = carta.palo.simbolo;
  simboloInferiorDerecha.textContent = carta.palo.simbolo;
}
