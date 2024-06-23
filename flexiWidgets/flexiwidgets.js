class Flexi_Widget {
  constructor() {
    this.init();
  }

  init() {
    this.injectGlobalStyles();
  }

  injectGlobalStyles() {
    const styles = `
      :root {
        --primary-color: #3B82F6;
    --secondary-color: #1E3A8A;
    --accent-color: #06B6D4;
    --background-color: #FFFFFF;
    --text-color: #1F2937;
    --hover-color: #2563EB;
    --active-color: #1E40AF;
    --disabled-color: #9CA3AF;
      }

      body {
        background-color: var(--background-color);
        color: var(--text-color);
        font-family: Arial, sans-serif;
        -webkit-tap-highlight-color: transparent;
      }

      .flexi-button {
        background-color: var(--primary-color);
        color: var(--text-color);
        border: 2px solid var(--button-border-color);
        padding: 10px 20px;
        border-radius: var(--button-border-radius);
        cursor: pointer;
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
        position: relative;
        overflow: hidden;
        font-family: inherit;
      }

      .flexi-button:hover {
        background-color: var(--hover-color);
      }

      .flexi-button:active {
        background-color: var(--active-color);
        box-shadow: 0 0 10px var(--shadow-color);
      }

      .flexi-ripple {
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        background: var(--ripple-color);
      }

      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }
}

// Flexi_Button class
class Flexi_Button extends Flexi_Widget {
  constructor(label, onClick) {
    super();
    this.button = document.createElement('button');
    this.button.className = 'flexi-button';
    this.button.innerText = label;
    this.button.onclick = onClick;

    this.button.addEventListener('click', this.createRippleEffect);
  }

  createRippleEffect(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    ripple.className = 'flexi-ripple';

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = event.clientX - rect.left - size / 2 + 'px';
    ripple.style.top = event.clientY - rect.top - size / 2 + 'px';

    button.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  }

  setLabel(label) {
    this.button.innerText = label;
  }

  setBackgroundColor(color) {
    this.button.style.backgroundColor = color;
  }

  setTextColor(color) {
    this.button.style.color = color;
  }

  setRippleEffectColor(color) {
    document.documentElement.style.setProperty('--ripple-color', color);
  }

  setRippleEffectOpacity(opacity) {
    let color = getComputedStyle(document.documentElement).getPropertyValue('--ripple-color');
    color = color.replace(/rgba?\((\d+), (\d+), (\d+)(, [\d.]+)?\)/, `rgba($1, $2, $3, ${opacity})`);
    document.documentElement.style.setProperty('--ripple-color', color);
  }

  setFont(font) {
    this.button.style.fontFamily = font;
  }

  setCursor(cursor) {
    this.button.style.cursor = cursor;
  }

  setBorderColor(color) {
    this.button.style.borderColor = color;
  }

  setBorderRadius(radius) {
    this.button.style.borderRadius = radius;
  }

  setShadowColor(color) {
    document.documentElement.style.setProperty('--shadow-color', color);
  }

  render(parent) {
    parent.appendChild(this.button);
  }
}

// Flexi_TextArea class
// class Flexi_TextArea extends Flexi_Widget {
//   constructor(placeholder) {
//     super();
//     this.textArea = document.createElement('textarea');
//     this.textArea.placeholder = placeholder;
//     this.textArea.className = 'flexi-textarea';
//   }

//   render(parent) {
//     parent.appendChild(this.textArea);
//   }
// }


// Updated text area
class Flexi_TextArea extends Flexi_Widget {
  constructor(placeholder = '', customStyles = {}) {
    super(customStyles);
    this.textArea = document.createElement('textarea');
    this.textArea.placeholder = placeholder;
    this.textArea.className = 'flexi-textarea';
    this.injectTextAreaStyles();
    this.setupHoverEffect();
    this.setDefaultLightingColor();
  }

  injectTextAreaStyles() {
    const styles = `
      .flexi-textarea {
        width: 100%;
        padding: var(--textarea-padding, 10px);
        margin: var(--textarea-margin, 10px 0);
        font-size: var(--textarea-font-size, 16px);
        color: var(--textarea-text-color, var(--text-color));
        background-color: var(--textarea-bg-color, var(--background-color));
        border: 2px solid var(--textarea-border-color, var(--primary-color));
        border-radius: var(--textarea-border-radius, 5px);
        box-shadow: var(--textarea-shadow, none);
        resize: vertical;
        box-sizing: border-box;
        font-family: inherit;
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
      }
      .flexi-textarea::placeholder {
        color: var(--textarea-placeholder-color, var(--disabled-color));
      }
      .flexi-textarea:focus {
        border-color: var(--textarea-focus-border-color, var(--secondary-color));
        outline: none;
      }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }

  setupHoverEffect() {
    this.textArea.addEventListener('mouseenter', () => {
      const borderColor = getComputedStyle(this.textArea).getPropertyValue('--textarea-border-color');
      const lightingColor = getComputedStyle(this.textArea).getPropertyValue('--textarea-lighting-color');
      this.textArea.style.boxShadow = `0 0 10px ${lightingColor || borderColor}`;
    });

    this.textArea.addEventListener('mouseleave', () => {
      this.textArea.style.boxShadow = 'none';
    });
  }

  setDefaultLightingColor() {
    this.textArea.style.setProperty('--textarea-lighting-color', 'var(--secondary-color)');
  }

  setBackgroundColor(color) {
    this.textArea.style.backgroundColor = color;
  }

  setBorderColor(color) {
    this.textArea.style.borderColor = color;
  }

  setBorderRadius(radius) {
    this.textArea.style.borderRadius = radius;
  }

  setTextColor(color) {
    this.textArea.style.color = color;
  }

  setFontSize(size) {
    this.textArea.style.fontSize = size;
  }

  setPadding(padding) {
    this.textArea.style.padding = padding;
  }

  setMargin(margin) {
    this.textArea.style.margin = margin;
  }

  setPlaceholderColor(color) {
    this.textArea.style.setProperty('--textarea-placeholder-color', color);
  }

  setPlaceholder(placeholder) {
    this.textArea.placeholder = placeholder;
  }

  setFocusBorderColor(color) {
    this.textArea.style.setProperty('--textarea-focus-border-color', color);
  }

  setFont(font) {
    this.textArea.style.fontFamily = font;
  }

  setShadow(shadow) {
    this.textArea.style.setProperty('--textarea-shadow', shadow);
  }

  setLightingColor(color) {
    this.textArea.style.setProperty('--textarea-lighting-color', color);
  }

  render(parent) {
    parent.appendChild(this.textArea);
  }
}

// Flexi_Navigation class
// class Flexi_Navigation extends Flexi_Widget {
//   constructor(items) {
//     super();
//     this.nav = document.createElement('nav');
//     this.ul = document.createElement('ul');
//     this.ul.className = 'flexi-nav';

//     items.forEach(item => {
//       const li = document.createElement('li');
//       const a = document.createElement('a');
//       a.href = item.href;
//       a.innerText = item.label;
//       li.appendChild(a);
//       this.ul.appendChild(li);
//     });

//     this.nav.appendChild(this.ul);
//   }

//   render(parent) {
//     parent.appendChild(this.nav);
//   }
// }

// // Usage example
// document.addEventListener('DOMContentLoaded', () => {
//   const button = new Flexi_Button('Click Me', () => console.log('Button Clicked!'));
//   button.render(document.body);

//   button.setBackgroundColor('#3498db');
//   button.setTextColor('#ffffff');
//   button.setRippleEffectColor('rgba(255, 255, 255, 0.6)');
//   button.setRippleEffectOpacity(0.4);
//   button.setFont('Verdana');
//   button.setCursor('pointer');
//   button.setBorderColor('#ffffff');
//   button.setBorderRadius('10px');
//   button.setShadowColor('#8e44ad');

//   const textArea = new Flexi_TextArea('Enter text...');
//   textArea.render(document.body);

//   const navItems = [
//     { label: 'Home', href: '#' },
//     { label: 'About', href: '#' },
//     { label: 'Contact', href: '#' }
//   ];
//   const navigation = new Flexi_Navigation(navItems);
//   navigation.render(document.body);
// });


// Updated navigation
class Flexi_Navigation extends Flexi_Widget {
  constructor(items, customStyles = {}) {
    super(customStyles);
    this.nav = document.createElement('nav');
    this.ul = document.createElement('ul');
    this.ul.className = 'flexi-nav';
    this.isMenuOpen = false;

    items.forEach(item => this.addItem(item));

    this.nav.appendChild(this.ul);
    this.injectNavStyles();
    this.addHamburgerMenu();
  }

