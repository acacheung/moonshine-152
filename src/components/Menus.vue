<template>
  <div id="food">
    <span class="menu__times" v-html="served"></span>
    <div v-for="menuGroup in menuGroups">
      <h2 class="menu__heading">{{ menuGroup.name }}</h2>
      <ul class="menu__list">
        <li v-for="menuItem in menuGroup.menuItems" class="menu__item">
          <h3 class="menu__item__heading">
            {{ menuItem.name }}<!--
         --><a v-if="menuItem.hasAdvisory" class="menu__item__advisory" href="#advisory">*</a>
            <span class="menu__item__price">{{ menuItem.price }}</span>
          </h3>
          <p v-if="menuItem.description" class="menu__item__desc">
            {{ menuItem.description }}<!--
         --><span v-if="menuItem.addExtra">… Add Fried Egg 2… Add Maine Crab Salad 3</span><!--
         --><span v-if="menuItem.addProtein">… Add Staff Favorite: Statler Chicken Breast, Skirt Steak or Lamb Meatballs 10</span><!--
         --><span v-if="menuItem.addTopping">… Add Jalapeño Bacon or Fried Egg 2</span><!--
         --><span v-if="menuItem.addIceCream">… Add Chef’s Whim Ice Cream of the Day 3</span><!--
         --><span v-if="menuItem.addChicken">… Add Herb-Baked Chicken 5</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'served',
      'menuGroups',
      'menuItems'
    ]
  }
</script>

<style lang="postcss">
  .menu__heading {
    margin-bottom: 32px;
    font-weight: 300;
    font-family: var(--font-family__serif);
    font-style: italic;
    text-transform: uppercase;
    color: var(--color__gray--light);
  }

  .menu__list {
    margin-bottom: 100px;
    color: var(--color__black);
  }

  .menu__times {
    margin-bottom: 50px;
    display: block;
    font-size: 18px;
    font-family: var(--font-family__sans);
    font-weight: 500;
    color: var(--color__gold);
  }

  .menu__item {
    margin-bottom: 32px;
  }

  .menu__item__heading {
    font-size: 18px;
    font-family: var(--font-family__sans);
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .menu__item__advisory {
    font-weight: 400;
    text-decoration: none;
    color: var(--color__gold);
  }

  .menu__item__price {
    margin-left: 8px;
    text-transform: lowercase;
  }

  .menu__item__price--sale {
    text-decoration: line-through;
  }

  .menu__item__desc {
    margin-top: 4px;
    font-size: 14px;
    font-family: var(--font-family__serif);
    font-weight: 300;
    font-style: italic;
    line-height: 1.6;
  }
</style>
