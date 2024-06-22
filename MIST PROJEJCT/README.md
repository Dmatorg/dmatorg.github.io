# MIST Framework

MIST (Modular Interactive UI Framework) is a JavaScript framework designed for building powerful and secure web applications with a focus on performance and flexibility. MIST offers a unique virtualization feature, providing enhanced speed and security by preventing third-party renderers from accessing the content directly.

## Features

- **Virtual Background:** MIST virtualizes its components, ensuring consistent rendering and behavior across different platforms and environments.
- **High Performance:** With its modular architecture and optimized rendering, MIST delivers fast and responsive web applications.
- **Security:** By blocking third-party web views through its virtual world nature, MIST enhances security and prevents unauthorized access to the application content.
- **Customizable Widgets:** MIST provides a range of widgets and UI components for building modern and interactive user interfaces.

## Getting Started

To get started with MIST, follow these steps:

1. Download Include the MIST framework in your HTML file:

   ```html
   <!-- Place the downloaded project files int the root directory of the project -->
   <link rel="stylesheet" href="mist.min.css">
   <script src="mist.min.js"></script>
   
   ``` 

2. Follow the documentation


# Documentation

## Using JavaScript for designing the UI

We will use JavaScript as primary language for using <b>MIST</b> because it provides various functions and beggner friendly syntax for learning <b>MIST</b>.

## Window

<b>MIST</b> provides a full fledged Independent <b>Window Manager</b> which is responsible for making the fully functional <code>windows</code> and for making the <code>windows</code> we need to actually tell <b>MIST</b> to create <code>windows</code> and for this <b>MIST</b> provides us 2 classes <code>MIST_Window</code> and <code>MIST_Mirror_Window</code>. These classes are responsible to tell <b>MIST</b> that we want to actually create <code>window</code>.

### MIST_Window (Class)

<code>MIST_Window</code> class takes 3 arguments for getting the information about <code>window</code> to create on your app, Those 3 arguments are <code>title, width, height</code>. <code>title</code> will asssign the title for your window and <code>width,height</code> will assign the width and height for your window.

<b>Example</b>

```javascript
// Defining an inheritance of MIST_Window class for making window
const my_Window = new MIST_Window("my quite Window", 300, 200); // This will create a window with title my quite Window and width of 300 pixels and height of 200 pixels
```

### Properties

Ok congratulations if you has created your first <code>Window with</code> <b>MIST</b>, Now you will feel prety good but you must know these <code>properties</code> of the <code>window</code> you have just created othervise it's nothing for you. So let's dive into these properties , So currently <b>MIST</b> has <code>setContent(), setFont(), setBackground(), setTextColor(), getHtmlId()<code>.

### setContent(htmlContent) (Method)

<code>setContent()</code> injects the <b>HTML</b> inside the <code>window</code> and this is so much important as without content you can't really do anything with <code>window</code>.

<b>Example</b>

```javascript
// Defining an inheritance of MIST_Window class for making window
const my_Window = new MIST_Window("my quite Window", 300, 200); // This will create a window with title my quite Window and width of 300 pixels and height of 200 pixels

// Adding the content in the window
my_Window.setContent("<h2>Hi there</h2><p>This is the content inside the window</p>");
```

### setFont(fontName) (Method)

<code>setFont()</code> sets the <b>FONT</b> inside the <code>window</code> and this is so much important for customising the <code>window</code>. This method is so powerfull because this can add <code>css</code> fonts as well as <code>MIST FONTS</code> also, <b>MIST</b> Actually ships a lot of fonts with the package here's the list of the available <code>FONTS</code> which are shipped with current versions <code>Raleway, Exo, Oswald, Writing, Ubuntu_Mono, Ubuntu, Ubuntu_C, RobotoCondensed, RobotoCondensed_Intalic, Outdoor, Metropolis, good_times, GlacialIndifference, Coolvetica, AxelBrush</code>. You can find these fonts inside <code>mist.min.css</code> file in the root directory of package also you can use these with css also.

<b>Example</b>

```javascript
// Defining an inheritance of MIST_Window class for making window
const my_Window = new MIST_Window("my quite Window", 300, 200); // This will create a window with title my quite Window and width of 300 pixels and height of 200 pixels

// Setting the font of window to Exo - Exo ships with MIST package and it's not a css pre installed font but after mist installation you can easily use Exo in both css and in js also.
my_Window.setFont("Exo");
```


### setBackground(url) (Method)

<code>setBackground()</code> sets the <b>Background Color or Image</b> of the <code>window</code> and this is so much important for customising the <code>window</code>. This method is compaitble with css color names only. But if you want to use <code>rgb</code> color codes then you can use it as a <code>string</code> like this <code>"rgba(red, green, blue, opacity)"</code>. Also you can set the image by using "url('path to image')"</code>

<b>Example</b>

```javascript
// Defining an inheritance of MIST_Window class for making window
const my_Window = new MIST_Window("my quite Window", 300, 200); // This will create a window with title my quite Window and width of 300 pixels and height of 200 pixels

// Setting the background color or image of the window
my_Window.setBackground("red");
// or
my_Window.setBackground("rgba(255, 0, 0, 1)");// for image use my_Window.ssetBackground("url('your image path')");
```


### setTextColor(color) (Method)

<code>setTextColor()</code> sets the <b>Text Color</b> of the <code>window</code> and this is so much important for customising the <code>window</code>. This method is compaitble with css color names only. But if you want to use <code>rgb</code> color codes then you can use it as a <code>string</code> like this <code>"rgba(red, green, blue, opacity)"</code>.

<b>Example</b>

