import { Recipe } from '../types/recipe';

// High-fidelity image assets generated for showcase and signature recipes
export const HERO_IMAGE = '/src/assets/images/hero_bakery_showcase_1793211985856.jpg';
export const SOURDOUGH_IMAGE = '/src/assets/images/artisan_sourdough_loaf_1793211985936.jpg';
export const CROISSANT_IMAGE = '/src/assets/images/golden_butter_croissants_1793211985641.jpg';
export const CHOCOLATE_CAKE_IMAGE = '/src/assets/images/chocolate_fudge_cake_1793211986465.jpg';
export const FRUIT_TART_IMAGE = '/src/assets/images/fresh_berry_fruit_tart_1793211987840.jpg';

export interface CategoryInfo {
  name: string;
  hue: number;
  badgeBg: string;
  badgeText: string;
  description: string;
  bakerTips: string[];
}

export const CATEGORIES_INFO: Record<string, CategoryInfo> = {
  'Breads': {
    name: 'Breads',
    hue: 34,
    badgeBg: 'bg-amber-100 dark:bg-amber-950/40',
    badgeText: 'text-amber-900 dark:text-amber-200',
    description: 'Crusty boules, sandwich loaves, blistered flatbreads & heritage baguettes',
    bakerTips: [
      'Weigh your flour with a kitchen scale; cups can vary by up to 20%.',
      'Inject steam in the first 10 minutes of baking for a crackly, blistered crust.',
      'Cool sourdough fully on a wire rack before slicing, as the internal crumb continues setting.'
    ]
  },
  'Pastries': {
    name: 'Pastries',
    hue: 48,
    badgeBg: 'bg-yellow-100 dark:bg-yellow-950/40',
    badgeText: 'text-yellow-900 dark:text-yellow-200',
    description: 'Laminated Viennoiserie, buttery crusts, choux pastry & fruit tarts',
    bakerTips: [
      'Keep butter strictly chilled; if it softens during lamination, rest dough 20 min in the fridge.',
      'Egg wash twice (before proofing and right before oven) for a mirror-like sheen.',
      'Allow choux buns to dry in a switched-off oven with the door ajar to remain crispy.'
    ]
  },
  'Cakes': {
    name: 'Cakes',
    hue: 335,
    badgeBg: 'bg-rose-100 dark:bg-rose-950/40',
    badgeText: 'text-rose-900 dark:text-rose-200',
    description: 'Celebration layers, tender crumb sponges, moist loaf cakes & tiered showstoppers',
    bakerTips: [
      'Room-temperature eggs and butter emulsify smoothly without curdling.',
      'Firmly tap filled tins against the counter to release trapped air bubbles.',
      'Chill your crumb-coated cake for 30 minutes before spreading the final coat for sharp edges.'
    ]
  },
  'Biscuits & Cookies': {
    name: 'Biscuits & Cookies',
    hue: 22,
    badgeBg: 'bg-orange-100 dark:bg-orange-950/40',
    badgeText: 'text-orange-900 dark:text-orange-200',
    description: 'Buttery shortbreads, chewy chocolate chunks, teatime rusks & crunchy crackers',
    bakerTips: [
      'Chill cookie dough for at least 1 hour; it prevents spreading and deepens caramelized flavor.',
      'Pull cookies when the edges are set and center is still slightly soft; they finish baking on the hot tray.',
      'Rotate baking sheets halfway through for an even golden color.'
    ]
  },
  'Savory Items': {
    name: 'Savory Items',
    hue: 8,
    badgeBg: 'bg-red-100 dark:bg-red-950/40',
    badgeText: 'text-red-900 dark:text-red-200',
    description: 'Flaky meat pies, golden sausage rolls, herb focaccias & cheesy quiches',
    bakerTips: [
      'Cool cooked fillings completely before wrapping in raw pastry to prevent soggy bottoms.',
      'Crimp edges firmly with a fork and cut small steam vents on top.',
      'Season savory fillings slightly bolder than table-ready food; baking mellows spices.'
    ]
  },
  'Sweet Snacks & Desserts': {
    name: 'Sweet Snacks & Desserts',
    hue: 285,
    badgeBg: 'bg-pink-100 dark:bg-pink-950/40',
    badgeText: 'text-pink-900 dark:text-pink-200',
    description: 'Warm cinnamon rolls, glazed doughnuts, fudgy brownies & chilled custards',
    bakerTips: [
      'Always taste your chocolate first; quality couverture makes an unforgettable dessert.',
      'A gentle bain-marie (water bath) keeps baked custards and puddings silky without curdling.',
      'Refrigerate cheesecakes overnight before slicing for pristine, velvety portions.'
    ]
  },
  'Others': {
    name: 'Others',
    hue: 160,
    badgeBg: 'bg-emerald-100 dark:bg-emerald-950/40',
    badgeText: 'text-emerald-900 dark:text-emerald-200',
    description: 'Boiled bagels, soft Bavarian pretzels, vegan bakes & pantry master mixes',
    bakerTips: [
      'Store dry pancake and waffle mixes in airtight jars labeled with liquid ratios on the lid.',
      'Swap unsweetened soy or oat milk 1:1 for dairy in enriched yeast doughs.',
      'Whip buttercream frosting on medium-high for 5 full minutes to aerate and soften.'
    ]
  }
};

