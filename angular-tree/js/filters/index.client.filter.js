angular.module('myApp').filter('tree',function(tree){
    return function(items,childrenName){
        tree.enhance(items,childrenName);
        return items;
    };
});