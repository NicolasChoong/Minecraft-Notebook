//DESIGN THIS SHIT BASED ON MINECRAFT INVENTORY
//ADD IF 0 CANT CLICK BUTTON
//ADD calculatorimages TO THE RESULTS TEXT

//initialize height of document for scroll to bottom function -----------------------------------------------------
let height = document.body.scrollHeight;

//buttons and input field here ------------------------------------------------------------------------------------

let planksBtn = document.getElementById("planks")
let planksAmount = document.getElementById("planks-amount")
let craftingtableBtn = document.getElementById("craftingtable")
let craftingtableAmount = document.getElementById("craftingtable-amount")
let sticksBtn = document.getElementById("sticks")
let sticksAmount = document.getElementById("sticks-amount")
let chestBtn = document.getElementById("chest")
let chestAmount = document.getElementById("chest-amount")
let furnaceBtn = document.getElementById("furnace")
let furnaceAmount = document.getElementById("furnace-amount")
let fenceBtn = document.getElementById("fence")
let fenceAmount = document.getElementById("fence-amount")

//tools
let pickaxeBtn = document.getElementById("pickaxe")
let pickaxeAmount = document.getElementById("pickaxe-amount")
let shovelBtn = document.getElementById("shovel")
let shovelAmount = document.getElementById("shovel-amount")
let axeBtn = document.getElementById("axe")
let axeAmount = document.getElementById("axe-amount")
let hoeBtn = document.getElementById("hoe")
let hoeAmount = document.getElementById("hoe-amount")
let swordBtn = document.getElementById("sword")
let swordAmount = document.getElementById("sword-amount")
let bowBtn = document.getElementById("bow")
let bowAmount = document.getElementById("bow-amount")

//blocks
let bookshelfBtn = document.getElementById("bookshelf")
let bookshelfAmount = document.getElementById("bookshelf-amount")
let noteblockBtn = document.getElementById("noteblock")
let noteblockAmount = document.getElementById("noteblock-amount")
let tntBtn = document.getElementById("tnt")
let tntAmount = document.getElementById("tnt-amount")
let stonebrickBtn = document.getElementById("stonebrick")
let stonebrickAmount = document.getElementById("stonebrick-amount")
let stairsBtn = document.getElementById("stairs")
let stairsAmount = document.getElementById("stairs-amount")
let redstoneblockBtn = document.getElementById("redstoneblock")
let redstoneblockAmount = document.getElementById("redstoneblock-amount")

//others
let paperBtn = document.getElementById("paper")
let paperAmount = document.getElementById("paper-amount")
let bookBtn = document.getElementById("book")
let bookAmount = document.getElementById("book-amount")
let enchantingBtn = document.getElementById("enchanting")
let enchantingAmount = document.getElementById("enchanting-amount")
let blastfurnaceBtn = document.getElementById("blastfurnace")
let blastfurnaceAmount = document.getElementById("blastfurnace-amount")
let smokerBtn = document.getElementById("smoker")
let smokerAmount = document.getElementById("smoker-amount")
let glasspaneBtn = document.getElementById("glasspane")
let glasspaneAmount = document.getElementById("glasspane-amount")

//----------------------------------------------------------------------------------------------------------------



//initialize the render part -------------------------------------------------------------------------------------

let resultsEl = document.getElementById("results")
let remainingEl = document.getElementById("remaining")
let recipeEl = document.getElementById("results-recipe")
let calculateBtn = document.getElementById("calculate")

//----------------------------------------------------------------------------------------------------------------



//all crafting ingredient variables are initialized here ---------------------------------------------------------

let wood = 0
let stone = 0
let sand = 0
let cobblestone = 0
let count = 0
let planks = 0
let furnace = 0
let sticks = 0
let materials = 0
let redstone = 0
let gunpowder = 0
let iron = 0
let smoothstone = 0
let strings = 0
let sugarcane = 0
let paper = 0
let leather = 0
let books = 0
let obsidian = 0
let diamonds = 0
let glass = 0

//----------------------------------------------------------------------------------------------------------------



//all the functions to craft each item here ----------------------------------------------------------------------

//basic ----------------------------------------
function craftPlanks() {
    count = planksAmount.value
    remainingEl.innerHTML = ""
    recipeEl.src="calculatorimages/planksR.png"
      if (count % 4 == 0) {
        wood = count/4
        resultsEl.innerHTML = "You will need " + wood + " wood."
        } else {
          while (count % 4 != 0) {
            count++
            wood = count/4
            resultsEl.innerHTML = "You will need " + wood + " wood."
            excess = count - planksAmount.value
            remainingEl.innerHTML = "You will have " + excess + " extra plank."
          }
      }
    planksAmount.value = "";
    window.scroll(0 , height);
}

