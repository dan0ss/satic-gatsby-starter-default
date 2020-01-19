import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Img from "../components/image"
import testImg from "../images/face.jpg"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section class="hero is-medium  no-gap-v">

      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">

              <h1 class="title f1 fw7 is-1">
                Perth IPL Centre
              </h1>
              <h2 class="f3 fw4">
                Fast, Effective & Painfree IPL Hair Removal & Skin Rejuvenation
              </h2>

            </div>
          </div>
        </div>
      </div>
    </section>
    
    
      <section class="entry-text">

        <div class="feat-container container">
          <div class="feat-columns columns">
            <div class="tc pv4 column">

              <h3 class="f3 pb1 fw6">Permanent Hair Removal From $60</h3>
              <h4 class="f4 fw3">Cutting Edge SHR Intense Pulsed Light Technology</h4>

            </div>
          </div>
          </div>

      </section>

    
    <section id="what-is-ipl" class="tile-row tile-row-right">

      <div class="tile-text tile-text--right">
        <div class="tile-wrap tile-wrap__right">
          <div class="tile-inner tile-text--inner__right">

            <h2 class="f2">What Are The Benefits of IPL?</h2>
            <p>
              IPL is simple, safe and extremely effective. This revolutionary technology is more advanced than laser
              treatment as it can treat a range of skin conditions simultaneously, such as broken capillaries, uneven
              pigmentation, wrinkles, enlarged pores, sun damage and unwanted hair.
            </p>

          </div>
        </div>

        <picture class="tile-pic tile-pic--right">
          <source srcset="/ipl-images/face.jpg 1x" />
          <source srcset="/ipl-images/webp/face.webp" />
          <img src="/ipl-images/face.jpg" alt="IPL Hair Removal Machine Treating Face" />
        </picture>

      </div>
    </section>


    <section id="ipl-treatments" class="mid-section section">
      <div class="feat-container container">

        <div class="feat-heading">

          <h2 class="f2 tc pv2">What Conditions Does IPL Treat?</h2>
          <h3 class="f4 fw4 tc">This revolutionary technology that treats broken
            capillaries, uneven pigmentation, wrinkles, enlarged pores, sun damage, unwanted hair and much more.</h3>

        </div>

        <div class="feat-row">
          <div class="feat-columns columns">
            <div class="feat-column column">
              <div class="feat-box">
                <div class="feat-box--wrap">

                  <picture class="feat-pic">
                    <source srcset="/ipl-images/hair-removal.jpeg 1x" />
                    <source srcset="/ipl-images/webp/hair-removal.webp" />
                    <img src="/ipl-images/hair-removal.jpeg" alt="hair removal treatment" />
                  </picture>

                  <div class="feat-box-title--wrap">
                    <h3 class="f3 feat-box--titles">Hair Removal</h3>
                  </div>

                  <h4 class="feat-box--text">IPL uses a broad spectrum of light to permanently remove unwanted body hair</h4>

                </div>
              </div>
            </div>

            <div class="feat-column column">
              <div class="feat-box">
                <div class="feat-box--wrap">

                  <picture class="feat-pic">
                    <source srcset="/ipl-images/scar-reduction.jpeg 1x" />
                    <source srcset="/ipl-images/webp/scar-reduction.webp" />
                    <img src="ipl-images/scar-reduction.jpeg" alt="scar reduction treatment" />
                  </picture>

                  <div class="feat-box-title--wrap">
                    <h3 class="f3 feat-box--titles">Scar Reduction</h3>
                  </div>
                  
                  <h4 class="feat-box--text">IPL is able to effectively reduce the height, discolouration, and hardness of scarred tissue.</h4>

                </div>
              </div>
            </div>
            <div class="feat-column column">
              <div class="feat-box">
                <div class="feat-box--wrap">

                  <picture class="feat-pic">
                    <source srcset="/ipl-images/skin-rejuvenation.jpeg 1x" />
                    <source srcset="/ipl-images/webp/skin-rejuvenation.webp" />
                    <img src="/ipl-images/skin-rejuvenation.jpeg" alt="ipl machine treating skin" />
                  </picture>

                  <div class="feat-box-title--wrap">
                    <h3 class="f3 feat-box--titles">Skin Rejuvenation</h3>
                  </div>

                  <h4 class="feat-box--text">IPL Photorejuvenation is a versatile treatment that can reduce the signs of aging and improve skin tone.</h4>

                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="feat-row">
          <div class="feat-columns columns">
            <div class="feat-column column">
              <div class="feat-box">
                <div class="feat-box--wrap">

                  <picture class="feat-pic">
                    <source srcset="/ipl-images/skin-tightening.jpeg 1x" />
                    <source srcset="/ipl-images/webp/skin-tightening.webp" />
                    <img src="/ipl-images/skin-tightening.jpeg" alt="ipl machine tightening skin" />
                  </picture>

                  <div class="feat-box-title--wrap">
                    <h3 class="f3 feat-box--titles">Skin Tightening & Firming</h3>
                  </div>

                  <h4 class="feat-box--text">IPL is able to take years of your appearane through it's unique ability to tighten and firm skin.</h4>
                
                </div>

              </div>
            </div>

            <div class="feat-column column">
              <div class="feat-box">
                <div class="feat-box--wrap">

                  <picture class="feat-pic">
                    <source srcset="/ipl-images/pigmentation.jpeg 1x" />
                    <source srcset="/ipl-images/webp/pigmentation.webp" />
                    <img src="/ipl-images/pigmentation.jpeg" alt="pigmentation reduction treatment" />
                  </picture>

                  <div class="feat-box-title--wrap">
                    <h3 class="f3 feat-box--titles">Pigmentation Reduction</h3>
                  </div>

                  <h4 class="feat-box--text">IPL can be used to treat uneven, or unnatural looking pigmentation problems and even skin tones.</h4>

                </div>
              </div>
            </div>



            <div class="feat-column column">
              <div class="feat-box">
                <div class="feat-box--wrap">

                  <picture class="feat-pic">
                    <source srcset="/ipl-images/stretch-mark-reduction.jpeg 1x" />
                    <source srcset="/ipl-images/webp/stretch-mark-reduction.webp" />
                    <img src="/ipl-images/stretch-mark-reduction.jpeg" alt="stretch marks being treated with ipl" />
                  </picture>

                  <div class="feat-box-title--wrap">
                    <h3 class="f3 feat-box--titles">Stretchmark Reduction</h3>
                  </div>

                  <h4 class="feat-box--text">IPL improves the appearance of stretch marks by stimulating new collagen production and tightening the skin.</h4>
                
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="tile-row-1" class="tile-row tile-row-left">

      <div class="tile-text tile-text--left">
        <div class="tile-wrap tile-wrap__left">
          <div class="tile-inner tile-text--inner__left">

            <h2 class="f2">How Does IPL Work?</h2>
            <p>
              IPL is based on the same principle as laser treatment, though it is able to treat simultaneous problems at
              once while emitting a broad spectrum of light. The light energy is then transformed to heat energy. This
              is then selectively absorbed by the target tissue and whilst doing so, also protects the surrounding
              healthy tissue.
            </p>

          </div>
        </div>

        <picture class="tile-pic tile-pic--left">
          <source srcset="/ipl-images/leg.jpg 1x" />
          <source srcset="/ipl-images/webp/leg.webp" />
          <img src="/ipl-images/leg.jpg" alt="leg being treated with ipl machine" />
        </picture>

      </div>

    </section>


    <section id="about-ipl" class="mid-section section">
      <div class="feat-container container">
        <div class="feat-heading">

          <h2 class="f2 tc pv2">About IPL Treatment</h2>

        </div>

        <div class="about-row">
          <div class="about-columns columns">
            <div class="about-column column">
              
              <div class="paragraph">
                <p>
                  IPL allows most skin colours to be effectively treated by using a range of selectable light filters
                  and treatment parameters which are computer controlled for extreme efficiency.
                </p>
              </div>

              <div class="paragraph">
                <p>
                  In today’s society, clients want a fast, visible solution and so are moving away from basic beauty
                  treatments and towards the new technology of IPL.
                </p>
                </div>

                <div class="paragraph">
                  <h4 class="f3">
                    IPL's results are proven and include:
                  </h4>

                  <ul class="bullets">
                    <li>Evens skin tones</li>
                    <li>Improvement of collagen, smoothing fine lines</li>
                    <li>Clearing of redness and capillaries</li>
                    <li>Removal of pigmented lesions and UV damage</li>
                    <li>Permanent reduction of unwanted hair</li>
                  </ul>
                  </div>

                  <div class="paragraph">
                    <h4 class="f3">IPL skin treatments work by using Photorejuvenation:</h4>

                    <ul class="bullets">
                      <li>Photorejuvenation addresses skin conditions that are most visible</li>
                      <li>Treats the entire face as well as small spots</li>
                      <li>Causes little discomfort</li>
                      <li>Offers an immediate return to routine activities</li>
                      <li>Provides gradual, natural-looking improvement</li>
                      <li>Produces long-lasting results</li>
                    </ul>
                  </div>

                  <div class="paragraph">
                    <p>
                      Photorejuvenation with IPL is the most versatile of all treatment options. People often schedule
                      appointments during their lunch hour. IPL can treat numerous skin conditions at once. It is
                      effective
                      on red blemishes that originate from blood vessels. At the same time, IPL can treat brown pigment
                      blemishes in the form of freckles, age spots and other sun damage. IPL also treats the neck, the
                      chest, and the hands as well, where sun damage is often most visible.
                    </p>
                  </div>

                  <div class="paragraph">
                    <h3 class="f3">
                      Getting Started With IPL Treatment
                    </h3>

                    <p>
                      The Perth IPL Centre will determine an IPL treatment plan for you, accounting for the number and
                      severity of skin conditions being treated, as well as skin type. On average, four to six
                      treatments
                      are recommended, scheduled at four-week intervals. Each session usually lasts about 20 minutes,
                      with
                      clients returning to normal activity immediately afterwards. IPL treatments provide gradual,
                      natural
                      improvement with excellent long-term results.
                    </p>
                  </div>

                  <div class="paragraph">
                    <h3 class="f3">
                      What to Expect From Your Treatment
                    </h3>

                    <p>
                      Before treatment, a cold gel is usually applied to the areas to be treated and patients wear
                      protective eyewear. During treatment, a trained staff member gently applies the smooth glass
                      surface
                      of the IPL handpiece to the skin. Light is delivered to the skin surface in precise pulses that
                      are
                      typically pain-free. Occasionally, some signs of treatment, such as redness, can last for one or
                      two
                      hours. In most cases, the entire face is treated, and the therapy can also work well on the neck,
                      chest and hands. Results from a full series of treatments usually last for a year or more.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
    </section>


    <section id="ipl-prices" class="section">
      <div class="prices-heading">
        <h2 class="f2 tc">Women's IPL Hair Removal Prices</h2>
      </div>
      <div>
        <div class="price-table">
          
            <table>
              <thead>
                <tr>
                  <th>Treatment</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-title="Treatment">Full Leg</td>
                  <td data-title="Price">650</td>
                </tr>
                <tr>
                  <td data-title="Treatment">Lower Leg</td>
                  <td data-title="Price">300</td>
                </tr>
                <tr>
                  <td data-title="Treatment">Upper Leg</td>
                  <td data-title="Price">380</td>
                </tr>
                <tr>
                  <td data-title="Treatment">Bikini Standard</td>
                  <td data-title="Price">150</td>
                </tr>
                <tr>
                  <td data-title="Treatment">Bikini Extended</td>
                  <td data-title="Price">180</td>
                </tr>
                <tr>
                  <td data-title="Treatment">Brazillian</td>
                  <td data-title="Price">280</td>
                </tr>
                <tr>
                  <td data-title="Treatment">Under Arms</td>
                  <td data-title="Price">110</td>
                </tr>
                <tr>
                  <td data-title="Treatment">Lower Arms</td>
                  <td data-title="Price">250</td>
                </tr>
                <tr>
                  <td data-title="Treatment">Upper Lip or Chin</td>
                  <td data-title="Price">60</td>
                </tr>
                <tr>
                  <td data-title="Treatment">Sides of Face</td>
                  <td data-title="Price">140</td>
                </tr>
                <tr>
                  <td data-title="Treatment">Face Lower</td>
                  <td data-title="Price">200</td>
                </tr>
                <tr>
                  <td data-title="Treatment">Front of Neck</td>
                  <td data-title="Price">150</td>
                </tr>

              </tbody>
            </table>
        </div>

        <div class="price-table">
          
            <div class="prices-heading">
              <h2 class="f2 tc pv0 mv0">Men's IPL Hair Removal Prices</h2>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Treatment</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                
                <tr>
                  <td data-title="Treatment">Men's Full Back</td>
                  <td data-title="Price">500</td>
                </tr>
                <tr>
                  <td data-title="Treatment">Men's Upper Back</td>
                  <td data-title="Price">350</td>
                </tr>
                <tr>
                  <td data-title="Treatment">Men's Chest</td>
                  <td data-title="Price">300</td>
                </tr>
                <tr>
                  <td data-title="Treatment">Men's Chest &amp, Abdomen</td>
                  <td data-title="Price">500</td>
                </tr>
                <tr>
                  <td data-title="Treatment">Men's Neck &amp, Shoulders</td>
                  <td data-title="Price">250</td>
                </tr>

              </tbody>
            </table>
          
          
        </div>
      </div>
    </section>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Img />
      <img fixed={data.file.testImg.fixed} />
    </div>


    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
