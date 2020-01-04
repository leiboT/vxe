var vm = new Vue({
    el: "#root",
    data: function () {
        return {
            message: moment(),
            visible: false,
            tableData: [{
                name: "aa"
            }],
            allAlign: "center"
        }
    },
    methods: {
        save: function () {
            alert(this.message)
        },
        saveAnother: function () {
            var a = this.tableData;
            debugger
        },
        cancel: function () {},
        preview: function () {},
    }
})