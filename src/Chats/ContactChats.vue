<template>
    <div class="allChatsContainer">
        <div class="leftChatsContainer">
            <a href="#" v-for="i in 12" :key="i" class="oneChatContainer">
                <div class="oneChatContainerLeft">
                    <img width="50px" height="50px" class="profileImage"
                        src="../assets/jonatan-pie-3l3RwQdHRHg-unsplash.jpg" alt="icon">
                </div>
                <div class="oneChatContainerRight">
                    <div class="oneChatContainerRightUp"><span class="up1"> {{ i }} TELEGRAM campusUp wards
                            campusUp
                            wards campusUp
                            wards
                            campusUp wards campusUp wards campusUp wards campusUp wards campusUp wards campusUp wards
                            campusUp
                            wards campusUp wards campusUp wards campusUp wards campus</span> <span class="up2">
                            &check;&check; 6 hrs
                            ago</span>
                    </div>
                    <div class="oneChatContainerRightDown"><span class="down1">Down</span> <span class="down2">3</span>
                    </div>
                </div>
            </a>
        </div>
        <div class="rightChatsContainer">
            <div class="profileContainer">
                <div class="profilePhotoTop">
                    <img class="profilePhotoTopImage" width="50px" height="50px" src="../assets/logo.png" alt="image">
                </div>
                <div class="profile ">Name</div>
                <div class="profile "> search</div>
                <div v-html="htmlVerticalThreeDots" class="profile"> </div>
            </div>
            <div class="rightChatsContainerB">
                <div v-for="item in 12" :key="item" class="rightChatsSender">
                    <div class="rightChatsSenderInner">{{ item }}Hi
                        <span class="timeAgo">
                            &check;&check; 3 hrs ago
                        </span>
                    </div>
                </div>
                <div class="rightChatsReceiver">
                    <div class="rightChatsReceiverInner">How are you?
                        <span class="timeAgo">
                            &check;&check; 3 hrs ago
                        </span>
                    </div>
                </div>
            </div>
            <div class="textAreaContainer">
                <textarea @focus="resizeTextarea" @keyup="resizeTextarea" id="message" class="message"
                    placeholder="Message"></textarea>
                <label v-html="htmlAttachment" class="labelForFile" for="file">
                </label>
                <input id="file" style="display: none;" type="file">
                <svg v-html="htmlSendPath" class="messageingButton customPath" width="60px" height="60px"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                </svg>
            </div>
        </div>
    </div>
</template>
<script>
import ContactsChatMixin from '@/_mixins/ContactsChatMixin.vue';
export default {
    mixins: [ContactsChatMixin],
    methods: {
        resizeTextarea(e) {
            let area = e.target;
            area.style.overflow = 'hidden';
            console.log(area.scrollHeight)
            area.style.height = area.scrollHeight + 'px';
        }
    }
}
</script>
<style src="../css/ContactsChat.css"></style>
<style>
/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~unchangeable~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
html,
body {
    height: 100%;
    width: 100%;
    margin: 0;
}

body {
    display: flex;
    flex-direction: column;
}

::-webkit-scrollbar {
    width: 5px;
    border-radius: 100px;
    background-color: transparent;
    color: transparent;
}

::-webkit-scrollbar-track {
    border-radius: 100px;
    background-color: transparent;
    color: transparent;
}


::-webkit-scrollbar-thumb {
    border-radius: 100px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

/* 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~unchangeable~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
</style>
