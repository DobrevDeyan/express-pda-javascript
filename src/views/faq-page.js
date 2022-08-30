import { html } from "../utilities/lib.js"

const faqTemplate = () => html` <section id="faq">
  <!-- <img src="../../images/Container ship.gif" alt="shipping gif" /> -->
  <div class="faq-container">
    <div class="accordion">
      <div class="accordion-item" id="question1">
        <a class="accordion-link" href="#question1">
          Who are we ?
          <ion-icon class="remove" name="remove-outline"></ion-icon>
          <ion-icon class="add" name="add-outline"></ion-icon>
        </a>
        <div class="answer">
          <p>
            Weyland Yutani Corp. is a newly formed shipping agency created at
            its core from former professionals in maritime business. We have a
            new vision and approach to customers and provide extensive agency
            services.
            <br />
            Our newly developt feature is an online presence, which is easy to
            use and guarantees top notch, up to date info, at your disposal,
            regarding the financial aspect of vessels visiting Bulgarian ports.
          </p>
        </div>
      </div>
      <div class="accordion-item" id="question2">
        <a class="accordion-link" href="#question2">
          What is the advantage of using our service ?
          <ion-icon class="remove" name="remove-outline"></ion-icon>
          <ion-icon class="add" name="add-outline"></ion-icon>
        </a>
        <div class="answer">
          <p>
            The values that we provide are key. Our D/A calculator is based on
            latest in force tariffs and same are updated immediately when
            changes occur. We work with loyal and well established partners and
            service providers. <br />
            You can use it at will, at any given moment via our website.
            Depending on your subscription plan you get a wide range of services
            included.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>`

export function faqPage(ctx) {
  ctx.render(faqTemplate())
}

{
  /* <div class="faq-wrapper">
<!-- <h1>Frequently Asked Questions</h1> -->
<div class="card">
  <div class="card-item">
    <div class="card-item-title">
      <h2>Who are we ?</h2>
    </div>
    <div class="card-item-answer">
      <p>
        Weyland Yutani Corp. is a newly formed shipping agency created at
        its core from former professionals in maritime business. We have a
        new vision and approach to customers and provide extensive agency
        services.
        <br />
        Our newly developt feature is an online presence, which is easy to
        use and guarantees top notch, up to date info, at your disposal,
        regarding the financial aspect of vessels visiting Bulgarian ports.
      </p>
    </div>
  </div>
  <div class="card-item">
    <div class="card-item-title">
      <h2>What is the advantage of using our service ?</h2>
    </div>
    <div class="card-item-answer">
      <p>
        The values that we provide are key. Our D/A calculator is based on
        latest in force tariffs and same are updated immediately when
        changes occur. We work with loyal and well established partners and
        service providers. <br />
        You can use it at will, at any given moment via our website.
        Depending on your subscription plan you get a wide range of services
        included.
      </p>
    </div>
  </div>
  <div class="card-item">
    <div class="card-item-title">
      <h2>What is our incentive ?</h2>
    </div>
    <div class="card-item-answer">
      <p>
        We are using and spreading a new approach in maritime business. No
        longer you need to send your inquiries via email and wait for a slow
        and possibly unaccurate response.
        <br />
        Modern technologies are here. Eliminate the people factor, check
        rough voyage estimates well in time before you fix your vessel. Plan
        ahead!
      </p>
    </div>
  </div>
  <div class="card-item">
    <div class="card-item-title">
      <h2>Who are our main target customers in maritime business ?</h2>
    </div>
    <div class="card-item-answer">
      <p>
        We are targeting everyone ... Maritime industry is wide and it
        involves a lot of sectors and companies with different needs and
        values.
        <br />
        Owners, Managers, Operators, Ship Masters, Port Agents, everyone can
        benefit from an online tool at disposal at any given time.
      </p>
    </div>
  </div>
  <div class="card-item">
    <div class="card-item-title">
      <h2>How does the Proforma D/A Calculation feature works ?</h2>
    </div>
    <div class="card-item-answer">
      <p>
        The feature is simple. You fill the fields with vessels details and
        you just press the button below. All service supplier tariffs are
        supported, taking local compliances and regulations in account.
        <br />
        All is done in the background, with a button click.
      </p>
    </div>
  </div>
  <div class="card-item">
    <div class="card-item-title">
      <h2>What does live support feature includes ?</h2>
    </div>
    <div class="card-item-answer">
      <p>
        Live support feature means that you have got a professional at your
        disposal for privite inquiries and questions. Responce times may
        vary but tipically is within 1 or 2 hours.
      </p>
    </div>
  </div>
  <div class="card-item">
    <div class="card-item-title">
      <h2>Can I get a free trial before I purchase ?</h2>
    </div>
    <div class="card-item-answer">
      <p>Yes. When you register you get 7 days free trial.</p>
    </div>
  </div>
  <div class="card-item">
    <div class="card-item-title">
      <h2>How do automatic renewal payments work ?</h2>
    </div>
    <div class="card-item-answer">
      <p>
        Once you subscribe to our service you are going to be billed
        monthly. You can unsubscribe whenever you feel like it and use the
        platform until the current billing cycle expires.
      </p>
    </div>
  </div>
</div>
</div> */
}
