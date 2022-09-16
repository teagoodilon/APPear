<template>
    <div class="carousel">
        <slot></slot>
        <button @click="prox" class="proximo"> <img src="../assets/dir.png" style="width: 20px; right: -1px; top: -1px; position: relative"> </button>
        <button @click="ante" class="anterior"> <img src="../assets/esq.png" style="width: 20px; left: -1px; top: -1px; position: relative"> </button>
    </div>

</template>

<script>

export default {
    data() {
        return {

        }
    },
    methods: {
        prox() {
            this.$emit('prox');
        },
        ante() {
            this.$emit('ante');
        }
    }
    
}

</script>

<style>
    .carousel {
        position: relative;
        overflow: hidden;
        height: 600px;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .carousel button {
        border-radius: 20px;
    }
    .carousel button {
        position: absolute;
        height: 40px;
        width: 40px;
        background: #222222;
        border: none;
    }

    button:focus, button:hover {
        outline: none;
        cursor: pointer;
    }

    .proximo {
        right: 50px;
    }

    .anterior {
        left: 40px;
    }
</style>