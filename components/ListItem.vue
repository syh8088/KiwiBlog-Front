<template>
    <v-app>
        <v-list-item
                v-for="(child, i) in GET_ITEM"
                :key="i"
                link
        >


            <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>
                    {{ child.text }}
                </v-list-item-title>
            </v-list-item-content>

            <list-group v-if="child.children"
                        :item="child"
            />
        </v-list-item>
    </v-app>
</template>

<script>
    import ListGroup from '~/components/ListGroup';

    export default {
        name: 'List-Item',
        components: {
            ListGroup
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
