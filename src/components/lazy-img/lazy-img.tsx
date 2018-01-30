import {Component, Element, Event, EventEmitter, Prop, State} from '@stencil/core';

/*
  You can use this component to lazy load below the fold images to improve load time.
  Below the fold images are images that are not seen by the user until they have started to scroll.
  Instead of loading all these images up front before the user even sees them, which will eat up
  network bandwith, we can use this component to put off loading these images until the user has
  scrolled to where that image is in your PWA.
  To use this component use the following markup: <lazy-img src={/path/to/img} alt={alt text for img}></lazy-img>
*/

@Component({
  tag: 'lazy-img',
  styleUrl: 'lazy-img.scss'
})
export class LazyImg {

  @Element() el: HTMLElement;

  @Prop() src: string;
  @Prop() alt: string;

  @State() oldSrc: string;

  @Event() lazyImgloaded: EventEmitter<HTMLImageElement>;

  io: IntersectionObserver;

  componentDidLoad() {
    this.addIntersectionObserver();
  }

  componentWillUpdate() {
    if (this.src !== this.oldSrc) {
      this.addIntersectionObserver();
    }
    this.oldSrc = this.src;
  }

  handleImage() {
    const image: HTMLImageElement = this.el.querySelector('img');
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
      image.removeAttribute('data-src');
      this.lazyImgloaded.emit(image);
    };
  }

  addIntersectionObserver() {
    if (!this.src) {
      return;
    }
    if ('IntersectionObserver' in window) {
      this.io = new IntersectionObserver((data: any) => {
        // because there will only ever be one instance
        // of the element we are observing
        // we can just use data[0]
        if (data[0].isIntersecting) {
          this.handleImage();
          this.removeIntersectionObserver();
        }
      })

      this.io.observe(this.el.querySelector('img'));
    } else {
      // fall back to just loading the image for Safari and IE
      this.handleImage();
    }
  }

  removeIntersectionObserver() {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }

  render() {
    return (
      <img data-src={this.src} alt={this.alt}></img>
    );
  }
}
