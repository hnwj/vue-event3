<template>
    <div>
        <div class="reg-container">
            <div class="reg-box">
                <div class="title-box"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.reg-container {
    background-image: url('../../assets/images/login_bg.jpg');
    background-size: cover;
    height: 100%;

    .reg-box {
        width: 300px;
        height: 335px;
        background: #fff;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

}
</style>
