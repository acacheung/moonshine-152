<template>
  <main>
    <div class="l-auto">
      <nav class="menu__links l-col">
        <router-link class="menu__link" v-for="menu in menus" :key="menu.id" :to="'/menu/' + menu.id">{{ menu.name }}</router-link>
      </nav>
      <div class="menu__lists-wrap l-colspan">
        <transition name="fade">
          <menus :key="$route.params.id" :served="menus.find(o => o.id === $route.params.id).served" :menu-groups="menus.find(o => o.id === $route.params.id).menuGroups"></menus>
        </transition>
        <div class="advisories" id="advisory">
          <p class="advisory">PLEASE INFORM US OF ANY FOOD RELATED ALLERGIES</p>
          <p class="advisory">* Contains raw or undercooked food products. Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.</p>
        </div>
      </div>
    </div>
    <callout :quote="quote"></callout>
  </main>
</template>

<script>
  import Menus from '@/components/Menus'
  import Callout from '@/components/Callout'
  export default {
    components: {
      Menus,
      Callout
    },
    data: function() {
      return {
        menus: [
          {
            id: 'dinner',
            name: 'Dinner',
            served: 'Dinner is served 5:30 pm – 10 pm',
            menuGroups: [
              {
                name: 'Order Fire',
                menuItems: [
                  {
                    name: 'Oysters on the Half Shell',
                    hasAdvisory: true,
                    price: '3 each',
                    description: 'Classic Cocktail Sauce, Chili Cucumber Mignonette'
                  },
                  {
                    name: 'Blistered Shishito Peppers',
                    price: '7',
                    description: 'Sesame, Crispy Garlic'
                  },
                  {
                    name: 'Spicy Lamb Meatballs',
                    price: '13',
                    description: 'Habanero-Date Jam, Lingonberry, Chopped Mint'
                  },
                  {
                    name: 'Jalapeño Crab Rangoons',
                    price: '12',
                    description: 'Spicy Honey, Jalapeño Crab Filling'
                  },
                  {
                    name: 'Japanese Egg Tamago',
                    price: '9',
                    description: 'Chilled Japanese-Style Omelet, Crispy Sushi Rice Cakes, Shishito Peppers'
                  },
                  {
                    name: 'Edamame Hummus',
                    price: '12',
                    description: 'Chinese Smashed Cucumber Pickles, Crispy Papadums, Miso, Roasted Garlic Olive Oil'
                  },
                  {
                    name: 'Narragansett Beer-Battered Fried Cheese Curds',
                    price: '12',
                    description: 'Chipotle Ketchup'
                  }
                ]
              },
              {
                name: 'Starters',
                menuItems: [
                  {
                    name: 'Local Mixed Greens Salad',
                    price: '8',
                    description: 'Strawberry Basil Vinaigrette, Roasted Kale',
                    addProtein: true
                  },
                  {
                    name: 'Heirloom Tomato Panzanella Salad',
                    price: '16',
                    description: 'Red & White Quinoa, Pecorino, Toasted Sunflower Seed-Basil Pesto'
                  },
                  {
                    name: 'Summer Street Corn Salad',
                    price: '14',
                    description: 'Grilled Corn, Cherry Tomatoes, Queso Fresco, Citrus Aioli, Green Onions'
                  },
                  {
                    name: 'Roasted Peach & Prosciutto',
                    price: '16',
                    description: 'Herbed Ricotta, Baby Arugula Salad, Coriander Cashews, Red Plum Vinaigrette'
                  },
                  {
                    name: 'Asia’s Famous Chilled Beet Soup',
                    price: '10',
                    description: 'Cucumber Ribbons, Dill Creme Fraiche'
                  },
                  {
                    name: 'Grilled Calamari And Octopus Salad',
                    price: '16',
                    description: 'Oranges Supremes, Baby Spinach, Citron Butter'
                  },
                  {
                    name: 'Buttermilk Fried Chicken Wings',
                    price: '14',
                    description: 'Poblano Ranch Dressing, Celery Onion Slaw'
                  },
                  {
                    name: 'Throwback Korean BBQ Tacos',
                    price: '15',
                    description: 'Boneless Beef Shortrib, Asian Pear Kimchi, Candied Ginger Aioli'
                  },
                  {
                    name: 'Grilled Stuffed Avocado',
                    price: '15',
                    description: 'Crispy Sushi Rice, Green Papaya Salad, Honey Roasted Peanuts, Sticky Soy',
                    addExtra: true,
                    addProtein: true
                  }
                ]
              },
              {
                name: 'Entreés',
                menuItems: [
                  {
                    name: 'Southie’s Favorite Irish Curry',
                    price: '17',
                    description: 'Walnut Gremolata, Toasted Brown Rice Orzo Pilaf',
                    addProtein: true
                  },
                  {
                    name: 'Char-Siu Roasted Statler Chicken Breast',
                    price: '26',
                    description: 'Steamed White Rice, Green Jade Sauce, Grilled Broccolini'
                  },
                  {
                    name: 'St. Louis Style BBQ Ribs',
                    price: '28',
                    description: 'Balsamic Watermelon Salad, Cornbread Crostini, Hickory Smoked Sea Salt'
                  },
                  {
                    name: 'Surf n’ Turf',
                    price: '29',
                    description: 'Seared Scallops, Andouille Sausage, Summer Street Corn Salad'
                  },
                  {
                    name: 'Crispy Flounder Fillet',
                    price: '29',
                    description: 'Fried Pickled Green Tomatoes, Spicy Uni-Shrimp Butter'
                  },
                  {
                    name: 'Miso-Sake Glazed Haddock',
                    price: '28',
                    description: 'Gingered Sautéed Sugar Snap Peas, Furikake-Tempura Crisps'
                  },
                  {
                    name: '‘Shine Steak Frites',
                    price: '27',
                    description: 'Grilled Skirt Steak, House-cut Fries, Bourbon Porcini Demiglace, Horseradish Crème'
                  },
                  {
                    name: 'Shredded Steak Carnitas Nachos',
                    price: '18',
                    description: 'Pineapple Salsa Fresca, Cumin Crema, Pepperjack Cheese'
                  },
                  {
                    name: 'Beef Burger of the Month',
                    hasAdvisory: true,
                    price: '16',
                    description: 'Changing Fixin’s, House-Cut Fries',
                    addTopping: true
                  },
                  {
                    name: 'Mushroom Tofu Burger',
                    price: '16',
                    description: 'Sharp Cheddar, Aioli, House-Cut Fries',
                    addTopping: true
                  }
                ]
              },
              {
                name: 'Sides',
                menuItems: [
                  {
                    name: 'Steamed White Rice',
                    price: '4'
                  },
                  {
                    name: 'House-Cut Fries',
                    price: '6'
                  },
                  {
                    name: 'Grilled Broccolini',
                    price: '7'
                  },
                  {
                    name: 'Toasted Brown Rice Orzo Pilaf',
                    price: '7'
                  },
                  {
                    name: 'Balsamic Watermelon Salad',
                    price: '7'
                  }
                ]
              },
              {
                name: 'Dessert',
                menuItems: [
                  {
                    name: 'Butterscotch Pudding',
                    price: '10',
                    description: 'Chantilly Crème, Toasted Amaranth Crumble'
                  },
                  {
                    name: 'Blueberry Jamboree',
                    price: '10',
                    description: 'Cream Cheese Topping, Toasted Almond Shortbread'
                  },
                  {
                    name: 'Warm Sticky Toffee Bread Pudding',
                    price: '10',
                    description: 'Housemade Chocolate Sauce, Chantilly Cream',
                    addIceCream: true
                  },
                  {
                    name: 'Kalamansi Lemon',
                    price: '8'
                  },
                  {
                    name: 'Chef’s Whim Ice Cream of the Day',
                    price: '8'
                  }
                ]
              }
            ]
          },
          {
            id: 'late-night',
            name: 'Late Night',
            served: 'Late Night is served 10 pm – 1:30 am',
            menuGroups: [
              {
                name: 'Order Fire',
                menuItems: [
                  {
                    name: 'Oysters on the Half Shell',
                    hasAdvisory: true,
                    price: '3 each',
                    description: 'Classic Cocktail Sauce, Chili Cucumber Mignonette'
                  },
                  {
                    name: 'Blistered Shishito Peppers',
                    price: '7',
                    description: 'Sesame, Crispy Garlic'
                  },
                  {
                    name: 'Spicy Lamb Meatballs',
                    price: '13',
                    description: 'Habanero-Date Jam, Lingonberry, Chopped Mint'
                  },
                  {
                    name: 'Jalapeño Crab Rangoons',
                    price: '12',
                    description: 'Spicy Honey, Jalapeño Crab Filling'
                  },
                  {
                    name: 'Japanese Egg Tamago',
                    price: '9',
                    description: 'Chilled Japanese-Style Omelet, Crispy Sushi Rice Cakes, Shishito Peppers'
                  },
                  {
                    name: 'Edamame Hummus',
                    price: '12',
                    description: 'Chinese Smashed Cucumber Pickles, Crispy Papadums, Miso, Roasted Garlic Olive Oil'
                  },
                  {
                    name: 'Narragansett Beer-Battered Fried Cheese Curds',
                    price: '12',
                    description: 'Chipotle Ketchup'
                  }
                ]
              },
              {
                name: 'Starters',
                menuItems: [
                  {
                    name: 'Local Mixed Greens Salad',
                    price: '8',
                    description: 'Strawberry Basil Vinaigrette, Roasted Kale',
                    addProtein: true
                  },
                  {
                    name: 'Heirloom Tomato Panzanella Salad',
                    price: '16',
                    description: 'Red & White Quinoa, Pecorino, Toasted Sunflower Seed-Basil Pesto'
                  },
                  {
                    name: 'Summer Street Corn Salad',
                    price: '14',
                    description: 'Grilled Corn, Cherry Tomatoes, Queso Fresco, Citrus Aioli, Green Onions'
                  },
                  {
                    name: 'Roasted Peach & Prosciutto',
                    price: '16',
                    description: 'Herbed Ricotta, Baby Arugula Salad, Coriander Cashews, Red Plum Vinaigrette'
                  },
                  {
                    name: 'Asia’s Famous Chilled Beet Soup',
                    price: '10',
                    description: 'Cucumber Ribbons, Dill Creme Fraiche'
                  },
                  {
                    name: 'Grilled Calamari And Octopus Salad',
                    price: '16',
                    description: 'Oranges Supremes, Baby Spinach, Citron Butter'
                  },
                  {
                    name: 'Buttermilk Fried Chicken Wings',
                    price: '14',
                    description: 'Poblano Ranch Dressing, Celery Onion Slaw'
                  },
                  {
                    name: 'Throwback Korean BBQ Tacos',
                    price: '15',
                    description: 'Boneless Beef Shortrib, Asian Pear Kimchi, Candied Ginger Aioli'
                  },
                  {
                    name: 'Grilled Stuffed Avocado',
                    price: '15',
                    description: 'Crispy Sushi Rice, Green Papaya Salad, Honey Roasted Peanuts, Sticky Soy',
                    addExtra: true,
                    addProtein: true
                  }
                ]
              },
              {
                name: 'Entreés',
                menuItems: [
                  {
                    name: 'Southie’s Favorite Irish Curry',
                    price: '17',
                    description: 'Walnut Gremolata, Toasted Brown Rice Orzo Pilaf',
                    addProtein: true
                  },
                  {
                    name: 'Char-Siu Roasted Statler Chicken Breast',
                    price: '26',
                    description: 'Steamed White Rice, Green Jade Sauce, Grilled Broccolini'
                  },
                  {
                    name: 'Surf n’ Turf',
                    price: '29',
                    description: 'Seared Scallops, Andouille Sausage, Summer Street Corn Salad'
                  },
                  {
                    name: 'Dirty Fried Rice',
                    price: '15',
                    description: 'Chinese Sausage, Pickles, Scrambled Egg, Duck Liver'
                  },
                  {
                    name: '‘Shine Steak Frites',
                    price: '27',
                    description: 'Grilled Skirt Steak, House-cut Fries, Bourbon Porcini Demiglace, Horseradish Crème'
                  },
                  {
                    name: 'Shredded Steak Carnitas Nachos',
                    price: '18',
                    description: 'Pineapple Salsa Fresca, Cumin Crema, Pepperjack Cheese'
                  },
                  {
                    name: 'Beef Burger of the Month',
                    hasAdvisory: true,
                    price: '16',
                    description: 'Changing Fixin’s, House-Cut Fries',
                    addTopping: true
                  },
                  {
                    name: 'Mushroom Tofu Burger',
                    price: '16',
                    description: 'Sharp Cheddar, Aioli, House-Cut Fries',
                    addTopping: true
                  }
                ]
              },
              {
                name: 'Sides',
                menuItems: [
                  {
                    name: 'Steamed White Rice',
                    price: '4'
                  },
                  {
                    name: 'House-Cut Fries',
                    price: '6'
                  },
                  {
                    name: 'Grilled Broccolini',
                    price: '7'
                  },
                  {
                    name: 'Toasted Brown Rice Orzo Pilaf',
                    price: '7'
                  },
                  {
                    name: 'Balsamic Watermelon Salad',
                    price: '7'
                  }
                ]
              },
              {
                name: 'Dessert',
                menuItems: [
                  {
                    name: 'Butterscotch Pudding',
                    price: '10',
                    description: 'Chantilly Crème, Toasted Amaranth Crumble'
                  },
                  {
                    name: 'Blueberry Jamboree',
                    price: '10',
                    description: 'Cream Cheese Topping, Toasted Almond Shortbread'
                  },
                  {
                    name: 'Warm Sticky Toffee Bread Pudding',
                    price: '10',
                    description: 'Housemade Chocolate Sauce, Chantilly Cream',
                    addIceCream: true
                  },
                  {
                    name: 'Kalamansi Lemon',
                    price: '8'
                  },
                  {
                    name: 'Chef’s Whim Ice Cream of the Day',
                    price: '8'
                  }
                ]
              }
            ]
          },
          {
            id: 'brunch',
            name: 'Brunch',
            served: 'Brunch is served 11 am – 3 pm on weekends',
            menuGroups: [
              {
                name: 'Small Plates',
                menuItems: [
                  {
                    name: 'Oysters on the Half Shell',
                    hasAdvisory: true,
                    price: '3 each',
                    description: 'Classic Cocktail Sauce, Chili Cucumber Mignonette'
                  },
                  {
                    name: 'Local Mixed Greens Salad',
                    price: '8',
                    description: 'Strawberry Basil Vinaigrette, Roasted Kale'
                  },
                  {
                    name: 'Cinnamon French Toast Sticks',
                    price: '10',
                    description: 'Berry Maple Butter'
                  },
                  {
                    name: 'Grilled Stuffed Avocado',
                    price: '15',
                    description: 'Crispy Sushi Rice, Green Papaya Salad, Honey Roasted Peanuts, Sticky Soy',
                    addExtra: true
                  },
                  {
                    name: 'Whipped Greek Yogurt Parfait',
                    price: '9',
                    description: 'Sunflower Seed-Oat Crumble, Seasonal Fruit, Honey'
                  },
                  {
                    name: 'Roasted Peach & Prosciutto',
                    price: '16',
                    description: 'Herbed Ricotta, Baby Arugula Salad, Coriander Cashews, Red Plum Vinaigrette'
                  }
                ]
              },
              {
                name: 'Entreés',
                menuItems: [
                  {
                    name: 'Shrimp And Grits',
                    price: '17',
                    description: 'Pan-Seared Shrimp, Spicy Grits, Sherry Pan Sauce'
                  },
                  {
                    name: 'Roasted Tomato, Kale And Cheddar Omelet',
                    price: '14',
                    description: 'Homefries, Sourdough Toast'
                  },
                  {
                    name: 'Tater Tot Poutine',
                    price: '12',
                    description: 'Red-eye Gravy, Green Onions, Chinese Sausage, Chopped White Cheese'
                  },
                  {
                    name: 'Ron Swanson Brunch Special',
                    price: 'MKT',
                    description: 'Weekly inspired dish and quote from Asia’s Favorite TV Character'
                  },
                  {
                    name: 'Crab Egg Benedict',
                    hasAdvisory: true,
                    price: '16',
                    description: 'Two Fried Eggs, Maine Crab Salad, Homemade English Muffin, Tasso Ham Hollandaise'
                  },
                  {
                    name: '“Gypsy Eggs”',
                    price: '17',
                    description: 'Scrambled Eggs, Crispy Polenta, Roasted Prosciutto, Spicy Tomato Sauce'
                  },
                  {
                    name: 'Heirloom Tomato Panzanella Salad',
                    price: '16',
                    description: 'Red & White Quinoa, Pecorino, Toasted Sunflower Seed-Basil Pesto',
                    addChicken: true
                  },
                  {
                    name: 'Corned Beef Hash',
                    price: '17',
                    description: 'Slow-Poached Eggs, Housemade Beer Bread'
                  },
                  {
                    name: 'Beef Burger of the Month',
                    hasAdvisory: true,
                    price: '16',
                    description: 'Changing Fixin’s, House-Cut Fries',
                    addTopping: true
                  },
                  {
                    name: 'Mushroom Tofu Burger',
                    price: '16',
                    description: 'Sharp Cheddar, Aioli, House-Cut Fries',
                    addTopping: true
                  }
                ]
              },
              {
                name: 'Sides',
                menuItems: [
                  {
                    name: 'Home Fries',
                    price: '5'
                  },
                  {
                    name: 'Two Eggs Any Style',
                    price: '5'
                  },
                  {
                    name: 'Corned Beef Hash',
                    price: '9'
                  },
                  {
                    name: 'Herb-Baked Chicken',
                    price: '7'
                  },
                  {
                    name: 'Sourdough Toast',
                    price: '2'
                  },
                  {
                    name: 'Half Order Tater Tot Poutine',
                    price: '7'
                  },
                  {
                    name: 'Homemade English Muffin',
                    price: '3'
                  },
                  {
                    name: 'Homemade Beer Bread',
                    price: '3'
                  },
                  {
                    name: 'Green Chili Cheese Grits',
                    price: '5'
                  },
                  {
                    name: 'Pecanwood Bacon',
                    price: '5'
                  },
                  {
                    name: 'Jalapeño Bacon',
                    price: '5'
                  }
                ]
              },
              {
                name: 'Cocktails',
                menuItems: [
                  {
                    name: 'Big Bloody Mary',
                    price: '10',
                    description: 'Reyka Vodka, House Kimchi Juice, Pint Glass'
                  },
                  {
                    name: 'Mimosa',
                    price: '10',
                    description: 'Fresh Orange Juice, Prosecco'
                  },
                  {
                    name: '’Shine Spritz',
                    price: '10',
                    description: 'Ford Gin, Fresh Lemon, Aperol, Prosecco'
                  },
                  {
                    name: 'ManMosa',
                    price: '5',
                    description: 'Fresh Orange Juice, Miller High Life'
                  },
                  {
                    name: 'Irish Good Morning',
                    price: '10',
                    description: 'Glendalough Double Barrel Irish Whiskey, Kerrygold Irish Cream & Fresh Brewed Fazenda Coffee… Available Hot or Iced'
                  }
                ]
              }
            ]
          }
        ],
        quote: '“We offer seasonal menus that focus on bright, sustainable plays on local East Coast cuisine and street food.”'
      }
    }
  }
