<template>
    <div>
        <h1>HelloTest2</h1>
        <div class="parent">
            <div class="left">
                <div>left</div>
                <slot name="left"></slot>
            </div>
            <div class="right">
                <div>right</div>
                <slot name="right"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'hello-test2'
}
</script>

<style>
.parent {
    display: flex;
}

.parent .left, .parent .right {
    width: 300px;
    height: 300px;
    border: 1px solid red;
}
</style>