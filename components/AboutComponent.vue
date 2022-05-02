<template>
  <div id="content_container">
    <div class="content_side">
      <div class="round-image"></div>
      <div class="skill">
        <MySkillComponenet></MySkillComponenet>
      </div>
    </div>
    <div class="content_side">
      <div class="text">
        <p>
          Moving to Belgium a few years ago was the biggest challenge and the
          turning point of my life. At that time all I had was my higher studies
          in Marketing and 10 years of experience in the same field by working
          for many organizations in my country Sri Lanka as well as in Dubai and
          Qatar. It wasn't easy for me to find a job in Belgium with the
          language barriers as I didn't speak Dutch at that time so I was
          wondering how to express my ideas and creativity to others to connect
          with like -minded people.
          <br />
          <br />That's when I remembered my first HTML coding "Hello" which I
          tried when I was a teenager and I thought to pursue more on the
          programming language which is a universal language. Even though I had
          done a few networking courses and diplomas after I left school, the
          technology has had a drastic change during the last decade. After
          months of hunting for a job sharing my CVs to more than 100 companies,
          I was finally lucky enough to get a job and then I started
          improving my Dutch language skills but I also wanted to learn the new
          trends of programming languages to create something significant.
          <br />
          <br />With my multiple rotating shifts at work, I somehow found time
          to watch YouTube, and learned how to develop WordPress websites with
          eliminator and with simple CSS which helped me create two websites.
          <br />
          <br />I also wanted to make use of my knowledge and experience I
          gained as a marketer a few years ago and then I started learning
          Digital Marketing which directed me to a whole new level of creativity
          and I won Top 10 Google AdWords campaign in 2018 in Udacity online
          learning platform. With the passion for coding and never ending
          learning, I've been creating web sites and web apps from scratch since
          2019, making my own progress as a freelance Web Developer, building a
          strong relationship with clients while effectively meeting milestones
          and deadlines. I chose Web Development, making a big change in my life
          by taking a calculated risk, which taught me to face my fears,
          understand my capabilities, and trust my skills while pushing myself
          over the limits continuously in order to be a better version of myself
          everyday.
          <br />
          <br />I’m now putting all my energy and focusing on becoming the best
          JavaScript full Stack Developer I can ever be and hoping to work in
          this industry as a professional for the rest of my life. I’m studying
          new technologies every day, building projects as often as I can for a
          big career transition and I'm looking forward to gaining work
          experience in Web Development related companies.
          <br />
          <br />I'm very proud of who I have become today as it wasn't an easy
          journey to learn and work for a career transition, but I did it all
          with my passion and I’m a firm believer in the growth mindset concept
          " Never give up".. In addition to my Web Development work, I play with
          online tools and I'm a crypto enthusiast. When I'm offline, I love
          taking pictures of nature, going for long walks, cooking with heart
          and also watching movies, but I am always available to discuss your
          project at your convenience.
          <br />
          <br />
          <strong>
            <em>
              "Follow your passion. The rest will attend to itself. If I can do
              it, anybody can do it. It's possible. And It's your turn. So go
              for it. It's never too late to become what you always wanted to be
              in the first place."
              <br />J. Michael Straczynski
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
  @media screen and(max-width: map-get($breakpoints,mobile)) {
    @include mobile_page_container;
  }
  @media screen and(max-width: map-get($breakpoints,tablet)) {
    @include mobile_page_container;
  }
  .content_side {
    @include page_container_content_columns;
    height: 100%;
    text-align: center;
    @media screen and (max-width: map-get($breakpoints,mobile)) {
      @include mobile_page_container;
    }
    @media screen and (max-width: map-get($breakpoints,tablet)) {
      @include mobile_page_container;
    }
  }
  .round-image {
    padding: 10px;
    width: 250px;
    height: 250px;
    background-image: url('../assests/Photoes/web_Developer _Bilzen_Hasselt.jpg');
    background-size: cover;
    display: block;
    margin: 25px auto;
    border-radius: 125px;
    align-items: center;
    text-align: center;
  }
  .skill {
    color: $nav_text_color;
    padding: 5px;
    @media screen and (max-width: map-get($breakpoints,mobile)) {
      @include section_devider;
      border: $border;
    }
    @media screen and (max-width: map-get($breakpoints,tablet)) {
      @include section_devider;
      border: $border;
    }
  }
  .text {
    color: $nav_text_color;
    @include text_div_styles;
    @media screen and (max-width: map-get($breakpoints,mobile)) {
      margin-top: 2.5vh;
      padding: 2.5vh 0;

      //  letter-spacing: 1px,
    }
    p {
      @media screen and (max-width: map-get($breakpoints,mobile)) {
        font-size: 16px;
        //  letter-spacing: 1px,
      }
    }
  }
}
</style>