  injectNavStyles() {
    const styles = `
      .flexi-nav {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 15px;
        background-color: var(--nav-bg-color, var(--primary-color));
        background-image: var(--nav-bg-image, none);
        backdrop-filter: var(--nav-backdrop-filter, none);
        box-shadow: var(--nav-shadow, none);
      }
      .flexi-nav li {
        position: relative;
      }
      .flexi-nav a {
        color: var(--nav-text-color, var(--text-color));
        text-decoration: none;
        padding: var(--nav-padding, 10px 15px);
        display: block;
        font-family: var(--nav-font, inherit);
        font-size: var(--nav-font-size, inherit);
        transition: background-color 0.3s ease;
      }
      .flexi-nav a:hover {
        background-color: var(--nav-hover-bg-color, var(--hover-color));
      }
      .flexi-dropdown {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: var(--nav-dropdown-bg-color, var(--primary-color));
        min-width: 200px;
        z-index: 1000;
        box-shadow: var(--nav-dropdown-shadow, none);
      }
      .flexi-dropdown a {
        padding: var(--nav-dropdown-padding, 10px 15px);
      }
      .flexi-nav li:hover .flexi-dropdown {
        display: block;
      }
      .flexi-hamburger {
        display: none;
        flex-direction: column;
        justify-content: space-around;
        width: 30px;
        height: 25px;
        cursor: pointer;
        transition: transform 0.3s ease;
      }
      .flexi-hamburger span {
        width: 100%;
        height: 4px;
        background-color: var(--nav-text-color, var(--text-color));
        transition: background-color 0.3s ease;
      }
      .flexi-hamburger:hover {
        transform: scale(1.1);
      }
      .flexi-hamburger:active span {
        background-color: var(--nav-hover-bg-color, var(--hover-color));
      }
      @media (max-width: 400px) {
        .flexi-nav {
          flex-direction: column;
          display: none;
        }
        .flexi-nav.flexi-nav-open {
          display: flex;
        }
        .flexi-hamburger {
          display: flex;
        }
      }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }

  addHamburgerMenu() {
    const hamburger = document.createElement('div');
    hamburger.className = 'flexi-hamburger';
    for (let i = 0; i < 3; i++) {
      const span = document.createElement('span');
      hamburger.appendChild(span);
    }
    hamburger.addEventListener('click', () => this.toggleMenu());

    this.nav.insertBefore(hamburger, this.nav.firstChild);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.ul.classList.add('flexi-nav-open');
    } else {
      this.ul.classList.remove('flexi-nav-open');
    }
  }

  addItem(item) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.href;
    a.innerText = item.label;
    if (item.onClick) {
      a.addEventListener('click', item.onClick);
    }
    li.appendChild(a);

    if (item.dropdown && Array.isArray(item.dropdown)) {
      const dropdown = document.createElement('ul');
      dropdown.className = 'flexi-dropdown';
      item.dropdown.forEach(subItem => {
        const subLi = document.createElement('li');
        const subA = document.createElement('a');
        subA.href = subItem.href;
        subA.innerText = subItem.label;
        if (subItem.onClick) {
          subA.addEventListener('click', subItem.onClick);
        }
        subLi.appendChild(subA);
        dropdown.appendChild(subLi);
      });
      li.appendChild(dropdown);
    }

    this.ul.appendChild(li);
  }

  removeItem(label) {
    const items = this.ul.querySelectorAll('li');
    items.forEach(item => {
      if (item.querySelector('a').innerText === label) {
        this.ul.removeChild(item);
      }
    });
  }

  setNavBackgroundColor(color) {
    document.documentElement.style.setProperty('--nav-bg-color', color);
  }

  setNavBackgroundImage(imageUrl) {
    document.documentElement.style.setProperty('--nav-bg-image', `url(${imageUrl})`);
  }

  setNavBackdropFilter(filter) {
    document.documentElement.style.setProperty('--nav-backdrop-filter', filter);
  }

  setNavTextColor(color) {
    document.documentElement.style.setProperty('--nav-text-color', color);
  }

  setNavFont(font) {
    document.documentElement.style.setProperty('--nav-font', font);
  }

  setNavFontSize(fontSize) {
    document.documentElement.style.setProperty('--nav-font-size', fontSize);
  }

  setNavPadding(padding) {
    document.documentElement.style.setProperty('--nav-padding', padding);
  }

  setNavMargin(margin) {
    this.ul.style.margin = margin;
  }

  setNavHoverBackgroundColor(color) {
    document.documentElement.style.setProperty('--nav-hover-bg-color', color);
  }

  setNavDropdownBackgroundColor(color) {
    document.documentElement.style.setProperty('--nav-dropdown-bg-color', color);
  }

  setNavDropdownPadding(padding) {
    document.documentElement.style.setProperty('--nav-dropdown-padding', padding);
  }

  setNavShadow(shadow) {
    this.ul.style.setProperty('--nav-shadow', shadow);
  }

  setNavDropdownShadow(shadow) {
    document.documentElement.style.setProperty('--nav-dropdown-shadow', shadow);
  }

  render(parent) {
    parent.appendChild(this.nav);
  }
}

// Usage example
// document.addEventListener('DOMContentLoaded', () => {
//   const navItems = [
//     { label: 'Home', href: '#', onClick: () => console.log('Home clicked') },
//     { label: 'About', href: '#', onClick: () => console.log('About clicked') },
//     { label: 'Services', href: '#', onClick: () => console.log('Services clicked'), dropdown: [
//       { label: 'Web Development', href: '#', onClick: () => console.log('Web Development clicked') },
//       { label: 'App Development', href: '#', onClick: () => console.log('App Development clicked') }
//     ]},
//     { label: 'Contact', href: '#', onClick: () => console.log('Contact clicked') }
//   ];
//   const navigation = new Flexi_Navigation(navItems);
//   navigation.render(document.body);

//   // Customize navigation styles
//   navigation.setNavBackgroundColor('#2c3e50');
//   navigation.setNavTextColor('#ecf0f1');
//   navigation.setNavFont('Verdana');
//   navigation.setNavFontSize('16px');
//   navigation.setNavPadding('12px 20px');
//   navigation.setNavHoverBackgroundColor('#34495e');
//   navigation.setNavDropdownBackgroundColor('#34495e');
//   navigation.setNavDropdownPadding('10px 15px');
//   navigation.setNavShadow('0 4px 8px rgba(0, 0, 0, 0.1)');
//   navigation.setNavDropdownShadow('0 4px 8px rgba(0, 0, 0, 0.1)');
// });





// const text = new Flexi_TextArea('Enter text')
// text.render(document.body);
// text.value(56)
// alert(text.value())



// Flexi Input class
// class Flexi_Input extends Flexi_Widget {
//   constructor(placeholder = '', type = 'text', customStyles = {}) {
//     super(customStyles);
//     this.input = document.createElement('input');
//     this.input.placeholder = placeholder;
//     this.input.type = type;
//     this.input.className = 'flexi-input';
//     this.injectInputStyles();
//   }

//   injectInputStyles() {
//     const styles = `
//       .flexi-input {
//         width: 100%;
//         padding: var(--input-padding, 10px);
//         margin: var(--input-margin, 10px 0);
//         font-size: var(--input-font-size, 16px);
//         color: var(--input-text-color, var(--text-color));
//         background-color: var(--input-bg-color, var(--background-color));
//         border: 2px solid var(--input-border-color, var(--primary-color));
//         border-radius: var(--input-border-radius, 5px);
//         box-shadow: var(--input-shadow, none);
//         box-sizing: border-box;
//         font-family: inherit;
//       }
//       .flexi-input::placeholder {
//         color: var(--input-placeholder-color, var(--disabled-color));
//       }
//       .flexi-input:focus {
//         border-color: var(--input-focus-border-color, var(--secondary-color));
//         outline: none;
//       }
//     `;
//     const styleSheet = document.createElement("style");
//     styleSheet.type = "text/css";
//     styleSheet.innerText = styles;
//     document.head.appendChild(styleSheet);
//   }

//   setBackgroundColor(color) {
//     this.input.style.backgroundColor = color;
//   }

//   setBorderColor(color) {
//     this.input.style.borderColor = color;
//   }

//   setBorderRadius(radius) {
//     this.input.style.borderRadius = radius;
//   }

//   setTextColor(color) {
//     this.input.style.color = color;
//   }

//   setFontSize(size) {
//     this.input.style.fontSize = size;
//   }

//   setPadding(padding) {
//     this.input.style.padding = padding;
//   }

//   setMargin(margin) {
//     this.input.style.margin = margin;
//   }

//   setPlaceholderColor(color) {
//     this.input.style.setProperty('--input-placeholder-color', color);
//   }

//   setPlaceholder(placeholder) {
//     this.input.placeholder = placeholder;
//   }

//   setFocusBorderColor(color) {
//     this.input.style.setProperty('--input-focus-border-color', color);
//   }

//   setFont(font) {
//     this.input.style.fontFamily = font;
//   }

//   setShadow(shadow) {
//     this.input.style.setProperty('--input-shadow', shadow);
//   }

//   setType(type) {
//     this.input.type = type;
//   }

//   setValue(value) {
//     this.input.value = value;
//   }

//   getValue() {
//     return this.input.value;
//   }

//   render(parent) {
//     parent.appendChild(this.input);
//   }
// }

// Updated input class
class Flexi_Input extends Flexi_Widget {
  constructor(placeholder = '', type = 'text', customStyles = {}) {
    super(customStyles);
    this.input = document.createElement('input');
    this.input.placeholder = placeholder;
    this.input.type = type;
    this.input.className = 'flexi-input';
    this.injectInputStyles();
    this.setupHoverEffect();
    this.setDefaultLightingColor();
  }

  injectInputStyles() {
    const styles = `
      .flexi-input {
        width: 100%;
        padding: var(--input-padding, 10px);
        margin: var(--input-margin, 10px 0);
        font-size: var(--input-font-size, 16px);
        color: var(--input-text-color, var(--text-color));
        background-color: var(--input-bg-color, var(--background-color));
        border: 2px solid var(--input-border-color, var(--primary-color));
        border-radius: var(--input-border-radius, 5px);
        box-shadow: var(--input-shadow, none);
        box-sizing: border-box;
        font-family: inherit;
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
      }
      .flexi-input::placeholder {
        color: var(--input-placeholder-color, var(--disabled-color));
      }
      .flexi-input:focus {
        border-color: var(--input-focus-border-color, var(--secondary-color));
        outline: none;
      }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }

  setupHoverEffect() {
    this.input.addEventListener('mouseenter', () => {
      const borderColor = getComputedStyle(this.input).getPropertyValue('--input-border-color');
      const lightingColor = getComputedStyle(this.input).getPropertyValue('--input-lighting-color');
      this.input.style.boxShadow = `0 0 10px ${lightingColor || borderColor}`;
    });

    this.input.addEventListener('mouseleave', () => {
      this.input.style.boxShadow = 'none';
    });
  }

  setDefaultLightingColor() {
    this.input.style.setProperty('--input-lighting-color', 'var(--secondary-color)');
  }

  setBackgroundColor(color) {
    this.input.style.backgroundColor = color;
  }

  setBorderColor(color) {
    this.input.style.borderColor = color;
  }

  setBorderRadius(radius) {
    this.input.style.borderRadius = radius;
  }

  setTextColor(color) {
    this.input.style.color = color;
  }

  setFontSize(size) {
    this.input.style.fontSize = size;
  }

  setPadding(padding) {
    this.input.style.padding = padding;
  }

  setMargin(margin) {
    this.input.style.margin = margin;
  }

  setPlaceholderColor(color) {
    this.input.style.setProperty('--input-placeholder-color', color);
  }

  setPlaceholder(placeholder) {
    this.input.placeholder = placeholder;
  }

  setFocusBorderColor(color) {
    this.input.style.setProperty('--input-focus-border-color', color);
  }

  setFont(font) {
    this.input.style.fontFamily = font;
  }

  setShadow(shadow) {
    this.input.style.setProperty('--input-shadow', shadow);
  }

  setLightingColor(color) {
    this.input.style.setProperty('--input-lighting-color', color);
  }

  render(parent) {
    parent.appendChild(this.input);
  }
}




// const nav = new Flexi_Navigation([
//   {label: 'Home', href: '#'},
//   {label: 'About', href: '#'},
//   {label: 'App Dev', href: '#', dropdown: [
//     {label: 'Android'}
//     ]},
//   {label: 'Home', href: '#'}
//   ])
//   nav.render(document.body)

// const inp = new Flexi_Input('email', 'email')
// inp.render(document.body)

// const pas = new Flexi_Input('password', 'password')
// pas.render(document.body)

// const rev = new Flexi_TextArea('Enter Blog')
// rev.render(document.body)

// const btn = new Flexi_Button('Submit', () => {
//   console.log("Submitted")
// })
// btn.render(document.body)


// rev.setLightingColor('var(--secondary-color)')





// Flexi Card class
class Flexi_Card extends Flexi_Widget {
  constructor(title = '', content = '', textColor = '#000', bgBlur = '5px', bgColor = 'rgba(255, 255, 255, 0.8)', width = 'auto', height = 'auto', customStyles = {}) {
    super(customStyles);
    this.card = document.createElement('div');
    this.card.className = 'flexi-card';
    this.title = title;
    this.content = content;
    this.textColor = textColor;
    this.bgBlur = bgBlur;
    this.bgColor = bgColor;
    this.width = width;
    this.height = height;
    this.createCard();
    this.addHoverEffect();
  }

  createCard() {
    this.card.innerHTML = `
      <div class="flexi-card-header">${this.title}</div>
      <div class="flexi-card-content">${this.content}</div>
    `;
    this.card.style.width = this.width;
    this.card.style.height = this.height;
    this.injectCardStyles();
  }

  injectCardStyles() {
    const styles = `
      .flexi-card {
        border: 1px solid #ddd;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        margin: 10px;
        padding: 15px;
        color: ${this.textColor};
        background-color: ${this.bgColor};
        backdrop-filter: blur(${this.bgBlur});
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .flexi-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      }
      .flexi-card-header {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .flexi-card-content {
        font-size: 16px;
      }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }

  setTitle(title) {
    this.title = title;
    this.createCard();
  }

  setContent(content) {
    this.content = content;
    this.createCard();
  }

  updateTitle(title) {
    this.card.querySelector('.flexi-card-header').innerText = title;
  }

  updateContent(content) {
    this.card.querySelector('.flexi-card-content').innerText = content;
  }

  setTextColor(color) {
    this.textColor = color;
    this.createCard();
  }

  setBgBlur(blur) {
    this.bgBlur = blur;
    this.createCard();
  }

  setBgColor(color) {
    this.bgColor = color;
    this.createCard();
  }

  setWidth(width) {
    this.width = width;
    this.card.style.width = this.width;
  }

  setHeight(height) {
    this.height = height;
    this.card.style.height = this.height;
  }

  addHoverEffect() {
    this.card.addEventListener('mouseenter', () => {
      this.card.style.transform = 'translateY(-5px)';
      this.card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
    });

    this.card.addEventListener('mouseleave', () => {
      this.card.style.transform = 'translateY(0)';
      this.card.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    });
  }

  render(parent) {
    parent.appendChild(this.card);
  }
}



// var card = new Flexi_Card('My Card', "Hellow world 2024");
// card.render(document.body)
// card.setupMoveListener()





// Flexi tabs class
class Flexi_Tab extends Flexi_Widget {
  constructor(tabs = [], customStyles = {}) {
    super(customStyles);
    this.tabs = tabs;
    this.tabContainer = document.createElement('div');
    this.tabContainer.className = 'flexi-tab-container';
    this.tabContentContainer = document.createElement('div');
    this.tabContentContainer.className = 'flexi-tab-content-container';
    this.createTabs();
    this.setupTabStyles();
  }

  createTabs() {
    this.tabs.forEach((tab, index) => {
      const tabElement = document.createElement('div');
      tabElement.className = 'flexi-tab';
      tabElement.innerText = tab.label;
      tabElement.dataset.index = index;
      tabElement.addEventListener('click', () => this.handleTabClick(index));
      this.tabContainer.appendChild(tabElement);
    });
  }

  setupTabStyles() {
    const styles = `
      .flexi-tab-container {
        display: flex;
        border-bottom: 1px solid var(--border-color);
        margin-bottom: 10px;
      }
      .flexi-tab {
        padding: 10px 20px;
        cursor: pointer;
        transition: background-color 0.3s ease, color 0.3s ease;
      }
      .flexi-tab:last-child {
        border-right: none;
      }
      .flexi-tab.active {
        background-color: var(--primary-color);
        color: var(--text-color);
        box-shadow: var(--shadow-color);
        backdrop-filter: var(--backdrop-filter);
      }
      .flexi-tab:hover:not(.active) {
        background-color: var(--hover-color);
        color: var(--text-color);
        box-shadow: var(--hover-shadow-color);
      }
      .flexi-tab-content-container {
        margin-top: 10px;
      }
      .flexi-tab-content {
        display: none;
      }
      .flexi-tab-content.active {
        display: block;
      }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }

  handleTabClick(index) {
    const activeTab = this.tabContainer.querySelector('.flexi-tab.active');
    if (activeTab) activeTab.classList.remove('active');
    const tabElement = this.tabContainer.querySelector(`.flexi-tab[data-index='${index}']`);
    tabElement.classList.add('active');
    // Handle tab click logic here
    console.log(`Tab ${index + 1} clicked!`);
    // Trigger content update
    this.updateContent(index);
  }

  updateContent(index) {
    // Remove all existing content
    this.tabContentContainer.innerHTML = '';
    // Create and show content for the selected tab
    const tabContent = document.createElement('div');
    tabContent.className = 'flexi-tab-content active';
    tabContent.innerHTML = this.tabs[index].content;
    this.tabContentContainer.appendChild(tabContent);
  }

  setContent(index, content) {
    // Update the content for the specified tab
    this.tabs[index].content = content;
    // If the tab is currently active, update its content
    const activeTab = this.tabContainer.querySelector('.flexi-tab.active');
    if (activeTab && parseInt(activeTab.dataset.index) === index) {
      this.updateContent(index);
    }
  }

  // Styling methods
  setShadowColor(color) {
    document.documentElement.style.setProperty('--shadow-color', color);
  }

  setHoverShadowColor(color) {
    document.documentElement.style.setProperty('--hover-shadow-color', color);
  }

  setBackdropFilter(blur) {
    document.documentElement.style.setProperty('--backdrop-filter', `blur(${blur}px)`);
  }

  setBorderColor(color) {
    document.documentElement.style.setProperty('--border-color', color);
  }

  setHoverColor(color) {
    document.documentElement.style.setProperty('--hover-color', color);
  }

  setPrimaryColor(color) {
    document.documentElement.style.setProperty('--primary-color', color);
  }

  setTextColor(color) {
    document.documentElement.style.setProperty('--text-color', color);
  }

  setBackgroundColor(color) {
    document.documentElement.style.setProperty('--bg-color', color);
  }

  render(parent) {
    parent.appendChild(this.tabContainer);
    parent.appendChild(this.tabContentContainer);
  }
}







// Create a Flexi_Tab instance
// Define your tabs
// const tabs = [
//   { label: 'Tab 1' },
//   { label: 'Tab 2' },
//   { label: 'Tab 3' }
// ];

// // Create a Flexi_Tab instance
// const flexiTab = new Flexi_Tab(tabs);

// // Render the Flexi_Tab instance to the body
// flexiTab.render(document.body);

// // Set content for each tab (using lorem ipsum as an example)
// flexiTab.setContent(0, loremIpsum(1));
// flexiTab.setContent(1, loremIpsum(6));
// flexiTab.setContent(2, loremIpsum(3));

// function loremIpsum(paragraphs) {
//   const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.";
//   let result = '';
//   for (let i = 0; i < paragraphs; i++) {
//     result += `<p>${lorem}</p>`;
//   }
//   return result;
// }

// first end at : 10:38 , mon jun 10 2024




// third start at sane date : 12:25pm


/*
Forgot to add third functions due to social media scrolling :(
*/



// fourth start ar : 19:16pm
// Flexi Strecher class will made a strecher 
class Flexi_Stretcher extends Flexi_Widget {
  constructor(label, content) {
    super();
    this.label = label;
    this.content = content;
    this.isExpanded = false;

    // Generate a unique ID
    this.id = `flexi-stretcher-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    this.container = document.createElement('div');
    this.container.className = 'flexi-stretcher-container';

    this.header = document.createElement('div');
    this.header.className = 'flexi-stretcher-header';

    this.icon = document.createElement('span');
    this.icon.className = 'flexi-stretcher-icon';
    this.icon.innerText = '+';

    this.labelElement = document.createElement('span');
    this.labelElement.className = 'flexi-stretcher-label';
    this.labelElement.innerText = label;

    this.header.appendChild(this.icon);
    this.header.appendChild(this.labelElement);

    this.contentElement = document.createElement('div');
    this.contentElement.className = 'flexi-stretcher-content';
    this.contentElement.innerHTML = content;
    this.contentElement.id = this.id;

    this.container.appendChild(this.header);
    this.container.appendChild(this.contentElement);

    this.header.addEventListener('click', this.toggleContent.bind(this));
  }

  toggleContent() {
    this.isExpanded = !this.isExpanded;
    this.icon.innerText = this.isExpanded ? '-' : '+';
    this.contentElement.style.maxHeight = this.isExpanded ? this.contentElement.scrollHeight + 'px' : '0';
    this.contentElement.style.padding = this.isExpanded ? '10px' : '0';
  }

  setBackgroundColor(color) {
    this.header.style.backgroundColor = color;
  }

  setColor(color) {
    this.header.style.color = color;
  }

  setShadowColor(color) {
    this.container.style.boxShadow = `0 4px 8px ${color}`;
  }

  setFont(font) {
    this.header.style.fontFamily = font;
  }

  setFontSize(size) {
    this.header.style.fontSize = size;
  }

  setMargin(margin) {
    this.container.style.margin = margin;
  }

  setPadding(padding) {
    this.header.style.padding = padding;
  }

  setContentBackgroundColor(color) {
    this.contentElement.style.backgroundColor = color;
  }

  setContentColor(color) {
    this.contentElement.style.color = color;
  }

  setContentFont(font) {
    this.contentElement.style.fontFamily = font;
  }

  setContentFontSize(size) {
    this.contentElement.style.fontSize = size;
  }

  get_root() {
    return this.contentElement.id;
  }

  render(parent) {
    parent.appendChild(this.container);
  }
  
  static injectCustomStyles() {
    const styles = `
      .flexi-stretcher-container {
        width: 100%;
        border: 1px solid var(--primary-color);
        border-radius: var(--button-border-radius);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        transition: box-shadow 0.3s ease;
      }

      .flexi-stretcher-container:hover {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
      }

      .flexi-stretcher-header {
        display: flex;
        align-items: center;
        background-color: var(--primary-color);
        color: var(--text-color);
        cursor: pointer;
        padding: 10px;
        transition: background-color 0.3s ease;
      }

      .flexi-stretcher-icon {
        margin-right: 10px;
      }

      .flexi-stretcher-label {
        flex-grow: 1;
        text-align: center;
      }

      .flexi-stretcher-content {
        max-height: 0;
        overflow: hidden;
        background-color: var(--background-color);
        color: var(--text-color);
        transition: max-height 0.3s ease, padding 0.3s ease;
      }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }
}

// Inject custom styles for Flexi_Stretcher
Flexi_Stretcher.injectCustomStyles();

// Usage example
/*//document.addEventListener('DOMContentLoaded', () => {
  const stretcher = new Flexi_Stretcher('Click to Expand', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>');
  stretcher.render(document.body);

  // Example of setting styles
  stretcher.setBackgroundColor('var(--secondary-color)');
  stretcher.setColor('var(--text-color)');
  stretcher.setShadowColor('rgba(0, 0, 0, 0.3)');
  stretcher.setFont('Arial, sans-serif');
  stretcher.setFontSize('16px');
  stretcher.setMargin('10px 0');
  stretcher.setPadding('15px');
  stretcher.setContentBackgroundColor('rgba(255, 255, 255, 0.1)');
  stretcher.setContentColor('var(--text-color)');
  stretcher.setContentFont('Verdana, sans-serif');
  stretcher.setContentFontSize('14px');

  // Example of getting the root element ID
  console.log(stretcher.get_root());










var btn = new Flexi_Button('Click me');
btn.render(document.getElementById(stretcher.get_root()))*/







// Flexi Audio class
/*class Flexi_Audio extends Flexi_Widget {
  constructor(audioSrc, thumbnailSrc) {
    super();
    this.audioSrc = audioSrc;
    this.thumbnailSrc = thumbnailSrc;
    this.isPlaying = false;

    this.audioElement = document.createElement('audio');
    this.audioElement.src = this.audioSrc;

    this.container = document.createElement('div');
    this.container.className = 'flexi-audio-container';

    this.thumbnail = document.createElement('img');
    this.thumbnail.className = 'flexi-audio-thumbnail';
    this.thumbnail.src = this.thumbnailSrc;

    this.playPauseButton = document.createElement('button');
    this.playPauseButton.className = 'flexi-audio-playpause';
    this.playPauseButton.innerText = '►';

    this.progressBar = document.createElement('div');
    this.progressBar.className = 'flexi-audio-progressbar';

    this.progress = document.createElement('div');
    this.progress.className = 'flexi-audio-progress';
    this.progressBar.appendChild(this.progress);

    this.container.appendChild(this.thumbnail);
    this.container.appendChild(this.playPauseButton);
    this.container.appendChild(this.progressBar);

    this.playPauseButton.addEventListener('click', this.togglePlayPause.bind(this));
    this.audioElement.addEventListener('timeupdate', this.updateProgress.bind(this));
  }

  togglePlayPause() {
    if (this.isPlaying) {
      this.audioElement.pause();
      this.playPauseButton.innerText = '►';
    } else {
      this.audioElement.play();
      this.playPauseButton.innerText = '❚❚';
    }
    this.isPlaying = !this.isPlaying;
  }

  updateProgress() {
    const progressPercentage = (this.audioElement.currentTime / this.audioElement.duration) * 100;
    this.progress.style.width = `${progressPercentage}%`;
  }

  setBackgroundColor(color) {
    this.container.style.backgroundColor = color;
  }

  setThumbnailBorderColor(color) {
    this.thumbnail.style.borderColor = color;
  }

  setPlayPauseButtonColor(color) {
    this.playPauseButton.style.backgroundColor = color;
  }

  setPlayPauseButtonHoverColor(color) {
    this.playPauseButton.style.setProperty('--hover-color', color);
  }

  setProgressColor(color) {
    this.progress.style.backgroundColor = color;
  }

  setProgressBarColor(color) {
    this.progressBar.style.backgroundColor = color;
  }

  setShadowColor(color) {
    this.container.style.boxShadow = `0 4px 8px ${color}`;
  }

  setFont(font) {
    this.container.style.fontFamily = font;
  }

  setFontSize(size) {
    this.container.style.fontSize = size;
  }

  setMargin(margin) {
    this.container.style.margin = margin;
  }

  setPadding(padding) {
    this.container.style.padding = padding;
  }

  render(parent) {
    parent.appendChild(this.container);
    parent.appendChild(this.audioElement);
  }

  static injectCustomStyles() {
    const styles = `
      .flexi-audio-container {
        display: flex;
        align-items: center;
        background-color: var(--background-color);
        color: var(--text-color);
        padding: 10px;
        border-radius: var(--button-border-radius);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease;
      }

      .flexi-audio-container:hover {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
      }

      .flexi-audio-thumbnail {
        width: 50px;
        height: 50px;
        border-radius: var(--button-border-radius);
        border: 2px solid var(--primary-color);
        margin-right: 10px;
        transition: border-color 0.3s ease;
      }

      .flexi-audio-playpause {
        background-color: var(--primary-color);
        color: var(--text-color);
        border: none;
        padding: 10px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 20px;
        margin-right: 10px;
        transition: background-color 0.3s ease;
        position: relative;
        overflow: hidden;
      }

      .flexi-audio-playpause:hover {
        background-color: var(--hover-color);
      }

      .flexi-audio-playpause::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        background: var(--ripple-color);
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
        border-radius: 50%;
        pointer-events: none;
      }

      .flexi-audio-playpause:active::after {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
        transition: transform 0.3s, opacity 0.3s;
      }

      .flexi-audio-progressbar {
        flex-grow: 1;
        height: 5px;
        background-color: var(--disabled-color);
        border-radius: var(--button-border-radius);
        overflow: hidden;
        margin-right: 10px;
      }

      .flexi-audio-progress {
        height: 100%;
        width: 0;
        background-color: var(--secondary-color);
        transition: width 0.3s ease;
      }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }
}

// Inject custom styles for Flexi_Audio
Flexi_Audio.injectCustomStyles();

// Usage example
document.addEventListener('DOMContentLoaded', () => {
  const audio = new Flexi_Audio('audio/t1.mp3', 'https://example.com/thumbnail.jpg');
  audio.render(document.body);*/

  // Example of setting styles
/*  audio.setBackgroundColor('var(--background-color)');
  audio.setThumbnailBorderColor('var(--secondary-color)');
  audio.setPlayPauseButtonColor('var(--primary-color)');
  audio.setPlayPauseButtonHoverColor('var(--hover-color)');
  audio.setProgressColor('var(--accent-color)');
  audio.setProgressBarColor('var(--disabled-color)');
  audio.setShadowColor('rgba(0, 0, 0, 0.3)');
  audio.setFont('Arial, sans-serif');
  audio.setFontSize('16px');
  audio.setMargin('10px 0');
  audio.setPadding('15px');*/
//});*/


//Updated audio player 
/*class Flexi_Audio extends Flexi_Widget {
  constructor(audioSrc, thumbnailSrc) {
    super();
    this.audioSrc = audioSrc;
    this.thumbnailSrc = thumbnailSrc;
    this.isPlaying = false;

    this.audioElement = document.createElement('audio');
    this.audioElement.src = this.audioSrc;

    this.container = document.createElement('div');
    this.container.className = 'flexi-audio-container';

    this.thumbnail = document.createElement('img');
    this.thumbnail.className = 'flexi-audio-thumbnail';
    this.thumbnail.src = this.thumbnailSrc;

    this.playPauseButton = document.createElement('button');
    this.playPauseButton.className = 'flexi-audio-playpause';
    this.playPauseButton.innerText = '►';

    this.progressBar = document.createElement('div');
    this.progressBar.className = 'flexi-audio-progressbar';

    this.progress = document.createElement('div');
    this.progress.className = 'flexi-audio-progress';
    this.progressBar.appendChild(this.progress);

    this.speedControl = document.createElement('select');
    this.speedControl.className = 'flexi-audio-speed';
    [0.5, 1, 1.5, 2].forEach(speed => {
      const option = document.createElement('option');
      option.value = speed;
      option.innerText = `${speed}x`;
      this.speedControl.appendChild(option);
    });

    this.pitchControl = document.createElement('select');
    this.pitchControl.className = 'flexi-audio-pitch';
    [0.5, 1, 1.5, 2].forEach(pitch => {
      const option = document.createElement('option');
      option.value = pitch;
      option.innerText = `${pitch}x Pitch`;
      this.pitchControl.appendChild(option);
    });

    this.volumeControl = document.createElement('select');
    this.volumeControl.className = 'flexi-audio-volume';
    [1, 2, 3, 4, 5, 6, 7].forEach(volume => {
      const option = document.createElement('option');
      option.value = volume;
      option.innerText = `${volume * 100}% Volume`;
      this.volumeControl.appendChild(option);
    });

    this.container.appendChild(this.thumbnail);
    this.container.appendChild(this.playPauseButton);
    this.container.appendChild(this.progressBar);
    this.container.appendChild(this.speedControl);
    this.container.appendChild(this.pitchControl);
    this.container.appendChild(this.volumeControl);

    this.playPauseButton.addEventListener('click', this.togglePlayPause.bind(this));
    this.audioElement.addEventListener('timeupdate', this.updateProgress.bind(this));
    this.progressBar.addEventListener('click', this.seek.bind(this));
    this.speedControl.addEventListener('change', this.updateSpeed.bind(this));
    this.pitchControl.addEventListener('change', this.updatePitch.bind(this));
    this.volumeControl.addEventListener('change', this.updateVolume.bind(this));
  }

  togglePlayPause() {
    if (this.isPlaying) {
      this.audioElement.pause();
      this.playPauseButton.innerText = '►';
    } else {
      this.audioElement.play();
      this.playPauseButton.innerText = '❚❚';
    }
    this.isPlaying = !this.isPlaying;
  }

  updateProgress() {
    const progressPercentage = (this.audioElement.currentTime / this.audioElement.duration) * 100;
    this.progress.style.width = `${progressPercentage}%`;
  }

  seek(event) {
    const rect = this.progressBar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickRatio = clickX / rect.width;
    this.audioElement.currentTime = clickRatio * this.audioElement.duration;
  }

  updateSpeed() {
    this.audioElement.playbackRate = this.speedControl.value;
  }

  updatePitch() {
    this.audioElement.playbackRate = this.pitchControl.value;
  }

  updateVolume() {
    this.audioElement.volume = this.volumeControl.value;
  }

  setBackgroundColor(color) {
    this.container.style.backgroundColor = color;
  }

  setThumbnailBorderColor(color) {
    this.thumbnail.style.borderColor = color;
  }

  setPlayPauseButtonColor(color) {
    this.playPauseButton.style.backgroundColor = color;
  }

  setPlayPauseButtonHoverColor(color) {
    this.playPauseButton.style.setProperty('--hover-color', color);
  }

  setProgressColor(color) {
    this.progress.style.backgroundColor = color;
  }

  setProgressBarColor(color) {
    this.progressBar.style.backgroundColor = color;
  }

  setShadowColor(color) {
    this.container.style.boxShadow = `0 4px 8px ${color}`;
  }

  setFont(font) {
    this.container.style.fontFamily = font;
  }

  setFontSize(size) {
    this.container.style.fontSize = size;
  }

  setMargin(margin) {
    this.container.style.margin = margin;
  }

  setPadding(padding) {
    this.container.style.padding = padding;
  }

  render(parent) {
    parent.appendChild(this.container);
    parent.appendChild(this.audioElement);
  }

  static injectCustomStyles() {
    const styles = `
      .flexi-audio-container {
        display: flex;
        align-items: center;
        background-color: var(--background-color);
        color: var(--text-color);
        padding: 10px;
        border-radius: var(--button-border-radius);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease;
      }

      .flexi-audio-container:hover {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
      }

      .flexi-audio-thumbnail {
        width: 50px;
        height: 50px;
        border-radius: var(--button-border-radius);
        border: 2px solid var(--primary-color);
        margin-right: 10px;
        transition: border-color 0.3s ease;
      }

      .flexi-audio-playpause {
        background-color: var(--primary-color);
        color: var(--text-color);
        border: none;
        padding: 10px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 20px;
        margin-right: 10px;
        transition: background-color 0.3s ease;
        position: relative;
        overflow: hidden;
      }

      .flexi-audio-playpause:hover {
        background-color: var(--hover-color);
      }

      .flexi-audio-playpause::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        background: var(--ripple-color);
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
        border-radius: 50%;
        pointer-events: none;
      }

      .flexi-audio-playpause:active::after {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
        transition: transform 0.3s, opacity 0.3s;
      }

      .flexi-audio-progressbar {
        flex-grow: 1;
        height: 5px;
        background-color: var(--disabled-color);
        border-radius: var(--button-border-radius);
        overflow: hidden;
        margin-right: 10px;
        cursor: pointer;
      }

      .flexi-audio-progress {
        height: 100%;
        width: 0;
        background-color: var(--secondary-color);
        transition: width 0.3s ease;
      }

      .flexi-audio-speed,
      .flexi-audio-pitch,
      .flexi-audio-volume {
        margin: 0 5px;
        padding: 5px;
        border-radius: var(--button-border-radius);
        border: 1px solid var(--secondary-color);
        background-color: var(--background-color);
        color: var(--text-color);
        font-family: inherit;
        font-size: 14px;
      }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }
}

// Inject custom styles for Flexi_Audio
Flexi_Audio.injectCustomStyles();

// Usage example
document.addEventListener('DOMContentLoaded', () => {
  const audio = new Flexi_Audio('audio/t1.mp3', 'https://example.com/thumbnail.jpg');
  audio.render(document.body);

  // Example of setting styles
  audio.setBackgroundColor('var(--background-color)');
  audio.setThumbnailBorderColor('var(--secondary-color)');
  audio.setPlayPauseButtonColor('var(--primary-color)');
  audio.setPlayPauseButtonHoverColor('var(--hover-color)');
  audio.setProgressColor('var(--accent-color)');
  audio.setProgressBarColor('var(--disabled-color)');
  audio.setShadowColor('rgba(0, 0, 0, 0.3)');
  audio.setFont('Arial, sans-serif');
  audio.setFontSize('16px');
  audio.setMargin('10px 0');
  audio.setPadding('15px');
});*/


// Re updated the audio player 
class Flexi_Audio extends Flexi_Widget {
  constructor(audioSrc, thumbnailSrc) {
    super();
    this.audioSrc = audioSrc;
    this.thumbnailSrc = thumbnailSrc;
    this.isPlaying = false;

    this.audioElement = document.createElement('audio');
    this.audioElement.src = this.audioSrc;

    this.container = document.createElement('div');
    this.container.className = 'flexi-audio-container';

    this.thumbnail = document.createElement('img');
    this.thumbnail.className = 'flexi-audio-thumbnail';
    this.thumbnail.src = this.thumbnailSrc;

    this.playPauseButton = document.createElement('button');
    this.playPauseButton.className = 'flexi-audio-playpause';
    this.playPauseButton.innerText = '►';

    this.progressBar = document.createElement('div');
    this.progressBar.className = 'flexi-audio-progressbar';

    this.progress = document.createElement('div');
    this.progress.className = 'flexi-audio-progress';
    this.progressBar.appendChild(this.progress);

    this.speedControl = document.createElement('select');
    this.speedControl.className = 'flexi-audio-speed';
    [0.5, 1, 1.5, 2].forEach(speed => {
      const option = document.createElement('option');
      option.value = speed;
      option.innerText = `${speed}x`;
      this.speedControl.appendChild(option);
    });

    this.pitchControl = document.createElement('select');
    this.pitchControl.className = 'flexi-audio-pitch';
    [0.5, 1, 1.5, 2].forEach(pitch => {
      const option = document.createElement('option');
      option.value = pitch;
      option.innerText = `${pitch}x Pitch`;
      this.pitchControl.appendChild(option);
    });

    this.volumeControl = document.createElement('select');
    this.volumeControl.className = 'flexi-audio-volume';
    [1, 2, 3, 4, 5, 6, 7].forEach(volume => {
      const option = document.createElement('option');
      option.value = volume;
      option.innerText = `${volume * 100}% Volume`;
      this.volumeControl.appendChild(option);
    });

    this.container.appendChild(this.thumbnail);
    this.container.appendChild(this.playPauseButton);
    this.container.appendChild(this.progressBar);
    this.container.appendChild(this.speedControl);
    this.container.appendChild(this.pitchControl);
    this.container.appendChild(this.volumeControl);

    this.playPauseButton.addEventListener('click', this.togglePlayPause.bind(this));
    this.audioElement.addEventListener('timeupdate', this.updateProgress.bind(this));
    this.progressBar.addEventListener('click', this.seek.bind(this));
    this.speedControl.addEventListener('change', this.updateSpeed.bind(this));
    this.pitchControl.addEventListener('change', this.updatePitch.bind(this));
    this.volumeControl.addEventListener('change', this.updateVolume.bind(this));
  }

  togglePlayPause() {
    if (this.isPlaying) {
      this.audioElement.pause();
      this.playPauseButton.innerText = '►';
    } else {
      this.audioElement.play();
      this.playPauseButton.innerText = '❚❚';
    }
    this.isPlaying = !this.isPlaying;
  }

  updateProgress() {
    const progressPercentage = (this.audioElement.currentTime / this.audioElement.duration) * 100;
    this.progress.style.width = `${progressPercentage}%`;
  }

  seek(event) {
    const rect = this.progressBar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickRatio = clickX / rect.width;
    this.audioElement.currentTime = clickRatio * this.audioElement.duration;
  }

  updateSpeed() {
    this.audioElement.playbackRate = this.speedControl.value;
  }

  updatePitch() {
    this.audioElement.playbackRate = this.pitchControl.value;
  }

  updateVolume() {
    this.audioElement.volume = this.volumeControl.value;
  }

  setBackgroundColor(color) {
    this.container.style.backgroundColor = color;
  }

  setThumbnailBorderColor(color) {
    this.thumbnail.style.borderColor = color;
  }

  setPlayPauseButtonColor(color) {
    this.playPauseButton.style.backgroundColor = color;
  }

  setPlayPauseButtonHoverColor(color) {
    this.playPauseButton.style.setProperty('--hover-color', color);
  }

  setProgressColor(color) {
    this.progress.style.backgroundColor = color;
  }

  setProgressBarColor(color) {
    this.progressBar.style.backgroundColor = color;
  }

  setShadowColor(color) {
    this.container.style.boxShadow = `0 4px 8px ${color}`;
  }

  setFont(font) {
    this.container.style.fontFamily = font;
  }

  setFontSize(size) {
    this.container.style.fontSize = size;
  }

  setMargin(margin) {
    this.container.style.margin = margin;
  }

  setPadding(padding) {
    this.container.style.padding = padding;
  }

  render(parent) {
    parent.appendChild(this.container);
    parent.appendChild(this.audioElement);
  }

  static injectCustomStyles() {
    const styles = `
      .flexi-audio-container {
        display: flex;
        align-items: center;
        background-color: var(--background-color);
        color: var(--text-color);
        padding: 10px;
        border-radius: var(--button-border-radius);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease;
      }

      @media (max-width: 400px) {
        .flexi-audio-container {
          flex-direction: column;
          align-items: flex-start;
        }
        .flexi-audio-thumbnail {
          width: 100%;
          height: auto;
          margin-bottom: 10px;
        }
        .flexi-audio-playpause {
          margin-bottom: 10px;
        }
        .flexi-audio-progressbar {
          width: 100%;
          margin-bottom: 10px;
        }
        .flexi-audio-speed,
        .flexi-audio-pitch,
        .flexi-audio-volume {
          width: 100%;
          margin-bottom: 5px;
        }
      }

      .flexi-audio-container:hover {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
      }

      .flexi-audio-thumbnail {
        width: 50px;
        height: 50px;
        border-radius: var(--button-border-radius);
        border: 2px solid var(--primary-color);
        margin-right: 10px;
        transition: border-color 0.3s ease;
      }

      .flexi-audio-playpause {
        background-color: var(--primary-color);
        color: var(--text-color);
        border: none;
        padding: 10px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 20px;
        margin-right: 10px;
        transition: background-color 0.3s ease;
        position: relative;
        overflow: hidden;
      }

      .flexi-audio-playpause:hover {
        background-color: var(--hover-color);
      }

      .flexi-audio-playpause::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        background: var(--ripple-color);
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
        border-radius: 50%;
        pointer-events: none;
      }

      .flexi-audio-playpause:active::after {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
        transition: transform 0.3s, opacity 0.3s;
      }

      .flexi-audio-progressbar {
        flex-grow: 1;
        height: 5px;
        background-color: var(--disabled-color);
        border-radius: var(--button-border-radius);
        overflow: hidden;
        margin-right: 10px;
        cursor: pointer;
      }

      .flexi-audio-progress {
        height: 100%;
        width: 0;
        background-color: var(--secondary-color);
        transition: width 0.3s ease;
      }

      .flexi-audio-speed,
      .flexi-audio-pitch,
      .flexi-audio-volume {
        margin: 0 5px;
        padding: 5px;
        border-radius: var(--button-border-radius);
        border: 1px solid var(--secondary-color);
        background-color: var(--background-color);
        color: var(--text-color);
        font-family: inherit;
        font-size: 14px;
      }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }
}

// Inject custom styles for Flexi_Audio
Flexi_Audio.injectCustomStyles();

// Usage example
/*document.addEventListener('DOMContentLoaded', () => {
  const audio = new Flexi_Audio('audio/t1.mp3', 'https://example.com/thumbnail.jpg');
  audio.render(document.body);

  // Example of setting styles
  audio.setBackgroundColor('var(--background-color)');
  audio.setThumbnailBorderColor('var(--secondary-color)');
  audio.setPlayPauseButtonColor('var(--primary-color)');
  audio.setPlayPauseButtonHoverColor('var(--hover-color)');
  audio.setProgressColor('var(--accent-color)');
  audio.setProgressBarColor('var(--disabled-color)');
  audio.setShadowColor('rgba(0, 0, 0, 0.3)');
  audio.setFont('Arial, sans-serif');
  audio.setFontSize('16px');
  audio.setMargin('10px 0');
  audio.setPadding('15px');
});*/




// Flexi Video class
/*class Flexi_Video extends Flexi_Widget {
  constructor(videoSrc, thumbnailSrc) {
    super();
    this.videoSrc = videoSrc;
    this.thumbnailSrc = thumbnailSrc;
    this.isPlaying = false;

    this.videoElement = document.createElement('video');
    this.videoElement.src = this.videoSrc;
    this.videoElement.poster = this.thumbnailSrc;
    this.videoElement.controls = false;

    this.container = document.createElement('div');
    this.container.className = 'flexi-video-container';

    this.playPauseButton = document.createElement('button');
    this.playPauseButton.className = 'flexi-video-playpause';
    this.playPauseButton.innerText = '►';

    this.progressBar = document.createElement('div');
    this.progressBar.className = 'flexi-video-progressbar';

    this.progress = document.createElement('div');
    this.progress.className = 'flexi-video-progress';
    this.progressBar.appendChild(this.progress);

    this.speedControl = document.createElement('select');
    this.speedControl.className = 'flexi-video-speed';
    [0.5, 1, 1.5, 2].forEach(speed => {
      const option = document.createElement('option');
      option.value = speed;
      option.innerText = `${speed}x`;
      this.speedControl.appendChild(option);
    });

    this.volumeControl = document.createElement('select');
    this.volumeControl.className = 'flexi-video-volume';
    [0.5, 1, 1.5, 2].forEach(volume => {
      const option = document.createElement('option');
      option.value = volume;
      option.innerText = `${volume * 100}% Volume`;
      this.volumeControl.appendChild(option);
    });

    this.container.appendChild(this.videoElement);
    this.container.appendChild(this.playPauseButton);
    this.container.appendChild(this.progressBar);
    this.container.appendChild(this.speedControl);
    this.container.appendChild(this.volumeControl);

    this.playPauseButton.addEventListener('click', this.togglePlayPause.bind(this));
    this.videoElement.addEventListener('timeupdate', this.updateProgress.bind(this));
    this.progressBar.addEventListener('click', this.seek.bind(this));
    this.speedControl.addEventListener('change', this.updateSpeed.bind(this));
    this.volumeControl.addEventListener('change', this.updateVolume.bind(this));
  }

  togglePlayPause() {
    if (this.isPlaying) {
      this.videoElement.pause();
      this.playPauseButton.innerText = '►';
    } else {
      this.videoElement.play();
      this.playPauseButton.innerText = '❚❚';
    }
    this.isPlaying = !this.isPlaying;
  }

  updateProgress() {
    const progressPercentage = (this.videoElement.currentTime / this.videoElement.duration) * 100;
    this.progress.style.width = `${progressPercentage}%`;
  }

  seek(event) {
    const rect = this.progressBar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickRatio = clickX / rect.width;
    this.videoElement.currentTime = clickRatio * this.videoElement.duration;
  }

  updateSpeed() {
    this.videoElement.playbackRate = this.speedControl.value;
  }

  updateVolume() {
    this.videoElement.volume = this.volumeControl.value;
  }

  setBackgroundColor(color) {
    this.container.style.backgroundColor = color;
  }

  setPlayPauseButtonColor(color) {
    this.playPauseButton.style.backgroundColor = color;
  }

  setPlayPauseButtonHoverColor(color) {
    this.playPauseButton.style.setProperty('--hover-color', color);
  }

  setProgressColor(color) {
    this.progress.style.backgroundColor = color;
  }

  setProgressBarColor(color) {
    this.progressBar.style.backgroundColor = color;
  }

  setShadowColor(color) {
    this.container.style.boxShadow = `0 4px 8px ${color}`;
  }

  setFont(font) {
    this.container.style.fontFamily = font;
  }

  setFontSize(size) {
    this.container.style.fontSize = size;
  }

  setMargin(margin) {
    this.container.style.margin = margin;
  }

  setPadding(padding) {
    this.container.style.padding = padding;
  }

  render(parent) {
    parent.appendChild(this.container);
  }

  static injectCustomStyles() {
    const styles = `
      .flexi-video-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--background-color);
        color: var(--text-color);
        padding: 10px;
        border-radius: var(--button-border-radius);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease;
        position: relative;
        width: 100%;
        max-width: 600px;
      }

      @media (max-width: 400px) {
        .flexi-video-container {
          padding: 5px;
        }
        .flexi-video-playpause {
          width: 100%;
          margin-bottom: 10px;
        }
        .flexi-video-progressbar {
          width: 100%;
          margin-bottom: 10px;
        }
        .flexi-video-speed,
        .flexi-video-volume {
          width: 100%;
          margin-bottom: 5px;
        }
      }

      .flexi-video-container:hover {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
      }

      .flexi-video-playpause {
        background-color: var(--primary-color);
        color: var(--text-color);
        border: none;
        padding: 10px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 20px;
        margin-top: 10px;
        transition: background-color 0.3s ease;
        position: relative;
        overflow: hidden;
      }

      .flexi-video-playpause:hover {
        background-color: var(--hover-color);
      }

      .flexi-video-playpause::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        background: var(--ripple-color);
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
        border-radius: 50%;
        pointer-events: none;
      }

      .flexi-video-playpause:active::after {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
        transition: transform 0.3s, opacity 0.3s;
      }

      .flexi-video-progressbar {
        flex-grow: 1;
        height: 5px;
        background-color: var(--disabled-color);
        border-radius: var(--button-border-radius);
        overflow: hidden;
        margin-top: 10px;
        cursor: pointer;
      }

      .flexi-video-progress {
        height: 100%;
        width: 0;
        background-color: var(--secondary-color);
        transition: width 0.3s ease;
      }

      .flexi-video-speed,
      .flexi-video-volume {
        margin: 0 5px;
        padding: 5px;
        border-radius: var(--button-border-radius);
        border: 1px solid var(--secondary-color);
        background-color: var(--background-color);
        color: var(--text-color);
        font-family: inherit;
        font-size: 14px;
        margin-top: 10px;
      }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }
}

// Inject custom styles for Flexi_Video
Flexi_Video.injectCustomStyles();

// Usage example
document.addEventListener('DOMContentLoaded', () => {
  const video = new Flexi_Video('video/t1.mp4', 'img/t1.jpg');
  video.render(document.body);

  // Example of setting styles
  video.setBackgroundColor('var(--background-color)');
  video.setPlayPauseButtonColor('var(--primary-color)');
  video.setPlayPauseButtonHoverColor('var(--hover-color)');
  video.setProgressColor('var(--accent-color)');
  video.setProgressBarColor('var(--disabled-color)');
  video.setShadowColor('rgba(0, 0, 0, 0.3)');
  video.setFont('Arial, sans-serif');
  video.setFontSize('16px');
  video.setMargin('10px 0');
  video.setPadding('15px');
});*/


// Updated the video player

class Flexi_Video extends Flexi_Widget {
  constructor(videoSrc, thumbnailSrc) {
    super();
    this.videoSrc = videoSrc;
    this.thumbnailSrc = thumbnailSrc;
    this.isPlaying = false;

    this.videoElement = document.createElement('video');
    this.videoElement.src = this.videoSrc;
    this.videoElement.poster = this.thumbnailSrc;
    this.videoElement.controls = false;

    this.container = document.createElement('div');
    this.container.className = 'flexi-video-container';

    this.playPauseButton = document.createElement('button');
    this.playPauseButton.className = 'flexi-video-playpause';
    this.playPauseButton.innerText = '►';

    this.progressBar = document.createElement('div');
    this.progressBar.className = 'flexi-video-progressbar';

    this.progress = document.createElement('div');
    this.progress.className = 'flexi-video-progress';
    this.progressBar.appendChild(this.progress);

    this.speedControl = document.createElement('select');
    this.speedControl.className = 'flexi-video-speed';
    [0.5, 1, 1.5, 2].forEach(speed => {
      const option = document.createElement('option');
      option.value = speed;
      option.innerText = `${speed}x`;
      this.speedControl.appendChild(option);
    });

    this.volumeControl = document.createElement('select');
    this.volumeControl.className = 'flexi-video-volume';
    [0.5, 1, 1.5, 2].forEach(volume => {
      const option = document.createElement('option');
      option.value = volume;
      option.innerText = `${volume * 100}% Volume`;
      this.volumeControl.appendChild(option);
    });

    this.container.appendChild(this.videoElement);
    this.container.appendChild(this.playPauseButton);
    this.container.appendChild(this.progressBar);
    this.container.appendChild(this.speedControl);
    this.container.appendChild(this.volumeControl);

    this.playPauseButton.addEventListener('click', this.togglePlayPause.bind(this));
    this.videoElement.addEventListener('timeupdate', this.updateProgress.bind(this));
    this.progressBar.addEventListener('click', this.seek.bind(this));
    this.speedControl.addEventListener('change', this.updateSpeed.bind(this));
    this.volumeControl.addEventListener('change', this.updateVolume.bind(this));
  }

