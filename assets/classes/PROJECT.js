export default class PROJECT {
  constructor(id, name, description, bg, live, code) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.bg = bg;
    this.live = live;
    this.code = code;
  }

  // Setters
  set setId(id) {
    this.id = id;
  }
  set setName(name) {
    this.name = name;
  }
  set setDescription(description) {
    this.description = description;
  }
  set setBg(bg) {
    this.bg = bg;
  }
  set setLive(live) {
    this.live = live;
  }
  set setCode(code) {
    this.code = code;
  }

  // Getters
  get getId() {
    return this.id;
  }
  get getName() {
    return this.name;
  }
  get getDescription() {
    return this.description;
  }
  get getBg() {
    return this.bg;
  }
  get getLive() {
    return this.live;
  }
  get getCode() {
    return this.code;
  }

  displayProject() {
    return (
      "ID: " +
      this.getId +
      "\nName: " +
      this.getName +
      "\nDescription: " +
      this.getDescription +
      "\nBackground: " +
      this.getBg +
      "\nLive URL: " +
      this.getLive +
      "\nCode URL: " +
      this.getCode
    );
  }
}
