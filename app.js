
const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/voltar", (req, res) => {
  res.render("index");
});

// Exercicio 1

app.get("/exercicio1", (req, res) => {
  res.render("exercicio1", { faixa: "" });
});

app.post("/faixa", (req, res) => {
  let idade = req.body.idade;

  if (idade < 0) {
    res.render("exercicio1", { faixa: "CrColoque uma idade maior que 0" });
  } else {
    if (idade < 15) {
      res.render("exercicio1", { faixa: "Criança" });
    } else {
      if (idade < 30) {
        res.render("exercicio1", { faixa: "Jovem" });
      } else {
        if (idade < 60) {
          res.render("exercicio1", { faixa: "Adulto" });
        } else {
          res.render("exercicio1", { faixa: "Idoso" });
        }
      }
    }
  }
});

// Exercicio 2

app.get("/exercicio2", (req, res) => {
  res.render("exercicio2", { resposta: "" });
});

app.post("/nota", (req, res) => {
  let atvLab = req.body.atvLab;
  let provaSemestre = req.body.provaSemestre;
  let trabalhoTeorico = req.body.trabalhoTeorico;

  let classificacao;

  const pesoAtvLab = 2;
  const pesoProvaSemestre = 5;
  const pesoTrabalhoTeorico = 3;

  media =
    (pesoAtvLab * atvLab +
      pesoProvaSemestre * provaSemestre +
      pesoTrabalhoTeorico * trabalhoTeorico) /
    (pesoAtvLab + pesoProvaSemestre + pesoTrabalhoTeorico);

  media = (Math.round(num * 100) / 100).toFixed(2);

  if (media <= 5) {
    classificacao = "F";
  } else if (media <= 6) {
    classificacao = "E";
  } else if (media <= 7) {
    classificacao = "D";
  } else if (media <= 8) {
    classificacao = "C";
  } else if (media <= 9) {
    classificacao = "B";
  } else {
    classificacao = "A";
  }

  res.render("exercicio2", {
    resposta: `A média do Aluno é =${media} e a sua classificação é ${classificacao}`,
  });
});

// Exercicio 3

app.get("/exercicio3", (req, res) => {
  res.render("exercicio3", { nome: "", sobreNome: "", idade: "", pais: "" });
});

app.post("/info", (res, req) => {
  nome = req.body.nome;
  sobreNome = req.body.sobreNome;
  idade = req.body.idade;
  pais = req.body.pais;
  res.render("exercicio3", {
    nome: nome,
    sobreNome: sobreNome,
    idade: idade,
    pais: pais,
  });
});

app.listen("3000", () => console.log("Servidor iniciado"));
