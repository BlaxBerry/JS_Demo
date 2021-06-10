function resolveData(data) {
    var arr = [];
    for (let key in data) {
        arr.push(key + '=' + data[key]);
    }
    return arr.join("&");
}


function ajax(option) {

    var xhr = new XMLHttpRequest();

    var query = resolveData(option.data);

    var method = option.method.toUpperCase();



    if (method === 'GET') {
        var url = option.url + '?' + query;

        xhr.open(method, url)
        xhr.send()

    } else if (method === 'POST') {

        xhr.open(method, option.url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(query)

    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            var res = JSON.parse(xhr.responseText);

            option.success(res);
        }
    };
}


// ajax({
//     method: 'GET',
//     url: 'http://www.liulongbin.top:3006/api/getbooks',
//     data: {
//         id: 2
//     },
//     success(res) {
//         console.log(res);
//     }
// })

// ajax({
//     method: 'POST',
//     url: 'http://www.liulongbin.top:3006/api/addbook',
//     data: {
//       bookname:'ABC',
//       author:'奥特之父',
//       publisher:'M78星云'
//     },
//     success(res) {
//         console.log(res);
//     }
// })

// console.log(
//     resolveData({
//         bookname: '奥特曼B',
//         author: '奥特之父',
//         publisher: 'M78星云'
//     },
//     )
// );