  togglePlayPause() {
    if (this.isPlaying) {
      this.videoElement.pause();
      this.playPauseButton.innerText = '►';
    } else {
      this.videoElement.play();
      this.playPauseButton.innerText = '❚❚';
    }
    this.isPlaying = !this.isPlaying;
  }

  updateProgress() {
    const progressPercentage = (this.videoElement.currentTime / this.videoElement.duration) * 100;
    this.progress.style.width = `${progressPercentage}%`;
  }

  seek(event) {
    const rect = this.progressBar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickRatio = clickX / rect.width;
    this.videoElement.currentTime = clickRatio * this.videoElement.duration;
  }

  updateSpeed() {
    this.videoElement.playbackRate = this.speedControl.value;
  }

  updateVolume() {
    this.videoElement.volume = this.volumeControl.value;
  }

  setBackgroundColor(color) {
    this.container.style.backgroundColor = color;
  }

  setPlayPauseButtonColor(color) {
    this.playPauseButton.style.backgroundColor = color;
  }

  setPlayPauseButtonHoverColor(color) {
    this.playPauseButton.style.setProperty('--hover-color', color);
  }

  setProgressColor(color) {
    this.progress.style.backgroundColor = color;
  }

  setProgressBarColor(color) {
    this.progressBar.style.backgroundColor = color;
  }

