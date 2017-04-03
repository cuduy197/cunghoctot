<template>
    <div>
        <div class="list-block inset">
            <ul>
                <li>
                    <a href="/about/" class="item-content item-link">
                        <div class="item-media">🔢</div>
                        <div class="item-inner">
                            <div class="item-title">Toán học</div>
                            <!--  <div class="item-after">TRUNG BÌNH 60đ</div> -->
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/form/" class="item-link item-content">
                        <div class="item-media">📑</div>
                        <div class="item-inner">
                            <div class="item-title">Ngữ văn</div>
                            <!-- <div class="item-after">Lần kiểm tra: <span class="badge bg-blue">6</span></div> -->
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" class="item-link item-content">
                        <div class="item-media">💬</div>
                        <div class="item-inner">
                            <div class="item-title">Tiếng anh</div>
                            <!--      <div class="item-after">Another label</div> -->
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <f7-list inset>
            <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="🔖 FlashCard!"></f7-list-item>
            <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="💳 Cửa hàng"></f7-list-item>
            <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="🏁 Bảng xếp hạng"></f7-list-item>
        </f7-list>
        <f7-list inset>
        </f7-list>
    </div>
</template>
<script>
var myApp = new Framework7();
export default {
    data() {
            return {
                Test: 'ok'
            }
        },
        methods: {
            _click() {
                myApp.alert('Forward');
            }
        }
}
</script>
