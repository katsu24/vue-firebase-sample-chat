<template>
    <div>
        <v-btn
            color="blue"
            dark
            center
            fab
            fixed
            right
            @click="showCreateForm"
        >
            <v-icon>comment</v-icon>
        </v-btn>
        <v-dialog v-model="displayForm" max-width="500px">
            <v-card>
                <v-container>
                    <h2>コメント追加</h2>
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field
                            v-model="inputComment"
                            :rules="commentRules"
                            label="コメント"
                            required
                        ></v-text-field>
                        <v-btn
                            :disabled="!valid"
                            @click="addComment"
                        >
                        投稿する
                        </v-btn>
                    </v-form>
                </v-container>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import {db} from '../plugins/firebase'

export default {
    name: 'CreateForm',
    data:() => ({
        inputComment: "",
        valid: true,
        commentRules: [
            v => !!v || 'コメントは必須項目です',
        ],

        displayForm: false,
    }),
    methods:{
        addComment() {
            const now = new Date()

            db.collection('comments').add({
                content: this.inputComment,
                avatar:'',
                createdAt: now
            })

            this.hideCreateForm()
        },

        clear() {
            this.$refs.form.reset()
        },

        showCreateForm() {
            this.displayForm = true
        },

        hideCreateForm() {
            this.clear()
            this.displayForm = false
        },
    },
}
</script>