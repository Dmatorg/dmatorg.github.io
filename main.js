// gui file
// on page load
const content = document.getElementById('content');
content.innerHTML = '';


// nav

const home = new Flexi_Button('Home', Home);
home.render(document.getElementById("nav"));
home.setBackgroundColor('rgba(255, 255, 255, 0.5)');
home.setRippleEffectColor('rgba(0,0,0,0.3)');
home.setShadowColor('rgba(0,0,0,0.3)');
home.setCursor("pointer");


const download = new Flexi_Button('Download', Download);
download.render(document.getElementById("nav"));
download.setBackgroundColor('rgba(255, 255, 255, 0.5)');
download.setRippleEffectColor('rgba(0,0,0,0.3)');
download.setShadowColor('rgba(0,0,0,0.3)');
download.setCursor("pointer");





const learn = new Flexi_Button('Learn', Learn);
learn.render(document.getElementById("nav"));
learn.setBackgroundColor('rgba(255, 255, 255, 0.5)');
learn.setRippleEffectColor('rgba(0,0,0,0.3)');
learn.setShadowColor('rgba(0,0,0,0.3)');
learn.setCursor("pointer");





function Home(){
  var html = `
  <h1>
      <ul>
        <li>
          About DMAT
        </li>
      </ul>
    </h1>
    <p>
      <a href="">
        DMAT↗
      </a> is an <a href="https://duckduckgo.com/?hps=1&q=open+source+meaning&ia=web">Open Source↗</a> little computer language which was developed for <a href="https://duckduckgo.com/?hps=1&q=3d+graphics+Materials&ia=web">3d graphics, Materials and other purposes for graphics programming↗</a>. It was manily focused on <a href="https://duckduckgo.com/?hps=1&q=3d+graphics+materials&ia=web">3d graphics Material↗</a> generation without hard designing them manually. <a href="">DMAT↗</a> Extracts the way of hard designing <a href="https://duckduckgo.com/?hps=1&q=Normal+maps&ia=web">Normal maps↗</a>, <a href="https://duckduckgo.com/?hps=1&q=Height+maps&ia=web">Height maps↗</a>, <a href="https://duckduckgo.com/?hps=1&q=Roughness+maps&ia=web">Roughness maps↗</a> and <a href="https://duckduckgo.com/?hps=1&q=Metalic+maps&ia=web">Metalic maps↗</a> and make the difficult process of designing these to easy and automatic. In modern sense <a href="#">DMAT↗</a> can easily replace your paid <a href="https://duckduckgo.com/?hps=1&q=3d+material+generating+software&ia=web">3d material genrating software↗</a>
      
      because <a href="#">DMAT↗</a> is an <a href="https://duckduckgo.com/?hps=1&q=Intepreted+language&ia=web">Intepreted language↗</a> also but it directly converts into texture maps which you all need to make <a href="https://duckduckgo.com/?hps=1&q=3d+graphics&ia=web">3d Graphics↗</a>with less effort.
    </p>


<br><br>




<h1>
  <ul>
    <li>
      Privacy & Polocy
    </li>
  </ul>
</h1>
<ul>
  <li>DMAT don't collects your any kind of data</li><br><br>
  <li>DMAT is not a spyware or malware it's an computer language</li><br><br>
  <li>DMAT itself is not a tool or software it's an computer language</li><br><br>
  <li>DMAT don't need subscriptions or payments on monthly bases</li><br><br>
  <li>DMAT is only for Linux based distribuitions</li><br><br>
  <li>DMAT is freely available for anyone to use in linux distributions</li><br><br>
  <li>DMAT is not for other Operating Systems exept linux, However it's source code is freely available for every operating system to get compiled into</li><br><br>
  <li>DMAT intepreter was purly written in C++ and not available for any other programming language</li><br><br>
</ul>


<br><br>

<div id="FAQs">
  
</div>
  `;
  // render first component
  content.innerHTML = html;
  
  // Flexi Code
  // FAQs
var FAQs = new Flexi_Stretcher('FAQs', `



`);

FAQs.render(document.getElementById('FAQs'));
FAQs.setBackgroundColor('lavender');


var FAQ_Q1 = new Flexi_Button(`Q.) Why DMAT is only for Linux Distributions not for other OS like Windows etc?

Ans.)DMAT is only available for Linux Distributions because it was writtin on Android and Compiled into Andeoid itself with Cxx Droid so it's in the format of an output file .out which is not for operating system like windows and can only be executed on UNIX like Operating Systems like linux or MAC OS. How ever for other Operating Systems like windows the source code is freely available so anyone can compile the source code and enjoy DMAT on Windows or other Operating Systems where G++ can be installed.`);
FAQ_Q1.render(document.getElementById(FAQs.get_root()));
// learn.render(document.getElementById("nav"));
FAQ_Q1.setBackgroundColor('rgba(255, 255, 255, 0.5)');
FAQ_Q1.setRippleEffectColor('rgba(0,0,0,0.3)');
FAQ_Q1.setShadowColor('rgba(0,0,0,0.3)');
FAQ_Q1.setCursor("pointer");



// FAQs.content += '<br><hr><br>';
// FAQs.render(document.getElementById('FAQs'))



var FAQ_Q2 = new Flexi_Button(`Q.) Is DMAT a Computer Programing language like C++ or python or any other?

Ans.)No, DMAT is not a Computer Programing Language in traditional sense, However it's just an Computer language designed specially to work with Computer Graphics in 3d Programming and why it's an Computer Language because DMAT has a very different syntax then C++ or python or any other language and DMAT code can't be directly intepreted without DMAT Linux Intepreter.`);
FAQ_Q2.render(document.getElementById(FAQs.get_root()));
// learn.render(document.getElementById("nav"));
FAQ_Q2.setBackgroundColor('rgba(255, 255, 255, 0.5)');
FAQ_Q2.setRippleEffectColor('rgba(0,0,0,0.3)');
FAQ_Q2.setShadowColor('rgba(0,0,0,0.3)');
FAQ_Q2.setCursor("pointer");

}
Home();








