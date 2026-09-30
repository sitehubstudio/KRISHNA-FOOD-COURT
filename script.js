/* ==========================================================================
   Krishna Food Court - Official 100% Authentic Menu Dataset
   Directly transcribed from original menu sheets & handwritten updates:
   IMG_5864, IMG_5877, IMG_5878, IMG_5879, IMG_5880, IMG_5881
   ========================================================================== */

const menuItems = [
  // 1. CHOWMEIN (FULL/HALF) (IMG_5864)
  { name: "Veg Chowmein", category: "Chowmein", full: 60, half: 35, note: "Fresh stir-fried noodles with crisp vegetables" },
  { name: "Mix Veg Chowmein", category: "Chowmein", full: 120, half: 70, note: "Loaded stir-fried noodles with assorted vegetables" },
  { name: "Paneer Chowmein", category: "Chowmein", full: 100, half: 50, note: "Noodles tossed with fresh cottage cheese cubes" },
  { name: "Egg Chowmein", category: "Chowmein", full: 80, half: 40, note: "Wok-tossed noodles with scrambled eggs and spices" },
  { name: "Chicken Chowmein", category: "Chowmein", full: 100, half: 50, note: "Noodles with seasoned chicken slivers and peppers" },
  { name: "Mushroom Chowmein", category: "Chowmein", full: 100, half: 50, note: "Tossed noodles with fresh sliced mushrooms" },
  { name: "Corn Chowmein", category: "Chowmein", full: 110, half: 60, note: "Stir-fried noodles with golden sweet corn" },
  { name: "Schezwan Chowmein", category: "Chowmein", full: 100, half: 50, note: "Spicy noodles in fiery Schezwan sauce (Handwritten correction)" },
  { name: "Non-Veg Mix Chowmein", category: "Chowmein", full: 110, half: 60, note: "Noodles with chicken, egg, and mixed seasonings" },

  // 2. CHILLY (IMG_5864)
  { name: "Chicken Chilly", category: "Chilly & Manchurian", full: 150, half: 80, note: "Crispy chicken chunks tossed with diced onions and chillies" },
  { name: "Boneless Checken Chilly", category: "Chilly & Manchurian", full: 160, half: 85, note: "Tender boneless chicken tossed in savory chilli soya sauce" },
  { name: "Egg Chilly", category: "Chilly & Manchurian", full: 100, half: 50, note: "Batter-fried egg pieces with peppers and hot sauces" },
  { name: "Paneer Chilly", category: "Chilly & Manchurian", full: 150, half: 80, note: "Paneer cubes tossed with capsicum, onion, and green chillies" },
  { name: "Mushroom Chilly", category: "Chilly & Manchurian", full: 150, half: 80, note: "Button mushrooms in spicy Indo-Chinese garlic sauce" },
  { name: "Veg Manchurian", category: "Chilly & Manchurian", full: 90, half: 50, note: "Crisp seasoned vegetable balls in rich Manchurian sauce" },
  { name: "Soya Chilly", category: "Chilly & Manchurian", full: 80, half: 40, note: "Soya chunks in spicy chilly sauce (Handwritten correction)" },
  { name: "Babycorn Chilly", category: "Chilly & Manchurian", full: 140, half: 70, note: "Crispy baby corn tossed in chilly masala (Handwritten correction)" },
  { name: "Chana Chilly", category: "Chilly & Manchurian", full: 100, half: 50, note: "Crispy fried chickpeas with capsicum and chillies" },
  { name: "Corn Pepper & Salt", category: "Chilly & Manchurian", full: 150, half: 80, note: "Crispy fried sweet corn tossed with freshly cracked black pepper and salt" },

  // 3. PASTA (IMG_5864)
  { name: "Pasta (Red)", category: "Pasta", price: "₹80", note: "Penne pasta tossed in tangy Italian herb tomato sauce" },
  { name: "Pasta (White Sauce)", category: "Pasta", price: "₹100", note: "Creamy cheese and garlic bechamel sauce penne pasta" },

  // 4. MAGGI (IMG_5877)
  { name: "Maggi", category: "Maggi", price: "₹30", note: "Classic masala noodle bowl served steaming hot" },
  { name: "Veg Maggi", category: "Maggi", price: "₹40", note: "Tossed with onions, tomatoes, and seasoned vegetables" },
  { name: "Egg Maggi", category: "Maggi", price: "₹40", note: "Prepared with scrambled eggs and aromatic masala" },

  // 5. ROLLS (IMG_5877)
  { name: "Veg Roll", category: "Rolls", price: "₹35", note: "Crispy flaky paratha wrapped around spiced vegetables" },
  { name: "Mix Veg Roll", category: "Rolls", price: "₹70", note: "Stuffed with assorted seasoned vegetables and sauces" },
  { name: "Paneer Roll", category: "Rolls", price: "₹60", note: "Warm paratha rolled with seasoned cottage cheese" },
  { name: "Mushroom Roll", category: "Rolls", price: "₹60", note: "Filled with sauteed seasoned button mushrooms" },
  { name: "Chicken Roll", category: "Rolls", price: "₹50", note: "Flaky roll stuffed with tender spiced chicken pieces" },
  { name: "Non Veg Mix Chicken Roll", category: "Rolls", full: 70, half: 60, note: "Special mix chicken filling with extra seasoning" },
  { name: "Egg Roll", category: "Rolls", full: 45, half: 35, note: "Egg-coated paratha wrapped with sliced onions and chutney" },

  // 6. SOUP (IMG_5877)
  { name: "Veg Soup", category: "Soup", price: "₹30", note: "Clear vegetable broth with diced seasonal vegetables" },
  { name: "Mix Veg Soup", category: "Soup", price: "₹60", note: "Hearty mixed vegetable soup with warm spices" },
  { name: "Veg Garlic Soup", category: "Soup", price: "₹70", note: "Rich vegetable soup infused with roasted garlic" },
  { name: "Manchow Soup", category: "Soup", price: "₹80", note: "Spicy garlic soup topped with crunchy fried noodles" },
  { name: "Mushroom Soup", category: "Soup", price: "₹60", note: "Warm and earthy soup made with fresh button mushrooms" },
  { name: "Corn Soup", category: "Soup", price: "₹60", note: "Sweet corn kernel soup with subtle herbs" },
  { name: "Egg Soup", category: "Soup", price: "₹40", note: "Comforting broth with delicate ribbon egg drops" },
  { name: "Egg Garlic Soup", category: "Soup", price: "₹60", note: "Egg drop broth with roasted garlic and pepper" },
  { name: "Chicken Soup", category: "Soup", price: "₹50", note: "Homestyle chicken broth seasoned with mild herbs" },
  { name: "Chicken Garlic Soup", category: "Soup", price: "₹70", note: "Chicken broth with aromatic crushed garlic" },
  { name: "Non-Veg Mix Soup", category: "Soup", price: "₹70", note: "Hearty combination broth with chicken, egg, and herbs" },
  { name: "Krishna Spl Veg Soup", category: "Soup", price: "₹90", note: "Chef's signature rich soup packed with choice vegetables" },
  { name: "Krishna Spl Non-Veg Soup", category: "Soup", price: "₹70", note: "Chef's special nourishing chicken and egg soup" },

  // 7. RICE (IMG_5878)
  { name: "Steam Rice", category: "Rice", full: 50, half: 25, note: "Steamed long grain basmati rice" },
  { name: "Zeera Rice", category: "Rice", full: 60, half: 30, note: "Basmati rice tempered with roasted cumin seeds and ghee" },
  { name: "Mix-Veg Rice", category: "Rice", full: 140, half: 70, note: "Aromatic basmati rice cooked with mixed garden vegetables" },
  { name: "Paneer Rice", category: "Rice", full: 120, half: 60, note: "Rice tossed with seasoned paneer cubes and herbs" },
  { name: "Egg Rice", category: "Rice", full: 100, half: 50, note: "Wok-fried rice with scrambled eggs and spring onions" },
  { name: "Chicken Fry Rice", category: "Rice", full: 120, half: 60, note: "Flavorful fried rice tossed with tender spiced chicken" },
  { name: "Non-Veg Mix Rice", category: "Rice", full: 140, half: 70, note: "Fried rice loaded with chicken, egg, and veggies" },
  { name: "Schezwan Fry Rice", category: "Rice", price: "₹90", note: "Spicy Schezwan sauce fried rice with veggies" },
  { name: "Veg Fried Rice", category: "Rice", full: 80, half: 40, note: "Classic wok-tossed fried rice with finely chopped veggies" },

  // 8. ROTI (IMG_5878)
  { name: "Butter Roti", category: "Roti & Paratha", price: "₹12", note: "Soft whole wheat tawa roti brushed with golden butter" },
  { name: "Tawa Roti (With Sabji)", category: "Roti & Paratha", price: "₹8 / ₹12 (with Sabji)", note: "Homestyle tawa roti (₹8 plain, ₹12 with seasonal sabji)" },
  { name: "Plain Paratha", category: "Roti & Paratha", price: "₹15", note: "Tawa-toasted flaky golden flatbread" },
  { name: "Laccha Paratha", category: "Roti & Paratha", price: "₹20", note: "Multi-layered crisp spiral paratha" },
  { name: "Aloo Paratha", category: "Roti & Paratha", price: "₹25", note: "Stuffed with spiced mashed potato filling" },
  { name: "Sattu Paratha", category: "Roti & Paratha", price: "₹30", note: "Traditional roasted gram flour (sattu) stuffed paratha" },
  { name: "Paneer Paratha", category: "Roti & Paratha", price: "₹50", note: "Stuffed with seasoned crumbled cottage cheese" },

  // 9. BREAKFAST (IMG_5878)
  { name: "Poori", category: "Breakfast", price: "₹6 / PC", note: "Puffed, golden-fried whole wheat poori" },
  { name: "Kachauri", category: "Breakfast", price: "₹10 / PC", note: "Flaky deep-fried snack with savory spiced filling" },
  { name: "Poha", category: "Breakfast", price: "₹30", note: "Light flattened rice tempered with mustard seeds and peanuts" },
  { name: "Jumbo Butter Toast", category: "Breakfast", price: "₹30 (2PC)", note: "Two thick toasted bread slices with rich butter" },
  { name: "Bread Omelette", category: "Breakfast", price: "₹40", note: "Warm toasted bread wrapped with seasoned two-egg omelette" },

  // 10. DAL (IMG_5879)
  { name: "Plain Dal", category: "Dal", price: "₹40", note: "Homestyle boiled yellow lentils" },
  { name: "Dal Fry", category: "Dal", price: "₹50", note: "Yellow lentils tempered with onion, tomato, and garlic" },
  { name: "Tadka", category: "Dal", full: 80, half: 40, note: "Yellow lentils finished with ghee and whole red chilli tadka" },
  { name: "Dal Makhani", category: "Dal", full: 90, half: 50, note: "Slow-cooked black lentils in creamy butter gravy" },
  { name: "Egg Tadka", category: "Dal", price: "₹70", note: "Yellow lentils cooked with scrambled eggs and spices" },

  // 11. EGGS (IMG_5879)
  { name: "Boiled Egg", category: "Eggs", price: "₹10 / PC", note: "Fresh hard-boiled egg with rock salt and pepper" },
  { name: "Egg Fry", category: "Eggs", price: "₹15 / PC", note: "Single egg sunny side or pan-fried" },
  { name: "Egg M/S Fry", category: "Eggs", price: "₹20 / PC", note: "Egg masala fry seasoned with onion, chilli, and herbs" },
  { name: "Omelette", category: "Eggs", full: 30, half: 20, note: "Pan-fried skillet omelette with green chillies and onions" },
  { name: "Krishna Spl Omelette", category: "Eggs", price: "₹60", note: "Chef's loaded special omelette with toppings" },
  { name: "Omelette Curry", category: "Eggs", price: "₹60", note: "Fluffy omelette pieces simmered in spicy curry" },
  { name: "Egg Curry", category: "Eggs", price: "₹60", note: "Hard-boiled eggs cooked in aromatic homestyle gravy" },

  // 12. CHICKEN (IMG_5879)
  { name: "Chicken Curry", category: "Chicken", price: "₹120 (2PC)", note: "Classic homestyle chicken curry in flavorful gravy" },
  { name: "Chicken Butter Masala", category: "Chicken", price: "₹140 (2PC)", note: "Chicken simmered in rich creamy tomato and butter sauce" },
  { name: "Chicken Do Pyaza", category: "Chicken", price: "₹140 (2PC)", note: "Curry prepared with generous caramelized onions" },
  { name: "Chicken Kadai", category: "Chicken", price: "₹160 (2PC)", note: "Cooked in wok with bell peppers and roasted coriander seeds" },
  { name: "Chicken 65", category: "Chicken", price: "₹160 (FULL)", note: "Crispy fried southern-style chicken with curry leaves" },
  { name: "Chicken Oil Fry", category: "Chicken", price: "₹100 (2PC)", note: "Crispy deep-fried seasoned chicken pieces" },
  { name: "Chicken Pakoda", category: "Chicken", price: "₹120 (4 PC)", note: "Batter-fried spiced crispy chicken fritters" },
  { name: "Chicken Leg Crispy", category: "Chicken", price: "₹60 (PC)", note: "Whole crispy marinated chicken leg piece" },
  { name: "Chicken Lollypop", category: "Chicken", price: "₹100 (PC)", note: "Seasoned chicken winglet fried crisp and served with dip" },

  // 13. PANEER & MUSHROOM (IMG_5880)
  { name: "Paneer Masala", category: "Paneer & Mushroom", price: "₹140 (12PC)", note: "Twelve paneer cubes simmered in onion-tomato masala" },
  { name: "Paneer Butter Masala", category: "Paneer & Mushroom", price: "₹140", note: "Paneer in silky tomato, cream, and butter gravy" },
  { name: "Paneer Do Pyaza", category: "Paneer & Mushroom", price: "₹160", note: "Paneer cubes cooked with chunky caramelized onions" },
  { name: "Paneer Kadahi", category: "Paneer & Mushroom", price: "₹180", note: "Wok-cooked paneer with capsicum and freshly ground spices" },
  { name: "Paneer Peeper Salt Dry", category: "Paneer & Mushroom", price: "₹160", note: "Paneer tossed dry with cracked black pepper and salt" },
  { name: "Paneer Peeper Salt Gravy", category: "Paneer & Mushroom", price: "₹180", note: "Pepper and salt flavored paneer in savory gravy" },
  { name: "Paneer Mushroom Mix", category: "Paneer & Mushroom", price: "₹200", note: "Signature combo of paneer and button mushrooms" },
  { name: "Paneer 65", category: "Paneer & Mushroom", price: "₹120 (8 PC)", note: "Eight crispy marinated paneer bites tossed southern style" },
  { name: "Paneer Pakoda", category: "Paneer & Mushroom", price: "₹160 (8PC)", note: "Eight golden gram flour batter-fried paneer pakodas" },
  { name: "Paneer Matar", category: "Paneer & Mushroom", price: "₹130", note: "Cottage cheese cubes and sweet green peas in curry" },
  { name: "Mix Veg", category: "Paneer & Mushroom", price: "₹140", note: "Seasoned seasonal vegetables cooked in rich gravy" },
  { name: "Mushroom Masala", category: "Paneer & Mushroom", price: "₹130", note: "Fresh button mushrooms in spiced onion-tomato gravy" },
  { name: "Mushroom Do Pyaza", category: "Paneer & Mushroom", price: "₹140", note: "Mushrooms cooked with double quantity of onions" },
  { name: "Mushroom Kadai", category: "Paneer & Mushroom", price: "₹160", note: "Button mushrooms tossed with peppers in a traditional kadhai" },
  { name: "Mushroom Pakoda", category: "Paneer & Mushroom", price: "₹140", note: "Crispy batter-fried button mushroom fritters" },

  // 14. THALI & BIRYANI (IMG_5880)
  { name: "Veg Thali", category: "Thali", price: "₹50", note: "Homestyle thali with seasonal sabzi, dal, rice, and roti" },
  { name: "Veg Biryani", category: "Thali", price: "Ask at restaurant", note: "Fragrant basmati rice cooked with spiced garden vegetables" },
  { name: "Hyderabadi Biryani", category: "Thali", full: 120, half: 70, note: "Layered Hyderabadi-style spiced dum biryani" },

  // 15. PIZZA (IMG_5881)
  { name: "Veg Pizza", category: "Pizza", price: "₹80", note: "Fresh crust topped with capsicum, onion, and mozzarella" },
  { name: "Paneer Pizza", category: "Pizza", price: "₹100", note: "Seasoned paneer cubes and melted cheese on baked crust" },
  { name: "Sweet Corn Pizza", category: "Pizza", price: "₹100", note: "Golden sweet corn and mozzarella on fresh pizza base" },
  { name: "Veg Mix Pizza", category: "Pizza", price: "₹140", note: "Loaded with capsicum, corn, onions, tomatoes, and herbs" },
  { name: "Chicken Pizza", category: "Pizza", price: "₹130", note: "Spiced chicken slivers, onions, and melted mozzarella" },
  { name: "Makhani Pizza", category: "Pizza", price: "₹140", note: "Topped with rich makhani sauce, herbs, and cheese" },
  { name: "Tomato Pizza", category: "Pizza", price: "₹80", note: "Juicy sliced tomatoes and mozzarella cheese" },
  { name: "Capcium Pizza", category: "Pizza", price: "₹80", note: "Fresh crisp green capsicum and melted cheese" },
  { name: "Onion Pizza", category: "Pizza", price: "₹80", note: "Crisp red onions with mozzarella and Italian herbs" },
  { name: "Delux Pizza", category: "Pizza", price: "₹140", note: "Deluxe pizza loaded with premium toppings and extra seasoning" },
  { name: "Cheese Pizza", category: "Pizza", price: "₹100", note: "Double mozzarella cheese classic pizza" },
  { name: "Extra Cheese (Add-on)", category: "Pizza", price: "₹30", note: "Additional layer of melted mozzarella cheese" },
  { name: "Parcel Box Packaging", category: "Pizza", price: "₹10", note: "Safe food-grade parcel packing box" },

  // 16. BURGER (IMG_5881)
  { name: "Veg Burger", category: "Burger", price: "₹50", note: "Crispy vegetable patty, sliced tomato, onion, and sauce" },
  { name: "Paneer Burger", category: "Burger", price: "₹70", note: "Tender paneer patty with lettuce and creamy dressing" },
  { name: "Cheese Burger", category: "Burger", price: "₹70", note: "Crispy patty topped with melted cheese slice" },
  { name: "Chicken Burger", category: "Burger", price: "₹70", note: "Juicy chicken patty in toasted sesame burger bun" },

  // 17. SANDWICH (IMG_5881)
  { name: "Veg Sandwich", category: "Sandwich", price: "₹60", note: "Toasted sandwich with seasoned cucumber, tomato, and potato" },
  { name: "Paneer Sandwich", category: "Sandwich", price: "₹80", note: "Stuffed with seasoned crumbled paneer and butter" },
  { name: "Cheese Sandwich", category: "Sandwich", price: "₹70", note: "Grilled sandwich loaded with melted gooey cheese" },
  { name: "Chicken Sandwich", category: "Sandwich", price: "₹80", note: "Stuffed with shredded chicken and house special dressing" },

  // 18. GARLIC BREAD (IMG_5881)
  { name: "Stuff Garlic Bread", category: "Garlic Bread", price: "₹90", note: "Stuffed freshly baked bread infused with garlic butter" },
  { name: "Paneer Garlic Bread", category: "Garlic Bread", price: "₹120", note: "Garlic bread topped with seasoned paneer and cheese" },
  { name: "Chicken Garlic Bread", category: "Garlic Bread", price: "₹120", note: "Baked garlic bread with spiced chicken and mozzarella" },

  // 19. DRINKS (Official Board)
  { name: "Fresh Mint Mojito", category: "Drinks", price: "₹50", note: "Chilled cooler with crushed mint, lemon, soda, and syrup" },
  { name: "Chocolate Shake", category: "Drinks", price: "₹60", note: "Thick chilled chocolate milk blend with chocolate syrup" },
  { name: "Fresh Lemon Water", category: "Drinks", price: "₹25", note: "Freshly squeezed lemon water (Sweet / Salted shikanji)" },
  { name: "Masala Tea", category: "Drinks", price: "₹15", note: "Hot brewed milk tea infused with ginger and cardamom" },
  { name: "Hot Coffee", category: "Drinks", price: "₹25", note: "Fresh brewed frothy hot coffee" },

  // 20. DESSERTS (Official Board)
  { name: "Jalebi (Gur / Jaggery)", category: "Desserts", price: "₹15 / Plate", note: "Crispy fried traditional jalebis made with pure jaggery (Gur)" },
  { name: "Gulab Jamun", category: "Desserts", price: "₹15 / PC", note: "Warm mawa spheres soaked in cardamom-rose sugar syrup" },
  { name: "Rasgulla", category: "Desserts", price: "₹15 / PC", note: "Soft spongy chenna sweets soaked in light sugar syrup" },
  { name: "Rich Rice Kheer", category: "Desserts", price: "₹40 / Bowl", note: "Slow-simmered basmati rice pudding with milk and dry fruits" }
];

