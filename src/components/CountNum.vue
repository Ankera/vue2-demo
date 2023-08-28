<template>
    <div>
        {{ count }}
        <p>{{$store.state.count}}</p>
        <p>{{countStr}}</p>

        <div>
            <button @click="$store.commit('add', 2)">+</button>
            <button @click="$store.commit('reduce')">-</button>
        </div>
        <div>
            <button @click="() => add(2)">+</button>
            <button @click="reduce">-</button>
        </div>
        <div>
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button>
        </div>
    </div>
</template>

<script>

// import store from '../store2/index';
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
    // name: "count-num",
    data(){
        return {
            // count: store.state.count
        }
    },

    // computed: {
    //     count(){
    //         return this.$store.state.count
    //     }
    // }

    // computed: mapState({
    //     count: state => state.count
    // })

    computed: {
        ...mapState(['count']),
        // countStr(){
        //     return this.$store.getters.countStr
        // },
        ...mapGetters(['countStr'])
    },
    methods: {
        ...mapMutations(['add', 'reduce']),
        ...mapActions(['addAction', 'reduceAction'])
    }
}
</script>