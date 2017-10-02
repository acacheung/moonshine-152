<template>
  <footer class="footer l-auto">
    <div class="l-col">
      <section>
        <h2 class="hours__heading">Hours</h2>
        <div>
          <p class="hour">Weekend brunch 11 am &ndash; 3 pm</p>
          <p class="hour">Dinner everyday 5:30 pm &ndash; 10 pm</p>
          <p class="hour">Late night menu 10 pm &ndash; 1:30 am</p>
        </div>
      </section>

      <div class="socials">
        <a href="https://www.facebook.com/moonshine152southie" class="social">
          <svg><use xlink:href="#facebook"></use></svg>
          <span class="t-hidden">Facebook</span>
        </a>
        <a href="https://instagram.com/chefasiamei/" class="social">
          <svg><use xlink:href="#instagram"></use></svg>
          <span class="t-hidden">Instagram</span>
        </a>
        <a href="https://twitter.com/moonshine152" class="social">
          <svg><use xlink:href="#twitter"></use></svg>
          <span class="t-hidden">Twitter</span>
        </a>
      </div>
    </div>

    <div class="contacts l-colspan">
      <h2 class="contacts__heading">Order Delivery</h2>
      <a class="contact" href="https://www.trycaviar.com/boston/moonshine152-2536">We deliver with CAVIAR</a>
      <a class="contact" href="http://moonshine.foodler.com">We deliver with FOODLER</a>
      <a class="contact" href="https://www.doordash.com/store/moonshine-152-boston-3915/5862/">We deliver with DOORDASH</a>

      <h2 class="contacts__heading">Get in Touch!</h2>
      <a class="contact" href="https://goo.gl/maps/FYmkY">152 Dorchester Ave in Boston, MA</a>
      <a class="contact" href="tel:6177524191">617.752.4191</a>
      <a class="contact" href="mailto:asia@moonshine152.com">Email us for comments + employment inquiries</a>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
  .footer {
    position: relative;
    background-color: var(--color__black);
    z-index: 2;
  }
  @media (max-width: 909px) {
    .footer {
      padding-right: 5%;
      padding-left: 5%;
    }
  }

  .contacts {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  .hours__heading,
  .contacts__heading {
    margin-bottom: 24px;
    font-size: 30px;
    font-weight: 300;
    font-family: var(--font-family__sans);
    text-transform: uppercase;
    color: var(--color__gray--dark);
    letter-spacing: 5px;
  }

  @media (min-width: 910px) {
    .hours__heading {
      padding-top: 48px;
      float: right;
      clear: right;
    }
  }

  .contacts__heading:last-of-type {
    padding-top: 24px;
    clear: both;
  }

  .hour {
    font-size: 14px;
    font-family: var(--font-family__serif);
    font-weight: 300;
    font-style: italic;
    line-height: 20px;
    color: var(--color__white);
  }
  .hour:not(:last-child) {
    margin-bottom: 14px;
  }
  .hour:last-child {
    margin-bottom: 36px;
  }
  @media (min-width: 910px) {
    .hour {
      float: right;
      clear: right;
    }
  }

  .contact {
    margin-bottom: 10px;
    padding-left: 14px;
    float: left;
    clear: left;
    font-size: 18px;
    font-family: var(--font-family__sans);
    text-decoration: none;
    color: var(--color__white);
    transition-duration: .25s;
    transition-property: color;
  }
  .contact:hover {
    color: var(--color__gold);
  }
  .contact:before {
    content: ">";
    display: inline-block;
    position: relative;
    left: -8px;
    text-indent: -6px;
    cursor: default;
  }

  .socials {
    display: flex;
    clear: right;
  }
  @media (min-width: 910px) {
    .socials {
      justify-content: flex-end;
    }
  }

  .social {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    border-radius: 16px;
    background-color: var(--color__white);
    transition-duration: .25s;
    transition-property: background-color;
  }
  .social:not(:last-child) {
    margin-right: 12px;
  }
  .social:hover {
    background-color: var(--color__gold);
  }
  .social svg {
    fill: var(--color__black);
    height: 55%;
    width: 55%;
  }
</style>
