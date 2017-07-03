(function () {
  'use strict';

  angular.module('Nohit')
    .value('NumberStore', [
      {number:0, color:'green', dozen:0, column:0, street:0,  range:'0', position: '0', line:0, count:0},
      {number:1, color:'red', dozen:1, column:1, street:1,  range:'low', position: 'odd', line:1, count:0},
      {number:2, color:'black', dozen:1, column:2, street:1,  range:'low', position: 'even', line:1, count:0},
      {number:3, color:'red', dozen:1, column:3, street:1,  range:'low', position: 'odd', line:1, count:0},
      {number:4, color:'black', dozen:1, column:1, street:1,  range:'low', position: 'even', line:2, count:0},
      {number:5, color:'red', dozen:1, column:2, street:1,  range:'low', position: 'odd', line:2, count:0},
      {number:6, color:'black', dozen:1, column:3, street:1,  range:'low', position: 'even', line:2, count:0},
      {number:7, color:'red', dozen:1, column:1, street:2,  range:'low', position: 'odd', line:3, count:0},
      {number:8, color:'black', dozen:1, column:2, street:2,  range:'low', position: 'even', line:3, count:0},
      {number:9, color:'red', dozen:1, column:3, street:2,  range:'low', position: 'odd', line:3, count:0},
      {number:10, color:'black', dozen:1, column:1, street:2,  range:'low', position: 'even', line:4, count:0},
      {number:11, color:'black', dozen:1, column:2, street:2,  range:'low', position: 'odd', line:4, count:0},
      {number:12, color:'red', dozen:1, column:3, street:2,  range:'low', position: 'even', line:4, count:0},
      
      {number:13, color:'black', dozen:2, column:1, street:3,  range:'low', position: 'odd', line:5, count:0},
      {number:14, color:'red', dozen:2, column:2, street:3,  range:'low', position: 'even', line:5, count:0},
      {number:15, color:'black', dozen:2, column:3, street:3,  range:'low', position: 'odd', line:5, count:0},
      {number:16, color:'red', dozen:2, column:1, street:3,  range:'low', position: 'even', line:6, count:0},
      {number:17, color:'black', dozen:2, column:2, street:3,  range:'low', position: 'odd', line:6, count:0},
      {number:18, color:'red', dozen:2, column:3, street:3,  range:'low', position: 'even', line:6, count:0},
      {number:19, color:'red', dozen:2, column:1, street: 4,  range:'high', position: 'odd', line:7, count:0},
      {number:20, color:'black', dozen:2, column:2, street: 4,  range:'high', position: 'even', line:7, count:0},
      {number:21, color:'red', dozen:2, column:3, street: 4,  range:'high', position: 'odd', line:7, count:0},
      {number:22, color:'black', dozen:2, column:1, street: 4,  range:'high', position: 'even', line:8, count:0},
      {number:23, color:'red', dozen:2, column:2, street: 4,  range:'high', position: 'odd', line:8, count:0},
      {number:24, color:'black', dozen:2, column:3, street: 4,  range:'high', position: 'even', line:8, count:0},
      
      {number:25, color:'red', dozen:3, column:1, street: 5,  range:'high', position: 'odd', line:9, count:0},
      {number:26, color:'black', dozen:3, column:2, street: 5,  range:'high', position: 'even', line:9, count:0},
      {number:27, color:'red', dozen:3, column:3, street: 5,  range:'high', position: 'odd', line:9, count:0},
      {number:28, color:'black', dozen:3, column:1, street: 5,  range:'high', position: 'even', line:10, count:0},
      {number:29, color:'black', dozen:3, column:2, street: 5,  range:'high', position: 'odd', line:10, count:0},
      {number:30, color:'red', dozen:3, column:3, street: 5,  range:'high', position: 'even', line:10, count:0},
      {number:31, color:'black', dozen:3, column:1, street: 6,  range:'high', position: 'odd', line:11, count:0},
      {number:32, color:'red', dozen:3, column:2, street: 6,  range:'high', position: 'even', line:11, count:0},
      {number:33, color:'black', dozen:3, column:3, street: 6,  range:'high', position: 'odd', line:11, count:0},
      {number:34, color:'red', dozen:3, column:1, street: 6,  range:'high', position: 'even', line:12, count:0},
      {number:35, color:'black', dozen:3, column:2, street: 6,  range:'high', position: 'odd', line:12, count:0},
      {number:36, color:'red', dozen:3, column:3, street: 6,  range:'high', position: 'even', line:12, count:0}
    ]);
})();