  setShadowColor(color) {
    this.container.style.boxShadow = `0 4px 8px ${color}`;
  }

  setFont(font) {
    this.container.style.fontFamily = font;
  }

  setFontSize(size) {
    this.container.style.fontSize = size;
  }

  setMargin(margin) {
    this.container.style.margin = margin;
  }

  setPadding(padding) {
    this.container.style.padding = padding;
  }

  render(parent) {
    parent.appendChild(this.container);
  }

  static injectCustomStyles() {
    const styles = `
      .flexi-video-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--background-color);
        color: var(--text-color);
        padding: 10px;
        border-radius: var(--button-border-radius);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease;
        position: relative;
        width: 100%;
        max-width: 600px;
        overflow: hidden; /* Ensure video thumbnail doesn't overflow container */
      }

      @media (max-width: 400px) {
        .flexi-video-container {
          padding: 5px;
        }
        .flexi-video-playpause {
          width: 100%;
          margin-bottom: 10px;
        }
        .flexi-video-progressbar {
          width: 100%;
          margin-bottom: 10px;
        }
        .flexi-video-speed,
        .flexi-video-volume {
          width: 100%;
          margin-bottom: 5px;
        }
      }

      .flexi-video-container:hover {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
      }

      .flexi-video-playpause {
        background-color: var(--primary-color);
        color: var(--text-color);
        border: none;
        padding: 10px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 20px;
        margin-top: 10px;
        transition: background-color 0.3s ease;
        position: relative;
        overflow: hidden;
      }

      .flexi-video-playpause:hover {
        background-color: var(--hover-color);
      }

      .flexi-video-playpause::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        background: var(--ripple-color);
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
        border-radius: 50%;
        pointer-events: none;
      }

      .flexi-video-playpause:active::after {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
        transition: transform 0.3s, opacity 0.3s;
      }

      .flexi-video-progressbar {
        flex-grow: 1;
        height: 5px;
        background-color: var(--disabled-color);
        border-radius: var(--button-border-radius);
        overflow: hidden;
        margin-top: 10px;
        cursor: pointer;
      }

      .flexi-video-progress {
        height: 100%;
        width: 0;
        background-color: var(--secondary-color);
        transition: width 0.3s ease;
      }

      .flexi-video-speed,
      .flexi-video-volume {
        margin: 0 5px;
        padding: 5px;
        border-radius: var(--button-border-radius);
        border: 1px solid var(--secondary-color);
        background-color: var(--background-color);
        color: var(--text-color);
        font-family: inherit;
        font-size: 14px;
        margin-top: 10px;
      }

      /* Ensure thumbnail and video fit within container */
      .flexi-video-container video, .flexi-video-container img {
        max-width: 100%;
        height: auto;
      }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }
}

// Inject custom styles for Flexi_Video
Flexi_Video.injectCustomStyles();

// Usage example
/*document.addEventListener('DOMContentLoaded', () => {
  const video = new Flexi_Video('video/t1.mp4', 'img/t1.jpg');
  video.render(document.body);

  // Example of setting styles
  video.setBackgroundColor('var(--background-color)');
  video.setPlayPauseButtonColor('var(--primary-color)');
  video.setPlayPauseButtonHoverColor('var(--hover-color)');
  video.setProgressColor('var(--accent-color)');
  video.setProgressBarColor('var(--disabled-color)');
  video.setShadowColor('rgba(0, 0, 0, 0.3)');
  video.setFont('Arial, sans-serif');
  video.setFontSize('16px');
  video.setMargin('10px 0');
  video.setPadding('15px');
});*/

/*class Flexi_Video extends Flexi_Widget {
  constructor(videoSrc, thumbnailSrc) {
    super();
    this.videoSrc = videoSrc;
    this.thumbnailSrc = thumbnailSrc;
    this.isPlaying = false;

    this.videoElement = document.createElement('video');
    this.videoElement.src = this.videoSrc;
    this.videoElement.poster = this.thumbnailSrc;
    this.videoElement.controls = false;

    this.container = document.createElement('div');
    this.container.className = 'flexi-video-container';

    this.playPauseButton = document.createElement('button');
    this.playPauseButton.className = 'flexi-video-playpause';
    this.playPauseButton.innerText = '►';

    this.progressBar = document.createElement('div');
    this.progressBar.className = 'flexi-video-progressbar';

    this.progress = document.createElement('div');
    this.progress.className = 'flexi-video-progress';
    this.progressBar.appendChild(this.progress);

    this.fullScreenButton = document.createElement('button');
    this.fullScreenButton.className = 'flexi-video-fullscreen';
    this.fullScreenButton.innerText = '⤢';

    this.container.appendChild(this.videoElement);
    this.container.appendChild(this.playPauseButton);
    this.container.appendChild(this.progressBar);
    this.container.appendChild(this.fullScreenButton);

    this.playPauseButton.addEventListener('click', this.togglePlayPause.bind(this));
    this.videoElement.addEventListener('timeupdate', this.updateProgress.bind(this));
    this.progressBar.addEventListener('click', this.seek.bind(this));
    this.fullScreenButton.addEventListener('click', this.toggleFullScreen.bind(this));
    this.videoElement.addEventListener('ended', this.showThumbnail.bind(this));
  }

  togglePlayPause() {
    if (this.isPlaying) {
      this.videoElement.pause();
      this.playPauseButton.innerText = '►';
    } else {
      this.videoElement.play();
      this.playPauseButton.innerText = '❚❚';
    }
    this.isPlaying = !this.isPlaying;
  }

  updateProgress() {
    const progressPercentage = (this.videoElement.currentTime / this.videoElement.duration) * 100;
    this.progress.style.width = `${progressPercentage}%`;
  }

  seek(event) {
    const rect = this.progressBar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickRatio = clickX / rect.width;
    this.videoElement.currentTime = clickRatio * this.videoElement.duration;
  }

  toggleFullScreen() {
    if (!document.fullscreenElement) {
      this.container.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  }

  showThumbnail() {
    this.videoElement.poster = this.thumbnailSrc;
  }

  render(parent) {
    parent.appendChild(this.container);
  }

  static injectCustomStyles() {
    const styles = `
      .flexi-video-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--background-color);
        color: var(--text-color);
        padding: 10px;
        border-radius: var(--button-border-radius);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease;
        position: relative;
        width: 100%;
        max-width: 600px;
        overflow: hidden; /* Ensure video thumbnail doesn't overflow container */
     /* }

      @media (max-width: 400px) {
        .flexi-video-container {
          padding: 5px;
        }
        .flexi-video-playpause {
          width: 100%;
          margin-bottom: 10px;
        }
        .flexi-video-progressbar {
          width: 100%;
          margin-bottom: 10px;
        }
        .flexi-video-speed,
        .flexi-video-volume {
          width: 100%;
          margin-bottom: 5px;
        }
      }

      .flexi-video-container:hover {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
      }

      .flexi-video-playpause {
        background-color: var(--primary-color);
        color: var(--text-color);
        border: none;
        padding: 10px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 20px;
        margin-top: 10px;
        transition: background-color 0.3s ease;
        position: relative;
        overflow: hidden;
      }

      .flexi-video-playpause:hover {
        background-color: var(--hover-color);
      }

      .flexi-video-playpause::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        background: var(--ripple-color);
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
        border-radius: 50%;
        pointer-events: none;
      }

      .flexi-video-playpause:active::after {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
        transition: transform 0.3s, opacity 0.3s;
      }

      .flexi-video-progressbar {
        flex-grow: 1;
        height: 5px;
        background-color: var(--disabled-color);
        border-radius: var(--button-border-radius);
        overflow: hidden;
        margin-top: 10px;
        cursor: pointer;
      }

      .flexi-video-progress {
        height: 100%;
        width: 0;
        background-color: var(--secondary-color);
        transition: width 0.3s ease;
      }

      .flexi-video-speed,
      .flexi-video-volume {
        margin: 0 5px;
        padding: 5px;
        border-radius: var(--button-border-radius);
        border: 1px solid var(--secondary-color);
        background-color: var(--background-color);
        color: var(--text-color);
        font-family: inherit;
        font-size: 14px;
        margin-top: 10px;
      }

      /* Ensure thumbnail and video fit within container */
     /* .flexi-video-container video, .flexi-video-container img {
        max-width: 100%;
        height: auto;
      }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }
}

// Inject custom styles for Flexi_Video
Flexi_Video.injectCustomStyles();

// Usage example
document.addEventListener('DOMContentLoaded', () => {
  const video = new Flexi_Video('video/t1.mp4', 'img/t1.jpg');
  video.render(document.body);
});*/ //Update failed with bugs





// Flexi Moveable checkbox class
/*class Flexi_Moveable_CheckBox extends Flexi_Widget {
  constructor(initialState = false) {
    super();
    this.state = initialState;

    this.container = document.createElement('div');
    this.container.className = 'flexi-moveable-checkbox';

    this.checkbox = document.createElement('input');
    this.checkbox.type = 'checkbox';
    this.checkbox.checked = this.state;

    this.slider = document.createElement('div');
    this.slider.className = 'flexi-moveable-checkbox-slider';

    this.dot = document.createElement('div');
    this.dot.className = 'flexi-moveable-checkbox-dot';

    this.slider.appendChild(this.dot);
    this.container.appendChild(this.checkbox);
    this.container.appendChild(this.slider);

    this.checkbox.addEventListener('change', this.toggleState.bind(this));
  }

  toggleState() {
    this.state = !this.state;
    this.updateState();
  }

  updateState() {
    if (this.state) {
      this.dot.classList.add('checked');
      this.slider.classList.add('checked');
    } else {
      this.dot.classList.remove('checked');
      this.slider.classList.remove('checked');
    }
  }

  render(parent) {
    parent.appendChild(this.container);
  }

  static injectCustomStyles() {
    const styles = `
      .flexi-moveable-checkbox {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 26px;
      }

      .flexi-moveable-checkbox input {
        display: none;
      }

      .flexi-moveable-checkbox-slider {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--disabled-color);
        border-radius: 15px;
        transition: background-color 0.3s ease;
        cursor: pointer;
      }

      .flexi-moveable-checkbox-slider.checked {
        background-color: var(--primary-color);
      }

      .flexi-moveable-checkbox-dot {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 22px;
        height: 22px;
        background-color: var(--text-color);
        border-radius: 50%;
        transition: transform 0.3s ease;
        cursor: pointer;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      }

      .flexi-moveable-checkbox-dot.checked {
        transform: translateX(24px);
        background-color: var(--secondary-color);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }
}

// Inject custom styles for Flexi_Moveable_CheckBox
Flexi_Moveable_CheckBox.injectCustomStyles();

// Usage example
document.addEventListener('DOMContentLoaded', () => {
  const checkbox = new Flexi_Moveable_CheckBox();
  checkbox.render(document.body);
});*/


// Updated flexi chackbkx moveable
class Flexi_Moveable_CheckBox extends Flexi_Widget {
  constructor(initialState = false) {
    super();
    this.state = initialState;

    this.container = document.createElement('div');
    this.container.className = 'flexi-moveable-checkbox';

    this.checkbox = document.createElement('input');
    this.checkbox.type = 'checkbox';
    this.checkbox.checked = this.state;

    this.slider = document.createElement('div');
    this.slider.className = 'flexi-moveable-checkbox-slider';

    this.dot = document.createElement('div');
    this.dot.className = 'flexi-moveable-checkbox-dot';

    this.slider.appendChild(this.dot);
    this.container.appendChild(this.checkbox);
    this.container.appendChild(this.slider);

    // Listen for clicks on the slider
    this.slider.addEventListener('click', this.toggleState.bind(this));
  }

