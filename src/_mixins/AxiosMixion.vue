<!-- <script>
import Axios from 'axios';
export default {
    inject: ["DORM_API"],
    methods: {
        axiosHandler: function (type, url, Data) {
            Axios.defaults.withCredentials = true;
            return new Promise((resolve, reject) => {

                if (type == 'get') {
                    Axios.get(this.DORM_API + url,
                        (Data) ?
                            Data
                            : ''
                    ).then((result) => {
                        resolve(result);
                    }).catch((e) => {
                        reject(e);
                    })
                }

                if (type == 'post') {
                    Axios.post(this.DORM_API + url,
                        (Data) ?
                            Data
                            : ''
                    ).then((result) => {
                        console.log(0)
                        resolve(result);
                    }).catch((e) => {
                        reject(e);
                    })
                }

            })
        },
    }
}
</script> -->