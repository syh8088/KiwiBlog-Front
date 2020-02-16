<template>
    <v-app>
        <v-list-group
                :key="item.text"
                v-model="item.model"
                :prepend-icon="item.model ? item.icon : item['icon-alt']"
                append-icon=""
        >
            <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title>
                        {{ item.text }}
                    </v-list-item-title>
                </v-list-item-content>
            </template>
            <list-item
                    :item="item.children"
            />

        </v-list-group>
    </v-app>
</template>

<script>

    import ListItem from '~/components/ListItem';

    export default {
        name: 'List-Item',
        components: {
            ListItem
        },
        inject: ['$validator'],
        props: {
            item: {
                type: Object,
                default: () => {}
            },


        },
        computed: {
            GET_ITEM() {
                return this.item || {};
            }
        },
        methods: {
        },
    }
</script>

<style>

</style>
