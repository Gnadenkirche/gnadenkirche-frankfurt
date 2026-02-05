import { useTranslation } from "react-i18next";
import "./MediaBooks.css";

/* BOOK IMAGES */
import missionMp3 from "../assets/books/gemeinde-und-mission-hoerbuch.jpg";
import missionEbook from "../assets/books/gemeinde-und-mission-ebook.jpg";
import brautwerbungEbook from "../assets/books/biblische-brautwerbung-ebook.jpg";
import treueMaennerEbook from "../assets/books/treue-maenner-wer-findet-sie-ebook.jpg";
import eineFrauEbook from "../assets/books/eine-frau-die-zu-ruehmen-ist-ebook.jpg";
import treueMaennerPrint from "../assets/books/treue-maenner-wer-findet-sie-print.jpg";
import brautwerbungPrint from "../assets/books/biblische-brautwerbung-print.jpg";
import eineFrauPrint from "../assets/books/eine-frau-die-zu-ruehmen-ist-print.jpg";
import missionPrint from "../assets/books/gemeinde-und-mission-print.jpg";
import wahreDreiKoenige from "../assets/books/die-wahre-bedeutung-der-heiligen-drei-koenige.jpg";
import schlachtfeldGedankenwelt from "../assets/books/das-schlachtfeld-der-gedankenwelt.jpg";
import waffenruestungGottes from "../assets/books/die-waffenruestung-gottes.jpg";

export default function MediaBooks() {
  const { i18n } = useTranslation();
  const isGerman = i18n.language === "de";

  const books = [
    {
      title: "Gemeinde und Mission – eBook",
      image: missionEbook,
      link: "https://www.voh-shop.de/Gemeinde-und-Mission-eBook-Download.html"
    },
    {
      title: "Biblische Brautwerbung – eBook",
      image: brautwerbungEbook,
      link: "https://www.voh-shop.de/Biblische-Brautwerbung-eBook-Download.html"
    },
    {
      title: "Treue Männer – wer findet sie? – eBook",
      image: treueMaennerEbook,
      link: "https://www.voh-shop.de/Treue-Maenner-wer-findet-sie-eBook-Download.html"
    },
    {
      title: "Eine Frau, die zu rühmen ist – eBook",
      image: eineFrauEbook,
      link: "https://www.voh-shop.de/Eine-Frau-die-zu-ruehmen-ist-eBook-Download.html"
    },
    {
      title: "Treue Männer – wer findet sie?",
      image: treueMaennerPrint,
      link: "https://www.voh-shop.de/Treue-Maenner-wer-findet-sie.html"
    },
    {
      title: "Biblische Brautwerbung",
      image: brautwerbungPrint,
      link: "https://www.voh-shop.de/Biblische-Brautwerbung.html"
    },
    {
      title: "Eine Frau, die zu rühmen ist",
      image: eineFrauPrint,
      link: "https://www.voh-shop.de/Eine-Frau-die-zu-ruehmen-ist.html"
    },
    {
      title: "Gemeinde und Mission",
      image: missionPrint,
      link: "https://www.voh-shop.de/Gemeinde-und-Mission.html"
    },
    {
      title: "Die wahre Bedeutung der Heiligen Drei Könige",
      image: wahreDreiKoenige,
      link: "https://lichtzeichen-shop.com/buecher/evangelistische-literatur/35626/die-wahre-bedeutung-der-heiligen-drei-koenige"
    },
    {
      title: "Das Schlachtfeld der Gedankenwelt",
      image: schlachtfeldGedankenwelt,
      link: "https://prorege.de/produkt/das-schlachtfeld-der-gedankenwelt/"
    },
    {
      title: "Die Waffenrüstung Gottes",
      image: waffenruestungGottes,
      link: "https://prorege.de/produkt/die-waffenruestung-gottes/"
    }
  ];

  return (
    <div
      className={`media-books ${
        !isGerman ? "media-books-en" : ""
      }`}
    >
      <h2>
        {isGerman ? "Bücher von Peter Schild" : "Books by Peter Schild"}
      </h2>

      <div className="books-grid">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            <a
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="book-link"
            >
              <div className="book-image-wrapper">
                <img src={book.image} alt={book.title} loading="lazy" />
              </div>

              <h3 className="book-title">{book.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

