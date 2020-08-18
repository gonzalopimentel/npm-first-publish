import MediaPlayer from "../MediaPlayer";

class AutoPause {
  private threshold: number;
  player: MediaPlayer;

  constructor() {
    this.threshold = 0.25;
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  run(player: MediaPlayer) {
    this.player = player;
    // const observer = new IntersectionObserver(handler, config)
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold, // Umbral
    });

    observer.observe(this.player.media); // setting the viewport

    document.addEventListener("visibilitychange", this.handleVisibilityChange); // checking the event and handle it
  }

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];

    const isVisible = entry.intersectionRatio >= this.threshold;

    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  private handleVisibilityChange() {
    const isVisible = document.visibilityState === "visible";
    if (isVisible) {
      this.player.play(); // "this" is pointing to the object who executed it, the addEventListener
    } else {
      this.player.pause();
    }
  }
}

export default AutoPause;
