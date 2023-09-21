<template>
  <section class="content">
    <p class="title">INTRODUCTION</p>
    <div class="about-me">
      <div>
        <p>
          It's a pleasure to meet you. I am pursuing a Bachelor's degree in Information Technology with a focus on cybersecurity, which is a highly relevant and sought-after field in today's digital age. I dedication to this major demonstrates your commitment to ensuring the security and integrity of digital systems and data.
        </p>
      </div>
      <div>
        <img src="../assets/images/me.jpg" alt="Photo de moi" class="me" />
      </div>
      <div>
        <p>
          My course offers me the opportunity to do an internship in order to validate my year. If you are looking for an intern and potential trainee for the following year, please do not hesitate to contact me 
          <a
            href="dhruvdholiya007@gmail.com"
            class="social-link"
            aria-label="link to my mail"
            >mail</a
          >
          ou sur
          <a
            href="https://www.linkedin.com/in/dhruv-dholiya-307182286/"
            target="_blank"
            class="social-link"
            aria-label="link to my linkedin"
            >linkedin</a
          >.
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped>
.about-me {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.about-me > * {
  flex-basis: 25%;
  flex-grow: 0;
  flex-shrink: 0;
}

.social-link {
  position: relative;
  transition: all 300ms ease;
}

.social-link::after {
  background-color: var(--teal);
  height: 6%;
  bottom: 0;
  content: "";
  left: 0;
  min-height: 2px;
  position: absolute;
  width: 100%;
  z-index: -1;
  transition: height 300ms ease;
}

.social-link:hover::after {
  height: 100%;
}

.social-link:hover {
  color: white;
}

.me {
  border-radius: 0.5rem;
  transition: all 300ms ease;
}

.me:hover {
  transform: translateY(-0.5rem);
}

@media (max-width: 768px) {
  .about-me {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
