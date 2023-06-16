import PlayerCurseFormApplication from "./PlayerCurseFormApplication.js";

Hooks.on("init", function () {
  let original = CONFIG.Dice.randomUniform;
  CONFIG.Dice.randomUniform = () => {
    return 1;
  }

  game.settings.registerMenu("curse", "curse-config", {
    name: "Configure Curses",
    label: "Configure",
    hint: "Add or remove curses from players' dice rolls. Only you can see this menu.",
    icon: "fas fa-dice-d20",
    type: PlayerCurseFormApplication,
    restricted: true
  });

});
