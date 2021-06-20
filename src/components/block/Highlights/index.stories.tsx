import React from "react";
import { Meta, Story } from "@storybook/react";
import Highlights from "./";
import { Movie } from "shared/types";
import { Props } from "./types";

export default {
  title: "Components/Highlights",
  component: Highlights,
} as Meta;

const movies: Movie[] = [
  {
    backdrop_path: "https://image.tmdb.org/t/p/w300/huzHIuaWRMDIAB8jIXYAwE7CJzS.jpg",
    id: 337404,
    overview:
      "Na Londres dos anos 70 em meio à revolução do punk rock, Estella, uma garota inteligente e criativa determinada a fazer um nome para si através de seus designs. Ela faz amizade com uma dupla de jovens ladrões e, juntos, constroem uma vida para si nas ruas de Londres. Um dia, o talento de Estella para a moda chama a atenção da Baronesa Von Hellman, uma lenda fashion que é devastadoramente chique e assustadora. Mas o relacionamento delas desencadeia um curso de eventos e revelações que farão com que Estella abrace seu lado rebelde e se torne a Cruella má, elegante e voltada para a vingança.",
    poster_path: "/ljPHd7WiPVKmuXi1hgQUpZQslbC.jpg",
    title: "Cruella",
  },
  {
    backdrop_path: "https://image.tmdb.org/t/p/w300/z2UtGA1WggESspi6KOXeo66lvLx.jpg",
    id: 520763,
    overview:
      "Logo após os acontecimentos mortais, até mesmo dentro de casa, a família Abbott precisa agora encarar o terror mundo afora, continuando a lutar para sobreviver em silêncio. Obrigados a se aventurar pelo desconhecido, eles rapidamente percebem que as criaturas que caçam pelo som não são as únicas ameaças que os observam pelo caminho de areia.",
    poster_path: "/wYqmuxd9jNFLf3gtQY5vbAUgiGk.jpg",
    title: "Um Lugar Silencioso - Parte II",
  },
  {
    backdrop_path: "https://image.tmdb.org/t/p/w300/70AV2Xx5FQYj20labp0EGdbjI6E.jpg",
    id: 637649,
    overview:
      "Harry, conhecido apenas como H, é um homem misterioso que trabalha para uma empresa de carros-fortes e movimenta grandes quantias de dinheiro pela cidade de Los Angeles. Quando, ao impedir um assalto, ele surpreende a todos com suas habilidades de combate, suas verdadeiras intenções começam a ser questionadas e um plano maior é revelado.",
    poster_path: "/zc2axS7hU4zAWdcPcNhpMPRlumX.jpg",
    title: "Infiltrado",
  },
  {
    backdrop_path: "https://image.tmdb.org/t/p/w300/gr2bdQ12cK4VA7EaIgtmDcbdALP.jpg",
    id: 423108,
    overview:
      "Revela uma história arrepiante de terror, assassinato e um mal desconhecido que chocou até os investigadores paranormais da vida real, Ed e Lorraine Warren. Um dos casos mais intrigantes de seus arquivos, começa com uma luta pela alma de um garoto, depois os leva além de tudo o que já haviam visto antes, para marcar a primeira vez na história dos EUA um suspeito de assassinato alega possessão demoníaca como defesa.",
    poster_path: "/8jBgDFFDYz8WHxiOBJ7GBiMM6Pe.jpg",
    title: "Invocação do Mal 3: A Ordem do Demônio",
  },
  {
    backdrop_path: "https://image.tmdb.org/t/p/w300/5HjzYTihkH7EvOWSE7KcsF6pBMM.jpg",
    id: 522478,
    overview:
      "Bea, Thomas e os coelhos construíram uma familia improvisada. Quando o coelho arteiro decide se aventurar para além do jardim, encontra um mundo onde não é mais o protagonista rebelde e suas travessuras não são admiráveis. Agora, sua familia arrisca tudo para conseguir achá-lo, enqunato ele encara uma jornada de autoconhecimento.",
    poster_path: "/pxdSJCpqMOp3gakScrzHgGDEvVr.jpg",
    title: "Pedro Coelho 2: O Fugitivo",
  },
];

const Template: Story<Props> = (args) => <Highlights {...args} />;

export const Default = Template.bind({});
Default.args = {
  movieList: movies,
};
