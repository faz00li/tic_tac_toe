export class fetchChar {
  async fetchChar(charId) {

    try {
      let response = await fetch(`https://api.jikan.moe/v3/character/${charId}/pictures`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