function Download(){
  var html = `
  <center>
    <h1 style="color: dodgerblue;">
      
          
          Thanks for Downloading!
          
        
    </h1>
    </center>
    <hr>
    <p>Thanks for downloading DMAT and thanks for showing your kind of support for DMAT. Please choose the specific download option for DMAT Installation.</p>
    
    <h2>
      DMAT Downloads
    </h2>

    DMAT (Lang 1.0.1) - Linux : <a href="downloads/dmat-intepreter-1-0-1.out.zip" download="dmat-intepreter-1-0-1.out.zip">Download</a> | <a href="downloads/dmat-lang-1-0-1-source.zip" download="downloads/dmat-lang-1-0-1-source.zip">(Source)</a> | <a href="downloads/dmat-lang-1-0-1-documentation.txt" download="downloads/dmat-lang-1-0-1-documentation.txt">(Documentation)</a> | <a href="https://github.com/Dmatorg/dmat-intepreter/blob/main">(Github Source)</a>
    <br>
    DMAT (Lang 1.0) - Linux : <a href="downloads/dmat-intepreter-1-0.out.zip" download="dmat-intepreter-1-0.out.zip">Download</a> | <a href="downloads/dmat-lang-1-0-source.zip" download="downloads/dmat-lang-1-0-source.zip">(Source)</a> | <a href="downloads/dmat-lang-1-0-documentation.txt" download="downloads/dmat-lang-1-0-documentation.txt">(Documentation)</a> | <a href="https://github.com/Dmatorg/dmat-intepreter/blob/main">(Github Source)</a>
    
      
   
  `;
  content.innerHTML = html;
}











