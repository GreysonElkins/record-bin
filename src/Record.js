class Record {
  constructor(
    album,
    artist,
    runtime,
    releaseYear,
    genre,
    hitSingle,
    hitSingleLink,
    color,
    medium
  ) {
    this.album = album;
    this.artist = artist;
    this.runtime = runtime;
    this.releaseYear = releaseYear;
    this.genre = genre;
    this.hitSingle = hitSingle;
    this.hitSingleLink = hitSingleLink;
    this.color = color || "black";
    this.medium = medium || 'vinyl';
    this.id = this.getId()
  }

  getId(record = this) {
    const id = record.releaseYear + record.album.split(" ")[0] + record.runtime
    return id
  }

  play() {
    hitSingle
      ? alert(`${this.hitSingle} is a banger!`)
      : alert(`${this.artist} is wild!`);
  }
}

export default Record
