angular.module('myApp').service('tree',function Tree(){
    var self = this;
    //强化条目
    var enhanceItem = function(item,childrenName){
        item.$hasChildren = function(){
            var subItems = this[childrenName];
            return angular.isArray(subItems) && subItems.length;
        };
        item.$foldToggle = function(){
            this.$folded = !this.$folded;
        };
        item.$isFolded = function(){
            return this.$folded;
        };
    };

    //对传进来的数据进行强化
    this.enhance = function(items,childrenName){
        if(angular.isUndefined(childrenName)){
            childrenName = "items";
        }
        angular.forEach(items,function(item){
            enhanceItem(item,childrenName);
            //如果有子节点则递归处理
            self.enhance(item[childrenName],childrenName);
        });
        console.log(items);
        return items;
    };
});