function Learn(){
  const html = `
  
  <h1>DMAT 1.0 Official Documentation</h1>
<p><em>Written by ghgltggamer officially</em></p>
<p><em>Writing started at: 19:51, Sat Jun 22 2024</em></p>

<h2>DMAT</h2>

<h3>What is DMAT?</h3>
<p>DMAT is a computer language developed for 3D computer graphics manipulation with the help of speedy conversion. DMAT was officially developed for ALBEDO to PBR Material Conversion and it was written in C++ solely.</p>

<h3>Is DMAT a Programming Language?</h3>
<p>No, in the traditional sense DMAT is not a programming language nor a scripting or markup language except DMAT is itself a computer language developed by the founder of FOZ DTX CORP, ghgltggamer. DMAT is totally different from a traditional programming language because it lacks traditional features of a programming language like variables, statements, etc. DMAT also has a totally different syntax than a programming language which you will see very soon. DMAT also has a unique execution style, DMAT program processes everything after exiting the program whereas a programming language processes everything before exiting the program.</p>

<h3>About Current Version</h3>
<ul>
  <li>This documentation was written for DMAT (Lang 1.0) and may not be accurate for future DMAT releases or versions.</li>
  <li>This version of DMAT only is able to convert ALBEDO images into NORMAL, HEIGHT, ROUGHNESS, and METALLIC maps.</li>
</ul>

<h3>About ALBEDO</h3>
<p>ALBEDO is the plain image which defines how much color comes to the image and how much the black and white light rays enter the image. In simple terms, ALBEDO is just the normal and plain image which you use in your everyday life and DMAT will extract the PBR mappings & siblings from this image.</p>

<h4>NORMAL MAPS:</h4>
<p>NORMAL MAPS are colorful images which describe how light is going to interact with the surface. In simple terms, a NORMAL MAP is an image used to create fake depths and bumps by simulating light and fake shadows and these images are called mappings and a part of PBR Mappings which is commonly adapted for photorealism, e.g., Minecraft (Photorealistic Textures), PBR Materials.</p>

<h4>HEIGHT MAP:</h4>
<p>HEIGHT MAPS are grayscaled images (black & white images) which actually generate real-time bumps in the object. In simple terms, a HEIGHT MAP describes the 3D depths on the surface of the 3D object. It does not actually create shadows or any other effects but it actually makes real-time 3D bumps which can be resource-intensive.</p>

<h5>Height Depth Fundamentals:</h5>
<ul>
  <li>White surface = Tall</li>
  <li>Black surface = Short</li>
</ul>
<p>Definition - How white the area is, that much tall it will be and how black the area is, that much deep the area will be. HEIGHT MAPS are also known as DISPLACEMENT MAPS.</p>

<h4>ROUGHNESS MAPS:</h4>
<p>ROUGHNESS MAPS are also grayscaled and these define the smooth and rough surfaces on the objects. In simple terms, ROUGHNESS MAPS define how much the light is going to be reflected by the object.</p>

<h5>Fundamentals:</h5>
<ul>
  <li>White = Rough</li>
  <li>Black = Smooth & Reflective</li>
</ul>
<p>Theory: How white the object is, that much rough it would be and how black the surface is, that much smooth and reflective the surface will be.</p>

<h4>METALLIC MAPS:</h4>
<p>METALLIC MAPS are the same as roughness but they will tell how much metallic the object is. In simple terms, METALLIC MAPS make your object real reflective with metalism on it.</p>

<h5>Fundamentals:</h5>
<ul>
  <li>White = Metallic</li>
  <li>Black = Non-Metallic</li>
</ul>
<p>Theory: How white the image is, that much metallic the object will be and how black the image is, that much non-metallic the object will be. METALLIC MAPS are also known as Specular maps.</p>

<hr>

<h2>DMAT Usage:</h2>

<pre>
*WE CAN PARSE ANYTHING here in DMAT 1.0.1*
*THIS MATERIAL IS COMPILABLE WITH DMAT 1.0.1*
*COPYRIGHT (C) GHGLTGGAMER*
*WRITING AT 17:43 AT 21 JUN 2024*
*NOTE THAT DMAT CAN CHANGE THE SYNTAX IN FUTURE OR FUNCTIONS HERE USED MAY NOT BE AVAILABLE IN FUTURE WITH SAME NAME*

*TUTORIAL*
*DON'T WORRY ABOUT THE TEXT DMAT WILL IGNORE ANY TEXT IT WILL JUST COMPILE THE REQUIRED TEXT*
*NOW LET'S TALK ABOUT DMAT A LITTLE BIT*
*FIRSTLY DMAT IS A COMPUTER LANGUAGE NOT A PROGRAMMING LANGUAGE IN THE TRADITIONAL SENSE BECAUSE IT HAS ITS OWN SYNTAX AND IT'S VERY DIFFERENT FROM A PROGRAMMING LANGUAGE DMAT IS ONLY BUILT FOR DEALING WITH COMPUTER GRAPHICS AND IT CAN CREATE HIGH QUALITY 3D MATERIALS FROM JUST AN ALBEDO IMAGE*

*SO OBVIOUSLY WE NEED AN ALBEDO IMAGE TO BE LOADED AND IN MY CASE THE IMAGE IS cobblestone1.png BUT THE PROBLEM IS THAT DMAT DOESN'T KNOW ABOUT THE ALBEDO IMAGE SO IT WILL THROW ERRORS FOR LOADING ALBEDO BINARIES, IN ORDER TO FIX ERROR WE NEED TO TELL DMAT THAT WE ARE USING cobblestone1.png AS ALBEDO IMAGE AND FOR THIS DMAT HAS A MACRO CALLED "DMAT_ALBEDO" THIS TELLS DMAT THAT WE HAVE DEFINED THE ALBEDO AND FOR DATA PARSING IN DMAT WE USE: , DMAT is too strict for indentation so don't give any spaces while writing code and also note that , DMAT PROCESSES EVERY SINGLE LINE OF CODE FROM COMPILER PATH YOU NEED TO PROVIDE EXACT PATH TO YOUR FILES TO THE PARAMS FROM COMPILER NOTE*

*LOADING cobblestone1.png*
DMAT_ALBEDO:cobblestone1.png

*DEFINING NORMAL, HEIGHT, ROUGHNESS, METALLIC MAPS FILES WHICH WILL BE BUILT* (Important without initialization of these DMAT will never fill the memory for these files)
DMAT_NORMALS:normal.png
DMAT_HEIGHTS:height.png
DMAT_ROUGHNESS:roughness.png
DMAT_METALLICS:metallic.png

*AND YEAH THAT'S IT NOW DMAT WILL PROCESS OUT MATERIAL FROM cobblestone1.png BUT IS this enough? No IN DMAT WE NEED TO TELL DMAT THAT WE ARE EXITING THE PROGRAM AND WE WANT TO FINALLY BUILD THE MATERIAL FROM MAIN ALBEDO, SO THAT DMAT CAN FREE THE MEMORY AND START FINAL BUILD BECAUSE BEFORE EXIT WE ARE JUST TELLING DMAT SETTINGS OF OUR MATERIAL BUT FOR FINAL BUILD WE NEED TO EXIT THE PROGRAM , I KNOW THIS IS PRETTY WEIRD BUT IT'S A PART OF DMAT SYNTAX AND THAT'S WHY DMAT IS NOT A PROGRAMMING LANGUAGE BECAUSE PROGRAMMING LANGUAGES PROCESS DATA BEFORE EXITING THE PROGRAM BUT DMAT PROCESSES EVERYTHING AFTER EXITING THE PROGRAM BECAUSE DMAT WANTS TO FREE THE MEMORY DIRECTLY*

*FOR EXITING AND BUILDING THE PROGRAM WE HAVE EXIT & BUILD MACRO*
*EXITING AND BUILDING*
EXIT&BUILD
    </pre>

<h3>How DMAT Macros Work</h3>
<p>Each macro fills a DMAT variable which is directly stored in memory buffer.</p>
<ul>
  <li><strong>DMAT_ALBEDO</strong>: is used to define the ALBEDO</li>
  <li><strong>DMAT_NORMALS</strong>: is used to define the NORMAL MAP Output file</li>
  <li><strong>DMAT_HEIGHTS</strong>: is used to define the HEIGHT MAP Output file</li>
  <li><strong>DMAT_ROUGHNESS</strong>: is used to define ROUGHNESS MAP Output file</li>
  <li><strong>DMAT_METALLIC</strong>: is used to define METALLIC MAP Output file</li>
  <li><strong>EXIT&BUILD</strong>: is used to finally exit the program; this is important because without this DMAT will only fill up the memory buffer but not build the PBR files as DMAT processes everything after exiting the program.</li>
</ul>

<h3>How to Execute a DMAT File?</h3>
<p>DMAT files are stored with a .dmat extension and can be only compiled by DMAT API or DMAT INTEPRETER. <br>
DMAT API : Provides an C++ programmable way for executing the dmat code. (Not available for current and stable use) <br>
DMAT INTEPRETER : Download the Official DMAT INTERETER and execute the INTEPRETER , Finally enter the path to your dmat file and press enter. Best use is to place the intepreter where you stores the dmat files. <br></p>

<h1>
Thanks for reading this documentation ended by ghgltggamerofficially at same day : 20:31
</h1>
  
  `;



// version 1.0.1
  const html_1_0_1 = `

  <h1>DMAT 1.0.1 Official Documentation</h1>
<p><em>Written by ghgltggamer officially</em></p>
<p><em>Writing started at: 20:56, 29 jun 2024

<h2>DMAT</h2>

<h3>What is DMAT?</h3>
<p>DMAT is a computer language developed for 3D computer graphics manipulation with the help of speedy conversion. DMAT was officially developed for ALBEDO to PBR Material Conversion and it was written in C++ solely.</p>

<h3>Is DMAT a Programming Language?</h3>
<p>No, in the traditional sense DMAT is not a programming language nor a scripting or markup language except DMAT is itself a computer language developed by the founder of FOZ DTX CORP, ghgltggamer. DMAT is totally different from a traditional programming language because it lacks traditional features of a programming language like variables, statements, etc. DMAT also has a totally different syntax than a programming language which you will see very soon. DMAT also has a unique execution style, DMAT program processes everything after exiting the program whereas a programming language processes everything before exiting the program.</p>

<h3>About Current Version</h3>
<ul>
  <li>This documentation was written for DMAT (Lang 1.0) and may not be accurate for future DMAT releases or versions.</li>
  <li>This version of DMAT only is able to convert ALBEDO images into NORMAL, HEIGHT, ROUGHNESS, and METALLIC maps.</li>
</ul>

<h3>About ALBEDO</h3>
<p>ALBEDO is the plain image which defines how much color comes to the image and how much the black and white light rays enter the image. In simple terms, ALBEDO is just the normal and plain image which you use in your everyday life and DMAT will extract the PBR mappings & siblings from this image.</p>

<h4>NORMAL MAPS:</h4>
<p>NORMAL MAPS are colorful images which describe how light is going to interact with the surface. In simple terms, a NORMAL MAP is an image used to create fake depths and bumps by simulating light and fake shadows and these images are called mappings and a part of PBR Mappings which is commonly adapted for photorealism, e.g., Minecraft (Photorealistic Textures), PBR Materials.</p>

<h4>HEIGHT MAP:</h4>
<p>HEIGHT MAPS are grayscaled images (black & white images) which actually generate real-time bumps in the object. In simple terms, a HEIGHT MAP describes the 3D depths on the surface of the 3D object. It does not actually create shadows or any other effects but it actually makes real-time 3D bumps which can be resource-intensive.</p>

<h5>Height Depth Fundamentals:</h5>
<ul>
  <li>White surface = Tall</li>
  <li>Black surface = Short</li>
</ul>
<p>Definition - How white the area is, that much tall it will be and how black the area is, that much deep the area will be. HEIGHT MAPS are also known as DISPLACEMENT MAPS.</p>

<h4>ROUGHNESS MAPS:</h4>
<p>ROUGHNESS MAPS are also grayscaled and these define the smooth and rough surfaces on the objects. In simple terms, ROUGHNESS MAPS define how much the light is going to be reflected by the object.</p>

<h5>Fundamentals:</h5>
<ul>
  <li>White = Rough</li>
  <li>Black = Smooth & Reflective</li>
</ul>
<p>Theory: How white the object is, that much rough it would be and how black the surface is, that much smooth and reflective the surface will be.</p>

<h4>METALLIC MAPS:</h4>
<p>METALLIC MAPS are the same as roughness but they will tell how much metallic the object is. In simple terms, METALLIC MAPS make your object real reflective with metalism on it.</p>

<h5>Fundamentals:</h5>
<ul>
  <li>White = Metallic</li>
  <li>Black = Non-Metallic</li>
</ul>
<p>Theory: How white the image is, that much metallic the object will be and how black the image is, that much non-metallic the object will be. METALLIC MAPS are also known as Specular maps.</p>

<hr>

<h2>DMAT Usage:</h2>

<pre>
*WE CAN PARSE ANYTHING here in DMAT 1.0.1*
*THIS MATERIAL IS COMPILABLE WITH DMAT 1.0.1*
*COPYRIGHT (C) GHGLTGGAMER*
*WRITING AT 17:43 AT 21 JUN 2024*
*NOTE THAT DMAT CAN CHANGE THE SYNTAX IN FUTURE OR FUNCTIONS HERE USED MAY NOT BE AVAILABLE IN FUTURE WITH SAME NAME*

*TUTORIAL*
*DON'T WORRY ABOUT THE TEXT DMAT WILL IGNORE ANY TEXT IT WILL JUST COMPILE THE REQUIRED TEXT*
*NOW LET'S TALK ABOUT DMAT A LITTLE BIT*
*FIRSTLY DMAT IS A COMPUTER LANGUAGE NOT A PROGRAMMING LANGUAGE IN THE TRADITIONAL SENSE BECAUSE IT HAS ITS OWN SYNTAX AND IT'S VERY DIFFERENT FROM A PROGRAMMING LANGUAGE DMAT IS ONLY BUILT FOR DEALING WITH COMPUTER GRAPHICS AND IT CAN CREATE HIGH QUALITY 3D MATERIALS FROM JUST AN ALBEDO IMAGE*

*SO OBVIOUSLY WE NEED AN ALBEDO IMAGE TO BE LOADED AND IN MY CASE THE IMAGE IS cobblestone1.png BUT THE PROBLEM IS THAT DMAT DOESN'T KNOW ABOUT THE ALBEDO IMAGE SO IT WILL THROW ERRORS FOR LOADING ALBEDO BINARIES, IN ORDER TO FIX ERROR WE NEED TO TELL DMAT THAT WE ARE USING cobblestone1.png AS ALBEDO IMAGE AND FOR THIS DMAT HAS A MACRO CALLED "DMAT_ALBEDO" THIS TELLS DMAT THAT WE HAVE DEFINED THE ALBEDO AND FOR DATA PARSING IN DMAT WE USE: , DMAT is too strict for indentation so don't give any spaces while writing code and also note that , DMAT PROCESSES EVERY SINGLE LINE OF CODE FROM COMPILER PATH YOU NEED TO PROVIDE EXACT PATH TO YOUR FILES TO THE PARAMS FROM COMPILER NOTE*

*LOADING cobblestone1.png*
DMAT_ALBEDO:cobblestone1.png

*DEFINING NORMAL, HEIGHT, ROUGHNESS, METALLIC MAPS FILES WHICH WILL BE BUILT* (Important without initialization of these DMAT will never fill the memory for these files)
DMAT_NORMALS:normal.png
DMAT_HEIGHTS:height.png
DMAT_ROUGHNESS:roughness.png
DMAT_METALLICS:metallic.png

*AND YEAH THAT'S IT NOW DMAT WILL PROCESS OUT MATERIAL FROM cobblestone1.png BUT IS this enough? No IN DMAT WE NEED TO TELL DMAT THAT WE ARE EXITING THE PROGRAM AND WE WANT TO FINALLY BUILD THE MATERIAL FROM MAIN ALBEDO, SO THAT DMAT CAN FREE THE MEMORY AND START FINAL BUILD BECAUSE BEFORE EXIT WE ARE JUST TELLING DMAT SETTINGS OF OUR MATERIAL BUT FOR FINAL BUILD WE NEED TO EXIT THE PROGRAM , I KNOW THIS IS PRETTY WEIRD BUT IT'S A PART OF DMAT SYNTAX AND THAT'S WHY DMAT IS NOT A PROGRAMMING LANGUAGE BECAUSE PROGRAMMING LANGUAGES PROCESS DATA BEFORE EXITING THE PROGRAM BUT DMAT PROCESSES EVERYTHING AFTER EXITING THE PROGRAM BECAUSE DMAT WANTS TO FREE THE MEMORY DIRECTLY*

*FOR EXITING AND BUILDING THE PROGRAM WE HAVE EXIT & BUILD MACRO*
*EXITING AND BUILDING*
EXIT&BUILD
    </pre>

<h3>How DMAT Macros Work</h3>
<p>Each macro fills a DMAT variable which is directly stored in memory buffer.</p>
<ul>
  <li><strong>DMAT_ALBEDO</strong>: is used to define the ALBEDO</li>
  <li><strong>DMAT_NORMALS</strong>: is used to define the NORMAL MAP Output file</li>
  <li><strong>DMAT_HEIGHTS</strong>: is used to define the HEIGHT MAP Output file</li>
  <li><strong>DMAT_ROUGHNESS</strong>: is used to define ROUGHNESS MAP Output file</li>
  <li><strong>DMAT_METALLIC</strong>: is used to define METALLIC MAP Output file</li>
  <li><strong>DMAT_INTENSITY:</strong> (Used to define the Intensity of the S params, In simple language this will set the pixel intensity of the maps which can range from 0 to 255, 0 means highly pixalated also known as FOZ DTX HYPER NORMALS but these can look soo ugly due to pixel density and whien screen profile, 255 means so soft and contains the common normal map pixel informations which are widely used but this totay depnds on the albedo color pixels to be intensied, intensity will affect all the maps, 0 will bring it highly pixelated with strong colors and 255 will make more visible pixels and common color profile any number between 0 to 255 can be setted as intensity</li>
  <li><strong>EXIT&BUILD</strong>: is used to finally exit the program; this is important because without this DMAT will only fill up the memory buffer but not build the PBR files as DMAT processes everything after exiting the program.</li>
</ul>

<h3>How to Execute a DMAT File?</h3>
<p>DMAT files are stored with a .dmat extension and can be only compiled by DMAT API or DMAT INTEPRETER. <br>
DMAT API : Provides an C++ programmable way for executing the dmat code. (Not available for current and stable use) <br>
DMAT INTEPRETER : Download the Official DMAT INTERETER and execute the INTEPRETER , Finally enter the path to your dmat file and press enter. Best use is to place the intepreter where you stores the dmat files. <br></p>

<h1>
Thanks for reading this documentation ended by ghgltggamerofficially at same day : 21:16
</h1>
  `;

  
  
  content.innerHTML = '<center><img src="img/Designer (5).png" width="200px"></center><hr>';
  var ver_1_0 = new Flexi_Stretcher('DMAT 1.0 Documentation (Online)', html);
  ver_1_0.render(content);

  var ver_1_0_1 = new Flexi_Stretcher('DMAT 1.0 Documentation (Online)', html_1_0_1);
  ver_1_0_1.render(content);
  
}









// Layout processing 
if (screen.width <= 400) {
  var drag = new Flexi_Button('☰', function(){
    
  });
  drag.render(document.getElementById('nav'));
drag.setBackgroundColor('rgba(255, 255, 255, 0.5)');
drag.setRippleEffectColor('rgba(0,0,0,0.3)');
drag.setShadowColor('rgba(0,0,0,0.3)');
drag.setCursor("pointer");

  content.innerHTML = '<h1>Oops! Seems like this website is not optimised for mobile devices vertical view, In order to see the webpage please ↺ Rotate your mobile device and then <a href="">Click here</a>, but if this doesnot works please report a bug by <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__Uk192NUQjRaOElBQlA3SDcyUFZKOUhEQjhRSUZERS4u">Clicking here</a>';
}
