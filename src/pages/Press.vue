<template>
  <main>
    <ul class="press__list">
      <li class="press__item" v-for="article in articles">
        <h2 class="press__heading">
          {{ article.name }}
          <span class="press__date t-medium-gray">({{ article.release }})</span>
        </h2>
        <p class="t-text">
          {{ article.summary }}
          <a class="t-link has-arrow t-gold" :href="article.url" v-if="article.type === 'video'">Watch video clip</a>
          <a class="t-link has-arrow t-gold" :href="article.url" v-else>Read full article</a>
        </p>
      </li>
    </ul>
  </main>
</template>

<script>
  export default {
    data: function() {
      return {
        articles: [
          {
            name: 'Five questions: Asia Mei',
            release: 'August 2017',
            summary: 'Asia and I snagged a table at Moonshine 152 and chatted about feeling lost in life choices, accepting the inevitability of death, and finding “the zone.” And of course she answered Five Questions. Meet Asia.',
            url: 'https://www.fivequestions.me/interviews/2017/8/29/five-questions-asia-mei'
          },
          {
            name: 'Nikkei Asian Review: New England chefs give recipes a flavor of Asia',
            release: 'July 2017',
            summary: 'Growing numbers of Chinese-American restaurateurs in Boston are recreating traditional Asian recipes with fresh New England produce, reflecting the rich multicultural history of food in the northeastern United States.',
            url: 'https://asia.nikkei.com/Business/Consumers/New-England-chefs-give-recipes-a-flavor-of-Asia'
          },
          {
            name: 'Wicked Bites: Moonshine 152 (Boston, MA)',
            release: 'June 2017',
            summary: 'Kylie McCoy is at Moonshine 152 in South Boston for some delicious and creative twists on some of your favorite dishes. She sits down with Chef Asia Mei to get the lowdown on some of her fantastic creations, like her Award Winning Fried Chicken!',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=w8CHt9zRDI4'
          },
          {
            name: 'Haute Living: The Best Spots for Fried Chicken in Boston in 2017',
            release: 'March 2017',
            summary: 'Whoever said Bostonians don’t know great fried chicken have never been to these five haute spots. From the sweet southern version served atop a savory buttermilk waffle to a spiced up dish served at a haute new location, here’s a look at some of Boston’s best interpretations of this southern favorite.',
            url: 'http://hauteliving.com/2017/03/haute-top-5-best-fried-chicken-in-boston-in-2017/630462/?market=boston'
          },
          {
            name: 'Phantom Gourmet: Asia Mei from Moonshine 152',
            release: 'September 2016',
            summary: 'Chef Asia Mei from Moonshine 152 in Southie talks about her restaurant’s street food inspired menu, including nachos, tacos, fried rice, and butterscotch pudding.',
            type: 'video',
            url: 'https://youtu.be/Wo4lvqxhzWM'
          },
          {
            name: 'The Boston Globe: The perks of being a restaurant regular',
            release: 'September 2016',
            summary: 'You have a favorite restaurant. The staff greets you by name. You’re seated at a preferred table. That specialty cocktail you like? It’s en route before you’ve ordered. Complimentary small dishes appear. Ah, the joys of being a regular.',
            url: 'http://www.bostonglobe.com/lifestyle/food-dining/2016/09/12/when-you-been-same-restaurant-times/CIJMwvuOEXpd8ZM0PfdZxO/story.html'
          },
          {
            name: 'Improper Bostonian: Boston’s Best Industry Hangout',
            release: 'July 2016',
            summary: 'It’s not hard to see how Moonshine became a hit with hospitality types. Chef/owner Asia Mei brings soul to the space that formerly housed the Franklin Southie (where she honed her skills early in her career), a dim and discreet sanctuary amid the neighborhood’s ostentatious new developments. And a late-night menu, served until 1:30 am, keeps post-shift tipplers sated with oysters and jalapeño crab rangoons. File under: very full moons.',
            url: 'http://www.improper.com/bostons-best/bars-clubs/industry-hangout-moonshine-152/'
          },
          {
            name: 'Boston’s Hidden Restaurants: Twelve of the Best Food Dishes of 2016 (So Far)',
            release: 'June 2016',
            summary: 'With the year being just about half over, it is time to take a look at some of the best food items so far in 2016.',
            url: 'http://hiddenboston.com/blogentries/twelve-best-0616.html'
          },
          {
            name: 'Boston’s Hidden Restaurants: Moonshine 152',
            release: 'June 2016',
            summary: 'Moonshine 152 is a somewhat eclectic spot, and that offbeat vibe extends to its menu, which includes New American, classic American, Latin American, and Asian influences and also mixes upscale options with street food items.',
            url: 'http://hiddenboston.com/Moonshine152.html'
          },
          {
            name: 'NESN: Dining Playbook',
            release: 'March 2016',
            summary: 'Dining Playbook offers their Best of Boston eateries, including Moonshine 152, The Corner Tavern, and Pastoral.',
            type: 'video',
            url: 'https://www.youtube.com/watch?v=6EJDCUkCyQw&app'
          },
          {
            name: 'Zagat: South Boston’s 9 Hottest Restaurants',
            release: 'March 2016',
            summary: 'Chef Asia Mei brings together American East Coast cookery, Far East flavors and a penchant for street food under one roof. The result? Tantalizing snacks like lamb meatballs with habanero-date jam, jalapeño and crab rangoon with spicy honey, and Korean BBQ tacos with Asian pear kimchi.',
            url: 'https://www.zagat.com/b/boston/9-hottest-restaurants-in-south-boston#1'
          },
          {
            name: 'Thrillist: Millennial chefs who are Changing the face of the industry',
            release: 'January 2016',
            summary: 'Growing up in the heart of Silicon Valley, Asia Mei knew she didn’t want to be an office drone -- but cooking wasn’t always in the picture. She got a degree in economics and biology while working as a stuntwoman in LA during the summer, but ended up skipping her graduation ceremony to search for a job in Boston that would teach her how to cook.',
            url: 'https://www.thrillist.com/eat/nation/meet-the-millennial-chefs-redefining-cooking-and-changing-the-face-of-the-industry'
          },
          {
            name: 'Boston Globe: Boston’s 50 best new restaurants',
            release: 'January 2016',
            summary: 'Southie’s answer to Trina’s Starlite Lounge is open late and serves brunch featuring a weekly Ron Swanson special, named for chef-owner Asia Mei’s favorite TV character. Edamame hummus and jalapeno crab rangoons, “Mama Mei’s” pork noodle soup, Korean barbecue tacos, elegant pork and fish dishes, and burgers and butterscotch pudding all find their way to the table at an unpretentious neighborhood spot.',
            url: 'https://www.bostonglobe.com/magazine/2016/01/06/boston-best-new-restaurants/iUKnLurIMnyImFoZC66F3M/story.html'
          }
        ]
      }
    }
  }
</script>

<style lang="postcss" scoped>
  .press__list {
    margin-right: auto;
    margin-left: auto;
    padding-top: 90px;
    padding-bottom: 90px;
    width: 90%;
    max-width: 600px;
  }

  .press__item {
    margin-bottom: 48px;
  }

  .press__heading {
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 32px;
    font-family: var(--font-family__sans);
    text-transform: uppercase;
    letter-spacing: 2px;
    // TODO: merge with menu__item__heading
  }

  .press__date {
    font-weight: 300;
    text-transform: none;
  }
</style>
