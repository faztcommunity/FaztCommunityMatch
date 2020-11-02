import React from "react"
import ContactSection from "../../molecules/footer/ContactSection"
import JoinSection from "../../molecules/footer/JoinSection"
import SupportSection from "../../molecules/footer/SupportSection"


function Footer() {
  return (
    <footer className="content-footer">
        <section className="content-footer-one">
        <JoinSection />
        <ContactSection />
        <SupportSection />
        </section>
        <div className="content-footer-two"></div>
    </footer>
  )
}

export default Footer
