export default class HeroSheet extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      template: "systems/emberwind-system/templates/sheets/HeroSheet.html",
      classes: []
    })
  }
}
