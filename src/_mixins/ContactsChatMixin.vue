<script>
import Axios from 'axios';
export default {
    inject: ['DORM_API'],

    data() {
        return {
            htmlAttachment: `<svg height="23px" width="23px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 280.067 280.067" xml:space="preserve">
                        <g>
                            <path class="attachemntsPath"
                                d="M149.823,257.142c-31.398,30.698-81.882,30.576-113.105-0.429 c-31.214-30.987-31.337-81.129-0.42-112.308l-0.026-0.018L149.841,31.615l14.203-14.098c23.522-23.356,61.65-23.356,85.172,0 s23.522,61.221,0,84.586l-125.19,123.02l-0.044-0.035c-15.428,14.771-40.018,14.666-55.262-0.394	c-15.244-15.069-15.34-39.361-0.394-54.588l-0.044-0.053l13.94-13.756l69.701-68.843l13.931,13.774l-83.632,82.599 c-7.701,7.596-7.701,19.926,0,27.53s20.188,7.604,27.88,0L235.02,87.987l-0.035-0.026l0.473-0.403 c15.682-15.568,15.682-40.823,0-56.39s-41.094-15.568-56.776,0l-0.42,0.473l-0.026-0.018l-14.194,14.089L50.466,158.485	c-23.522,23.356-23.522,61.221,0,84.577s61.659,23.356,85.163,0l99.375-98.675l14.194-14.089l14.194,14.089l-14.194,14.098 l-99.357,98.675C149.841,257.159,149.823,257.142,149.823,257.142z" />
                        </g>
            </svg>`,
            htmlSendPath: `<path
                        d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z"
                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />`,
            htmlVerticalThreeDots: `<svg class="threeDots" width="30px" height="30px" viewBox="-3.2 -3.2 38.40 38.40"
                        enable-background="new 0 0 32 32" id="Glyph" version="1.1" xml:space="preserve"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M13,16c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,14.346,13,16z" id="XMLID_294_">
                            </path>
                            <path d="M13,26c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,24.346,13,26z" id="XMLID_295_">
                            </path>
                            <path d="M13,6c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,4.346,13,6z" id="XMLID_297_">
                            </path>
                        </g>
                    </svg>`
        }
    },
    methods: {
        onFocus() {
            this.hasFocus = true;
        },
        onBlur() {
            this.hasFocus = false;
        },
        resizeTextarea(e) {
            let area = e.target;
            area.style.overflow = 'hidden';
            console.log(area)
            area.style.height = 90 + 'px';
        },
        resizeTextareaAbort(e) {
            let area = e.target;
            area.style.overflow = 'hidden';
            console.log(area)
            area.style.height = 60 + 'px';
        }
    },
    mounted() {
        Axios.get(`${this.DORM_API}/user`).then((result) => {
            this.users = result.data
        })
    }
}
</script>