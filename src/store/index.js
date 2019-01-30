import createContext from './createContext'

const initialState = {
  config: {
    name: 'helpbrumadinho',
    nav: [
      {
        text: 'Entenda o que aconteceu',
        path: '/understand'
      },
      {
        text: 'Contato',
        path: '/contact'
      }
    ],
    headline: 'Encontre os pontos de coleta mais próximos de você',
    typed: {
      speed: 50,
      loop: true,
      items: [
        'Após 5 dias presa na lama, vaca é\n resgatada viva em Brumadinho',
        'Número de mortos em Brumadinho sobe para\n 84, e 276 pessoas continuam desaparecidas',
        "'Havia meios de se evitar a tragédia', \ndiz juíza que mandou prender 5.",
        'Governo diz que nem todos os corpos\n soterrados serão resgatados',
        'Mar de lama destruiu casas',
        'Havia empregados da Vale no \nlocal atingido pelo rompimento',
        'Até o momento, mais de 26 animais foram \nresgatados e estão recebendo cuidados'
      ]
    },
    activeItem: undefined
  }
}

export { createContext, initialState }
