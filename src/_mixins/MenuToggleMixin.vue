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
        menuMod() {
            document('html').click(function (e) {
                if (e.target.id == 'YOUR-DIV-ID') {
                    //do something
                } else {
                    //do something
                }
            });
        }
    }

}
</script>