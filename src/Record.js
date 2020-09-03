class Record {
  constructor(
    album,
    artist,
    runtime,
    releaseYear,
    genre,
    hitSingle,
    hitSingleLink,
    medium,
    color
  ) {
    this.album = album;
    this.artist = artist;
    this.runtime = runtime;
    this.releaseYear = releaseYear;
    this.genre = genre;
    this.hitSingle = hitSingle;
    this.hitSingleLink = hitSingleLink;
    this.medium = medium || 'vinyl';
    this.color = color || "black";
  }

  play() {
    hitSingle
      ? alert(`${this.hitSingle} is a banger!`)
      : alert(`${this.artist} is wild!`);
  };
}

export default Record
