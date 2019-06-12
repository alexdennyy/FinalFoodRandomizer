$( document ).ready(function() {
    console.log( "ready!" );

    var randomFoods = ["Scrambled Eggs", "Avocado Toast", "Rice and Vegetables", "Black Beans and Rice", "Breakfast Burrito", "Grilled Cheese", "Tomato Soup", "Spaghetti Marinara", "Mac n Cheese", "Banana Oatmeal", "Chickpea Pasta", "Lentil Soup", "Chili", "PB&J Sandwich", "Grilled Chicken", "Baked Sweet Potato Fries", "Zucchini Mini-Pizzas", "Apple Pancakes", "Pasta Salad", "Fried Rice", "Tuna Melt", "Cereal", "Crepes", "Frittata", "Smootie", "Fruit Salad", "Oatmeal Muffins", "Brownies", "Nachos", "Hummus and Vegetables", "Yogurt", "Burger", "Quinoa Salad", "Baked Potatoes", "French Onion Soup", "Tofu Steak", "Meatloaf", "Pear Salad", "Instant Ramen with Veggies", "Quesadillas", "Pita Bread Pizzas", "Cheese, Egg, Ham Bagel", "Corn", "Guacamole", "Brushcetta", "Miso Soup", "Ice-Cream", "Edible Cookie Dough", "Rice Krispies", "Granola", "Grilled Salmon", "Steamed Spinach and Broccoli"]
    $(".feedMeContainer").on("click", function(){
      $(".foodDisplay").empty();
      var randomNumberLength = randomFoods.length - 1;
      var randomFoodIndex = Math.floor(Math.random() * (randomNumberLength + 1))
      console.log(randomFoods[randomFoodIndex]);
      $(".foodDisplay").append(randomFoods[randomFoodIndex]);
    })
});
