<template>
  <main>
    <nav class="moonshiners">
      <router-link class="moonshiner" v-for="moonshiner in moonshiners" :key="moonshiner.id" :to="'/team/' + moonshiner.id">
        <h1 class="moonshiner__heading">{{ moonshiner.name }}</h1>
        <h1 class="moonshiner__desc">{{ moonshiner.position }}</h1>
      </router-link>
      <span class="moonshiners__slide"></span>
    </nav>
    <transition name="fade">
      <moonshiner :key="$route.params.id" :bio="moonshiners.find(o => o.id === $route.params.id).bio"></moonshiner>
    </transition>
    <callout :quote="quote"></callout>
  </main>
</template>

<script>
  import Moonshiner from '@/components/Moonshiner'
  import Callout from '@/components/Callout'
  export default {
    components: {
      Moonshiner,
      Callout
    },
    data: function() {
      return {
        moonshiners: [
          {
            id:'asia',
            name: 'Asia Mei',
            position: 'Chef & Owner',
            bio: [
              'Chef Asia Mei was born in Fremont, California, and grew up right in the middle of the Silicon Valley. Growing up in an atmosphere where pursuing financial or technological careers were the norm, she always knew the typical office setting was not for her. While having an extremely competitive nature always resulted in doing very well at school, it allowed her to truly thrive in demanding sports like gymnastics and martial arts. These disciplines consumed her extracurricular life and would later on influence her culinary career and success on the line.',
              'Living in the Bay Area was always an amazing source of exposure to different cultures and their food. While Asia didn’t know how to cook anything, the taste of her mother’s fried rice or the tamales from the neighboring Mexican taco stand always offered a satisfaction that nothing else could rival. When she moved to Boston, MA to attend Boston College’s Honor’s Program, it was in those “college food” dormitory years that she learned just how much she missed the availability of the good food at home.',
              'After achieving a successful degree at BC in Economics and Biology, working as a stuntwoman in Los Angeles during the summers, Asia was lucky enough to land herself in the Boston restaurant world and has never looked back. Deciding her last semester that this would be the route she’d always hoped for, she skipped her graduation ceremony to search for a job to learn how to cook; this would be the day she wandered into the revered Hamersley’s Bistro, where she would leave as a Sous Chef four years later. Here, Asia excelled on the hot-line and formed much of the basis for her style of cooking with classical French technique and New England ingredients. She would later further her love for the many possibilities of American cuisine working with the well-known Kinkead brothers at Sibling Rivalry as an executive sous chef.',
              'Even with an undying love for all things butter and salt, Asia then worked as head chef at Whole Foods for two years, which allowed her a unique opportunity to round out her multi-cultural approach to bright, healthy flavors with which everyone can identify. She was able to quickly appreciate the chance to explore the delicious, healthier possibilities found in diets based more on organic, vegetarian, and food allergen free values.',
              'At the Franklin Southie, Asia was excited to bring her culinary acumen and energy to execute menus based on fun, fresh flavors. The inviting neighborhood setting of the Franklin provided the perfect opportunity to do so with every season. After a year, she moved on to Sam’s on the Waterfront in the flourishing Seaport District, with the ability to further utilize local, quality ingredients. In a 3 ½ year duration, her own spin on both East and West Coastal style cooking strived to match the beautiful restaurant’s aesthetic, and contributed to numerous glowing re-reviews, accolades and praise.',
              'Now, returning to the old Franklin Southie space, Chef Mei opens Moonshine 152 as her first solo chef-owned venture. Fueled by the neighborhood’s energy and evolution, the restaurant will focus on maintaining a fun, sustainable, delicious take on bar and kitchen offerings late into the night. Entrusted with the legacy and soul of the space, Mei and the Moonshine crew couldn’t be more excited to be a real fixture in the community, and continue to draw inspiration from it for everything from the spirit of the food to the drinks and warm, inviting atmosphere.'
            ]
          },
          {
            id:'amanda',
            name: 'Amanda Rae',
            position: 'General Manager',
            bio: [
              'Born and raised Dorchester Native, Amanda at a young age fell in love with the atmosphere and artistry of the hospitality culture. As a kid, organizing brunches and decorating the dinner table she was bound for a life in the restaurant industry… it was only a matter of time. At 16 she joined the Flour Bakery Team where she learned the value of a tight knit team, the value of neighborhood regulars and the importance of a strong cup of coffee.',
              'Fresh out of High School, Amanda was accepted into the Baking and Pastry Arts Program at Johnson & Wales University in Providence Rhode Island. After a few years working the scene in Providence Amanda shipped back up to Boston where she re-entered the industry at Sportello Restaurant, an up and coming venture from restaurant juggernaut Barbara Lynch. At Sportello she grew the bakery starting as a barista, ending as supervisor. In the bakery, Amanda was able to showcase her spirited personality, her kindness to others and ability to work under pressure. Working under her mentor, Heather Kennaway Lynch, Amanda learned various aspects of running a personable, successful restaurant as well as key hospitality standards. She was also given the opportunity to work nearly every position within the restaurant, learning every step along the way. In July of 2014 Amanda transitioned within the Barbara Lynch Gruppo to No. 9 Park to further cultivate her knowledge of back of the house operations as the Reservationist. There she worked with some of the best in the business, learning the nuances of running a restaurant from behind the scenes.',
              'In the summer of 2013 while working part-time at Sam’s at Louis Boston, Amanda had the pleasure of meeting and working alongside Chef Asia Mei. There they developed a strong working relationship that continues today. At Moonshine 152 Amanda is looking forward to building a strong, dynamic team that is dedicated to supporting Asia as she lives her dream. She looks forward to making new connections in the ever evolving South Boston neighborhood. Amanda’s day to day responsibilities will include managing the floor during brunch and dinner service, overseeing the front of house staff and helping to create memorable dining experiences.'
            ]
          }
        ],
        quote: '“With an energetic neighborhood &amp; industry focused bar, the Moonshine crew aims to be everyone’s local go-to!”'
      }
    }
  }
