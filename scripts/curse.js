

Hooks.on("init", function () {
  let original = CONFIG.Dice.randomUniform;
  CONFIG.Dice.randomUniform = () => {
    return 1;
  }
  debugger
});
