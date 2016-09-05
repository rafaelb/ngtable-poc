angular.module("ngTableTest", ["ngTable"]);
console.log('table test');
(function () {
    "use strict";
    angular.module("ngTableTest").controller("tableController", tableController);
    tableController.$inject = ["NgTableParams"];

    function tableController(NgTableParams) {
        var vm = this;
        vm.schema = schema;




        vm.availableOptions= [
            {id: '1', name: 'Option A'},
            {id: '2', name: 'Option B'},
            {id: '3', name: 'Option C'}
        ];
        console.log('table Controller');
        var dataset = [{name: 'test1', age: 24}, {name: 'test2', age :34}];
        vm.tableParams = new NgTableParams({
            sorting: { name: "asc" }
        }, {
            getData: function (params) {
                console.log(params);
                return data;
            }

        });

        vm.clickRow = function (rowId) {
            vm.showExpandedRow = true;
            vm.expandedRow = data[rowId];
        }

        vm.clickCancel = function () {
            vm.showExpandedRow = false;
        }
        vm.changeStatus = function () {
            console.log('change status')
        }
    }
})();