"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _04_task_1 = require("./04_task");
var COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
(0, _04_task_1.getData)(COMMENTS_URL).then(function (data) {
    var allData = data;
    var commentsItems = [];
    allData.map(function (item, index) {
        var _a = __assign({}, item), id = _a.id, email = _a.email;
        var commentItem = {
            id: id,
            email: email,
        };
        commentsItems.push(commentItem);
        console.log("ID: ".concat(commentsItems[index].id, ",  Email: ").concat(commentsItems[index].email));
    });
});
/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