```javascript
// Defining an inheritance of MIST_Window class for making window
const my_Window = new MIST_Window("my quite Window", 300, 200); // This will create a window with title my quite Window and width of 300 pixels and height of 200 pixels

// Setting the text color of window
my_Window.setTextColor("red");
// or
my_Window.setTextColor("rgba(255, 0, 0, 1)");
```


### getHtmlId() (Method)

<code>getHtmlId()</code> is a very powerfull and important method of the <code>MIST_Window</code> class which directly gives you the root access of the created <code>window</code> and you can use the root access to do anything with the <code>Window</code> handle this with care while using. You can use the root access of the <code>window</code> as an HTML ID and do <code>DOM</code> Manupulation with that stuff.

<b>Example</b>

```javascript
// Defining an inheritance of MIST_Window class for making window
const my_Window = new MIST_Window("my quite Window", 300, 200); // This will create a window with title my quite Window and width of 300 pixels and height of 200 pixels

// getting the root access of the window
var window_id = my_Window.getHtmlId();// window_id contains the root access of the window
```


## MIST_Mirror_Window (Class)

<code>MIST_Mirror_Window</code> class takes 4 arguments for getting the information about <code>window</code> to create on your app which renders other <code>html files</code>, Those 4 arguments are <code>title, width, height, contentUrl</code>. <code>title</code> will asssign the title for your window and <code>width,height</code> will assign the width and height for your window and <code>contentUrl</code> assssigns the html file path for rendering an webpage it could be an online website url or an local file path.

<b>Example</b>

```javascript
// Defining an inheritance of MIST_Mirror_Window class for making window
const my_Window = new MIST_Mirror_Window("my quite Window", 300, 200, "your html file path or any webssite url"); // This will create a window with title my quite Window and width of 300 pixels and height of 200 pixels and render the assined file path
```

<p style="background-color: orange;color: black;">Note: MIST_Mirror_Window doesnot contains any standard methods like MIST_Window contains but this only contains getHtmlId() for providing the root accesss of Mirror Window</p>


## Panels 

<b>Panels</b> are the ui component in <b>MIST</b> which are used to define some information of something in <b>MIST</b> Application, For creating a <b>Panel</b> in <b>MIST</b> you can use <code>MIST_Panel_Left()</code>.

## MIST_Panel_Left(text, theme, padding, location) (Function)

<code>MIST_Panel_Left()</code> takes 4 arguments <code>text, theme, padding, location</code> for creating a panel , <b>text</b> is the text which should be written in the <b>Panel</b>, <b>theme</b> defines the <code>rgb</code> color theme(Only takes 'red, green, blue' parameters), <b>padding</b> sets the spacing inside the <b>Panel</b>, <b>location</b> defines the location of the Panel where the <b>Panel</b> should be created (You can assign id of an element as parameter).

<b>Example</b>
```javascript
// Creating a Panel
const my_Panel = new MIST_Panel_Left("This is our nice looking Panel");// if text is written then MIST Will Ignore other arguments and set the as default

// getting the root access
/*
getHtmlId() is a global parameter which can be used with any of the MIST Component which can be created

- In our case we used Panel component which can be created means we can use getHtmlId() with Panel to get it's root access

*/
var my_Panel_root = my_Panel.getHtmlId();
```


## Animations

<b>Animations</b> are the visual effects which can't be created nor be destroyed, These can be only seen as visual effects which only appears, and <b>MIST</b> provides 3 <code>Animations</coode> which are decent for your applications and those are <code>fadeIn(), fadeOut(), pop()</code> for accessing these animation effects you need to use <code>MIST_Animation</code> class.

## MIST_Animation(element) (Class)

<code>MIST_Animation</code> takes only 1 argument which is the <code>HTML id</code> of the element on which you want to apply the animation and then it will return you all the 3 <code>Animations</code> of <b>MIST</b>.

<b>Example</b>
```javascript
// creating an Animation visual effect
const my_Animation = new MIST_Animation("id of the element which you want to animate");

// Animating the element
// my_Animation.effect(time in milisecond , function(){// action});
my_Animation.pop(1000, function(){   alert("hy")   })
```


## Canvas - MIST_Canvas() (Class)

<b>Canvas</b> are card like component in <b>MIST</b> which are used to draw amazing and mordern <b>GUI</b> and <b>Canvas</b> are widely used in a large amount of applications, For drawing <b>Canvas MIST</b> provides <code>MIST_Canvas</code> class , this class takes <code>content, name, location</code> in which <code>content</code> defines the content of the canvas this could be the plain text or html code, <code>name</code> defines the name of the canvas (Note that the name is optional and can be directly used to get the root access of the canvas), <code>location</code> defines the location where the canvas should be created this could be the html id. Not only this but also <code>Canvas</code> can be modified through the methods which are <code>height(pixels),width(pixels),textColor(color),backgroundColor(color),backgroundImage(path),backgroundGradient('string array of colors'),font(font name),getHtmlId(),addContent(html),addBreak()</code> , the <code>height, width</code>are responsible for setting the height and width of the canvas , <code>textColor()</code> used to set the canvas text color, <code>backgroundColor, backgroundImage(), backgroundGradient()</code> are used to add the background color, image or gradient to the canvas, <code>getHtmlId()</code> provides the root access to the canvas, <code>addContent()</code> adds the html or plain text content to the canvas , <code>addBreak()</code> adds a break or empity new line to the canvass.

<b>Example</b>

```javascript
// creating a canvas object
const my_Canvas = new MIST_Canvas("Hi this is the new canvas");// after text everything is optional but if your want you can add that also

// adding new content to canvas
my_Canvas.addContent(" This is added content");
```