function craftCraftingtable() {
  count = craftingtableAmount.value
  remainingEl.innerHTML = ""
  recipeEl.src="calculatorimages/craftingtableR.png"
    planks = count * 4
    resultsEl.innerHTML = "You will need " + planks + " plank."
  craftingtableAmount.value = "";
  window.scroll(0 , height);
}

function craftSticks() {
  count = sticksAmount.value
  remainingEl.innerHTML = ""
  recipeEl.src="calculatorimages/stickR.png"
    if (count % 4 == 0) {
      planks = count/2
      resultsEl.innerHTML = "You will need " + planks + " plank."
      } else {
        while (count % 4 != 0) {
          count++
          planks = count/2
          resultsEl.innerHTML = "You will need " + planks + " plank."
          excess = count - sticksAmount.value
          remainingEl.innerHTML = "You will have " + excess + " extra stick."
        }
    }
  sticksAmount.value = "";
  window.scroll(0 , height);
}

function craftChest() {
  count = chestAmount.value
  remainingEl.innerHTML = ""
  recipeEl.src="calculatorimages/chestR.png"
    planks = count * 8
    resultsEl.innerHTML = "You will need " + planks + " plank."
  chestAmount.value = "";
  window.scroll(0 , height);
}

function craftFurnace() {
  count = furnaceAmount.value
  remainingEl.innerHTML = ""
  recipeEl.src="calculatorimages/furnaceR.png"
    cobblestone = count * 8
    resultsEl.innerHTML = "You will need " + cobblestone + " cobblestone."
  furnaceAmount.value = "";
  window.scroll(0 , height);
}

function craftFence() {
  count = fenceAmount.value
  remainingEl.innerHTML = ""
  recipeEl.src="calculatorimages/fenceR.png"
    if (count % 3 == 0) {
      sticks = count * 0.67
      planks = count * 1.33
      resultsEl.innerHTML = "You will need " + Math.round(sticks) + " stick and " + Math.round(planks) + " plank."
      } else {
        while (count % 3 != 0) {
          count++
          sticks = count * 0.67
          planks = count * 1.33
          resultsEl.innerHTML = "You will need " + Math.round(sticks) + " stick and " + Math.round(planks) + " plank."
          excess = count - fenceAmount.value
          remainingEl.innerHTML = "You will have " + excess + " extra fence."
        }
    }
  fenceAmount.value = "";
  window.scroll(0 , height);
}

//tools ----------------------------------------
function craftPickaxes() {
  count = pickaxeAmount.value
  remainingEl.innerHTML = ""
  recipeEl.src="calculatorimages/pickaxeR.png"
    materials = count * 3
    sticks = count * 2
    resultsEl.innerHTML = "You will need " + materials + " material and " + sticks + " stick."
  pickaxeAmount.value = "";
  window.scroll(0 , height);
}

function craftShovels() {
  count = shovelAmount.value
  remainingEl.innerHTML = ""
  recipeEl.src="calculatorimages/shovelR.png"
    materials = count
    sticks = count * 2
    resultsEl.innerHTML = "You will need " + materials + " material and " + sticks + " stick."
  shovelAmount.value = "";
  window.scroll(0 , height);
}

function craftAxes() {
  count = axeAmount.value
  remainingEl.innerHTML = ""
  recipeEl.src="calculatorimages/axeR.png"
    materials = count * 3
    sticks = count * 2
    resultsEl.innerHTML = "You will need " + materials + " material and " + sticks + " stick."
  axeAmount.value = "";
  window.scroll(0 , height);
}

function craftHoes() {
  count = hoeAmount.value
  remainingEl.innerHTML = ""
  recipeEl.src="calculatorimages/hoeR.png"
    materials = count * 2
    sticks = count * 2
    resultsEl.innerHTML = "You will need " + materials + " material and " + sticks + " stick."
  hoeAmount.value = "";
  window.scroll(0 , height);
}

function craftSwords() {
  count = swordAmount.value
  remainingEl.innerHTML = ""
  recipeEl.src="calculatorimages/swordR.png"
    materials = count * 2
    sticks = count 
    resultsEl.innerHTML = "You will need " + materials + " material and " + sticks + " stick."
  swordAmount.value = "";
  window.scroll(0 , height);
}

function craftBows() {
  count = bowAmount.value
  remainingEl.innerHTML = ""
  recipeEl.src="calculatorimages/bowR.png"
    strings = count * 3
    sticks = count * 3
    resultsEl.innerHTML = "You will need " + strings + " string and " + sticks + " stick."
  bowAmount.value = "";
  window.scroll(0 , height);
}

//blocks ----------------------------------------
function craftBookshelf() {
  count = bookshelfAmount.value
  remainingEl.innerHTML = ""
  recipeEl.src="calculatorimages/bookshelfR.png"
    books = count * 3
    planks = count * 6
    resultsEl.innerHTML = "You will need " + books + " book and " + planks + " plank."
  bookshelfAmount.value = "";
  window.scroll(0 , height);
}

