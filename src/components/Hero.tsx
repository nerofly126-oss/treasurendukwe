import type { ImageAsset } from '../types/artwork'

type HeroProps = {
  heroBanner: ImageAsset
  heroPortrait: string
  emailAddress: string
  emailLink: string
}

export default function Hero({ heroBanner, heroPortrait, emailAddress, emailLink }: HeroProps) {
  return (
    <section className='hero' id='home'>
      <div className='hero-panel'>
        <div className='hero-copy-panel'>
          <div className='hero-copy-top'>
            <p className='hero-signature'>Tre.</p>
            <a className='hero-contact' href='#gallery'>
              View Works
            </a>
          </div>

          <div className='hero-copy-body'>
            <p className='hero-kicker'>Actress. Storyteller. Artist</p>
            <h1 className='hero-word'>
              <span>Treasure</span>
              <span>Artchi</span>
            </h1>
          </div>

          <div className='hero-copy-bottom'>
            <nav className='hero-menu' aria-label='Primary'>
              <a href='#about'>About</a>
              <a href='#gallery'>Works</a>
              <a href='#abstract-drawings'>Series</a>
              <a href='#sketch-pads'>Contact</a>
            </nav>

            <a className='hero-email' href={emailLink}>
              {emailAddress}
            </a>
          </div>
        </div>

        <div className='hero-image-panel'>
          <div className='hero-image-overlay' aria-hidden='true'></div>
          <img
            src={heroPortrait}
            alt='Portrait of Treasure Artchi'
            className='hero-portrait'
            loading='eager'
            fetchPriority='high'
            decoding='async'
          />
        </div>
      </div>

      <div className='hero-bg' aria-hidden='true'>
        <img
          src={heroBanner.src}
          srcSet={heroBanner.srcSet}
          sizes={heroBanner.sizes}
          alt=''
          width={1920}
          height={720}
          loading='eager'
          fetchPriority='high'
          decoding='async'
        />
      </div>
    </section>
  )
}
