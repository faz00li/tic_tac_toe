


export class Card {
  constructor(cardId, picURL) {
    this.cardId = cardId;
    this.picURL = picURL;
  }
  getId() {
    return this.cardId;
  }
  getPic() {
    return this.picURL;
  }
}
