import React from "react"
import ContactSection from "../../molecules/footer/ContactSection"
import JoinSection from "../../molecules/footer/JoinSection"
import LastSection from "../../molecules/footer/LastSection"
import PrincipalSection from "../../molecules/footer/PrincipalSection"
import SupportSection from "../../molecules/footer/SupportSection"


function Footer() {
  return (
    <footer className="content-footer">
        <section className="content-footer-one">
        <PrincipalSection />
        <JoinSection />
        <ContactSection />
        <SupportSection />
        </section>
        <div className="content-footer-two">
        <LastSection />
        </div>
    </footer>
  )
}

export default Footer
