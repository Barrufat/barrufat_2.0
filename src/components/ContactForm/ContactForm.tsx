import { LegacyRef, useRef } from "react";
import emailjs from "@emailjs/browser";
import { SiGithub, SiLinkedin, SiFreelancer } from "react-icons/si";
import { useTranslation } from "react-i18next";
import ContactFormStyled from "./ContactFormStyled";
import Reveal from "../Reveal/Reveal";

export const ContactForm = () => {
  const form = useRef();

  const [t] = useTranslation("global");

  const sendEmail = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_9d44a08",
        "template_s2fe2q4",
        form.current as unknown as HTMLFormElement,
        "VoubygS4yngKOPN0L"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <img src="./hexagon2.svg" alt="bg-hexagon" width="100%" height="auto" />
      <ContactFormStyled id="contact">
        <div className="section__title-wrapper">
          <div className="section__detail-line" />
          <div className="section__title-detail-wrapper">
            <Reveal movement={"bottom"} hasColorWrapper={true}>
              <span className="section__title section__title--detail">
                {t("contactMeTitle1")}
              </span>
            </Reveal>
            <Reveal movement={"bottom"} hasColorWrapper={true}>
              <span className="section__title"> {t("contactMeTitle2")}</span>
            </Reveal>
          </div>
        </div>
        <Reveal movement={"bottom"} hasColorWrapper={true}>
          <p className="contact-form__text">
            {t("contactMe2")}
            <a
              className="contact-form__link"
              href="https://github.com/Barrufat"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            {t("contactMe2.1")}
            <a
              className="contact-form__link"
              href="https://www.linkedin.com/in/alex-barbero-arrufat/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            {t("contactMe2.2")}
          </p>
        </Reveal>
        <form
          className="contact-form__wrapper"
          ref={form as unknown as LegacyRef<HTMLFormElement>}
          onSubmit={sendEmail}
        >
          <Reveal movement={"bottom"} hasColorWrapper={true}>
            <label className="contact-form__label">{t("contactMe3")}</label>
          </Reveal>
          <Reveal movement={"bottom"} hasColorWrapper={true} width="100%">
            <input
              className="contact-form__input"
              type="text"
              name="user_name"
            />
          </Reveal>
          <Reveal movement={"bottom"} hasColorWrapper={true}>
            <label className="contact-form__label">{t("contactMe4")}</label>
          </Reveal>
          <Reveal movement={"bottom"} hasColorWrapper={true} width="100%">
            <input
              className="contact-form__input"
              type="email"
              name="user_email"
            />
          </Reveal>
          <Reveal movement={"bottom"} hasColorWrapper={true}>
            <label className="contact-form__label">{t("contactMe6")} </label>
          </Reveal>
          <Reveal movement={"bottom"} hasColorWrapper={true} width="100%">
            <textarea className="contact-form__textarea" name="message" />
          </Reveal>
          <Reveal movement={"bottom"} hasColorWrapper={false} width="100%">
            <button className="contact-form__button" type="submit">
              {t("contactMe5")}
            </button>
          </Reveal>
        </form>
      </ContactFormStyled>
    </>
  );
};

export default ContactForm;
