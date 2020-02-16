<template>
    <div>
        body
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        //layout: 'sub',
        components: {
        },
        data() {
            return {
                model: {

                }

            }
        },
        watch: {

        },
        computed: {
        },
        fetch({ store }) {

        },
        async beforeMount() {
        },
        methods: {
            ...mapActions({
                LOGOUT: 'fetchLogout',
            }),
        },
        head() {
            return {
                //title: '프로필',
            };
        },
        //middleware: 'authenticated',


    }
</script>

<style>

</style>
