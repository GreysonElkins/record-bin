import Record from "./Record"

class Vinyl extends Record {
  constructor(
    album,
    artist,
    runtime,
    releaseYear,
    genre,
    hitSingle,
    hitSingleLink,
    color,
    speed,
    isGatefold,
    diskCount
  ) {
    super(
      album,
      artist,
      runtime,
      releaseYear,
      genre,
      hitSingle,
      hitSingleLink,
      color
    );
    this.speed = speed || 33;
    this.isGatefold = isGatefold || false;
    this.diskCount = diskCount || 1;
  }
}

export default Vinyl;