export const ALL_RECIPES: Recipe[] = [
  {
    id: 1,
    c: "Breads",
    n: "White Sandwich Loaf",
    y: "1 loaf (800 g tin)",
    i: ["500 g bread flour", "10 g salt", "10 g sugar", "7 g instant yeast", "300 ml warm water", "30 g butter"],
    m: ["Mix all and knead 10 min until smooth", "Proof 1 hr until doubled", "Shape, place in greased tin, proof 40 min", "Bake until golden and hollow-sounding when tapped"],
    b: "180°C, 30-35 min",
    prepTime: "2 hr 20 min",
    difficulty: "Beginner"
  },
  {
    id: 2,
    c: "Breads",
    n: "Whole Wheat Loaf",
    y: "1 loaf",
    i: ["300 g whole wheat flour", "200 g bread flour", "8 g salt", "20 g honey", "7 g instant yeast", "320 ml warm water", "20 g oil"],
    m: ["Mix and knead 10 min (dough will be slightly tacky)", "Proof 1 hr", "Shape into tin, proof 45 min", "Bake and cool on a rack"],
    b: "180°C, 35 min",
    prepTime: "2 hr 30 min",
    difficulty: "Beginner"
  },
  {
    id: 3,
    c: "Breads",
    n: "Burger Buns",
    y: "8 buns",
    i: ["500 g bread flour", "60 g sugar", "8 g salt", "7 g instant yeast", "150 ml milk", "130 ml water", "1 egg", "60 g butter", "sesame seeds", "egg wash"],
    m: ["Knead all (except topping) until elastic", "Proof 1 hr", "Divide into 8, shape balls, flatten slightly, proof 40 min", "Brush with egg wash, sprinkle sesame, bake"],
    b: "190°C, 14-16 min",
    prepTime: "2 hr 10 min",
    difficulty: "Intermediate"
  },
  {
    id: 4,
    c: "Breads",
    n: "Dinner Rolls",
    y: "12 rolls",
    i: ["450 g bread flour", "50 g sugar", "7 g salt", "7 g instant yeast", "250 ml warm milk", "50 g butter", "1 egg"],
    m: ["Knead into a soft dough", "Proof 1 hr", "Divide into 12 balls, place close together in a tray", "Proof 30 min, brush with melted butter, bake"],
    b: "180°C, 18-20 min",
    prepTime: "2 hr",
    difficulty: "Beginner"
  },
  {
    id: 5,
    c: "Breads",
    n: "Baguette",
    y: "2 baguettes",
    i: ["500 g bread flour", "10 g salt", "4 g instant yeast", "350 ml water"],
    m: ["Mix and rest 20 min, then knead 8 min", "Proof 1.5 hr with one fold at 45 min", "Divide in 2, shape into long loaves, proof 40 min", "Slash tops, bake with steam (tray of hot water in oven)"],
    b: "230°C, 22-25 min",
    prepTime: "3 hr",
    difficulty: "Intermediate"
  },
  {
    id: 6,
    c: "Breads",
    n: "Sourdough Loaf",
    y: "1 loaf",
    i: ["450 g bread flour", "50 g whole wheat flour", "100 g active sourdough starter", "350 ml water", "10 g salt"],
    m: ["Mix flour and water, rest 30 min, add starter and salt", "Do 4 sets of stretch-and-folds over 3 hr", "Shape, place in floured basket, refrigerate 12 hr", "Bake in a preheated Dutch oven, lid on then off"],
    b: "230°C, 25 min covered + 20 min uncovered",
    prepTime: "16 hr",
    difficulty: "Artisan",
    imageUrl: SOURDOUGH_IMAGE,
    imageAlt: "Artisanal rustic sourdough bread loaf with open crumb and crispy blistered crust"
  },
  {
    id: 7,
    c: "Breads",
    n: "Pita Bread",
    y: "8 pitas",
    i: ["500 g flour", "7 g instant yeast", "8 g salt", "10 g sugar", "300 ml warm water", "2 tbsp olive oil"],
    m: ["Knead into a smooth dough, proof 1 hr", "Divide into 8, roll to 5 mm discs, rest 15 min", "Place on a very hot preheated tray; they puff within minutes"],
    b: "250°C, 3-5 min",
    prepTime: "1 hr 30 min",
    difficulty: "Beginner"
  },
  {
    id: 8,
    c: "Breads",
    n: "Naan",
    y: "8 naan",
    i: ["400 g flour", "7 g instant yeast", "5 g sugar", "6 g salt", "100 g yogurt", "150 ml warm milk", "2 tbsp oil", "garlic butter"],
    m: ["Mix and knead into a soft dough, proof 1 hr", "Divide into 8, roll into ovals", "Cook on a very hot dry pan, 1-2 min per side, until blistered", "Brush with garlic butter"],
    b: "Hot pan, 2-4 min total",
    prepTime: "1 hr 20 min",
    difficulty: "Beginner"
  },
  {
    id: 9,
    c: "Breads",
    n: "Multigrain Loaf",
    y: "1 loaf",
    i: ["350 g bread flour", "100 g whole wheat flour", "50 g mixed seeds (sunflower, flax, sesame)", "8 g salt", "7 g instant yeast", "20 g honey", "330 ml water", "20 g oil"],
    m: ["Knead all, folding in seeds at the end", "Proof 1 hr", "Shape into tin, roll top in extra seeds, proof 45 min", "Bake until deep golden"],
    b: "180°C, 35-40 min",
    prepTime: "2 hr 30 min",
    difficulty: "Intermediate"
  },
  {
    id: 10,
    c: "Breads",
    n: "Garlic Bread",
    y: "1 baguette",
    i: ["1 baguette", "100 g softened butter", "4 garlic cloves, minced", "2 tbsp chopped parsley", "1/4 tsp salt"],
    m: ["Mix butter, garlic, parsley and salt", "Slice baguette without cutting through, spread butter in the cuts", "Wrap in foil and bake, open foil for the last 3 min"],
    b: "200°C, 10-12 min",
    prepTime: "20 min",
    difficulty: "Beginner"
  },
  {
    id: 11,
    c: "Pastries",
    n: "Butter Croissant",
    y: "12 croissants",
    i: ["500 g flour", "60 g sugar", "10 g salt", "10 g instant yeast", "140 ml milk", "140 ml water", "280 g cold butter (for lamination)", "egg wash"],
    m: ["Mix dough, chill 1 hr", "Enclose butter block in dough, roll out, do 3 single folds with 30 min chill between each", "Roll to 4 mm, cut triangles, roll up into croissants", "Proof 2 hr, egg wash, bake"],
    b: "200°C, 18-20 min",
    prepTime: "5 hr",
    difficulty: "Artisan",
    imageUrl: CROISSANT_IMAGE,
    imageAlt: "Golden flaky French butter croissants stacked on baking parchment"
  },
  {
    id: 12,
    c: "Pastries",
    n: "Danish Pastry",
    y: "12 pastries",
    i: ["Croissant dough (as above)", "200 g cream cheese", "40 g sugar", "1 egg yolk", "1 tsp vanilla", "100 g fruit jam", "egg wash"],
    m: ["Make laminated dough, roll and cut into 10 cm squares", "Mix cream cheese, sugar, yolk and vanilla", "Add filling and jam to the center, fold corners in", "Proof 1.5 hr, egg wash, bake"],
    b: "190°C, 18 min",
    prepTime: "4 hr",
    difficulty: "Artisan"
  },
  {
    id: 13,
    c: "Pastries",
    n: "Chicken Patties",
    y: "12 patties",
    i: ["2 sheets puff pastry (about 500 g)", "300 g cooked chicken, diced", "1 onion, chopped", "2 tbsp flour", "150 ml milk", "1 tbsp butter", "salt and pepper", "egg wash"],
    m: ["Sauté onion in butter, stir in flour, add milk to make a thick sauce", "Fold in chicken, season, cool completely", "Cut pastry into squares, fill, fold and seal edges with a fork", "Egg wash and bake"],
    b: "200°C, 20 min",
    prepTime: "50 min",
    difficulty: "Intermediate"
  },
  {
    id: 14,
    c: "Pastries",
    n: "Apple Turnovers",
    y: "8 turnovers",
    i: ["2 sheets puff pastry", "3 apples, diced", "50 g sugar", "1 tsp cinnamon", "1 tbsp butter", "1 tsp lemon juice", "egg wash"],
    m: ["Cook apples, sugar, cinnamon, butter and lemon until soft, cool", "Cut pastry into squares, add filling, fold into triangles and seal", "Cut slits on top, egg wash, bake"],
    b: "200°C, 20 min",
    prepTime: "45 min",
    difficulty: "Beginner"
  },
  {
    id: 15,
    c: "Pastries",
    n: "Cream Rolls (Cream Horns)",
    y: "10 horns",
    i: ["1 sheet puff pastry", "1 egg (wash)", "250 ml whipping cream", "30 g icing sugar", "1 tsp vanilla", "jam (optional)"],
    m: ["Cut pastry into 2 cm strips", "Wind each strip around a cone mould, overlapping slightly", "Egg wash and bake, cool, remove moulds", "Whip cream with sugar and vanilla, pipe into horns"],
    b: "200°C, 15 min",
    prepTime: "40 min",
    difficulty: "Intermediate"
  },
  {
    id: 16,
    c: "Pastries",
    n: "Apple Pie",
    y: "1 pie (9 inch)",
    i: ["Crust: 300 g flour", "150 g cold butter", "50 g sugar", "pinch salt", "6 tbsp ice water. Filling: 5 apples, sliced", "100 g sugar", "1 tsp cinnamon", "2 tbsp flour"],
    m: ["Rub butter into flour, sugar, salt; add water to form dough, chill 1 hr", "Toss apples with sugar, cinnamon and flour", "Line dish with half the dough, add filling, cover with remaining dough", "Seal, cut vents, egg wash, bake"],
    b: "190°C, 45-50 min",
    prepTime: "2 hr",
    difficulty: "Intermediate"
  },
  {
    id: 17,
    c: "Pastries",
    n: "Fruit Tart",
    y: "1 tart (9 inch)",
    i: ["Shell: 200 g flour", "100 g butter", "50 g icing sugar", "1 egg yolk", "2 tbsp cold water. Cream: 250 ml milk", "3 egg yolks", "60 g sugar", "25 g cornflour", "1 tsp vanilla. Topping: fresh fruit", "apricot jam glaze"],
    m: ["Make dough, chill, line tart tin and blind-bake", "Cook milk, yolks, sugar, cornflour and vanilla until thick; cool", "Fill shell with cream, arrange fruit", "Brush with warmed apricot jam"],
    b: "180°C, 18-20 min (shell)",
    prepTime: "1 hr 45 min",
    difficulty: "Artisan",
    imageUrl: FRUIT_TART_IMAGE,
    imageAlt: "Artisanal French fruit tart filled with vanilla pastry cream and glossy fresh berries"
  },
  {
    id: 18,
    c: "Pastries",
    n: "Chocolate Éclairs",
    y: "10 éclairs",
    i: ["Choux: 120 ml water", "60 g butter", "75 g flour", "pinch salt", "2-3 eggs. Filling: 250 ml whipped cream or pastry cream. Glaze: 100 g dark chocolate", "100 ml cream"],
    m: ["Boil water and butter, add flour, stir until it forms a ball", "Cool slightly, beat in eggs one at a time to a glossy, ribbon-like paste", "Pipe 10 cm fingers, bake, pierce to release steam", "Fill with cream, dip tops in warm ganache"],
    b: "200°C 10 min, then 180°C 25 min",
    prepTime: "1 hr 30 min",
    difficulty: "Artisan"
  },
  {
    id: 19,
    c: "Pastries",
    n: "Cream Puffs",
    y: "12 puffs",
    i: ["Choux dough (as in Éclairs)", "250 ml whipping cream", "30 g icing sugar", "1 tsp vanilla", "icing sugar for dusting"],
    m: ["Make choux dough, pipe 12 mounds on a tray", "Bake until golden and dry, cool fully", "Whip cream with sugar and vanilla", "Cut tops, pipe in cream, dust with icing sugar"],
    b: "200°C 10 min, then 180°C 25 min",
    prepTime: "1 hr 15 min",
    difficulty: "Intermediate"
  },
  {
    id: 20,
    c: "Pastries",
    n: "Lemon Tart",
    y: "1 tart (9 inch)",
    i: ["Shell: as in Fruit Tart. Filling: 3 eggs", "2 egg yolks", "150 g sugar", "120 ml lemon juice", "zest of 2 lemons", "100 g butter"],
    m: ["Blind-bake the shell", "Whisk eggs, yolks, sugar, juice and zest over simmering water, add butter, cook until thick", "Pour into shell", "Chill 3 hr until set"],
    b: "180°C, 18-20 min (shell), then chill",
    prepTime: "1 hr + 3 hr chill",
    difficulty: "Intermediate"
  },
  {
    id: 21,
    c: "Cakes",
    n: "Vanilla Birthday Cake",
    y: "1 cake (two 8-inch layers)",
    i: ["Cake: 250 g flour", "200 g sugar", "200 g butter", "4 eggs", "3 tsp baking powder", "120 ml milk", "2 tsp vanilla. Buttercream: 250 g butter", "400 g icing sugar", "2 tbsp milk"],
    m: ["Cream butter and sugar, add eggs one at a time", "Fold in flour and baking powder alternately with milk and vanilla", "Divide into 2 tins, bake, cool", "Beat buttercream, fill and cover the cake"],
    b: "175°C, 30-35 min",
    prepTime: "1 hr 30 min",
    difficulty: "Beginner"
  },
  {
    id: 22,
    c: "Cakes",
    n: "Chocolate Fudge Cake",
    y: "1 cake (two 8-inch layers)",
    i: ["Cake: 200 g flour", "60 g cocoa", "250 g sugar", "1 tsp baking powder", "1 tsp baking soda", "2 eggs", "240 ml milk", "120 ml oil", "1 tsp vanilla", "240 ml hot coffee. Ganache: 200 g dark chocolate", "200 ml cream"],
    m: ["Whisk dry ingredients", "Add eggs, milk, oil, vanilla, then the hot coffee (batter will be thin)", "Bake in 2 tins, cool", "Pour warm ganache over the layers and top"],
    b: "175°C, 30-35 min",
    prepTime: "1 hr 20 min",
    difficulty: "Intermediate",
    imageUrl: CHOCOLATE_CAKE_IMAGE,
    imageAlt: "Decadent multi-layered dark chocolate fudge cake with rich ganache"
  },
  {
    id: 23,
    c: "Cakes",
    n: "Red Velvet Cake",
    y: "1 cake (two 8-inch layers)",
    i: ["Cake: 300 g flour", "250 g sugar", "2 tbsp cocoa", "1 tsp baking soda", "240 ml buttermilk", "2 eggs", "120 ml oil", "1 tbsp red food colour", "1 tsp vinegar. Frosting: 250 g cream cheese", "100 g butter", "300 g icing sugar"],
    m: ["Whisk wet ingredients, then mix into the dry ingredients", "Bake in 2 tins, cool completely", "Beat frosting until smooth", "Fill and frost the cake, keep chilled"],
    b: "175°C, 30 min",
    prepTime: "1 hr 30 min",
    difficulty: "Intermediate"
  },
  {
    id: 24,
    c: "Cakes",
    n: "Butter Cupcakes",
    y: "12 cupcakes",
    i: ["150 g flour", "150 g sugar", "150 g butter", "3 eggs", "1.5 tsp baking powder", "2 tbsp milk", "1 tsp vanilla", "buttercream for topping"],
    m: ["Cream butter and sugar until pale", "Beat in eggs, fold in flour, baking powder, milk and vanilla", "Fill liners two-thirds full, bake", "Cool and pipe buttercream on top"],
    b: "175°C, 18-20 min",
    prepTime: "45 min",
    difficulty: "Beginner"
  },
  {
    id: 25,
    c: "Cakes",
    n: "Blueberry Muffins",
    y: "12 muffins",
    i: ["250 g flour", "100 g sugar", "2 tsp baking powder", "1/2 tsp salt", "1 egg", "240 ml milk", "80 ml oil", "150 g blueberries"],
    m: ["Whisk dry ingredients in one bowl, wet in another", "Combine gently (lumps are fine), fold in blueberries", "Fill muffin cups to the top", "Bake at high heat first, then lower"],
    b: "200°C 10 min, then 180°C 12 min",
    prepTime: "35 min",
    difficulty: "Beginner"
  },
  {
    id: 26,
    c: "Cakes",
    n: "Swiss Roll",
    y: "1 roll",
    i: ["4 eggs", "100 g sugar", "100 g flour", "1 tsp vanilla", "100 g jam or whipped cream", "icing sugar"],
    m: ["Whisk eggs and sugar until thick and tripled in volume", "Fold in flour and vanilla", "Spread on lined tray, bake, turn onto sugared paper and roll while warm", "Unroll when cool, fill, roll again"],
    b: "180°C, 10-12 min",
    prepTime: "45 min",
    difficulty: "Intermediate"
  },
  {
    id: 27,
    c: "Cakes",
    n: "Victoria Sponge Cake",
    y: "1 cake (two 8-inch layers)",
    i: ["200 g butter", "200 g sugar", "4 eggs", "200 g self-raising flour", "2 tbsp milk", "strawberry jam", "200 ml whipped cream"],
    m: ["Cream butter and sugar, add eggs gradually", "Fold in flour and milk", "Bake in 2 tins, cool", "Sandwich with jam and cream, dust with icing sugar"],
    b: "170°C, 25 min",
    prepTime: "50 min",
    difficulty: "Beginner"
  },
  {
    id: 28,
    c: "Cakes",
    n: "Fruit Tea Cake",
    y: "1 loaf",
    i: ["250 g mixed dried fruit", "250 ml hot black tea", "150 g brown sugar", "1 egg", "250 g self-raising flour"],
    m: ["Soak fruit in hot tea overnight", "Stir in sugar and egg, then fold in flour", "Pour into a lined loaf tin", "Bake until a skewer comes out clean"],
    b: "170°C, 50-60 min",
    prepTime: "1 hr + overnight soak",
    difficulty: "Beginner"
  },
  {
    id: 29,
    c: "Cakes",
    n: "Carrot Cake",
    y: "1 cake (two 8-inch layers)",
    i: ["Cake: 250 g flour", "200 g sugar", "200 ml oil", "3 eggs", "250 g grated carrot", "1.5 tsp baking powder", "1/2 tsp baking soda", "1 tsp cinnamon", "80 g walnuts. Frosting: 250 g cream cheese", "100 g butter", "300 g icing sugar"],
    m: ["Whisk eggs, sugar and oil", "Mix in dry ingredients, then carrot and walnuts", "Bake in 2 tins, cool", "Beat frosting, fill and cover"],
    b: "175°C, 35-40 min",
    prepTime: "1 hr 20 min",
    difficulty: "Intermediate"
  },
  {
    id: 30,
    c: "Cakes",
    n: "Wedding Cake (3-Tier Vanilla)",
    y: "3 tiers (6, 8 and 10 inch)",
    i: ["Vanilla Birthday Cake batter scaled: 6 inch = 0.5x, 8 inch = 1x, 10 inch = 1.5x. Swiss meringue buttercream: 6 egg whites", "350 g sugar", "500 g butter", "2 tsp vanilla. Optional fondant and dowels"],
    m: ["Bake each tier separately, cool, level the tops", "Make buttercream: whisk whites and sugar over simmering water to 70°C, whip to stiff peaks, beat in butter", "Stack with dowels and a cake board between tiers", "Crumb coat, chill, apply final coat and decorate"],
    b: "175°C, 30 min (6 in), 35 min (8 in), 45 min (10 in)",
    prepTime: "6 hr",
    difficulty: "Artisan"
  },
  {
    id: 31,
    c: "Biscuits & Cookies",
    n: "Butter Cookies",
    y: "30 cookies",
    i: ["200 g butter", "100 g icing sugar", "1 egg yolk", "1 tsp vanilla", "280 g flour"],
    m: ["Cream butter and sugar, add yolk and vanilla", "Mix in flour to a soft dough, chill 30 min", "Roll or pipe into shapes", "Bake until lightly golden at the edges"],
    b: "170°C, 12-15 min",
    prepTime: "45 min",
    difficulty: "Beginner"
  },
  {
    id: 32,
    c: "Biscuits & Cookies",
    n: "Shortbread",
    y: "16 fingers",
    i: ["225 g butter", "100 g sugar", "300 g flour", "pinch salt"],
    m: ["Beat butter and sugar, mix in flour and salt", "Press into a tin, prick with a fork, chill 20 min", "Bake low and slow until pale gold", "Cut while warm, sprinkle with sugar"],
    b: "150°C, 30-35 min",
    prepTime: "40 min",
    difficulty: "Beginner"
  },
  {
    id: 33,
    c: "Biscuits & Cookies",
    n: "Chocolate Cream Sandwich Cookies",
    y: "12 sandwiches",
    i: ["Cookie: 125 g flour", "40 g cocoa", "1/2 tsp baking soda", "1/4 tsp salt", "115 g butter", "100 g sugar", "1 egg. Filling: 115 g butter", "200 g icing sugar", "1 tsp vanilla"],
    m: ["Cream butter and sugar, add egg, then dry ingredients", "Roll thin, cut rounds, bake and cool", "Beat filling until fluffy", "Sandwich two cookies with filling"],
    b: "175°C, 10-12 min",
    prepTime: "50 min",
    difficulty: "Intermediate"
  },
  {
    id: 34,
    c: "Biscuits & Cookies",
    n: "Chocolate Chip Cookies",
    y: "24 cookies",
    i: ["280 g flour", "1 tsp baking soda", "1/2 tsp salt", "170 g butter", "150 g brown sugar", "100 g sugar", "2 eggs", "2 tsp vanilla", "250 g chocolate chips"],
    m: ["Cream butter and sugars, add eggs and vanilla", "Mix in dry ingredients and chocolate chips", "Scoop onto trays, leaving space", "Bake until edges are golden, centers soft"],
    b: "180°C, 10-12 min",
    prepTime: "30 min",
    difficulty: "Beginner"
  },
  {
    id: 35,
    c: "Biscuits & Cookies",
    n: "Oatmeal Raisin Cookies",
    y: "20 cookies",
    i: ["120 g flour", "150 g rolled oats", "115 g butter", "100 g brown sugar", "50 g sugar", "1 egg", "1/2 tsp baking soda", "1 tsp cinnamon", "100 g raisins"],
    m: ["Cream butter and sugars, add egg", "Mix in flour, soda, cinnamon, oats and raisins", "Scoop onto trays and flatten slightly", "Bake until golden"],
    b: "175°C, 12 min",
    prepTime: "30 min",
    difficulty: "Beginner"
  },
  {
    id: 36,
    c: "Biscuits & Cookies",
    n: "Cream Crackers",
    y: "40 crackers",
    i: ["250 g flour", "1/2 tsp instant yeast", "1/4 tsp baking soda", "1/2 tsp salt", "50 g butter", "130 ml water"],
    m: ["Rub butter into dry ingredients, add water to form a dough", "Rest 1 hr", "Roll very thin, cut squares, prick with a fork", "Bake until crisp and lightly browned"],
    b: "200°C, 10-12 min",
    prepTime: "1 hr 30 min",
    difficulty: "Intermediate"
  },
  {
    id: 37,
    c: "Biscuits & Cookies",
    n: "Rusks",
    y: "30 rusks",
    i: ["500 g flour", "3 tsp baking powder", "200 g butter", "150 g sugar", "2 eggs", "250 ml buttermilk", "100 g oats or seeds"],
    m: ["Rub butter into flour and baking powder, mix in sugar and oats", "Add eggs and buttermilk to form a dough", "Bake as a loaf, cool, slice into fingers", "Dry slices in a low oven until hard"],
    b: "180°C 40 min, then 100°C 1.5-2 hr",
    prepTime: "3 hr",
    difficulty: "Intermediate"
  },
  {
    id: 38,
    c: "Biscuits & Cookies",
    n: "Peanut Butter Cookies",
    y: "18 cookies",
    i: ["250 g peanut butter", "100 g brown sugar", "100 g sugar", "1 egg", "1 tsp baking soda", "1 tsp vanilla"],
    m: ["Mix all ingredients into a dough", "Roll into balls, place on tray", "Press with a fork in a crisscross pattern", "Bake and cool on the tray"],
    b: "175°C, 10 min",
    prepTime: "25 min",
    difficulty: "Beginner"
  },
  {
    id: 39,
    c: "Biscuits & Cookies",
    n: "Ginger Biscuits",
    y: "24 biscuits",
    i: ["225 g flour", "1 tsp baking soda", "2 tsp ground ginger", "1 tsp cinnamon", "100 g butter", "100 g brown sugar", "4 tbsp golden syrup"],
    m: ["Melt butter, sugar and syrup together, cool slightly", "Stir into dry ingredients to form a dough", "Roll into small balls, flatten a little", "Bake until deep golden, they crisp as they cool"],
    b: "170°C, 12-15 min",
    prepTime: "30 min",
    difficulty: "Beginner"
  },
  {
    id: 40,
    c: "Biscuits & Cookies",
    n: "Jam Thumbprint Cookies",
    y: "24 cookies",
    i: ["200 g butter", "100 g sugar", "1 egg yolk", "1 tsp vanilla", "250 g flour", "100 g jam"],
    m: ["Cream butter and sugar, add yolk and vanilla, then flour", "Roll into balls, press a dent in each center", "Fill with jam", "Bake until edges are lightly golden"],
    b: "170°C, 15 min",
    prepTime: "35 min",
    difficulty: "Beginner"
  },
  {
    id: 41,
    c: "Savory Items",
    n: "Sausage Rolls",
    y: "12 rolls",
    i: ["2 sheets puff pastry", "400 g sausage meat", "1 small onion, grated", "1 tsp mixed herbs", "salt and pepper", "egg wash"],
    m: ["Mix sausage meat, onion, herbs and seasoning", "Place a log of filling along each pastry strip, fold over and seal", "Cut into pieces, slash tops, egg wash", "Bake until puffed and golden"],
    b: "200°C, 25 min",
    prepTime: "40 min",
    difficulty: "Beginner"
  },
  {
    id: 42,
    c: "Savory Items",
    n: "Beef Pies",
    y: "8 small pies",
    i: ["500 g minced beef", "1 onion, chopped", "2 tbsp flour", "250 ml beef stock", "1 tbsp Worcestershire sauce", "salt and pepper", "2 sheets puff pastry", "shortcrust for base"],
    m: ["Brown onion and beef, stir in flour, add stock and sauce, simmer 20 min until thick, cool", "Line pie tins with shortcrust, add filling", "Top with puff pastry, seal, egg wash", "Bake until golden"],
    b: "200°C, 30 min",
    prepTime: "1 hr 15 min",
    difficulty: "Intermediate"
  },
  {
    id: 43,
    c: "Savory Items",
    n: "Pizza Slices",
    y: "8 slices",
    i: ["Dough: 300 g flour", "5 g instant yeast", "5 g salt", "180 ml water", "1 tbsp oil. Topping: 150 ml pizza sauce", "200 g mozzarella", "toppings of choice"],
    m: ["Knead dough, proof 1 hr", "Roll onto a tray, spread sauce", "Add cheese and toppings", "Bake on the lowest rack until the base is crisp"],
    b: "230°C, 12-15 min",
    prepTime: "1 hr 30 min",
    difficulty: "Beginner"
  },
  {
    id: 44,
    c: "Savory Items",
    n: "Chicken Sandwich",
    y: "4 sandwiches",
    i: ["8 slices sandwich bread", "250 g cooked shredded chicken", "3 tbsp mayonnaise", "1/2 tsp black pepper", "salt", "butter", "lettuce", "cucumber slices"],
    m: ["Mix chicken, mayo, pepper and salt", "Butter the bread slices", "Layer lettuce, cucumber and chicken filling", "Close, trim crusts if desired, and cut into halves"],
    b: "No baking",
    prepTime: "15 min",
    difficulty: "Beginner"
  },
  {
    id: 45,
    c: "Savory Items",
    n: "Chicken Filled Buns",
    y: "12 buns",
    i: ["Dough: Dinner Roll dough (450 g flour). Filling: 250 g cooked chicken, shredded", "1 onion", "1 tbsp curry powder", "1 tbsp oil", "salt"],
    m: ["Cook onion in oil, add curry powder and chicken, season, cool", "Divide dough into 12, flatten each, add a spoon of filling", "Pinch closed, shape into balls, proof 30 min", "Egg wash and bake"],
    b: "180°C, 20 min",
    prepTime: "2 hr",
    difficulty: "Intermediate"
  },
  {
    id: 46,
    c: "Savory Items",
    n: "Quiche Lorraine",
    y: "1 quiche (9 inch)",
    i: ["Crust: 200 g flour", "100 g butter", "1 egg yolk", "2 tbsp cold water. Filling: 4 eggs", "250 ml cream", "100 g bacon, cooked", "100 g grated cheese", "salt and pepper"],
    m: ["Make crust, chill, line tin and blind-bake", "Scatter bacon and cheese in the shell", "Whisk eggs, cream, seasoning and pour over", "Bake until just set with a slight wobble"],
    b: "180°C, 35 min",
    prepTime: "1 hr 30 min",
    difficulty: "Intermediate"
  },
  {
    id: 47,
    c: "Savory Items",
    n: "Vegetable Puffs",
    y: "12 puffs",
    i: ["2 sheets puff pastry", "2 potatoes, boiled and mashed", "1 carrot, diced", "1 onion", "1/2 cup peas", "1 tsp curry powder", "1 tbsp oil", "salt", "egg wash"],
    m: ["Sauté onion, add carrot, peas and curry powder, mix with the mashed potato, cool", "Cut pastry into squares, add filling, fold into triangles", "Seal edges, egg wash", "Bake until golden"],
    b: "200°C, 20 min",
    prepTime: "50 min",
    difficulty: "Beginner"
  },
  {
    id: 48,
    c: "Savory Items",
    n: "Fish Buns",
    y: "12 buns",
    i: ["Dough: Dinner Roll dough (450 g flour). Filling: 200 g canned tuna, drained", "2 potatoes, boiled and mashed", "1 onion", "few curry leaves", "1 green chili", "1 tsp pepper", "1 tbsp oil", "salt"],
    m: ["Sauté onion, curry leaves and chili, add mashed potato, tuna, pepper and salt, cool", "Divide dough into 12, fill and seal", "Proof 30 min, egg wash", "Bake until golden"],
    b: "180°C, 20 min",
    prepTime: "2 hr",
    difficulty: "Intermediate"
  },
  {
    id: 49,
    c: "Savory Items",
    n: "Cheese Straws",
    y: "30 straws",
    i: ["150 g flour", "100 g cold butter", "100 g grated cheddar", "1 egg yolk", "1 tbsp cold water", "pinch cayenne", "pinch salt"],
    m: ["Rub butter into flour, mix in cheese and seasoning", "Add yolk and water to form a dough, chill 30 min", "Roll out, cut into strips, twist if desired", "Bake until golden"],
    b: "200°C, 12 min",
    prepTime: "45 min",
    difficulty: "Beginner"
  },
  {
    id: 50,
    c: "Savory Items",
    n: "Garlic Cheese Focaccia",
    y: "1 tray (12 pieces)",
    i: ["500 g flour", "7 g instant yeast", "10 g salt", "400 ml water", "60 ml olive oil", "4 garlic cloves", "100 g mozzarella", "rosemary", "flaky salt"],
    m: ["Mix a wet dough, rest 1 hr with 2 folds", "Pour into an oiled tray, dimple with fingertips", "Top with olive oil, garlic, rosemary, cheese and salt, rest 30 min", "Bake until golden"],
    b: "220°C, 20-25 min",
    prepTime: "2 hr 15 min",
    difficulty: "Intermediate"
  },
  {
    id: 51,
    c: "Sweet Snacks & Desserts",
    n: "Glazed Doughnuts",
    y: "12 doughnuts",
    i: ["Dough: 400 g flour", "50 g sugar", "7 g instant yeast", "1/2 tsp salt", "200 ml warm milk", "1 egg", "50 g butter", "oil for frying. Glaze: 200 g icing sugar", "3 tbsp milk"],
    m: ["Knead dough, proof 1 hr", "Roll 1.5 cm thick, cut rings, proof 30 min", "Fry at 175°C, 1-2 min per side", "Dip warm doughnuts in glaze"],
    b: "Fry at 175°C",
    prepTime: "2 hr",
    difficulty: "Intermediate"
  },
  {
    id: 52,
    c: "Sweet Snacks & Desserts",
    n: "Fudgy Brownies",
    y: "16 squares",
    i: ["150 g butter", "200 g dark chocolate", "200 g sugar", "3 eggs", "100 g flour", "30 g cocoa", "pinch salt"],
    m: ["Melt butter and chocolate, cool slightly", "Whisk in sugar and eggs", "Fold in flour, cocoa and salt", "Bake in a lined 8-inch tin, cool before cutting"],
    b: "175°C, 25 min",
    prepTime: "40 min",
    difficulty: "Beginner"
  },
  {
    id: 53,
    c: "Sweet Snacks & Desserts",
    n: "New York Cheesecake",
    y: "1 cake (9 inch)",
    i: ["Base: 200 g digestive biscuits", "80 g melted butter. Filling: 600 g cream cheese", "150 g sugar", "3 eggs", "200 ml sour cream", "1 tsp vanilla", "2 tbsp flour"],
    m: ["Mix crushed biscuits with butter, press into tin", "Beat cream cheese and sugar, add eggs, sour cream, vanilla, flour", "Pour in, bake low, turn off oven and cool inside 1 hr", "Chill overnight"],
    b: "160°C, 55-60 min",
    prepTime: "1 hr 30 min + overnight chill",
    difficulty: "Intermediate"
  },
  {
    id: 54,
    c: "Sweet Snacks & Desserts",
    n: "Chocolate Pudding Cups",
    y: "6 cups",
    i: ["500 ml milk", "60 g sugar", "30 g cornflour", "30 g cocoa", "100 g dark chocolate"],
    m: ["Whisk sugar, cornflour and cocoa with a little cold milk", "Heat the rest of the milk, add mixture and stir until thick", "Add chopped chocolate until smooth", "Pour into cups, chill 3 hr"],
    b: "Stovetop, then chill 3 hr",
    prepTime: "20 min + 3 hr chill",
    difficulty: "Beginner"
  },
  {
    id: 55,
    c: "Sweet Snacks & Desserts",
    n: "Cinnamon Rolls",
    y: "12 rolls",
    i: ["Dough: 450 g flour", "60 g sugar", "7 g salt", "7 g yeast", "250 ml warm milk", "1 egg", "60 g butter. Filling: 80 g soft butter", "100 g brown sugar", "2 tbsp cinnamon. Glaze: 100 g cream cheese", "100 g icing sugar", "2 tbsp milk"],
    m: ["Knead dough, proof 1 hr", "Roll into a rectangle, spread butter, sugar and cinnamon", "Roll up, cut into 12, proof 40 min", "Bake, then top with glaze while warm"],
    b: "180°C, 22 min",
    prepTime: "2 hr 30 min",
    difficulty: "Intermediate"
  },
  {
    id: 56,
    c: "Sweet Snacks & Desserts",
    n: "Banana Bread",
    y: "1 loaf",
    i: ["3 ripe bananas, mashed", "150 g sugar", "80 g melted butter", "1 egg", "1 tsp baking soda", "190 g flour", "pinch salt"],
    m: ["Mix bananas, butter, sugar and egg", "Stir in soda, salt and flour until just combined", "Pour into a lined loaf tin", "Bake until a skewer comes out clean"],
    b: "175°C, 55 min",
    prepTime: "1 hr 10 min",
    difficulty: "Beginner"
  },
  {
    id: 57,
    c: "Sweet Snacks & Desserts",
    n: "Tiramisu Cups",
    y: "6 cups",
    i: ["250 g mascarpone", "250 ml whipping cream", "60 g sugar", "200 g ladyfinger biscuits", "200 ml strong coffee, cooled", "cocoa powder"],
    m: ["Whip cream with sugar, fold into mascarpone", "Dip ladyfingers briefly in coffee", "Layer biscuits and cream in cups, repeat", "Chill 4 hr, dust with cocoa"],
    b: "No baking, chill 4 hr",
    prepTime: "30 min + 4 hr chill",
    difficulty: "Intermediate"
  },
  {
    id: 58,
    c: "Sweet Snacks & Desserts",
    n: "Crème Caramel",
    y: "6 ramekins",
    i: ["Caramel: 100 g sugar", "3 tbsp water. Custard: 500 ml milk", "3 eggs", "2 egg yolks", "60 g sugar", "1 tsp vanilla"],
    m: ["Cook sugar and water to amber, pour into ramekins", "Warm milk, whisk with eggs, sugar and vanilla, strain", "Pour over caramel, bake in a water bath", "Chill, then unmould onto plates"],
    b: "160°C, 40 min (water bath)",
    prepTime: "1 hr + 3 hr chill",
    difficulty: "Intermediate"
  },
  {
    id: 59,
    c: "Sweet Snacks & Desserts",
    n: "Chocolate Lava Cake",
    y: "4 cakes",
    i: ["100 g dark chocolate", "100 g butter", "2 eggs", "2 egg yolks", "60 g sugar", "30 g flour", "butter and cocoa for ramekins"],
    m: ["Melt chocolate and butter", "Whisk eggs, yolks and sugar until pale, combine with chocolate, fold in flour", "Pour into prepared ramekins", "Bake until edges are set and the center wobbles, unmould and serve at once"],
    b: "200°C, 10-12 min",
    prepTime: "30 min",
    difficulty: "Intermediate"
  },
  {
    id: 60,
    c: "Sweet Snacks & Desserts",
    n: "Vanilla Panna Cotta",
    y: "6 cups",
    i: ["500 ml cream", "100 ml milk", "60 g sugar", "7 g gelatin", "1 tsp vanilla", "berry sauce to serve"],
    m: ["Bloom gelatin in cold milk 5 min", "Heat cream, sugar and vanilla, do not boil", "Stir in gelatin until dissolved", "Pour into cups, chill 4 hr, top with berry sauce"],
    b: "No baking, chill 4 hr",
    prepTime: "25 min + 4 hr chill",
    difficulty: "Beginner"
  },
  {
    id: 61,
    c: "Others",
    n: "Plain Bagels",
    y: "8 bagels",
    i: ["500 g bread flour", "10 g salt", "7 g instant yeast", "20 g sugar", "280 ml warm water", "1 tbsp honey (for boiling)"],
    m: ["Knead a stiff dough, proof 1 hr", "Divide into 8, shape rings, rest 20 min", "Boil in water with honey, 1 min per side", "Bake until deep golden"],
    b: "220°C, 18-20 min",
    prepTime: "2 hr 10 min",
    difficulty: "Intermediate"
  },
  {
    id: 62,
    c: "Others",
    n: "Soft Pretzels",
    y: "8 pretzels",
    i: ["500 g flour", "7 g instant yeast", "10 g salt", "10 g sugar", "300 ml warm water", "30 g butter", "Bath: 1 L water + 60 g baking soda", "coarse salt"],
    m: ["Knead dough, proof 1 hr", "Divide into 8, roll into ropes, shape into pretzels", "Dip 30 seconds in the baking soda bath", "Sprinkle coarse salt and bake"],
    b: "220°C, 12-15 min",
    prepTime: "2 hr",
    difficulty: "Intermediate"
  },
  {
    id: 63,
    c: "Others",
    n: "Belgian Waffles",
    y: "6 waffles",
    i: ["250 g flour", "2 tsp baking powder", "1 tbsp sugar", "1/4 tsp salt", "2 eggs, separated", "300 ml milk", "80 g melted butter", "1 tsp vanilla"],
    m: ["Whisk flour, baking powder, sugar, salt", "Mix yolks, milk, butter, vanilla and combine with dry ingredients", "Whisk whites to stiff peaks and fold in", "Cook in a hot waffle iron until golden"],
    b: "Waffle iron, 3-4 min",
    prepTime: "25 min",
    difficulty: "Beginner"
  },
  {
    id: 64,
    c: "Others",
    n: "Gluten-Free Almond Cake",
    y: "1 cake (8 inch)",
    i: ["250 g almond flour", "150 g sugar", "4 eggs", "100 g butter, melted", "1 tsp baking powder", "1 tsp vanilla", "zest of 1 lemon"],
    m: ["Whisk eggs and sugar until pale", "Fold in butter, almond flour, baking powder, vanilla and zest", "Pour into a lined tin", "Bake until golden and set"],
    b: "170°C, 35 min",
    prepTime: "50 min",
    difficulty: "Beginner"
  },
  {
    id: 65,
    c: "Others",
    n: "No-Added-Sugar Banana Oat Cookies",
    y: "16 cookies",
    i: ["2 ripe bananas, mashed", "150 g rolled oats", "60 g raisins or chopped dates", "1 tsp cinnamon", "2 tbsp oil"],
    m: ["Mash bananas and mix with all ingredients", "Rest 10 min", "Scoop onto trays and flatten", "Bake until golden"],
    b: "180°C, 15 min",
    prepTime: "30 min",
    difficulty: "Beginner"
  },
  {
    id: 66,
    c: "Others",
    n: "Vegan Chocolate Cake",
    y: "1 cake (8 inch)",
    i: ["250 g flour", "50 g cocoa", "200 g sugar", "1 tsp baking soda", "1 tsp baking powder", "1/2 tsp salt", "250 ml plant milk", "80 ml oil", "1 tbsp vinegar", "1 tsp vanilla"],
    m: ["Whisk dry ingredients", "Mix wet ingredients and combine, do not overmix", "Pour into a lined tin", "Bake until a skewer comes out clean"],
    b: "175°C, 30-35 min",
    prepTime: "50 min",
    difficulty: "Beginner"
  },
  {
    id: 67,
    c: "Others",
    n: "Vegan Dinner Rolls",
    y: "12 rolls",
    i: ["450 g flour", "7 g instant yeast", "50 g sugar", "7 g salt", "270 ml warm oat or soy milk", "50 ml olive oil"],
    m: ["Knead into a soft dough, proof 1 hr", "Divide into 12, shape balls", "Proof 30 min, brush with plant milk", "Bake until golden"],
    b: "180°C, 18 min",
    prepTime: "2 hr",
    difficulty: "Beginner"
  },
  {
    id: 68,
    c: "Others",
    n: "Pancake Mix (Ready Mix)",
    y: "1 jar (about 8 servings)",
    i: ["300 g flour", "3 tbsp sugar", "1 tbsp baking powder", "1/2 tsp salt. To prepare: 1 cup mix + 1 egg + 3/4 cup milk + 1 tbsp oil"],
    m: ["Whisk dry ingredients and store in an airtight jar", "To use, mix 1 cup of mix with egg, milk and oil", "Rest batter 5 min", "Cook on a lightly oiled pan until bubbles form, flip"],
    b: "Pan, 2-3 min per side",
    prepTime: "10 min",
    difficulty: "Beginner"
  },
  {
    id: 69,
    c: "Others",
    n: "Buttercream Frosting",
    y: "Frosts 12 cupcakes",
    i: ["250 g softened butter", "500 g icing sugar", "2 tbsp milk", "2 tsp vanilla", "pinch salt"],
    m: ["Beat butter until pale", "Add icing sugar gradually, beating on low then high", "Add milk, vanilla and salt, beat until fluffy", "Use immediately or store chilled"],
    b: "No baking",
    prepTime: "15 min",
    difficulty: "Beginner"
  },
  {
    id: 70,
    c: "Others",
    n: "Chocolate Ganache",
    y: "Glazes one 8-inch cake",
    i: ["200 g dark chocolate, chopped", "200 ml cream"],
    m: ["Heat cream until just steaming", "Pour over chocolate, rest 2 min", "Stir until smooth and glossy", "Use warm as a glaze, or cool and whip for filling"],
    b: "No baking",
    prepTime: "15 min",
    difficulty: "Beginner"
  }
];
