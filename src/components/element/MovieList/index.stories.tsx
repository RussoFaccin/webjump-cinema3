import React from "react";
import { Meta, Story } from "@storybook/react";
import { Props } from './types';
import MovieList from "./";

export default {
  title: "Components/MovieList",
  component: MovieList
} as Meta;

const Template: Story<Props> = (args) => <MovieList {...args} />

export const Default = Template.bind({});
Default.args = {
    title: "Movies",
    movies: [
        {
          backdrop_path: "/6ELCZlTA5lGUops70hKdB83WJxH.jpg",
          id: 460465,
          overview:
            "Nova aventura baseada no videogame Mortal Kombat. Na história, um jovem que nunca treinou artes marciais acaba envolvido em um gigantesco torneio de luta envolvendo guerreiros da Terra e lutadores e outras dimensões.",
          poster_path: "https://image.tmdb.org/t/p/w154/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg",
          title: "Mortal Kombat",
        },
        {
          backdrop_path: "/fPGeS6jgdLovQAKunNHX8l0avCy.jpg",
          id: 567189,
          overview:
            "Um agente da CIA busca vingança depois de sua namorada ter sido morta por um traficante de Baltimore.",
          poster_path: "https://image.tmdb.org/t/p/w154/uHEZ4ZMziIjlAgCTQAEh9ROvtj0.jpg",
          title: "Sem Remorso",
        },
        {
          backdrop_path: "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
          id: 399566,
          overview:
            "Em uma época em que os monstros andam na Terra, a luta da humanidade por seu futuro coloca Godzilla e Kong em rota de colisão que verá as duas forças mais poderosas da natureza no planeta se confrontarem em uma batalha espetacular para as idades. Enquanto Monarch embarca em uma missão perigosa em terreno desconhecido e descobre pistas sobre as origens dos Titãs, uma conspiração humana ameaça tirar as criaturas, boas e más, da face da terra para sempre.",
          poster_path: "https://image.tmdb.org/t/p/w154/klAIFewuqcyEmH1SMtR2XbMyqzM.jpg",
          title: "Godzilla vs. Kong",
        },
        {
          backdrop_path: "/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg",
          id: 615457,
          overview:
            "Quando dois ladrões invadem sua casa no subúrbio uma noite, Hutch se recusa a defender a si mesmo ou a sua família, na esperança de evitar violência grave. Seu filho adolescente, Blake, está desapontado com ele e sua esposa, Becca, parece se afastar ainda mais.  Em consequência, o incidente acerta a raiva latente de Hutch, desencadeando instintos adormecidos e impulsionando-o em um caminho brutal que revelará segredos obscuros e habilidades letais para salvar sua família.",
          poster_path: "https://image.tmdb.org/t/p/w154/woPYFGKwVULILbO7q44HmsNY0kO.jpg",
          title: "Anônimo",
        },
        {
          backdrop_path: "/c7dFSqZQYqNNJVpacpIGZe3gkLW.jpg",
          id: 813258,
          overview:
            "Em Monster Pets (Monstros de Companhia), o cão Tinkles dá o seu melhor para arranjar um amigo",
          poster_path: "https://image.tmdb.org/t/p/w154/dkokENeY5Ka30BFgWAqk14mbnGs.jpg",
          title: "Pets Monstruosos",
        },
        {
          backdrop_path: "/n2y7T8wJVjJ8yLhQXQgNCpsC3ga.jpg",
          id: 811367,
          overview:
            "Antes dos eventos de “Soul” da Pixar, 22 se recusa a ir para a Terra, e recruta uma gangue de 5 outras novas almas em uma tentativa de rebelião. No entanto, enquanto as atividades de seus recrutas acabam levando a resultados inesperados, a conspiração subversiva de 22 pode levar a uma revelação surpreendente sobre o significado da vida.",
          poster_path: "https://image.tmdb.org/t/p/w154/yXhjueyyNNrGinwM9WIxuwNqzbm.jpg",
          title: "22 Contra a Terra",
        },
        {
          backdrop_path: "/lHhc60NXYzswU4TvKSo45nY9Jzs.jpg",
          id: 726684,
          overview:
            "Ladybug decide visitar seu tio em Xangai, mas quando chega a cidade acaba sendo roubada e os ladrões levam sua bolsa com o Tikki. Sem dinheiro e sozinha na cidade, a heroína aceita a ajuda de uma jovem inteligente chamada Fei. As duas então se juntam em uma grande aventura e descobrem e existência de uma nova joia poderosa.",
          poster_path: "https://image.tmdb.org/t/p/w154/ya7FEBw9ErnaUWNvChJBgEERHzb.jpg",
          title: "Miraculous World Shanghai, a lenda de Ladydragon",
        },
        {
          backdrop_path: "/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
          id: 791373,
          overview:
            "Determinado a garantir que o sacrifício final do Superman não foi em vão, Bruce Wayne alinha forças com Diana Prince com planos de recrutar uma equipe de metahumanos para proteger o mundo de uma ameaça de proporções catastróficas que se aproxima.",
          poster_path: "https://image.tmdb.org/t/p/w154/ArWn6gCi61b3b3hclD2L0LOk66k.jpg",
          title: "Liga da Justiça de Zack Snyder",
        },
        {
          backdrop_path: "/7prYzufdIOy1KCTZKVWpjBFqqNr.jpg",
          id: 527774,
          overview:
            "O reino encantado Kumandra é dividido em cinco regiões e sua população venerava os dragões mágicos que eram presentes no reino, porém quando uma força maligna ameaçou a Terra, os dragões se sacrificaram para salvar a humanidade. Agora, 500 anos depois, o mesmo mal voltou e cabe a uma guerreira solitária, Raya, rastrear o lendário último dragão para restaurar a terra fraturada e seu povo dividido.",
          poster_path: "https://image.tmdb.org/t/p/w154/yXrb84zJidCefyhTWHwo4yCDvwz.jpg",
          title: "Raya e o Último Dragão",
        },
        {
          backdrop_path: "/5Zv5KmgZzdIvXz2KC3n0MyecSNL.jpg",
          id: 634528,
          overview:
            "Um fazendeiro na fronteira do Arizona se torna o improvável defensor de um jovem mexicano que foge desesperadamente dos assassinos do cartel que o perseguiram até os EUA.",
          poster_path: "https://image.tmdb.org/t/p/w154/wAJniojhHa4oVKa9AxdNwvpmS74.jpg",
          title: "Na Mira do Perigo",
        },
        {
          backdrop_path: "/z7HLq35df6ZpRxdMAE0qE3Ge4SJ.jpg",
          id: 615678,
          overview:
            "Em um mundo cheio de supervilões, duas melhores amigas de infância se reaproximam quando uma delas inventa um tratamento capaz de dar poderes para que protejam a cidade.",
          poster_path: "https://image.tmdb.org/t/p/w154/Aej7rR73kpAKce6XXBLeqijAwPD.jpg",
          title: "Esquadrão Trovão",
        },
        {
          backdrop_path: "/ovggmAOu1IbPGTQE8lg4lBasNC7.jpg",
          id: 412656,
          overview:
            "Em um futuro não muito distante, em um mundo onde as mulheres desapareceram e os homens foram afetados pelo “ruído” – uma força que deixa seus pensamentos audíveis – Todd Hewitt encontra Viola, uma jovem misteriosa que aterrissou em seu planeta. Com Viola correndo perigo, Todd jura protegê-la e colocá-la fora de perigo. Para salvá-la, Todd terá que controlar seu “ruído”, descobrir sua própria força e desvendar todos os segredos sombrios que seu planeta e sua comunidade guardam.",
          poster_path: "https://image.tmdb.org/t/p/w154/7poSpsfrnhxjVN2uRmemd76ASvS.jpg",
          title: "Mundo em Caos",
        },
      ]
}