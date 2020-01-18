import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <SEO title="Home" />
  <meta name="description" content="The Perth IPL Centre offers fast, effective and painfree IPL hair removal and skin rejuvenation">
  <link rel="canonical" href="https://www.perthiplcentre.com.au/" />
  <link rel="icon" href="/ipl-images/perth-ipl-logo.svg" sizes="any" type="image/svg+xml">
  <link rel="sitemap" type="application/xml" href="/sitemap.xml">
  <meta name="theme-color" content="#1f1f1f">
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BeautySalon",
      "name": "Perth IPL Centre",
      "image": "",
      "@id": "",
      "url": "https://www.perthiplcentre.com.au/",
      "telephone": "+61893881134",
      "priceRange": "",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "439 Hay St",
        "addressLocality": "Subiaco",
        "addressRegion": "WA",
        "postalCode": "6008",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -31.9472267,
        "longitude": 115.8249798
      },
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Tuesday",
        "opens": "09:00",
        "closes": "17:30"
      }, {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Wednesday",
        "opens": "09:30",
        "closes": "17:30"
      }, {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Thursday",
        "opens": "09:30",
        "closes": "19:00"
      }, {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "09:30",
        "closes": "17:00"
      }, {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      }]
    }
  </script>
</head>

<body>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div id="nav-inner" class="container navbar-brand">
        <a href="/">
          <img id="logo" src="/ipl-images/perth-ipl-logo.svg" alt="Perth IPL Centre Logo">
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
          data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>


        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-end">
            <a href="#what-is-ipl" class="navbar-item">
              What Is IPL?
            </a>

            <a href="#ipl-treatments" class="navbar-item">
              IPL Treatments
            </a>

            <a href="#about-ipl" class="navbar-item">
              About IPL
            </a>

            <a href="#contact-us" class="navbar-item">
              Contact Us
            </a>


          </div>
          <div class="navbar-item">
            <div class="buttons">
              <a class="book-online button is-primary" rel="nofollow"
                href="https://janabeautysalon.mylocalsalon.com/onlinebooking/v7410/Steps/SelectServices.aspx">
                <strong>Book Online</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <main>
    <section class="hero is-medium  no-gap-v"
      style="background-size: cover; background-image: url('/ipl-images/ipl-hero.jpg')">
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


    <!-- >>>  Entry Text  <<<  -->
    <div class="main-section">
      <section class="entry-text">
        <div class="feat-container container">
          <div class="feat-columns columns">
            <div class="tc pv4 column">
              <h3 class="f3 pb1 fw6">Permanent Hair Removal From $60</h3>
              <h4 class="f4 fw3">Cutting Edge SHR Intense Pulsed Light Technology</h4>
            </div>
          </div>
      </section>
    </div>

    <!-- 
      >>> START: Tile Row
      >>> ROW: 1
      >>> SIDE: Right Image
-->
    <section id="what-is-ipl" class="tile-row tile-row-right">

      <!-- Text Block -->
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

        <!-- Tile Image -->
        <picture class="tile-pic tile-pic--right">
          <source srcset="/ipl-images/face.jpg 1x">
          <source srcset="/ipl-images/webp/face.webp">
          <img src="/ipl-images/face.jpg" alt="IPL Hair Removal Machine Treating Face">
        </picture>
      </div>
    </section>
    <!-- 
      END Tile Row: 1 <<<
