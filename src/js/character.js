export class Character {

  constructor(charId) {
    this.charId = charId;
    this.pictures = [];
  }

  async fetchChar() {
    try {
      let response = await fetch(`https://api.jikan.moe/v3/character/${this.charId}/pictures`);
      let jsonifiedResponse = await response.json();
      this.pictures = jsonifiedResponse.pictures;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }

  getId() {
    return this.charId;
  }

  getPictures() {
    return this.pictures;
  }

  displayPictures() {
    console.log("???????????????");
    this.pictures.forEach(function(picture) {
      console.log(picture.large);
    });
  }
}
