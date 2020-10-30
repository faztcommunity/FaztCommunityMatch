import BtonCreateTest from '../../atoms/profile/BtonCreateTest'
import TitleCreateTest from '../../atoms/profile/TitleCreateTest'

function SectionTestUser() {
  return (
    <>
      <span className="line-hover-test-on"></span>
      <h2 className="title-section-test">Resultado Test</h2>
      <div className="content-section-test">
        <section className="section-test">
          <TitleCreateTest />
          <BtonCreateTest />
        </section>
      </div>
    </>
  )
}

export default SectionTestUser