</script>

<style lang="postcss" scoped>
  .moonshiners {
    margin-right: auto;
    margin-bottom: 45px;
    margin-left: auto;
    position: relative;
    width: 90%;
    max-width: 920px;
    border-bottom: 2px solid var(--color__gold--dark);
    text-align: center;
  }
  @media (max-width: 699px) {
    .moonshiners {
      padding-top: 50px;
    }
  }
  @media (min-width: 700px) {
    .moonshiners {
      padding-top: 90px;
      padding-bottom: 45px;
    }
  }

  .moonshiner {
    display: inline-block;
    width: 50%;
    box-sizing: border-box;
    text-decoration: none;
    color: var(--color__gray--light);
    transition-duration: .25s;
    transition-property: color;
  }
  @media (max-width: 699px) {
    .moonshiner {
      margin-bottom: 45px;
      width: 50%;
    }
  }
  @media (min-width: 700px) {
    .moonshiner {
      width: 30%;
    }
  }
  @media (min-width: 700px) {
    .moonshiner:first-of-type {
      margin-left: 20%;
    }
  }
  @media (min-width: 700px) {
    .moonshiner:last-of-type {
      margin-right: 20%;
    }
  }
  .moonshiner:hover,
  .moonshiner.router-link-active {
    color: var(--color__gray--dark);
  }

  .moonshiners__slide {
    position: absolute;
    bottom: -4px;
    height: 6px;
    width: 60px;
    background-color: var(--color__gold--dark);
    transition-duration: .5s;
    transition-property: left;
  }
  @media (max-width: 699px) {
    .moonshiner.router-link-active:nth-child(1) ~ .moonshiners__slide {
      left: calc(25% - 30px);
    }
    .moonshiner.router-link-active:nth-child(2) ~ .moonshiners__slide {
      left: calc(75% - 30px);
    }
  }
  @media (min-width: 700px) {
    .moonshiner.router-link-active:nth-child(1) ~ .moonshiners__slide {
      left: calc(35% - 30px);
    }
    .moonshiner.router-link-active:nth-child(2) ~ .moonshiners__slide {
      left: calc(65% - 30px);
    }
  }

  .moonshiner__heading {
    font-size: 18px;
    font-family: var(--font-family__sans);
    text-transform: uppercase;
    letter-spacing: 2px;
    // TODO: merge with menu__item__heading
  }

  .moonshiner__desc {
    margin-top: 4px;
    font-size: 14px;
    font-family: var(--font-family__serif);
    font-weight: 300;
    font-style: italic;
    line-height: 1.6;
    // TODO:  merge with menu__item__desc
  }
</style>
