# SSUI Assignment 5: Bun Bun Shop Prototype

The website is hosted live on heroku: [https://bun-bun-bake-shop.herokuapp.com/](here).
(Also note that Heroku is a bit slow when initially pinged since the "dyno" is asleep on free accounts.)

### Additional Libraries/Frameworks Used

- Node (Express + EJS)
- JQuery
- Bootstrap

### Bonus Work

- There is an item information page for **every** product. 
- The page for "Browse" is dynamic in the sense that it pulls from a "data" store (simply a script with a JS constant containing all relevant attributes), then renders the HTML depending on what is defined in the data.
- Each item page is also dynamic in that I am using EJS to detect the id of the item in the URL (e.g. /item/:item_id), then rendering the page by again pulling from the data store. 