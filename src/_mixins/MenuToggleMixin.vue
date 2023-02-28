<script>
export default {
    data() {
        return {
            menuModalToggle: false
        }
    },
    methods: {
        menuModalSwitcher() {
            this.menuModalToggle = !this.menuModalToggle
        },
        menuModalSwitcherOff() {
            this.menuModalToggle = false
        },
    }
}
</script>