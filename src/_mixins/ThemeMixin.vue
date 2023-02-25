<script>
export default {
  methods: {
    switchTheme: function () {

      if (localStorage.getItem("OTheme") == "dark") {
        document.getElementById("OThemeCheckbox").checked = false;
        this.ThemeMode = "light";
        this.switchToWhite();
        localStorage.setItem("OTheme", "light");
      } else {
        document.getElementById("OThemeCheckbox").checked = true;
        this.ThemeMode = "dark";
        this.switchToDark();
        localStorage.setItem("OTheme", "dark");
      }
    },
    switchToDark: function () {
      let root = document.querySelector(":root");

      // For Background darkning
      root.style.setProperty(
        "--backgroundColor",
        getComputedStyle(root).getPropertyValue("--darkBackgroundColor")
      );
      // For blur backgroun dark
      root.style.setProperty(
        "--blurBackgroundColor",
        getComputedStyle(root).getPropertyValue("--darkBlurBackgroundColor")
      );
      //for button dark
      root.style.setProperty(
        "--buttonColor",
        getComputedStyle(root).getPropertyValue("--darkButtonColor")
      );
      // For blur button dark
      root.style.setProperty(
        "--buttonBlurColor",
        getComputedStyle(root).getPropertyValue("------darkButtonHoverColor")
      );
      // For text dark
      root.style.setProperty(
        "--textColor",
        getComputedStyle(root).getPropertyValue("--darkTextColor")
      );
      // For blur text dark
      root.style.setProperty(
        "--textBlurColor",
        getComputedStyle(root).getPropertyValue("----darkTextBlurColor")
      );
      // For Colorized text dark
      root.style.setProperty(
        "--colorizedTextColor",
        getComputedStyle(root).getPropertyValue("------darkColorizedTextColor")
      );

    },
    switchToWhite: function () {
      let root = document.querySelector(":root");

      // For background light
      root.style.setProperty(
        "--backgroundColor",
        getComputedStyle(root).getPropertyValue("--lightBackgroundColor")
      );
      // For blur backgroun light
      root.style.setProperty(
        "--blurBackgroundColor",
        getComputedStyle(root).getPropertyValue("--lightBlurBackgroundColor")
      );
      //for button light
      root.style.setProperty(
        "--buttonColor",
        getComputedStyle(root).getPropertyValue("--lightButtonColor")
      );
      // For blur button Light
      root.style.setProperty(
        "--buttonHoverColor",
        getComputedStyle(root).getPropertyValue("--lightButtonHoverColor")
      );
      // For text light
      root.style.setProperty(
        "--textColor",
        getComputedStyle(root).getPropertyValue("--lightTextColor")
      );
      // For blur text Light
      root.style.setProperty(
        "--textBlurColor",
        getComputedStyle(root).getPropertyValue("--lightTextBlurColor")
      );
      // For Colorized text Light
      root.style.setProperty(
        "--colorizedTextColor",
        getComputedStyle(root).getPropertyValue("--lightColorizedTextColor")
      );

    }
  },
  mounted() {
    if (localStorage.getItem("OTheme") == null) {
      localStorage.setItem("OTheme", "light");
      this.ThemeMode = "light";
    } else {
      if (localStorage.getItem("OTheme") == "dark") {
        this.ThemeMode = "dark";
        document.getElementById("OThemeCheckbox").checked = true;
        this.switchToDark()
      } else {
        this.ThemeMode = "light";
        document.getElementById("OThemeCheckbox").checked = false;
        this.switchToWhite()
      }
    }
  },
};
</script>
<style>
:root {

  /* body background  */
  --backgroundColor: white;
  --lightBackgroundColor: white;
  --darkBackgroundColor: #1c2732;

  /* blur background  */
  --blurBackgroundColor: #e8e8e8;
  --lightBlurBackgroundColor: #e8e8e8;
  --darkBlurBackgroundColor: #28323b;

  /* Button colors */
  --buttonColor: #41b3e7;
  --lightButtonColor: #41b3e7;
  --darkButtonColor: #5288c1;

  /* Button Hover colors */
  --buttonHoverColor: #41b2e7b2;
  --lightButtonHoverColor: #41b2e7ab;
  --darkButtonHoverColor: #5288c1a9;

  /* Colorized Text colors */
  --colorizedTextColor: #41b3e7;
  --lightColorizedTextColor: #41b3e7;
  --darkColorizedTextColor: #41b3e7;

  /* Text colors */
  --textColor: #05202c;
  --lightTextColor: #021020;
  --darkTextColor: #e2e2e2;

  /* Text Blur colors */
  --textBlurColor: #8191a1;
  --lightTextBlurColor: #8191a1;
  --darkTextBlurColor: #708499;

  /* Ancher colors */
  --ancherTextColor: #0d6fd2;
  /* --lightAncherTextColor: #076dd4;
  --darkAncherTextColor: #8191a1; */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--backgroundColor);
  color: var(--textColor);
  font-family: sans-serif;
}

a {
  color: var("--ancherTextColor");
}
</style>