-->



    <!--  >>>  Types of Treatment   <<<   -->
    <section id="ipl-treatments" class="mid-section section">
      <div class="feat-container container">
        <div class="feat-heading">
          <h2 class="f2 tc pv2">What Conditions Does IPL Treat?</h2>
          <h3 style="text-align:center !important;" class="f4 fw4 tc">This revolutionary technology that treats broken
            capillaries, uneven pigmentation, wrinkles, enlarged pores, sun damage, unwanted hair and much more.</h3>
        </div>
        <div class="feat-row">
          <div class="feat-columns columns">
            <div class="feat-column column">
              <div class="feat-box">
                <div class="feat-box--wrap">

                  <picture class="feat-pic">
                    <source srcset="/ipl-images/hair-removal.jpeg 1x">
                    <source srcset="/ipl-images/webp/hair-removal.webp">
                    <img src="/ipl-images/hair-removal.jpeg" alt="hair removal treatment">
                  </picture>

                  <div class="feat-box-title--wrap">
                    <h3 class="f3 feat-box--titles">Hair Removal</h3>
                  </div>
                  <h4 class="feat-box--text">IPL uses a broad spectrum of light to permanently remove unwanted body hair
                  </h4 class="feat-box--text">
                </div>
              </div>
            </div>

            <div class="feat-column column">
              <div class="feat-box">
                <div class="feat-box--wrap">

                  <picture class="feat-pic">
                    <source srcset="/ipl-images/scar-reduction.jpeg 1x">
                    <source srcset="/ipl-images/webp/scar-reduction.webp">
                    <img src="ipl-images/scar-reduction.jpeg" alt="scar reduction treatment">
                  </picture>

                  <div class="feat-box-title--wrap">
                    <h3 class="f3 feat-box--titles">Scar Reduction</h3>
                  </div>
                  <h4 class="feat-box--text">IPL is able to effectively reduce the height, discolouration, and hardness
                    of scarred tissue.</h4 class="feat-box--text">

                </div>
              </div>
            </div>
            <div class="feat-column column">
              <div class="feat-box">
                <div class="feat-box--wrap">

                  <picture class="feat-pic">
                    <source srcset="/ipl-images/skin-rejuvenation.jpeg 1x">
                    <source srcset="/ipl-images/webp/skin-rejuvenation.webp">
                    <img src="/ipl-images/skin-rejuvenation.jpeg" alt="ipl machine treating skin">
                  </picture>

                  <div class="feat-box-title--wrap">
                    <h3 class="f3 feat-box--titles">Skin Rejuvenation</h3>
                  </div>
                  <h4 class="feat-box--text">IPL Photorejuvenation is a versatile treatment that can reduce the signs of
                    aging and improve skin tone.</h4 class="feat-box--text">
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
                    <source srcset="/ipl-images/skin-tightening.jpeg 1x">
                    <source srcset="/ipl-images/webp/skin-tightening.webp">
                    <img src="/ipl-images/skin-tightening.jpeg" alt="ipl machine tightening skin">
                  </picture>

                  <div class="feat-box-title--wrap">
                    <h3 class="f3 feat-box--titles">Skin Tightening & Firming</h3>

                  </div>
                  <h4 class="feat-box--text">IPL is able to take years of your appearane through it's unique ability to
                    tighten and firm skin.</h4 class="feat-box--text">
                </div>

              </div>
            </div>

            <div class="feat-column column">
              <div class="feat-box">
                <div class="feat-box--wrap">

                  <picture class="feat-pic">
                    <source srcset="/ipl-images/pigmentation.jpeg 1x">
                    <source srcset="/ipl-images/webp/pigmentation.webp">
                    <img src="/ipl-images/pigmentation.jpeg" alt="pigmentation reduction treatment">
                  </picture>

                  <div class="feat-box-title--wrap">
                    <h3 class="f3 feat-box--titles">Pigmentation Reduction</h3>

                  </div>
                  <h4 class="feat-box--text">IPL can be used to treat uneven, or unnatural looking pigmentation problems
                    and even skin tones.</h4 class="feat-box--text">
                </div>
              </div>
            </div>



            <div class="feat-column column">
              <div class="feat-box">
                <div class="feat-box--wrap">

                  <picture class="feat-pic">
                    <source srcset="/ipl-images/stretch-mark-reduction.jpeg 1x">
                    <source srcset="/ipl-images/webp/stretch-mark-reduction.webp">
                    <img src="/ipl-images/stretch-mark-reduction.jpeg" alt="stretch marks being treated with ipl">
                  </picture>

                  <div class="feat-box-title--wrap">
                    <h3 class="f3 feat-box--titles">Stretchmark Reduction</h3>

                  </div>
                  <h4 class="feat-box--text">IPL improves the appearance of stretch marks by stimulating new collagen
                    production and tightening the skin.</h4 class="feat-box--text">
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 
      >>> START: Tile Row
      >>> ROW: 2 
      >>> SIDE: Left Image
    -->
    <section id="tile-row-1" class="tile-row tile-row-left">

      <!-- Text Block -->
      <div style="z-index: -100000" class="tile-text tile-text--left">
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

        <!-- Tile Image -->
        <picture style="z-index: 100000" class="tile-pic tile-pic--left">
          <source srcset="/ipl-images/leg.jpg 1x">
          <source srcset="/ipl-images/webp/leg.webp">
          <img src="/ipl-images/leg.jpg" alt="leg being treated with ipl machine">
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

    <!-- 
      END Tile Row: 2 <<<
-->

    <!-- 
      >>> Contact NAP Row
-->
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
                  <td data-title="Treatment">Men's Chest &amp; Abdomen</td>
                  <td data-title="Price">500</td>
                </tr>
                <tr>
                  <td data-title="Treatment">Men's Neck &amp; Shoulders</td>
                  <td data-title="Price">250</td>
                </tr>

              </tbody>
            </table>
          
          
        </div>
      </div>
    </section>

  </main>
  <footer>
    <section id="contact-us" class="mid-section section">
      <div class="nap-container container">
        <div class="columns">
          <div class="column pb5">
            <div class="mv-auto">
              <div>
                <h5 class="f1 pv3">Contact Us</h5>
                <p class="f3 pv2">Address:</p>
                <p class="f4 fw3">
                  439 Hay St, Subiaco WA 6008
                </p>
              </div>

              <div>
                <p class="f3 pt4">Phone:</p>
                <p class="f4 fw3">
                  <a href="tel:93881134">(08) 9388 1134</a>
                </p>
              </div>
              <div>
                <p class="f3 pt4">Email:</p>
                <p class="f4 fw3">
                  <a href="mailto:info@perthiplcentre.com.au">info@perthiplcentre.com.au</a>
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <div id="gmap">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13542.015167339001!2d115.8249798!3d-31.9472267!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x59e28362a89fc157!2sPerth%20IPL%20Centre!5e0!3m2!1sen!2sau!4v1579201633415!5m2!1sen!2sau"
                width="auto" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    <link rel="stylesheet" href="/css/bulma.css" />
    <link rel="stylesheet" href="/css/tachyons.css" />
    <link rel="stylesheet" href="/css/styles.css" />

    <script>
      document.addEventListener('DOMContentLoaded', () => {

        // Get all "navbar-burger" elements
        const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Check if there are any navbar burgers
        if (navbarBurgers.length > 0) {

          // Add a click event on each of them
          navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

              // Get the target from the "data-target" attribute
              const target = el.dataset.target;
              const target = document.getElementById(target);

              // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
              el.classList.toggle('is-active');
              target.classList.toggle('is-active');

            });
          });
        }

      });
      (document).ready(function () {

        // Check for click events on the navbar burger icon
        (".navbar-burger").click(function () {

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          (".navbar-burger").toggleClass("is-active");
          (".navbar-menu").toggleClass("is-active");

        });
      });
    </script>
  </footer>
  </main>

</html>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
