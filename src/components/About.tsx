type AboutProps = {
  emailLink: string
}

export default function About({ emailLink }: AboutProps) {
  return (
    <section className='about' id='about'>
      <div className='about-intro'>
        <p className='about-label'>About</p>
        <h2 className='about-title'>Rooted in Afrocentrism, spirituality and feminine presence.</h2>
        <p className='about-lead'>
          I am a Nigerian artist whose practice moves across painting, draughtsmanship, art education, poetry, music and
          theatre. My artistry explores spirituality, life's uncertainties, femininity, mysticism and nature's
          beauty in Afrocentric flavours.
        </p>
      </div>

      <div className='about-grid'>
        <article className='about-card about-card-statement'>
          <p className='about-card-label'>Practice</p>
          <p className='about-card-copy'>
            I create work that reconciles the human and the supernatural while remaining attentive to the ordinary,
            intimate and lived details of everyday life.
          </p>
        </article>

        <article className='about-card about-card-influence'>
          <p className='about-card-label'>Influence</p>
          <ul className='about-list'>
            <li>The Uli metaphor from South-eastern Nigeria</li>
            <li>Spirituality and mysticism</li>
            <li>Femininity and feminism</li>
            <li>Nature and emotional memory</li>
          </ul>
        </article>

        <article className='about-card about-card-location'>
          <p className='about-card-label'>Based in</p>
          <p className='about-card-copy'>Nigeria — available for exhibitions, performances and collaborations.</p>
          <a className='about-link' href={emailLink}>
            Enquire via email
          </a>
        </article>
      </div>
    </section>
  )
}