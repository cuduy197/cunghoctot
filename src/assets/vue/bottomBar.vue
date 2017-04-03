<template>
    <div class="toolbar ">
        <div class="toolbar-inner">
            <f7-button data-popover=".flash-card" class="link open-popover" big fill color="orange">Trợ giúp ❓</f7-button>
            <f7-button data-popover=".thu-nuoi" class="link open-popover" big fill color="green">Thú cưng 🐣</f7-button>
            <f7-button data-popover=".tien-ich" class="link open-popover" big fill color="pink">Tiện ích 💡</f7-button>
        </div>
        <!-- Flashcard popover -->
        <div class="popover flash-card" style="width: 200px;" onclick="new Framework7().closeModal('.flash-card');">
            <div class="popover-angle"></div>
            <div class="popover-inner">
                <div class="list-block">
                    <ul>
                        <li><a href="/" class="list-button item-link">Kiểm tra</a></li>
                        <li><a href="/" class="list-button item-link">Danh sách</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Tiện ích popover -->
        <div class="popover tien-ich" style="width: 200px;" onclick="new Framework7().closeModal('.tien-ich');">
            <div class="popover-angle"></div>
            <div class="popover-inner">
                <div class="list-block">
                    <ul>
                        <li><a href="/about" @click="close" class="list-button item-link">Tra ngày 📅</a></li>
                        <li><a href="/" class="list-button item-link">Trợ giúp 🔍 </a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Thú nuôi popover -->
        <div class="popover thu-nuoi" style="width: 310px;">
            <div class="popover-angle"></div>
            <div class="popover-inner">
                <div class="list-block">
                    <ul>
                        <li class="center">
                            <p href="">Xin chàos </p>
                            <f7-progressbar infinite color="multi"></f7-progressbar>
                            <h1 style="font-size: 3.5em;" class="animated tada">🐧</h1>
                            <pre>Cấp độ : 0</pre>
                            <pre>Sức khỏe : 0/10 ☹</pre>
                        </li>
                        <li>
                        </li>
                        <f7-list>
                            <f7-grid>
                                <f7-col>
                                    <f7-button class="animated slideInUp" style="background-color: indigo" big fill>Chăm sóc 💊</f7-button>
                                </f7-col>
                                <f7-col>
                                    <f7-button class="animated slideInUp" big fill color="">Chém gió 😄</f7-button>
                                </f7-col>
                            </f7-grid>
                        </f7-list>
                        <li>
                            <br>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Info from './info/info';

export default {
    data() {
            return {

            }
        },
        methods: {
            close: function() {
                new Framework7().closeModal('.popover-links');
            }
        },
        components: {
            Info
        }
}
</script>
<style>
.button {
    transition-duration: 0.4s;
}

.button:after {
    background: white;
    transition: all .5s
}

.button:active:after {
    opacity: 1;
    transition: 0s
}
</style>
