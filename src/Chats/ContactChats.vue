<template>
    <div class="allChatsContainer">
        <div class="leftChatsContainer">
            Old Friends
            <a href="#" v-for="friend in oldFriendsUnseen" :key="friend.id" class="oneChatContainer"
                @click="writeToRightPanel(friend.friendId)">
                <div class="oneChatContainerLeft">
                    <img v-if="friend.picture" width="50px" height="50px" class="profileImage"
                        :src="`${DORM_API}/profilePicture/${friend.picture}`" alt="icon">

                    <img v-else width="50px" height="50px" class="profileImage"
                        src="../assets/jonatan-pie-3l3RwQdHRHg-unsplash.svg" alt="icon">
                </div>
                <div class="oneChatContainerRight">
                    <div class="oneChatContainerRightUp">
                        <span class="up1"> {{ friend.fullname }}</span>
                        <span class="up2">
                            <span>&check;</span>
                            {{ friend.chatTimeAgo }}
                        </span>
                    </div>
                    <div class="oneChatContainerRightDown"><span class="down1">{{ friend.text }}</span>
                        <span v-if="friend.seen == 0" class="down2">New</span>
                    </div>
                </div>
            </a>
            <a href="#" v-for="friend in                 oldFriendsSeen" :key="friend.id" class="oneChatContainer"
                @click="writeToRightPanel(friend.friendId)">
                <div class="oneChatContainerLeft">
                    <img width="50px" height="50px" class="profileImage"
                        :src="`${DORM_API}/profilePicture/${friend.picture}`" alt="icon">
                </div>
                <div class="oneChatContainerRight">
                    <div class="oneChatContainerRightUp">
                        <span class="up1"> {{ friend.fullname }}</span>
                        <span class="up2">
                            <span v-if="friend.seen == 1">&check;&check;</span>
                            <span v-else>&check;</span>
                            {{ friend.chatTimeAgo }}
                        </span>
                    </div>
                    <div class="oneChatContainerRightDown"><span class="down1">{{ friend.text }}</span>
                        <span v-if="friend.seen == 0" class="down2">1</span>
                    </div>
                </div>
            </a>
        </div>
        <div class="rightChatsContainer">
            <div class="profileContainer">
                <div class="profilePhotoTop">
                    <img class="profilePhotoTopImage" width="50px" height="50px" src="../assets/logo.png" alt="image">
                </div>
                <div class="profile ">fullname</div>
                <div class="profile "> search</div>
                <div v-html="htmlVerticalThreeDots" class="profile"> </div>
            </div>
            <div id="chat" class="rightChatsContainerB">
                <div v-for="chat in                 chats" :key="chat.chatId">
                    <div v-if="chat.sender == chat.yourId" class="rightChatsSender">
                        <div class="rightChatsSenderInner">{{ chat.text }}
                            <span class="timeAgo">
                                &check;&check; {{ chat.chatTimeAgo }}
                            </span>
                        </div>
                    </div>
                    <div v-else class="rightChatsReceiver">
                        <div class="rightChatsReceiverInner">
                            {{ chat.text }}
                            <span class="timeAgo">
                                &check;&check; {{ chat.chatTimeAgo }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="textAreaContainer">
                <textarea :class="{ 'fuccussed': hasFocus }" @focus="onFocus" @blur="onBlur()" id="message" class="message"
                    placeholder="Message" cols="1" v-model="message"></textarea>
                <label v-html="htmlAttachment" class="labelForFile" for="file">
                </label>
                <input id="file" style="display: none;" type="file">
                <svg @click="sendChatToFriend()" v-html="htmlSendPath" class="messageingButton customPath" width="60px"
                    height="60px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                </svg>
            </div>
        </div>
    </div>
</template>
<script>
import ContactsChatMixin from '../_mixins/ContactsChatMixin.vue';
export default {
    mixins: [ContactsChatMixin],
    data() {
        return {
            hasFocus: null,
            oldFriendsUnseen: [],
            oldFriendsSeen: [],
            newFriends: [],
            chats: [],
            message: null,
        }
    },

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
.fuccussed {
    border: 1.5px solid var(--colorizedTextColor);
}
</style>
