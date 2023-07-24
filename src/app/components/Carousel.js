
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/IndexPage.module.css";

export default function Carousel() {
  return (
    <div className={styles.containerslide}>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src="/Slideshow/slide1.jpg"
              className="d-block w-100 h-100"
              alt="..."
              width={1000}
              height={836}
            />
          </div>
          <div className="carousel-item">
            <Image src="/Slideshow/2.jpg" 
               className="d-block w-100 h-100"
               alt="..."
               width={1000}
               height={836}
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/Slideshow/slide3.jpg"
              className="d-block w-100 h-100"
              alt="..."
              width={1000}
              height={836}
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/Slideshow/slide5.jpg"
              className="d-block w-100 h-100"
              alt="..."
              width={1000}
              height={836}
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/Slideshow/slide6.jpg"
              className="d-block w-100 h-100"
              alt="..."
              width={1000}
              height={836}
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/Slideshow/slide7.jpg"
              className="d-block w-100 h-100"
              alt="..."
              width={1000}
              height={836}
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/Slideshow/slide8.jpg"
              className="d-block w-100 h-100"
              alt="..."
              width={1000}
              height={836}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
