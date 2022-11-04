// function start_search() {

//     // var axios = require('axios');
//     // var FormData = require('form-data');
//     var data = new FormData();
//     ra = document.getElementById('ra').value
//     dec = document.getElementById('dec').value
//     ra = 180;
//     dec = 20;

//     data.append('ra', ra);
//     data.append('dec', dec);
//     data.append('radius', '6000');
//     data.append('obj_class', 'AGN');
//     data.append('prob', '0.9');
//     data.append('ret_type', 'csv');

//     var config = {
//         method: 'post',
//         url: 'http://127.0.0.1:8000/search_api/cone_search/',

//         data: data
//     };

//     axios(config)
//         .then(function(response) {

//             // response = $.parseJSON(response);
//             // console.log(response.data)
//             $(function() {
//                 $.each(response.data, function(i, item) {
//                     console.log(item)
//                     var tr = $('<tr>').append(

//                         '<td class="bs-checkbox "><input data-index="' + String(i) + '" name="btSelectItem" type="checkbox"></td>',

//                         $('<td>').text(item.name),
//                         $('<td>').text(item.ra),
//                         $('<td>').text(item.dec),
//                         $('<td>').text(item.class)
//                     ).appendTo('#table');
//                     // console.log(tr);
//                 });
//             });

//             // $('#result-table').html(response.data);
//         })
//         .catch(function(error) {
//             console.log(error);
//         });
// }