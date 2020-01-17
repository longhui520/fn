var tree = [
    {
        "name": "畜牧水产养殖牲畜",
        "id": "1",
        "parentid": "0",
        "_child": [
            {
                "name": "家禽",
                "id": "5",
                "parentid": "1",
                "_child": [],
                "ischild": false
            },
            {
                "name": "渔业",
                "id": "6",
                "parentid": "1",
                "_child": [],
                "ischild": false
            },
            {
                "name": "牲畜",
                "id": "7",
                "parentid": "1",
                "_child": [],
                "ischild": false
            },
            {
                "name": "特色类",
                "id": "8",
                "parentid": "1",
                "_child": [],
                "ischild": false
            }
        ],
        "ischild": true
    },
    {
        "name": "粮食生产",
        "id": "2",
        "parentid": "0",
        "_child": [
            {
                "name": "生产型",
                "id": "9",
                "parentid": "2",
                "_child": [],
                "ischild": false
            },
            {
                "name": "加工型",
                "id": "10",
                "parentid": "2",
                "_child": [],
                "ischild": false
            }
        ],
        "ischild": true
    },
    {
        "name": "菜果茶",
        "id": "3",
        "parentid": "0",
        "_child": [
            {
                "name": "果业",
                "id": "11",
                "parentid": "3",
                "_child": [],
                "ischild": false
            },
            {
                "name": "蔬菜",
                "id": "12",
                "parentid": "3",
                "_child": [],
                "ischild": false
            },
            {
                "name": "茶业1",
                "id": "13",
                "parentid": "3",
                "_child": [],
                "ischild": false
            }
        ],
        "ischild": true
    },
    {
        "name": "其他农林优势特色产业",
        "id": "4",
        "parentid": "0",
        "_child": [
            {
                "name": "中药材（草本）测试多级测试多级测试多级测试多级测试多级测试多级测试多级",
                "id": "14",
                "parentid": "4",
                "_child": [
                    {
                        "name":'测试多级1',
                        "id":"14-1",
                        "parentid":"14",
                         "ischild":false,
                        "_child":[]
                    }
                ],
                "ischild": true
            },
            {
                "name": "中药材（木本）",
                "id": "15",
                "parentid": "4",
                "_child": [],
                "ischild": false
            }
        ],
        "ischild": true
    }
]
var searchTreeBykey = function searchTreeBykey(tree,key,isnextend){
    var stack = [];
    var path = [];
    var result = [];
    stack = JSON.parse(JSON.stringify(tree));
    while(stack.length){
        var node = stack.pop();
        path.push(node.name)
        if(node.name.indexOf(key)>-1){
            if(isnextend){
                if(!node.ischild){
                    result.push(Object.assign({},node,{path:[...path]})); 
                }
            }else{
                result.push(Object.assign({},node,{path:[...path]})); 
            }
        }
        if(node.ischild){
            stack = stack.concat(node._child);
        }else{
            path.pop();
        }
    }
    return result;
}
console.log(JSON.stringify(searchTreeBykey(tree,'1',true)))

