<script>
export default {
  methods: {
    switchTheme: function () {
      let root = document.querySelector(":root");

      if (localStorage.getItem("OTheme") == "dark") {
        document.getElementById("OThemeCheckbox").checked = false;
        this.ThemeMode = "light";

        let lightBackgroundColor = getComputedStyle(root).getPropertyValue(
          "--lightBackgroundColor"
        );
        root.style.setProperty("--backgroundColor", lightBackgroundColor);

        let lightButtonBackgroundColor = getComputedStyle(root).getPropertyValue(
          "--lightButtonBackgroundColor"
        );
        root.style.setProperty("--buttonBackgroundColor", lightButtonBackgroundColor);

        localStorage.setItem("OTheme", "light");
      } else {
        document.getElementById("OThemeCheckbox").checked = true;
        this.ThemeMode = "dark";

        let darkBackgroundColor = getComputedStyle(root).getPropertyValue(
          "--darkBackgroundColor"
        );
        root.style.setProperty("--backgroundColor", darkBackgroundColor);

        let darkButtonBackgroundColor = getComputedStyle(root).getPropertyValue(
          "--darkButtonBackgroundColor"
        );
        root.style.setProperty("--buttonBackgroundColor", darkButtonBackgroundColor);

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

        let darkBackgroundColor = getComputedStyle(root).getPropertyValue(
          "--darkBackgroundColor"
        );
        root.style.setProperty("--backgroundColor", darkBackgroundColor);

        let darkButtonBackgroundColor = getComputedStyle(root).getPropertyValue(
          "--darkButtonBackgroundColor"
        );
        root.style.setProperty("--buttonBackgroundColor", darkButtonBackgroundColor);
      } else {
        this.ThemeMode = "light";
        document.getElementById("OThemeCheckbox").checked = false;

        let lightBackgroundColor = getComputedStyle(root).getPropertyValue(
          "--lightBackgroundColor"
        );
        root.style.setProperty("--backgroundColor", lightBackgroundColor);

        let lightButtonBackgroundColor = getComputedStyle(root).getPropertyValue(
          "--lightButtonBackgroundColor"
        );
        root.style.setProperty("--buttonBackgroundColor", lightButtonBackgroundColor);
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
  --darkBackgroundColor: black;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--backgroundColor);
}

.OThemeCheckboxMode {
  display: flex;
  transition: 0.5s;
}

.OThemeCheckbox:checked + .OThemeCheckboxLabel .OThemeCheckboxBall {
  transform: translateX(29px);
}

.OThemeCheckbox {
  opacity: 0;
  display: none;
}

.OThemeCheckboxLabel {
  width: 55px;
  height: 26px;
  background: rgb(80, 63, 63);
  border-radius: 50px;
  padding: 5px;
  position: relative;
}

.OThemeCheckboxBall {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 22px;
  height: 22px;
  background: red;
  border-radius: 50%;
  transition: 0.2s;
}
</style>