let currentActiveCategory = "All";
let currentSearchQuery = "";

function orderItem(itemName) {
  const cleanName = encodeURIComponent(itemName);
  const waUrl = "https://wa.me/917549052423?text=Hi%20Krishna%20Food%20Court,%20I%20would%20like%20to%20order:%20" + cleanName;
  window.open(waUrl, "_blank");
}

function formatPriceDisplay(item) {
  if (item.full !== undefined && item.half !== undefined) {
    const fullText = typeof item.full === "number" ? "₹" + item.full : item.full;
    const halfText = typeof item.half === "number" ? "₹" + item.half : item.half;
    return '<div class="price-full-half"><span class="badge-price"><span>Full:</span> ' + fullText + '</span><span class="badge-price"><span>Half:</span> ' + halfText + '</span></div>';
  } else if (item.price) {
    return '<span class="single-price">' + item.price + '</span>';
  } else {
    return '<span class="price-ask">Ask at restaurant</span>';
  }
}

function initCategoryChips() {
  const container = document.getElementById("categoryScrollContainer");
  if (!container) return;

  const categories = ["All", ...new Set(menuItems.map(item => item.category))];

  container.innerHTML = categories.map(cat => {
    const count = cat === "All" ? menuItems.length : menuItems.filter(i => i.category === cat).length;
    return '<button type="button" class="cat-chip ' + (cat === currentActiveCategory ? "active" : "") + '" data-cat="' + cat + '" onclick="selectMenuCategory(\'' + cat + '\')"><span>' + cat + '</span><span class="cat-chip-count">' + count + '</span></button>';
  }).join("");
}