function craftNoteblock() {
  count = noteblockAmount.value
  remainingEl.innerHTML = ""
  recipeEl.src="calculatorimages/noteblockR.png"
    redstone = count
    planks = count * 8
    resultsEl.innerHTML = "You will need " + redstone + " redstone and " + planks + " plank."
  noteblockAmount.value = "";
  window.scroll(0 , height);
}

function craftTNT() {
  count = tntAmount.value
  remainingEl.innerHTML = ""
  recipeEl.src="calculatorimages/tntR.png"
    sand = count * 4
    gunpowder = count * 5
    resultsEl.innerHTML = "You will need " + sand + " sand and " + gunpowder + " gunpowder."
  tntAmount.value = "";
  window.scroll(0 , height);
}

function craftStonebrick() {
  count = stonebrickAmount.value
  remainingEl.innerHTML = ""
  recipeEl.src="calculatorimages/stonebrickR.png"
    if (count % 4 == 0) {
      stone = count 
      resultsEl.innerHTML = "You will need " + stone + " stone."
      } else {
        while (count % 4 != 0) {
          count++
          stone = count 
          resultsEl.innerHTML = "You will need " + stone + " stone."
          excess = count - stonebrickAmount.value
          remainingEl.innerHTML = "You will have " + excess + " extra stone brick."
        }
    }
  stonebrickAmount.value = "";
  window.scroll(0 , height);
}

function craftStairs() {
  count = stairsAmount.value
  remainingEl.innerHTML = ""
  recipeEl.src="calculatorimages/stairsR.png"
    if (count % 4 == 0) {
      planks = count * 1.5
      resultsEl.innerHTML = "You will need " + Math.round(planks) + " plank."
      } else {
        while (count % 4 != 0) {
          count++
          planks = count * 1.5
          resultsEl.innerHTML = "You will need " + Math.round(planks) + " plank."
          excess = count - stairsAmount.value
          remainingEl.innerHTML = "You will have " + excess + " extra stair."
        }
    }
  stairsAmount.value = "";
  window.scroll(0 , height);
}

function craftRedstoneblock() {
  count = redstoneblockAmount.value
  remainingEl.innerHTML = ""
  recipeEl.src="calculatorimages/redstoneblockR.png"
    redstone = count * 8
    resultsEl.innerHTML = "You will need " + redstone + " redstone."
  redstoneblockAmount.value = "";
  window.scroll(0 , height);
}

//others ----------------------------------------
function craftPaper() {
  count = paperAmount.value
  remainingEl.innerHTML = ""
  recipeEl.src="calculatorimages/paperR.png"
    if (count % 3 == 0) {
      sugarcane = count 
      resultsEl.innerHTML = "You will need " + sugarcane + " sugarcane."
      } else {
        while (count % 3 != 0) {
          count++
          sugarcane = count 
          resultsEl.innerHTML = "You will need " + sugarcane + " sugarcane."
          excess = count - paperAmount.value
          remainingEl.innerHTML = "You will have " + excess + " extra paper."
        }
    }
  paperAmount.value = "";
  window.scroll(0 , height);
}

function craftBook() {
  count = bookAmount.value
  remainingEl.innerHTML = ""
  recipeEl.src="calculatorimages/bookR.png"
    paper = count * 3
    leather = count 
    resultsEl.innerHTML = "You will need " + paper + " paper and " + leather + " leather."
  bookAmount.value = "";
  window.scroll(0 , height);
}

function craftEnchanting() {
  count = enchantingAmount.value
  remainingEl.innerHTML = ""
  recipeEl.src="calculatorimages/enchantingtableR.png"
    obsidian = count * 4
    diamonds = count * 2
    books = count 
    resultsEl.innerHTML = "You will need " + obsidian + " obsidian, " + diamonds + " diamond and " + books + " book."
  enchantingAmount.value = "";
  window.scroll(0 , height);
}

function craftBlastFurnace() {
  count = blastfurnaceAmount.value
  remainingEl.innerHTML = ""
  recipeEl.src="calculatorimages/blastfurnaceR.png"
    iron = count * 5
    furnace = count
    smoothstone = count * 3
    resultsEl.innerHTML = "You will need " + iron + " iron and " + furnace + " furnace and " + smoothstone + " smoothstone."
  blastfurnaceAmount.value = "";
  window.scroll(0 , height);
}

function craftSmoker() {
  count = smokerAmount.value
  remainingEl.innerHTML = ""
  recipeEl.src="calculatorimages/smokerR.png"
    wood = count * 4
    furnace = count
    resultsEl.innerHTML = "You will need " + wood + " wood and " + furnace + " furnace."
  smokerAmount.value = "";
  window.scroll(0 , height);
}

