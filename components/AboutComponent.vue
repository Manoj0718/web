<template>
  <div id="content_container">
    <div class="content_side">
      <!-- <div class="skill">
        <LazyMySkillComponenet></LazyMySkillComponenet>
      </div> -->
      <div class="round-image">
        <nuxt-img src="/web_Developer _Bilzen_Hasselt.png" fit="contain" format="webp"></nuxt-img>
      </div>
    </div>
    <div class="content_side">
      <div class="text">
        <p> <strong>Long Version of My Story (if you’re interested!)</strong></p> <br>
        <p><br>
          Moving to Belgium a few years ago was a significant turning point in my life. With a background in Marketing and
          a decade of experience in the field, I faced the challenge of finding employment due to language barriers. As I
          did not speak Dutch at the time, I was worried about how I could effectively express my ideas and connect with
          like-minded individuals.<span>🤥</span>
          <br />
          <br />During this time, I reflected on my early experience with HTML coding,<span>🙄</span> specifically the
          simple "Hello"
          program I had tried as a teenager. It sparked my interest in pursuing programming languages, which I saw as a
          universal language. While I had completed networking courses and diplomas after leaving school, the
          technological landscape had evolved significantly over the past decade.
          <br />
          <br />After months of job hunting, where I shared my CV with over 100 companies, I was fortunate enough to
          secure a position.<span>😇</span> I then embarked on improving my Dutch language skills while also exploring the
          latest trends
          in programming languages to create something meaningful.
          <br />
          <br />Despite my demanding work schedule, which included rotating shifts, I made time to enhance my skills by
          watching programming tutorials on platforms like YouTube. This enabled me to learn how to develop WordPress
          websites using page builders like Elementor and simple CSS, resulting in the creation of two websites.
          <br />
          <br />Motivated to leverage my marketing knowledge and experience, I took up Digital Marketing, which uncovered
          a new level of creativity. I even won a prestigious Top 10 Google AdWords campaign 2018 <span>😎</span> on
          Udacity's online
          learning platform. Combining my passion for coding with continuous learning, I have been developing websites and
          web applications from scratch since 2019, establishing myself as a freelance Web Developer. Building strong
          relationships with clients and consistently meeting milestones and deadlines have been my focal points.
          <br />
          <br />Opting for a career in Web Development was a significant change in my life, involving a calculated risk.
          This journey has taught me to confront my fears<span>🧐</span>, understand my capabilities<span>🤓</span>, and
          believe in my skills<span>🤖</span>. I
          consistently push my limits to become a better version of myself every day. My ultimate goal is to become the
          best JavaScript full-stack developer I can be and establish myself as a professional in this industry for the
          rest of my life. To achieve this, I devote my time to studying new technologies and pursuing projects to
          facilitate a seamless career transition. I am eagerly looking forward to gaining experience in Web Development
          within related companies.
          <br />
          <br />I take great pride in the person I have become today. The path to learning and working in a new career was
          far from easy, but my unwavering passion has guided me. I strongly believe in the concept of a growth mindset
          and the principle of "Never give up." Outside my Web Development work, I enjoy exploring online tools and have a
          keen interest in cryptocurrencies. When I'm offline, I find joy in capturing the beauty of nature through
          photography, going on long walks, and cooking with love. But above all, I am always available to discuss your
          project at your convenience. <br>
          <br /><strong>
            <em>
              "Follow your passion. The rest will attend to itself. If I can do
              it, anybody can do it. It's possible. And It's your turn. So go
              for it. It's never too late to become what you always wanted to be
              in the first place." <span>😇</span>
              <br />J. Michael Straczynski<span>🙄</span><span>🤖</span><span>🤓</span>
            </em>
          </strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../assests/variables.scss';
@import '../assests/mixins.scss';
@import '../assests/breakpoints';

#content_container {
  @include page_container;
  justify-content: space-between;
  height: 100%;

  @media screen and (max-width: map-get($breakpoints, mobile)) {
    @include mobile_page_container;
  }

  @media screen and (max-width: map-get($breakpoints, tablet)) {
    @include mobile_page_container;
  }

  .content_side {
    @include page_container_content_columns;
    height: 100%;
    text-align: center;

    @media screen and (max-width: map-get($breakpoints, mobile)) {
      @include mobile_page_container;
    }

    @media screen and (max-width: map-get($breakpoints, tablet)) {
      @include mobile_page_container;
    }
  }

  .round-image {
    position: relative;
    align-items: center;
    padding: 5px;

    img {
      border-radius: 50%;
      width: 75%;
      height: auto;
    }
  }

  .skill {
    color: $nav_text_color;
    padding: 5px;

    @media screen and (max-width: map-get($breakpoints, mobile)) {
      @include section_devider;
      border: $border;
    }

    @media screen and (max-width: map-get($breakpoints, tablet)) {
      @include section_devider;
      border: $border;
    }
  }

  .text {
    color: $nav_text_color;
    @include text_div_styles;

    @media screen and (max-width: map-get($breakpoints, mobile)) {
      margin-top: 2.5vh;
      padding: 2.5vh 0;

      //  letter-spacing: 1px,
    }

    p {
      @media screen and (max-width: map-get($breakpoints, mobile)) {
        font-size: 16px;
        //  letter-spacing: 1px,
      }
    }
  }
}
</style>