function selectMenuCategory(category) {
  currentActiveCategory = category;
  document.querySelectorAll(".cat-chip").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-cat") === category);
  });
  renderFullMenu();
}

function resetSearchAndFilter() {
  const searchInput = document.getElementById("menuSearchInput");
  const clearBtn = document.getElementById("clearSearchBtn");
  if (searchInput) searchInput.value = "";
  if (clearBtn) clearBtn.style.display = "none";

  currentSearchQuery = "";
  currentActiveCategory = "All";
  initCategoryChips();
  renderFullMenu();
}

function renderFullMenu() {
  const container = document.getElementById("fullMenuContainer");
  const counter = document.getElementById("menuResultsCount");
  const noResultsState = document.getElementById("noResultsState");

  if (!container) return;

  const query = currentSearchQuery.trim().toLowerCase();

  const filtered = menuItems.filter(item => {
    const matchesCategory = (currentActiveCategory === "All") || (item.category === currentActiveCategory);
    const matchesSearch = query === "" || 
      item.name.toLowerCase().includes(query) || 
      item.category.toLowerCase().includes(query) ||
      (item.note && item.note.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  if (counter) {
    if (query !== "") {
      counter.textContent = 'Found ' + filtered.length + ' dish' + (filtered.length === 1 ? '' : 'es') + ' for "' + currentSearchQuery + '"';
    } else if (currentActiveCategory !== "All") {
      counter.textContent = 'Showing ' + filtered.length + ' items in ' + currentActiveCategory;
    } else {
      counter.textContent = 'Showing all ' + filtered.length + ' items';
    }
  }

  if (filtered.length === 0) {
    container.innerHTML = "";
    if (noResultsState) noResultsState.style.display = "block";
    return;
  }

  if (noResultsState) noResultsState.style.display = "none";

  container.innerHTML = filtered.map(item => {
    return '<article class="menu-item-row" data-category="' + item.category + '">' +
      '<div class="menu-item-details">' +
        '<span class="menu-item-tag">' + item.category + '</span>' +
        '<h3 class="menu-item-name">' + item.name + '</h3>' +
        (item.note ? '<p class="menu-item-note">' + item.note + '</p>' : '') +
      '</div>' +
      '<div class="menu-item-pricing-box">' +
        '<div class="price-display-wrapper">' + formatPriceDisplay(item) + '</div>' +
        '<button class="btn-item-order-mini" onclick="orderItem(\'' + item.name.replace(/'/g, "\\'") + '\')">' +
          '<i class="fa-brands fa-whatsapp"></i><span>Order</span>' +
        '</button>' +
      '</div>' +
    '</article>';
  }).join("");
}

function openLightbox(element) {
  const modal = document.getElementById("lightboxModal");
  const imgTag = element.querySelector("img");
  const lightboxImg = document.getElementById("lightboxImg");
  const caption = document.getElementById("lightboxCaption");

  if (!modal || !imgTag || !lightboxImg) return;

  lightboxImg.src = imgTag.src;
  lightboxImg.alt = imgTag.alt || "Krishna Food Court";
  const labelEl = element.querySelector("h4") || element.querySelector("strong") || element.querySelector(".about-img-caption span");
  caption.textContent = labelEl ? labelEl.textContent.trim() : (imgTag.alt || "Krishna Food Court");

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.getElementById("lightboxModal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("fullMenuContainer")) {
    initCategoryChips();
    renderFullMenu();

    const searchInput = document.getElementById("menuSearchInput");
    const clearBtn = document.getElementById("clearSearchBtn");

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        currentSearchQuery = e.target.value;
        if (clearBtn) clearBtn.style.display = currentSearchQuery.length > 0 ? "block" : "none";
        renderFullMenu();
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        if (searchInput) searchInput.value = "";
        clearBtn.style.display = "none";
        currentSearchQuery = "";
        renderFullMenu();
        if (searchInput) searchInput.focus();
      });
    }
  }

  const mobileToggle = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
    navLinks.querySelectorAll("a").forEach(l => {
      l.addEventListener("click", () => navLinks.classList.remove("active"));
    });
  }

  const closeBtn = document.getElementById("lightboxClose");
  const overlay = document.getElementById("lightboxOverlay");
  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (overlay) overlay.addEventListener("click", closeLightbox);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
});