const herois = [
  { nome: "Thor", xp: 3100 },
  { nome: "Loki", xp: 9500 },
  { nome: "Hulk", xp: 12000 }
];

for (const heroi of herois) {
  let nivel = "";
  const xp = heroi.xp;

  if (xp <= 1000) {
    nivel = "Ferro";
  } else if (xp <= 2000) {
    nivel = "Bronze";
  } else if (xp <= 5000) {
    nivel = "Prata";
  } else if (xp <= 7000) {
    nivel = "Ouro";
  } else if (xp <= 8000) {
    nivel = "Platina";
  } else if (xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);
}