function craftGlassPane() {
  count = glasspaneAmount.value
  remainingEl.innerHTML = ""
  recipeEl.src="calculatorimages/glasspaneR.png"
    if (count % 16 == 0) {
      glass = count * 0.375
      resultsEl.innerHTML = "You will need " + Math.round(glass) + " glass."
      } else {
        while (count % 16 != 0) {
          count++
          glass = count * 0.375
          resultsEl.innerHTML = "You will need " + Math.round(glass) + " glass."
          excess = count - glasspaneAmount.value
          remainingEl.innerHTML = "You will have " + excess + " extra glass pane."
        }
    }
  glasspaneAmount.value = "";
  window.scroll(0 , height);
}

//----------------------------------------------------------------------------------------------------------------


//event listener for buttons -------------------------------------------------------------------------------------
planksBtn.addEventListener("click", craftPlanks)
planksAmount.addEventListener("input", function(){
  planksBtn.disabled = (this.value === '');
})
craftingtableBtn.addEventListener("click", craftCraftingtable)
craftingtableAmount.addEventListener("input", function(){
  craftingtableBtn.disabled = (this.value === '');
})
sticksBtn.addEventListener("click", craftSticks)
sticksAmount.addEventListener("input", function(){
  sticksBtn.disabled = (this.value === '');
})
chestBtn.addEventListener("click", craftChest)
chestAmount.addEventListener("input", function(){
  chestBtn.disabled = (this.value === '');
})
furnaceBtn.addEventListener("click", craftFurnace)
furnaceAmount.addEventListener("input", function(){
  furnaceBtn.disabled = (this.value === '');
})
fenceBtn.addEventListener("click", craftFence)
fenceAmount.addEventListener("input", function(){
  fenceBtn.disabled = (this.value === '');
})

//tools
pickaxeBtn.addEventListener("click", craftPickaxes)
pickaxeAmount.addEventListener("input", function(){
  pickaxeBtn.disabled = (this.value === '');
})
shovelBtn.addEventListener("click", craftShovels)
shovelAmount.addEventListener("input", function(){
  shovelBtn.disabled = (this.value === '');
})
axeBtn.addEventListener("click", craftAxes)
axeAmount.addEventListener("input", function(){
  axeBtn.disabled = (this.value === '');
})
hoeBtn.addEventListener("click", craftHoes)
hoeAmount.addEventListener("input", function(){
  hoeBtn.disabled = (this.value === '');
})
swordBtn.addEventListener("click", craftSwords)
swordAmount.addEventListener("input", function(){
  swordBtn.disabled = (this.value === '');
})
bowBtn.addEventListener("click", craftBows)
bowAmount.addEventListener("input", function(){
  bowBtn.disabled = (this.value === '');
})

//blocks
bookshelfBtn.addEventListener("click", craftBookshelf)
bookshelfAmount.addEventListener("input", function(){
  bookshelfBtn.disabled = (this.value === '');
})
noteblockBtn.addEventListener("click", craftNoteblock)
noteblockAmount.addEventListener("input", function(){
  noteblockBtn.disabled = (this.value === '');
})
tntBtn.addEventListener("click", craftTNT)
tntAmount.addEventListener("input", function(){
  tntBtn.disabled = (this.value === '');
})
stonebrickBtn.addEventListener("click", craftStonebrick)
stonebrickAmount.addEventListener("input", function(){
  stonebrickBtn.disabled = (this.value === '');
})
stairsBtn.addEventListener("click", craftStairs)
stairsAmount.addEventListener("input", function(){
  stairsBtn.disabled = (this.value === '');
})
redstoneblockBtn.addEventListener("click", craftRedstoneblock)
redstoneblockAmount.addEventListener("input", function(){
  redstoneblockBtn.disabled = (this.value === '');
})

//others
paperBtn.addEventListener("click", craftPaper)
paperAmount.addEventListener("input", function(){
  paperBtn.disabled = (this.value === '');
})
bookBtn.addEventListener("click", craftBook)
bookAmount.addEventListener("input", function(){
  bookBtn.disabled = (this.value === '');
})
enchantingBtn.addEventListener("click", craftEnchanting)
enchantingAmount.addEventListener("input", function(){
  enchantingBtn.disabled = (this.value === '');
})
blastfurnaceBtn.addEventListener("click", craftBlastFurnace)
blastfurnaceAmount.addEventListener("input", function(){
  blastfurnaceBtn.disabled = (this.value === '');
})
smokerBtn.addEventListener("click", craftSmoker)
smokerAmount.addEventListener("input", function(){
  smokerBtn.disabled = (this.value === '');
})
glasspaneBtn.addEventListener("click", craftGlassPane)
glasspaneAmount.addEventListener("input", function(){
  glasspaneBtn.disabled = (this.value === '');
})

//----------------------------------------------------------------------------------------------------------------
