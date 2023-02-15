<script>
export default {
  methods: {
    switchTheme: function () {
      let root = document.querySelector(":root");

      if (localStorage.getItem("OTheme") == "dark") {
        document.getElementById("OThemeCheckbox").checked = false;
        this.ThemeMode = "light";
        // For background light
        root.style.setProperty(
          "--backgroundColor",
          getComputedStyle(root).getPropertyValue("--lightBackgroundColor")
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

        localStorage.setItem("OTheme", "light");
      } else {
        document.getElementById("OThemeCheckbox").checked = true;
        this.ThemeMode = "dark";

        // For Background darkning
        root.style.setProperty(
          "--backgroundColor",
          getComputedStyle(root).getPropertyValue("--darkBackgroundColor")
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

        localStorage.setItem("OTheme", "dark");
      }
    },
  },
  mounted() {
    let root = document.querySelector(":root");

    if (localStorage.getItem("OTheme") == null) {
      localStorage.setItem("OTheme", "light");
      this.ThemeMode = "light";
    } else {
      if (localStorage.getItem("OTheme") == "dark") {
        this.ThemeMode = "dark";

        document.getElementById("OThemeCheckbox").checked = true;
        // For Background darkening
        root.style.setProperty(
          "--backgroundColor",
          getComputedStyle(root).getPropertyValue("--darkBackgroundColor")
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
      } else {
        this.ThemeMode = "light";
        document.getElementById("OThemeCheckbox").checked = false;
        // For Background light
        root.style.setProperty(
          "--backgroundColor",
          getComputedStyle(root).getPropertyValue("--lightBackgroundColor")
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
    }
  },
};
</script>
<style>
:root {
  /* body background  */
  --backgroundColor: white;
  --lightBackgroundColor: white;
  --darkBackgroundColor: #17212b;

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
  --darkTextColor: #bebfa7;

  /* Text Blur colors */
  --textBlurColor: #8191a1;
  --lightTextBlurColor: #8191a1;
  --darkTextBlurColor: #708499;

  /* Ancher colors */
  --ancherTextColor: #0d6fd2;
  --lightAncherTextColor: #076dd4;
  --darkAncherTextColor: #8191a1;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--backgroundColor);
  color: var(--textColor);
}
a {
  color: var("--ancherTextColor");
}
</style>
