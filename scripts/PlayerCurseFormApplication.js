export default class PlayerCurseFormApplication extends FormApplication {
  constructor() {
    super();
  }

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ['form'],
      popOut: true,
      template: `modules/curse/templates/PlayerCurseFormApplication.html`,
      id: 'player-curse-application',
      title: 'Player Curse Configuration',
    });
  }

  getData() {
    return {
      players: game.users.players.map(player => ({
        name: player.name,
        id: player.id,
        power: 1
      }))
    };
  }

  activateListeners(html) {
    super.activateListeners(html);
  }

  async _updateObject(event, formData) {
    console.log(formData.exampleInput);
  }
}