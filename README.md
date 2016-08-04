# USI Cakemix
> A client-side development framework for the Ungerboeck HTML5 Backoffice project.

Since Ungerboeck is a very complicated and highly customizable software suite, traditional HTML/CSS frameworks like Bootstrap are not a good fit for our development. We would spend more time overriding their default functionality than we would developing new controls. Cakemix is a developing ground for our new UI framework. Our goal is to create a highly modular UI with google material and BEM inspired methodologies that will be able to support the nuances of Ungerboeck HTML5 development.   

### What's included

In the repo you'll find the following directories and files.

| File/Folder     | Provides                                       |
|-----------------|------------------------------------------------|
| recipe	      | contains default values and config settings    |
| ingredients     | Source code for Mixins                         |
| icing           | Shared code for Functions                      |

Please update http://codepen.io/USIUX/pen/mPyavw?editors=0100 when changes are made to these files

Everything that is below this line ________ is out of date...
***
# Coding Standards
> Please help make the less code and markdown documentation _consistent, readable, and maintainable_ by conforming to these guidelines when contributing:

In this project we are using BEM methodology and README Driven Development to create a reusable and easy to understand framework of lesscss mixins: to improve the coding experience with *utensils*, to help build generic controls with *ingredients*, to style controls in a maintainable way with *icing*, and to keep controls configurable after development is finished with a *recipe*. To use this framework you must be familiar with BEM, Markdown and Lesscss.

## BEM overview
If you are not familiar with BEM this section will try to bring you up to speed. If you want, you can read ["Getting your head ’round BEM syntax"](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) an article by csswizardry where I pulled most of the following content from! :)

**BEM** – meaning *block*, *element*, *modifier* – is a front-end naming methodology thought up by the guys at Yandex. It is a smart way of naming your CSS classes to give them more transparency and meaning to other developers. They are far more strict and informative, which makes the BEM naming convention ideal for teams of developers on larger projects that might last a while.

The BEM naming convention (used by Cakemix) follows this pattern:
``` less
.blockName {}
.blockName-elementName {}
.blockName--modifierName {}
```

* `.blockName` represents the higher level of an abstraction or component.
* `.blockName-elementName` represents a descendent of `.blockName` that helps form `.blockName` as a whole.
* `.blockName--modifierName` represents a different state or version of `.blockName`.

The point of BEM is to tell other developers more about what a piece of markup is doing from its name alone. By reading some HTML with some classes in, you can see how – if at all – the chunks are related; something might just be another *block*, something might be an *element*, of that *block*, and something might be a variation or *modifier* of that *block*. To use an analogy/model, think how the following things and elements are related:

```less
.person {}
.person-hand {}
.person--female {}
.person-hand--female {}
.person-hand--left {}
```

The top-level block is a ‘person’ which has elements, for example, ‘hand’. A person also has variations, such as female, and that variation in turn can be applied to elements. This again, but written in ‘normal’ CSS:

```less
.person {}
.hand {}
.female {}
.female-hand {}
.left-hand {}
```

These all make sense, but are somewhat disconnected. Take .female for example; female what? What about .hand; a hand of a clock? A hand in a game of cards? By using BEM we can be more descriptive but also a lot more explicit; we tie concrete links to other elements of our code through naming alone. As you learn more about Cakemix you will see how the BEM methodology has been utilized. 

## Markdown standards
A beautifully crafted library with no documentation is damn near worthless. We want to ensure Cakemix is documented enough to make it easy to learn. To accomplish this, we are following a *Readme Driven Development* pattern. Each directory (folder) in the Cakemix project should contain a design document (README.md). The design document is intended to be read as an introduction to code and its functionality. These design documents are written using a markdown language and follow the guidelines listed below.

