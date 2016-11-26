'use strict';

// 这里只创建模块，不要写逻辑，所依赖的模块可以根据需要裁减
angular.module('myApp').controller("ThreedTreeCtrl",function ThreedTreeCtrl(tree) {
        var vm = this;
        vm.items = [{
                id: 1,
                title: "这是第一个主题",
                poster: "破狼",
                dateCreated: "2015-02-19T00:00:00",
                items: [{
                        id: 11,
                        title: '这是第一个回复',
                        poster: '雪狼',
                        dateCreated: "2015-02-19T00:00:00",
                        items: [
                                {
                                        id: 111,
                                        title: '回复111',
                                        poster: '雪狼',
                                        dateCreated: "2015-02-19T00:00:00",
                                         items: [
                                {
                                        id: 1111,
                                        title: '回复111',
                                        poster: '雪狼',
                                        items: [
                                {
                                        id: 1111,
                                        title: '回复111',
                                        poster: '雪狼'}]
                                }]
                                }, {
                                        id: 1111,
                                        title: '回复222',
                                        poster: '雪狼',
                                        dateCreated: "2015-02-19T00:00:00"
                                }
                        ]
                }, {

                                id: 2,
                                title: "这是第二个回复",
                                poster: "破狼",
                                dateCreated: "2015-02-19T00:00:00"
                        }
                ]
        }, {
                        id: 2,
                        title: "这是第二个主题",
                        poster: "破狼",
                        dateCreated: "2015-02-19T00:00:00",
                }
        ];
        //tree.enhance(vm.items);
});