</script>

<style lang="postcss" scoped>
  @media (max-width: 909px) {
    .menu__links {
      margin-right: 5%;
      margin-left: 5%;
      padding-bottom: 30px;
      overflow: auto;
      border-bottom: 2px solid var(--color__gold--dark);
    }
  }
  @media (min-width: 910px) {
    .menu__links {
      padding-top: 48px;
    }
  }

  .menu__link {
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 300;
    font-family: var(--font-family__sans);
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color__gray--light);
    letter-spacing: 5px;
    transition-duration: .25s;
    transition-property: color;
  }
  @media (max-width: 909px) {
    .menu__link {
      float: left;
      clear: left;
    }
  }
  @media (min-width: 910px) {
    .menu__link {
      float: right;
      clear: right;
    }
  }
  .menu__link:hover,
  .menu__link.router-link-active {
    color: var(--color__gray--dark);
  }

  .menu__lists-wrap {
    padding-top: 53px;
  }
  @media (max-width: 909px) {
    .menu__lists-wrap {
      padding-right: 5%;
      padding-left: 5%;
    }
  }

  .advisories {
    margin-bottom: 48px;
    padding-top: 48px;
    max-width: 400px;
  }

  .advisory {
    margin-bottom: 24px;
    font-size: 14px;
    font-family: var(--font-family__serif);
    font-weight: 300;
    font-style: italic;
    line-height: 1.6;
    color: var(--color__gray--light);
  }
</style>