  toggleState() {
    // Update the checkbox state
    this.state = !this.state;
    this.checkbox.checked = this.state;
    // Update the appearance
    this.updateState();
  }

  setFalse() {
    // Set checkbox state to false
    this.state = false;
    this.checkbox.checked = false;
    // Update the appearance
    this.updateState();
  }

  setTrue() {
    // Set checkbox state to true
    this.state = true;
    this.checkbox.checked = true;
    // Update the appearance
    this.updateState();
  }

  getState() {
    return this.state;
  }

  updateState() {
    if (this.state) {
      this.dot.classList.add('checked');
      this.slider.classList.add('checked');
    } else {
      this.dot.classList.remove('checked');
      this.slider.classList.remove('checked');
    }
  }

  render(parent) {
    parent.appendChild(this.container);
  }

  static injectCustomStyles() {
    const styles = `
      /* Styles for Flexi_Moveable_CheckBox */
      .flexi-moveable-checkbox {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 26px;
      }

      .flexi-moveable-checkbox input {
        display: none;
      }

      .flexi-moveable-checkbox-slider {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--disabled-color);
        border-radius: 15px;
        transition: background-color 0.3s ease;
        cursor: pointer;
      }

      .flexi-moveable-checkbox-slider.checked {
        background-color: var(--primary-color);
        box-shadow: 0 0 10px var(--secondary-color);
      }

      .flexi-moveable-checkbox-dot {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 22px;
        height: 22px;
        background-color: var(--text-color);
        border-radius: 50%;
        transition: transform 0.3s ease;
        cursor: pointer;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      }

      .flexi-moveable-checkbox-dot.checked {
        transform: translateX(24px);
        background-color: var(--secondary-color);
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
      }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }
}

// Inject custom styles for Flexi_Moveable_CheckBox
Flexi_Moveable_CheckBox.injectCustomStyles();

// Usage example
/*document.addEventListener('DOMContentLoaded', () => {
  const checkbox = new Flexi_Moveable_CheckBox();
  checkbox.render(document.body);
  
  console.log(checkbox.getState()); // Log the initial state
  
  // Set checkbox state to false
  checkbox.setFalse();
  console.log(checkbox.getState()); // Log the state after setting to false
  
  // Set checkbox state to true
  checkbox.setTrue();
  console.log(checkbox.getState()); // Log the state after setting to true
  
  var btn = new Flexi_Button('Get Check Box State', function(){
    console.log(checkbox.getState())
  })
  btn.render(document.body)
  
  
  
});*/



// Ended at same day on 20:40pm on IQOO Z6 PRO by ghgltggamer



// -----------------------------------------



// Started update at 08:47am on 11th jun 2024 tue


// Flexi Load Page function
/*function Flexi_Load_Page(filePath) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.text();
    })
    .then(html => {
      document.documentElement.innerHTML = html;
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}

// Usage example
document.addEventListener('DOMContentLoaded', () => {
  const loadButton = document.createElement('button');
  loadButton.textContent = 'Load Page';
  loadButton.onclick = () => Flexi_Load_Page('test.html');
  document.body.appendChild(loadButton);
});*/

// Updated Flexi Liad Page Function
/*function Flexi_Load_Page(filePath) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.text();
    })
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      // Extract the new body content
      const newBodyContent = doc.body.innerHTML;

      // Replace the current body content with the new content
      document.body.innerHTML = newBodyContent;
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}

// Usage example
document.addEventListener('DOMContentLoaded', () => {
  const loadButton = document.createElement('button');
  loadButton.textContent = 'Load Page';
  loadButton.onclick = () => Flexi_Load_Page('path/to/your/file.html');
  document.body.appendChild(loadButton);
});*)*/


// Reupdated with iframe based approach for html extraction
function Flexi_Load_Page(filePath) {
  // Create an iframe element
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  document.body.appendChild(iframe);

  // Add a load event listener to the iframe
  iframe.onload = () => {
    try {
      // Get the iframe's document
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

      // Extract the head and body content from the iframe
      const newHeadContent = iframeDoc.head.innerHTML;
      const newBodyContent = iframeDoc.body.innerHTML;

      // Replace the current head content with the new content
      document.head.innerHTML = newHeadContent;

      // Replace the current body content with the new content
      document.body.innerHTML = newBodyContent;

      // Execute any script tags manually since they don't automatically run when inserted via innerHTML
      const scripts = Array.from(document.head.querySelectorAll('script')).concat(Array.from(document.body.querySelectorAll('script')));
      scripts.forEach(script => {
        const newScript = document.createElement('script');
        newScript.src = script.src;
        newScript.textContent = script.textContent;
        document.body.appendChild(newScript);
      });
    } catch (error) {
      console.error('There has been a problem with your iframe operation:', error);
    } finally {
      // Ensure the iframe is removed from the document
      if (document.body.contains(iframe)) {
        document.body.removeChild(iframe);
      }
    }
  };

  // Set the iframe source to the file path
  iframe.src = filePath;
}

// Usage example
/*document.addEventListener('DOMContentLoaded', () => {
  const loadButton = document.createElement('button');
  loadButton.textContent = 'Load Page';
  loadButton.onclick = () => Flexi_Load_Page('test.html');
  document.body.appendChild(loadButton);
});*/






// Flexi Load Function 
function Flexi_Load(htmlString, operation = 'a') {
  // Create a temporary div to hold the HTML string
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlString;

  // Handle operation based on the provided type
  if (operation === 'r') {
    // Replace the current body content with the new HTML content
    document.body.innerHTML = tempDiv.innerHTML;

    // Execute script tags manually since they don't automatically run when inserted via innerHTML
    const scripts = Array.from(document.body.querySelectorAll('script'));
    scripts.forEach(script => {
      const newScript = document.createElement('script');
      newScript.src = script.src;
      newScript.textContent = script.textContent;
      document.body.appendChild(newScript);
    });
  } else {
    // Append the new HTML content to the body
    document.body.appendChild(tempDiv);

    // Execute script tags manually since they don't automatically run when inserted via innerHTML
    const scripts = Array.from(tempDiv.querySelectorAll('script'));
    scripts.forEach(script => {
      const newScript = document.createElement('script');
      newScript.src = script.src;
      newScript.textContent = script.textContent;
      document.body.appendChild(newScript);
    });
  }
}

// Usage example
/*document.addEventListener('DOMContentLoaded', () => {
  const appendButton = document.createElement('button');
  appendButton.textContent = 'Append HTML';
  appendButton.onclick = () => Flexi_Load('<div><p>This is appended content</p><script>console.log("Appended script executed!")</script></div>');

  const replaceButton = document.createElement('button');
  replaceButton.textContent = 'Replace HTML';
  replaceButton.onclick = () => Flexi_Load('<div><p>This is replaced content</p><script>console.log("Replaced script executed!")</script></div>', 'r');

  document.body.appendChild(appendButton);
  document.body.appendChild(replaceButton);
});*/






// Flexi Checkbox class
/*class Flexi_Checkbox {
  constructor(label, isChecked = false) {
    this.label = label;
    this.isChecked = isChecked;

    this.checkbox = document.createElement('input');
    this.checkbox.type = 'checkbox';
    this.checkbox.checked = isChecked;
    this.checkbox.style.display = 'none';

    this.labelElement = document.createElement('label');
    this.labelElement.textContent = label;
    this.labelElement.style.position = 'relative';
    this.labelElement.style.cursor = 'pointer';

    this.checkmark = document.createElement('span');
    this.checkmark.style.position = 'absolute';
    this.checkmark.style.top = '50%';
    this.checkmark.style.left = '0';
    this.checkmark.style.transform = 'translateY(-50%)';
    this.checkmark.style.width = '16px';
    this.checkmark.style.height = '16px';
    this.checkmark.style.border = '1px solid var(--text-color)';
    this.checkmark.style.backgroundColor = 'transparent';
    this.checkmark.style.borderRadius = '3px';
    this.checkmark.style.transition = 'background-color 0.3s ease';
    this.checkmark.style.display = 'inline-block';

    this.checkmarkInner = document.createElement('span');
    this.checkmarkInner.style.display = 'inline-block';
    this.checkmarkInner.style.width = '7px';
    this.checkmarkInner.style.height = '7px';
    this.checkmarkInner.style.borderRadius = '50%';
    this.checkmarkInner.style.backgroundColor = 'var(--primary-color)';
    this.checkmarkInner.style.opacity = '0';
    this.checkmark.appendChild(this.checkmarkInner);

    this.labelElement.appendChild(this.checkbox);
    this.labelElement.appendChild(this.checkmark);

    // Add event listener to handle checkbox click
    this.checkbox.addEventListener('change', () => {
      this.isChecked = this.checkbox.checked;
      this.updateCheckboxStyle();
    });

    // Initial styling
    this.updateCheckboxStyle();
  }

  // Method to update checkbox style based on its state
  updateCheckboxStyle() {
    if (this.isChecked) {
      // Apply styles for checked state
      this.checkmarkInner.style.opacity = '1';
      this.labelElement.style.color = 'var(--primary-color)';
      this.labelElement.style.fontWeight = 'bold';
      this.labelElement.style.textDecoration = 'none';
    } else {
      // Apply styles for unchecked state
      this.checkmarkInner.style.opacity = '0';
      this.labelElement.style.color = 'var(--text-color)';
      this.labelElement.style.fontWeight = 'normal';
      this.labelElement.style.textDecoration = 'none';
    }
  }

  // Method to set checkbox label
  setLabel(label) {
    this.labelElement.textContent = label;
  }

  // Method to set checkbox state (checked/unchecked)
  setState(isChecked) {
    this.isChecked = isChecked;
    this.checkbox.checked = isChecked;
    this.updateCheckboxStyle();
  }

  // Method to check if checkbox is checked
  isChecked() {
    return this.isChecked;
  }

  // Method to render checkbox
  render(parent) {
    parent.appendChild(this.labelElement);
  }
}

// Usage example
document.addEventListener('DOMContentLoaded', () => {
  const checkbox = new Flexi_Checkbox('Check me');
  checkbox.render(document.body);

  // Example styling methods
  checkbox.setLabel('New label');
  checkbox.setState(true); // Check the checkbox
});*/



// Updated checkbox
/*class Flexi_Checkbox {
  constructor(label, isChecked = false) {
    this.label = label;
    this.isChecked = isChecked;

    this.checkbox = document.createElement('input');
    this.checkbox.type = 'checkbox';
    this.checkbox.checked = isChecked;
    this.checkbox.style.marginRight = '6px'; // Add some spacing between the checkbox and label

    this.labelElement = document.createElement('label');
    this.labelElement.textContent = label;
    this.labelElement.style.cursor = 'pointer';
    this.labelElement.style.verticalAlign = 'middle'; // Align label vertically with checkbox

    this.labelElement.appendChild(this.checkbox);
    this.labelElement.appendChild(document.createTextNode(label));

    // Add event listener to handle checkbox change
    this.checkbox.addEventListener('change', () => {
      this.isChecked = this.checkbox.checked;
    });
  }

  // Method to set checkbox label
  setLabel(label) {
    this.labelElement.textContent = label;
  }

  // Method to set checkbox state (checked/unchecked)
  setState(isChecked) {
    this.isChecked = isChecked;
    this.checkbox.checked = isChecked;
  }

  // Method to check if checkbox is checked
  isChecked() {
    return this.isChecked;
  }

  // Method to render checkbox
  render(parent) {
    parent.appendChild(this.labelElement);
  }
}

// Usage example
document.addEventListener('DOMContentLoaded', () => {
  const checkbox = new Flexi_Checkbox('Check me');
  checkbox.render(document.body);

  // Example styling methods
  checkbox.setLabel('New label');
  checkbox.setState(true); // Check the checkbox
});*/

// Removed this class due to unresponsive checkbox






// Flexi ProgressBar class for progress bar
/*class Flexi_ProgressBar {
  constructor(initialProgress = 0) {
    this.progress = initialProgress;

    this.progressBar = document.createElement('div');
    this.progressBar.style.width = '100%';
    this.progressBar.style.height = '20px';
    this.progressBar.style.backgroundColor = 'var(--primary-color)';
    this.progressBar.style.borderRadius = '5px';
    this.progressBar.style.overflow = 'hidden'; // Ensure progress bar doesn't overflow

    this.progressIndicator = document.createElement('div');
    this.progressIndicator.style.width = `${initialProgress}%`;
    this.progressIndicator.style.height = '100%';
    this.progressIndicator.style.backgroundColor = 'var(--secondary-color)';
    this.progressIndicator.style.transition = 'width 0.3s ease'; // Add transition for smooth animation

    this.progressBar.appendChild(this.progressIndicator);
  }

  // Method to set progress in the progress bar
  setProgress(progress) {
    if (progress >= 0 && progress <= 100) {
      this.progress = progress;
      this.progressIndicator.style.width = `${progress}%`;
    }
  }

  // Method to get current progress from the progress bar
  getProgress() {
    return this.progress;
  }

  // Method to set progress bar color
  setColor(color) {
    this.progressIndicator.style.backgroundColor = color;
  }

  // Method to set progress bar height
  setHeight(height) {
    this.progressBar.style.height = height;
  }

  // Method to render progress bar
  render(parent) {
    parent.appendChild(this.progressBar);
  }
}

// Usage example
document.addEventListener('DOMContentLoaded', () => {
  const progressBar = new Flexi_ProgressBar(50);
  progressBar.render(document.body);

  // Example styling methods
  progressBar.setColor('#4CAF50'); // Change progress bar color
  progressBar.setHeight('30px'); // Change progress bar height

  // Example progress setting and getting
  progressBar.setProgress(12); // Set progress to 75%
  console.log(progressBar.getProgress()); // Output: 75
});*/

// Reupdated the wuite progress bar
/*class Flexi_ProgressBar {
  constructor(initialProgress = 0) {
    this.progress = initialProgress;

    this.progressBar = document.createElement('div');
    this.progressBar.style.width = '100%';
    this.progressBar.style.height = '10px'; // Reduced height for better appearance
    this.progressBar.style.backgroundColor = 'transparent'; // Transparent background
    this.progressBar.style.border = `3px solid var(--secondary-color)`; // Border with light color from default theme
    this.progressBar.style.borderRadius = '15px'; // High border radius
    this.progressBar.style.overflow = 'hidden'; // Ensure progress bar doesn't overflow
    this.progressBar.style.padding = '2px'; // Padding inside the progress bar

    this.progressIndicator = document.createElement('div');
    this.progressIndicator.style.width = `${initialProgress}%`;
    this.progressIndicator.style.height = '100%';
    this.progressIndicator.style.backgroundColor = 'var(--primary-color)'; // Darker color from default theme
    this.progressIndicator.style.transition = 'width 0.3s ease'; // Add transition for smooth animation
    this.progressIndicator.style.borderRadius = '15px'; // High border radius

    this.progressBar.appendChild(this.progressIndicator);
  }

  // Method to set progress in the progress bar
  setProgress(progress) {
    if (progress >= 0 && progress <= 100) {
      this.progress = progress;
      this.progressIndicator.style.width = `${progress}%`;
    }
  }

  // Method to get current progress from the progress bar
  getProgress() {
    return this.progress;
  }

  // Method to set progress bar color
  setColor(color) {
    this.progressIndicator.style.backgroundColor = color;
  }

  // Method to set progress bar height
  setHeight(height) {
    this.progressBar.style.height = height;
  }

  // Method to render progress bar
  render(parent) {
    parent.appendChild(this.progressBar);
  }
}

// Usage example
document.addEventListener('DOMContentLoaded', () => {
  const progressBar = new Flexi_ProgressBar(50);
  progressBar.render(document.body);

  // Example styling methods
 // progressBar.setColor('#4CAF50'); // Change progress bar color
  //progressBar.setHeight('20px'); // Change progress bar height

  // Example progress setting and getting
  progressBar.setProgress(75); // Set progress to 75%
  console.log(progressBar.getProgress()); // Output: 75
});*/

// Re updated for more better look
class Flexi_ProgressBar {
  constructor(initialProgress = 0) {
    this.progress = initialProgress;

    this.progressBar = document.createElement('div');
    this.progressBar.style.width = '97%';
    this.progressBar.style.height = '10px'; // Increased height for better appearance
    this.progressBar.style.backgroundColor = 'transparent'; // Transparent background
    this.progressBar.style.border = `3px solid var(--accent-color)`; // Border with light color from default theme
    this.progressBar.style.borderRadius = '10px'; // High border radius
    this.progressBar.style.overflow = 'hidden'; // Ensure progress bar doesn't overflow
    this.progressBar.style.padding = '4px'; // Increased padding inside the progress bar
    this.progressBar.style.position = 'relative'; // Position for shadow effect
    this.progressBar.style.boxShadow = `0 0 10px var(--accent-color)`; // Shadow effect

    this.progressIndicator = document.createElement('div');
    this.progressIndicator.style.width = `${initialProgress}%`;
    this.progressIndicator.style.height = '55%';
    this.progressIndicator.style.backgroundColor = 'var(--hover-color)'; // Lighter color from default theme
    this.progressIndicator.style.transition = 'width 0.3s ease'; // Add transition for smooth animation
    this.progressIndicator.style.borderRadius = '1000px'; // High border radius
    this.progressIndicator.style.position = 'absolute'; // Position indicator relative to progress bar

    this.progressBar.appendChild(this.progressIndicator);
  }

  // Method to set progress in the progress bar
  setProgress(progress) {
    if (progress >= 0 && progress <= 100) {
      this.progress = progress;
      this.progressIndicator.style.width = `${progress}%`;
    }
  }

  // Method to get current progress from the progress bar
  getProgress() {
    return this.progress;
  }
  
  setHeight(px){
    this.progressBar.style.height = (px+'px');
  }
  setWidth(px){
    this.progressBar.style.width = (px+'px');
  }
  
  setProgressHeight(per){
    this.progressIndicator.style.height = (per+'%')
  }
  
  
  setColor(color = "var(--accent-color)", pcolor='var(--hover-color)'){
    this.progressBar.style.borderColor = color;
    this.progressIndicator.style.backgroundColor = pcolor;
    var sh = '0px 0px 10px ' + color;
    this.progressBar.style.boxShadow = sh;
  }

  // Method to render progress bar
  render(parent) {
    parent.appendChild(this.progressBar);
  }
}

// Usage example
/*document.addEventListener('DOMContentLoaded', () => {
  const progressBar = new Flexi_ProgressBar(50);
  progressBar.render(document.body);

  // Example progress setting and getting
  progressBar.setProgress(75); // Set progress to 75%
  progressBar.setWidth(67)
 // progressBar.setColor('red', 'red');
  //progressBar.setProgressHeight(10)
  console.log(progressBar.getProgress()); // Output: 75
});*/




// This version ended at 09:51 am same day and date by ghgltggamer on IQOO Z6 PRO


// Adding 1 more class at same day 09:56am

/*class Flexi_Link {
  constructor(url, label) {
    this.link = document.createElement('a');
    this.link.href = url;
    this.link.textContent = label;
    this.link.className = 'flexi-link';

    // Add ripple effect on click
    this.link.addEventListener('click', this.createRippleEffect.bind(this));
  }

  createRippleEffect(event) {
    const ripple = document.createElement('span');
    ripple.className = 'flexi-ripple';
    const rect = this.link.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    this.link.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  render(parent) {
    parent.appendChild(this.link);
  }
}

// Usage example
document.addEventListener('DOMContentLoaded', () => {
  const link = new Flexi_Link('https://example.com', 'Example Link');
  link.render(document.body);
});*/

// Updated class
/*class Flexi_Link {
  constructor(url, label) {
    this.url = url;
    this.label = label;

    // Create link container
    this.linkContainer = document.createElement('div');
    this.linkContainer.className = 'flexi-link';
    this.linkContainer.textContent = label;

    // Create ripple effect container
    this.rippleContainer = document.createElement('div');
    this.rippleContainer.className = 'ripple-container';
    this.linkContainer.appendChild(this.rippleContainer);

    // Add click event listener
    this.linkContainer.addEventListener('click', this.createRippleEffect.bind(this));
  }

  createRippleEffect(event) {
    const ripple = document.createElement('span');
    ripple.className = 'flexi-ripple';

    // Calculate click coordinates relative to the link container
    const rect = this.linkContainer.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    this.rippleContainer.appendChild(ripple);

    // Delay removing the ripple element to keep it visible
    setTimeout(() => {
      ripple.remove();
      // Open link after ripple animation completes
      window.open(this.url);
    }, 600);
  }

  render(parent) {
    parent.appendChild(this.linkContainer);
  }

  // CSS styles
  static styles = `
    .flexi-link {
      position: relative;
      cursor: pointer;
      user-select: none;
      padding: 8px 16px;
      display: inline-block;
      color: var(--text-color);
      background-color: transparent;
      border: none;
      font-size: 16px;
      text-decoration: none;
    }

    .ripple-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .flexi-ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple-animation 0.6s linear;
      background: rgba(255, 255, 255, 0.6);
    }

    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
}

// Inject CSS styles into the document
const styleElement = document.createElement('style');
styleElement.textContent = Flexi_Link.styles;
document.head.appendChild(styleElement);

// Usage example
document.addEventListener('DOMContentLoaded', () => {
  const link = new Flexi_Link('https://example.com', 'Example Link');
  link.render(document.body);
});*/


// Ended this class at 10:04am
