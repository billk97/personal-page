<template>
    <div class="burger" :class="{open: isOpen}">
        <span />
        <span />
        <span />
        <span />
    </div>
</template>

<script>
    export default {
        props: {
            isOpen: {
                type: Boolean,
                required: true
            }
        }
    }
</script>

<style scoped>
.burger {
    width: 45px;
    height: 30px;
    position: relative;
    margin: auto 0.5rem;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    cursor: pointer;
}

.burger span {
    display: block;
    position: absolute;
    height: 5px;
    width: 100%;
    background: var(--main-clr);
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
}

.burger span:nth-child(1) {
  top: 0px;
}

.burger span:nth-child(2),.burger span:nth-child(3) {
  top: 18px;
}

.burger span:nth-child(4) {
  top: 36px;
}

.burger.open span:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}

.burger.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.burger.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.burger.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}
</style>