* All markdown should be written with [GitHub Flavored Markdown](https://help.github.com/articles/github-flavored-markdown/)
* The Readme should be written before writing less code
* The Readme should detail the contents of the directory and explain their intent, purpose, and basic usage
* Use `#` for titles, not underlines. Underlines are not semantic, aren't as flexible, aren't always highlighted properly in code highlighters
* Always add a space between the `#` and the heading
* Wrap inline code with a **single backtick**,
* Wrap blocks of code with **three backticks** (code fences).
* With code blocks, _always use the correct language_ after the first code fence. Although GitHub does not highlight Less, our documentation is more likely to show up in GitHub's and Google's search results when the correct language is used. Examples: please use <code>\`\`\`less</code> for Less, and <code>\`\`\`css</code> for CSS.

## Less Coding standards
Cakemix is written exclusively with less. The framework itself doesn’t generate any CSS, it leaves you to build that yourself. The following standards govern the use of Lesscss features in Cakemix

* Two spaces for indentation, never tabs, and always use proper indentation
* Multiple-line formatting (one property and value per line)
* For multiple, comma-separated selectors, place each selector on its own line
* Double quotes only, never single quotes
* Always put a space after a property's colon (e.g., `display: block;` and not `display:block;`)
* End _all_ lines with a semi-colon
* Attribute selectors, like `input[type="text"]` should always wrap the attribute's value in double quotes. This is important to do in your own code as well for consistency and safety (see this [blog post on unquoted attribute values](http://mathiasbynens.be/notes/unquoted-attribute-values) that can lead to XSS attacks)

Examples:

**Good**

```css
body {
  padding-top: 80px;
  font-size: 12px;
}
```

**Bad**

```css
body {
padding-top: 80px;
font-size: 12px;
}
```

**Bad**

```css
body { padding-top: 80px; font-size: 12px }
```

## Less Blocks
One of the main goals of developing with Cakemix is to provide a maintainable code base! One way to accomplish this to break out functionality into modular pieces. A new folder should be created for each Cakemix *exposed* block (as defined by BEM naming methodology). Some blocks are considered *internal* (like [palette](icing/color/_palette.less) and [typography](icing/font/_typography.less), they are not exposed for use outside of Cakemix or can only be used through another block). Internal blocks should be contained within the folder of the block that uses them. 

### Less Internal Blocks
**Variable Standards:**
Less variables **_should_** be defined globally in internal less blocks. All variables should be accessible through an internal block mixin as well.

BEM naming methodology has also been adapted to less variable names for internal blocks.

**In internal blocks** (like typography and palette) the variable names should stem from section names. **Example:**

``` less
// cm-internalBlock
// ----------------------------------------------
// description of what this block is for
//

// internalBlock Variable Definitions
// ----------------------------------------------
// talk about what you are defining and how it is useful
//

//# externalBlock
 // this is a section of value variables used by external blocks
 // ----------------------------------------------
 // Talk about why the external blocks needs these variables
//

//## - modifier-2
   // ----------------------------------------------
   // Variable modifiers denote variable interchangeability 
//
@cm-internalBlock-externalBlock--modifier-2--string-2: "modifier-2--string-2";
@cm-internalBlock-externalBlock--modifier-2--string-1: "modifier-2--string-1";

//## - modifier-1
   // ----------------------------------------------
   // Variable modifiers denote variable interchangeability 
//
@cm-internalBlock-externalBlock--modifier-1--string-2: "modifier-1--string-2";
@cm-internalBlock-externalBlock--modifier-1--string-1: "modifier-1--string-1";


// internalBlock Function Definitions
// ----------------------------------------------
// These mixins return a set of modifier varnames for each modifier value type of internalBlock variables
//

//# externalBlock
 // mixin Function Definitions for use by the externalBlock
 // ----------------------------------------------
//

//## varNames === return font variable names for fonts
  // @param {string} === (String represents the @cm-internalBlock-externalBlock variants)
//
.cm-internalBlock-externalBlock-varNames(@modifier) {
  @cm-internalBlock-externalBlock--string-2--varName: ~"cm-internalBlock-externalBlock--@{modifier}--string-2";
  @cm-internalBlock-externalBlock--string-1--varName: ~"cm-internalBlock-externalBlock--@{modifier}--string-1";
}
```

### Less External Blocks
**Variable Standards:**
Less variables **_should not_** be defined globally in external less blocks. All variables should be defined and returned from a mixin when developing external less blocks. This is a rule to help keep the intellisense clean and useful.

BEM naming methodology has also been adapted differently to less variable names for external blocks.

**In external blocks** (like font and color) the variable names should stem from there scoped mixin names. **Example:**

``` less
// cm-externalBlock
// ----------------------------------------------
// description of what this block is for
//


// External Block Imports
// ----------------------------------------------
// For mixins and variables located in other less files
//

//# Recipe
 // Recipe contains variables and mixins that are configurable 
 // ----------------------------------------------
 // Recipe import for the configurable value whose value maps an internalBlock style 
 // Mixins Used:    **NONE**
 // Variables Used: '@cm-recipe-internalBlock--*variantName*'
 // Do not use Intellisense import
//
@import (reference) "../../_recipe.less";

//# internalBlock
 // ----------------------------------------------
 // internalBlock import for variables and mixins to return specific variable sets for this external block
 // Mixins Used:    list the internal block mixins used
 // Variables used: '@cm-internalBlock-value--*mod*--modVarName'
 // Do not use Intellisense import
//
@import (reference) "_internalBlock.less";


// externalBlock Function Definitions
// ----------------------------------------------
// These mixins use the Recipe to find values to return from internalBlock
//

// Get a values that are not defined in the recipe
 //@param {string} === internalBlock externalBlock modifier name
//
.cm-externalBlock(@cm-internalBlock-externalBlock-modifier) {
  @cm-externalBlock-type: ~"default";
  // @cm-internalBlock-valueModifier could equal ~"modifier-1" or ~"modifier-2"
  .cm-internalBlock-externalBlock-varNames(@cm-internalBlock-externalBlock-modifier);
  
  @cm-externalBlock--string-2: @@cm-internalBlock-externalBlock--string-2--varName
  @cm-externalBlock--string-1: @@cm-internalBlock-externalBlock--string-1--varName
}

// Get recipe defined fonts

//# - Recipe 
.cm-externalBlock(recipe) { // Intellisense helper 
  .cm-externalBlock--recipe(); 
}
.cm-externalBlock--recipe() {
  @cm-externalBlock-type: ~"recipe";
  @cm-externalBlock-recipe: ~"cm-recipe-internalBlock--@{cm-externalBlock-type}";
  //FYI: @cm-externalBlock-recipe === "cm-recipe-internalBlock--recipe"  
  @cm-internalBlock-externalBlock-modifier: @@cm-externalBlock-recipe;
  //FYI: @cm-internalBlock-externalBlock-modifier === @cm-recipe-internalBlock--recipe (defined in: ../../_recipe.less)

  .cm-externalBlock(@cm-internalBlock-externalBlock-modifier);
  @cm-externalBlock-type: ~"recipe"; // override .cm-externalBlock setting
}
```

### Rules and Nesting
Less gives you the ability to nest selectors. This functionality is fantastic but if you nest all your lesscss selectors like you do HTML, then you are doing it wrong.

**Bad**

```less
/* Lesscss */
body {
  .wrapper {
    .content {
      #top-story {
        .title {
          a {
            /* STYLES HERE */
          }
        }
      }
    }
  }
}
```

To help answer questions on how to correctly use nesting I have created a few guidelines:
*  Avoid creating descendant selectors when you do use nested rules
*  Avoid using the Parent Selector(`&`) more than once in a rule
*  Avoid multiple levels of nesting
*  Never **Needlessly** use nesting


